#!/usr/bin/python3

# Copyright (c) 2012-2017 Maarten Baert <maarten-baert@hotmail.com>

# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.

# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
# IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

import contextlib
import email.utils
import os
import subprocess
import time

# location of the cloned Git repository containing the actual source code
source_path = "/home/maarten/Documents/ssr"

version = "0.3.9"
subversion = "3"

ubuntuversions = ["trusty", "xenial", "zesty", "artful"]
ubuntuversions_with_cmake2 = ["trusty"]
ubuntuversions_with_libav = ["trusty", "vivid", "wily", "xenial"]

os.chdir(os.path.dirname(os.path.realpath(__file__)))

def generate(version, subversion, ubuntuversion):
	
	path_template = os.path.join("template", "simplescreenrecorder")
	path_target = os.path.join("source-packages", ubuntuversion, "simplescreenrecorder-%s" % (version))
	
	ffmpeg_flags = "-DENABLE_FFMPEG_VERSIONS=FALSE" if ubuntuversion in ubuntuversions_with_libav else ""
	cmake = "cmake3" if ubuntuversion in ubuntuversions_with_cmake2 else "cmake"
	
	replace = {
		"BUILDDEPENDS": "debhelper (>= 9), dpkg-dev (>= 1.16.0), " + cmake + " (>= 3.1), pkg-config, libgl1-mesa-dev, libglu1-mesa-dev, qt4-qmake, libqt4-dev, libavformat-dev, libavcodec-dev, libavutil-dev, libswscale-dev, libasound2-dev, libpulse-dev, libjack-dev, libx11-dev, libxext-dev, libxfixes-dev, libxi-dev",
		"CONFIGUREFLAGS": ffmpeg_flags,
		"COPYRIGHTYEARS": "2012-%s" % (time.strftime("%Y")),
		"LIBPACKAGENAME": "simplescreenrecorder-lib",
		"PACKAGEDATE": email.utils.formatdate(),
		"PACKAGENAME": "simplescreenrecorder",
		"PACKAGEVERSION": "%s+%s~ppa1~%s1" % (version, subversion, ubuntuversion),
		"UBUNTUVERSION": ubuntuversion,
		"VERSION": version,
	}
	
	os.makedirs(path_target)
	for (dirpath, dirnames, filenames) in os.walk(path_template, path_target):
		dirpath_target = path_target + dirpath[len(path_template):]
		for filename in filenames:
			with open(os.path.join(dirpath, filename), "r") as f:
				text = f.read()
			for (a, b) in replace.items():
				text = text.replace("%" + a + "%", b)
			with open(os.path.join(dirpath_target, filename), "w") as f:
				f.write(text)
		for dirname in dirnames:
			os.mkdir(os.path.join(dirpath_target, dirname))
	
	subprocess.check_call(["git", "--work-tree=" + os.path.abspath(path_target), "checkout", "-f"], cwd=source_path)
	subprocess.check_call(["dpkg-buildpackage", "-S", "-d", "-nc"], cwd=path_target)

print("SSR version: %s-%s" % (version, subversion))

subprocess.check_call(["rm", "-rf", "source-packages"])

for ubuntuversion in ubuntuversions:
	generate(version, subversion, ubuntuversion)
