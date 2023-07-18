Packages for SimpleScreenRecorder
=================================

SimpleScreenRecorder is a screen recorder for Linux. Despite the name, this program is actually quite complex. It's 'simple' in the sense that it's easier to use than ffmpeg/avconv or VLC :).

The main SimpleScreenRecorder repository is here:
https://github.com/MaartenBaert/ssr

This repository contains packaging scripts for the SimpleScreenRecorder packages.

License
-------

SimpleScreenRecorder itself is licensed under the GNU GPL v3 - read 'COPYING' for more info.

The packaging scripts are licensed under the ISC license.

Arch Linux
----------

There are two packages:

- The `simplescreenrecorder-git` (AUR) package which provides the executable and the `glinject` library.
- The `lib32-simplescreenrecorder-git` (AUR) package which provides a 32-bit version of the `glinject` library for 64-bit systems.

AUR packages are git-based. Updating works like this:

- Run `makepkg --printsrcinfo > .SRCINFO`.
- Commit and push with git.
(The `simplescreenrecorder` package was removed from archlinux repo)

Ubuntu
------

There is only one source package (`simplescreenrecorder`), which generates two binary packages:

- The `simplescreenrecorder` package which provides the executable only.
- The `simplescreenrecorder-lib` package which provides the `glinject` library. This is a multi-arch package, so it is possible to install the 32-bit package on a 64-bit system.

Launchpad expects separate source package tarballs for every Ubuntu version. These are all generated from a single `template` source package by running `generate-from-template.py`. The script combines the package metadata from the template with source files from the main git repository and generates a compressed source package that can be uploaded to Launchpad like this:

	dput ppa-simplescreenrecorder simplescreenrecorder_*.changes
