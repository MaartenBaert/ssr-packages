<?php

/*
Copyright (c) 2012-2014 Maarten Baert <maarten-baert@hotmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

require_once("common.php");

exec_check("rm -rf \"$package_ubuntu_dir\"", $lines);
@mkdir($package_ubuntu_dir);

foreach($ubuntuversions as $ubuntuversion) {
	@mkdir("$package_ubuntu_dir/$ubuntuversion");
	ubuntu_create_package("$package_ubuntu_dir/$ubuntuversion", false, $version, $subversion, $ubuntuversion);
	ubuntu_create_package("$package_ubuntu_dir/$ubuntuversion", true, $version, $subversion, $ubuntuversion);
}

function ubuntu_generate_changelog($packagename, $packageversion, $ubuntuversion, $packagedate) {
	$out = "";
	$out .= "$packagename ($packageversion) $ubuntuversion; urgency=low\n";
	$out .= "\n";
	$out .= "  * Sorry, no changelogs yet.\n";
	$out .= "\n";
	$out .= " -- Maarten Baert (v2) <maarten-baert@hotmail.com>  $packagedate\n";
	return $out;
}

function ubuntu_generate_control($packagename, $builddepends, $libpackagename) {
	$out = "";
	$out .= "Source: $packagename\n";
	$out .= "Section: video\n";
	$out .= "Priority: optional\n";
	$out .= "Maintainer: Maarten Baert (v2) <maarten-baert@hotmail.com>\n";
	$out .= "Build-Depends: $builddepends\n";
	$out .= "Standards-Version: 3.9.5\n";
	$out .= "Homepage: http://www.maartenbaert.be/simplescreenrecorder/\n";
	$out .= "Vcs-Git: git://github.com/MaartenBaert/ssr.git\n";
	$out .= "Vcs-Browser: https://github.com/MaartenBaert/ssr\n";
	$out .= "\n";
	$out .= "Package: $packagename\n";
	$out .= "Architecture: i386 amd64\n";
	$out .= "Depends: \${shlibs:Depends}, \${misc:Depends}\n";
	$out .= "Recommends: $libpackagename\n";
	$out .= "Description: feature-rich screen recorder that supports X11 and OpenGL\n";
	$out .= " SimpleScreenRecorder is a feature-rich screen recorder that supports X11 and\n";
	$out .= " OpenGL. It has a Qt-based graphical user interface. It can record the entire\n";
	$out .= " screen or part of it, or record OpenGL applications directly. The recording\n";
	$out .= " can be paused and resumed at any time. Many different file formats and codecs\n";
	$out .= " are supported.\n";
	$out .= " .\n";
	$out .= " This package contains the main program.\n";
	$out .= "\n";
	$out .= "Package: $libpackagename\n";
	$out .= "Architecture: i386 amd64\n";
	$out .= "Multi-Arch: same\n";
	$out .= "Pre-Depends: \${misc:Pre-Depends}\n";
	$out .= "Depends: \${shlibs:Depends}, \${misc:Depends}\n";
	$out .= "Description: feature-rich screen recorder that supports X11 and OpenGL - GLInject library\n";
	$out .= " SimpleScreenRecorder is a feature-rich screen recorder that supports X11 and\n";
	$out .= " OpenGL. It has a Qt-based graphical user interface. It can record the entire\n";
	$out .= " screen or part of it, or record OpenGL applications directly. The recording\n";
	$out .= " can be paused and resumed at any time. Many different file formats and codecs\n";
	$out .= " are supported.\n";
	$out .= " .\n";
	$out .= " This package contains the GLInject library.\n";
	return $out;
}

function ubuntu_generate_copyright() {
	$out = "";
	$out .= "Format: http://dep.debian.net/deps/dep5\n";
	$out .= "Upstream-Name: simplescreenrecorder\n";
	$out .= "Source: <http://www.maartenbaert.be/simplescreenrecorder>\n";
	$out .= "\n";
	$out .= "Files: *\n";
	$out .= "Copyright: 2012-2014 Maarten Baert <maarten-baert@hotmail.com>\n";
	$out .= "License: GPL-3.0+\n";
	$out .= "\n";
	$out .= "Files: debian/*\n";
	$out .= "Copyright: 2012-2014 Maarten Baert <maarten-baert@hotmail.com>\n";
	$out .= "License: GPL-3.0+\n";
	$out .= "\n";
	$out .= "License: GPL-3.0+\n";
	$out .= " This program is free software: you can redistribute it and/or modify\n";
	$out .= " it under the terms of the GNU General Public License as published by\n";
	$out .= " the Free Software Foundation, either version 3 of the License, or\n";
	$out .= " (at your option) any later version.\n";
	$out .= " .\n";
	$out .= " This package is distributed in the hope that it will be useful,\n";
	$out .= " but WITHOUT ANY WARRANTY; without even the implied warranty of\n";
	$out .= " MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n";
	$out .= " GNU General Public License for more details.\n";
	$out .= " .\n";
	$out .= " You should have received a copy of the GNU General Public License\n";
	$out .= " along with this program. If not, see <http://www.gnu.org/licenses/>.\n";
	$out .= " .\n";
	$out .= " On Debian systems, the complete text of the GNU General\n";
	$out .= " Public License version 3 can be found in \"/usr/share/common-licenses/GPL-3\".\n";
	return $out;
}

function ubuntu_generate_rules($version, $packagename) {
	$out = "";
	$out .= "#!/usr/bin/make -f\n";
	$out .= "\n";
	$out .= "%:\n";
	$out .= "	dh $@ --parallel\n";
	$out .= "\n";
	$out .= "override_dh_auto_configure:\n";
	$out .= "	dh_auto_configure -- --disable-assert --disable-ffmpeg-versions\n";
	$out .= "\n";
	$out .= "override_dh_installdocs:\n";
	$out .= "	dh_installdocs -A AUTHORS.md notes.txt README.md todo.txt\n";
	$out .= "\n";
	$out .= "override_dh_installchangelogs:\n";
	$out .= "	dh_installchangelogs -A CHANGELOG.md\n";
	$out .= "\n";
	$out .= "override_dh_installman:\n";
	$out .= "	help2man -N --no-discard-stderr --version-string='$version' -n 'feature-rich screen recorder that supports X11 and OpenGL' debian/$packagename/usr/bin/simplescreenrecorder > simplescreenrecorder.1\n";
	$out .= "	help2man -N --no-discard-stderr --version-string='$version' -n 'inject the GLInject library into a given command' debian/$packagename/usr/bin/ssr-glinject > ssr-glinject.1\n";
	$out .= "	dh_installman simplescreenrecorder.1 ssr-glinject.1\n";
	$out .= "\n";
	$out .= "override_dh_clean:\n";
	$out .= "	dh_clean simplescreenrecorder.1 ssr-glinject.1\n";
	return $out;
}

function ubuntu_generate_overrides() {
	$out = "# this is a bug in Lintian\n";
	$out .= "simplescreenrecorder-lib binary: pkg-has-shlibs-control-file-but-no-actual-shared-libs\n";
	$out .= "\n";
	$out .= "# This is not a real shared library and doesn't require a versioned soname.\n";
	$out .= "# And for technical reasons it's better to store the library inside ld.so's search path.\n";
	$out .= "simplescreenrecorder-lib binary: shlib-without-versioned-soname usr/lib/*/libssr-glinject.so libssr-glinject.so";
	$out .= "\n";
	$out .= "# we'll keep this package name for historical and compatibility reasons\n";
	$out .= "simplescreenrecorder-lib binary: package-name-doesnt-match-sonames libssr-glinject\n";
	return $out;
}

