<?php

/*
Copyright (c) 2012-2014 Maarten Baert <maarten-baert@hotmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

$packages_dir = dirname(__FILE__);
$ssr_dir = "$packages_dir/../ssr";
$build_dir = "$packages_dir/private-build";

$package_arch_dir = "$packages_dir/package-arch";
$package_ubuntu_dir = "$packages_dir/package-ubuntu";

$build_arch_dir = "$packages_dir/private-build-arch";
$build_ubuntu_dir = "$packages_dir/private-build-ubuntu";

$ubuntuversions = array("precise", "trusty", "utopic");

// make all errors fatal
error_reporting(E_ALL);
function error_handler($errno, $errstr, $file, $line) {
	if(!(error_reporting() & $errno))
		return;
	die("Error: [" . $errno . "] " . $errstr . "\n"
		. "File: " . $file . "\n"
		. "Line: " . $line . "\n");
}
set_error_handler("error_handler");

// make all assertion failures fatal
function assert_callback($file, $line, $expression) {
	die("Assertion failure: " . (($expression == "")? "(unknown expression)" : $expression) . "\n"
		. "File: " . $file . "\n"
		. "Line: " . $line . "\n");
}
assert_options(ASSERT_WARNING, false);
assert_options(ASSERT_CALLBACK, "assert_callback");

function exec_check($cmd, &$lines) {
	exec($cmd, $lines, $res);
	if($res != 0)
		die("Command '$cmd' failed!\n");
}

// --------------------------------------------------------

$upload = false;
$git_upload = false;

for($i = 1; $i < $_SERVER["argc"]; ++$i) {
	$opt = $_SERVER["argv"][$i];
	switch($opt) {
		case "upload": {
			$upload = true;
			$git_upload = true;
			break;
		}
		case "git-upload": {
			$git_upload = true;
			break;
		}
		default: {
			die("Unknown option '$opt'!\n");
		}
	}
}

// --------------------------------------------------------

exec_check("$ssr_dir/configure --version", $lines);
assert(preg_match("/^simplescreenrecorder configure ([0-9a-zA-Z\.]+)$/", $lines[0], $match));
$version = $match[1];
$subversion = trim(file_get_contents("$packages_dir/subversion"));

echo "---- SSR version: $version-$subversion\n";

$source_tarball = "$build_dir/simplescreenrecorder-$version.tar.gz";

?>