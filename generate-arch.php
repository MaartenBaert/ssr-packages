<?php

/*
Copyright (c) 2012-2014 Maarten Baert <maarten-baert@hotmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

require_once("common.php");

exec_check("rm -rf \"$package_arch_dir\"", $lines);
@mkdir($package_arch_dir);

arch_create_package($package_arch_dir, false, false, $version, $subversion);
arch_create_package($package_arch_dir, true, false, $version, $subversion);
arch_create_package($package_arch_dir, false, true, $version, $subversion);
arch_create_package($package_arch_dir, true, true, $version, $subversion);

function arch_generate_pkgbuild($lib32, $git, $packagename, $version, $subversion) {
	$out = "";
	$out .= "pkgname=$packagename\n";
	$out .= ($git)? "pkgver=0.0.0\n"
				  : "pkgver=$version\n";
	$out .= ($git)? "pkgrel=1\n"
				  : "pkgrel=$subversion\n";
	$extra_desc = ($git)? " (Git version)" : "";
	$out .= ($lib32)? "pkgdesc=\"OpenGL recording of 32-bit applications with SimpleScreenRecorder.$extra_desc\"\n"
					: "pkgdesc=\"A feature-rich screen recorder that supports X11 and OpenGL.$extra_desc\"\n";
	$out .= ($lib32)? "arch=(\"x86_64\")\n"
					: "arch=(\"i686\" \"x86_64\")\n";
	$out .= "url=\"http://www.maartenbaert.be/simplescreenrecorder/\"\n";
	$out .= "license=(\"GPL3\")\n";
	$out .= ($git)? "source=(\"git+https://github.com/MaartenBaert/ssr.git\")\n"
	              : "source=(\"git+https://github.com/MaartenBaert/ssr.git#tag=$version\")\n";
	$out .= "md5sums=(\"SKIP\")\n";
	$out .= ($lib32)? "depends=(\"lib32-libgl\" \"lib32-glu\" \"lib32-libx11\" \"lib32-libxfixes\" \"lib32-libxext\")\n"
					: "depends=(\"qt4\" \"ffmpeg\" \"alsa-lib\" \"libpulse\" \"jack\" \"libgl\" \"glu\" \"libx11\" \"libxfixes\" \"libxext\" \"libxi\")\n";
	if(!$lib32) {
		$out .= "if test \"\$CARCH\" == x86_64; then\n";
		$out .= "	optdepends=(\"lib32-$packagename: OpenGL recording of 32-bit applications\")\n";
		$out .= "fi\n";
	}
	$out .= ($lib32)? "makedepends=(\"git\" \"gcc-multilib\")\n"
					: "makedepends=(\"git\")\n";
	if($git) {
		$packagename_nogit = substr($packagename, 0, -4);
		$out .= "conflicts=(\"$packagename_nogit\")\n";
		$out .= "provides=(\"$packagename_nogit\")\n";
	}
	$out .= "options=(\"!libtool\")\n";
	$out .= "install=$packagename.install\n";
	$out .= "\n";
	if($git) {
		$out .= "pkgver() {\n";
		$out .= "	cd \"\${srcdir}/ssr\"\n";
		$out .= "	# Use the tag of the last commit\n";
		$out .= "	git describe --long | sed -E 's/([^-]*-g)/r\\1/;s/-/./g'\n";
		$out .= "}\n";
	}
	$out .= "build() {\n";
	$out .= "	cd \"\${srcdir}/ssr\"\n";
	if($lib32) {
		$out .= "	export CC=\"gcc -m32\"\n";
		$out .= "	export CXX=\"g++ -m32\"\n";
		$out .= "	export PKG_CONFIG_PATH=\"/usr/lib32/pkgconfig\"\n";
		$out .= "	./configure --prefix=/usr --libdir=/usr/lib32 --disable-ssrprogram --disable-assert\n";
	} else {
		$out .= "	./configure --prefix=/usr --disable-assert\n";
	}
	$out .= "	make\n";
	$out .= "}\n";
	$out .= "package() {\n";
	$out .= "	cd \"\${srcdir}/ssr\"\n";
	$out .= "	make DESTDIR=\"\${pkgdir}\" install\n";
	$out .= "}\n";
	return $out;
}

function arch_generate_install($lib32, $git) {
	$out = "";
	$out .= "post_install() {\n";
	if(!$lib32) {
		$out .= "	update-desktop-database -q\n";
		$out .= "	gtk-update-icon-cache -q -f usr/share/icons/hicolor\n";
	}
	$out .= "	ldconfig\n";
	$out .= "}\n";
	$out .= "post_upgrade() {\n";
	$out .= "	post_install\n";
	$out .= "}\n";
	$out .= "post_remove() {\n";
	$out .= "	post_install\n";
	$out .= "}\n";
	return $out;
}

function arch_create_package($dir, $lib32, $git, $version, $subversion) {
	$packagename = ($lib32)? "lib32-simplescreenrecorder" : "simplescreenrecorder";
	if($git)
		$packagename .= "-git";
	@mkdir("$dir/$packagename");
	file_put_contents("$dir/$packagename/PKGBUILD", arch_generate_pkgbuild($lib32, $git, $packagename, $version, $subversion));
	file_put_contents("$dir/$packagename/$packagename.install", arch_generate_install($lib32, $git));
}

?>