function ubuntu_create_debian_dir($dir, $changelog, $control, $copyright, $rules, $overrides) {
	@mkdir($dir);
	@mkdir("$dir/source");
	file_put_contents("$dir/changelog", $changelog);
	file_put_contents("$dir/control", $control);
	file_put_contents("$dir/copyright", $copyright);
	file_put_contents("$dir/rules", $rules);
	file_put_contents("$dir/simplescreenrecorder-lib.install", "/usr/lib/*/libssr-glinject.so\n");
	file_put_contents("$dir/simplescreenrecorder-lib.lintian-overrides", $overrides);
	file_put_contents("$dir/simplescreenrecorder.install", "/usr/bin\n/usr/share\n");
	file_put_contents("$dir/compat", "9\n");
	file_put_contents("$dir/source/format", "3.0 (native)\n");
	chmod("$dir/rules", 0755);
}

function ubuntu_create_package($dir, $version, $subversion, $ubuntuversion) {
	$packagename = "simplescreenrecorder";
	$libpackagename = "simplescreenrecorder-lib";
	$packageversion = "$version+$subversion~ppa1~${ubuntuversion}1";
	$packagedate = date("r");
	$builddepends = "debhelper (>= 9), dpkg-dev (>= 1.16.0), pkg-config, help2man, libgl1-mesa-dev, libglu1-mesa-dev, qt4-qmake, libqt4-dev, libavformat-dev, libavcodec-dev, libavutil-dev, libswscale-dev, libasound2-dev, libpulse-dev, libjack-dev, libx11-dev, libxext-dev, libxfixes-dev, libxi-dev");
	@mkdir("$dir/$packagename-$version");
	ubuntu_create_debian_dir("$dir/$packagename-$version/debian",
		ubuntu_generate_changelog($packagename, $packageversion, $ubuntuversion, $packagedate),
		ubuntu_generate_control($packagename, $builddepends, $libpackagename),
		ubuntu_generate_copyright(),
		ubuntu_generate_rules($version, $packagename));
}

?>