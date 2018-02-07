SimpleScreenRecorder changes
============================

Git master
----------

- ?

Version 0.3.9
-------------

- Switch to CMake build system.
- Add RGB24 support.
- Automatically add scroll bars when the screen resolution is too low to display the complete window.
- Improve PulseAudio latency handling of monitors.
- Add a separate checkbox to enable timestamps.
- Provide a default file name, so now all options are set to a sensible default value.
- Use base-10 units for bitrate for consistency with FFmpeg (1 kbit/s = 1000 bit/s).
- Minor bugfixes.

Version 0.3.8
-------------

- Revert sample rate to 44.1 kHz for FLV container, since it does not support 48 kHz.

Version 0.3.7
-------------

- Added support for latest FFmpeg/libav.
- Make relaxed GLInject permissions actually work.
- The backend now supports fragmented recording, but there is no GUI for this yet.
- The default audio sample rate is now 48 kHz. This makes SSR compatible with Opus.
- System tray icon now indicates errors during recording.

Version 0.3.6
-------------

- Fixed another bug in YUV420 converter related to the previous one.

Version 0.3.5
-------------

- Fixed bug in YUV420 fallback converter introduced by refactoring.

Version 0.3.4
-------------

- Allowed user to start recording with hotkey or systray even when not on the recording page.
- Fixed JACK input bug that could cause deadlocks in rare cases.
- Added full support for NV12. If FFmpeg is compiled with NVENC support, this will allow you to use it.

Version 0.3.3
-------------

- Fixed mistake in configure.ac that was causing libssr-glinject.so to be linked with unwanted libraries.

Version 0.3.2
-------------

- Added Qt5 support (optional, Qt4 is still the default)
- Added YUV422, YUV444 and RGB support (YUV420 is still the default)
- Added pixelformat and sampleformat codec options.
- Added benchmark.
- Improved RTL support.
- Bugfixes

Version 0.3.1
-------------

- Small change to ssr-glinject script for improved compatibility with Steam.
- Added qscale option.
- Disabled PulseAudio latency estimation (apparently it made things worse).
- New muxing code for improved compatibility with the latest ffmpeg/libav.
- Switched to the BT.709 color space.

Version 0.3.0
-------------

- Added profile support.
- New, more flexible OpenGL recording system (glinject-next branch merged).
- More robust sound notifications.
- Show progress dialog while flushing the encoders.
- Improved hotkey support using XInput2.
- Improved synchronizer.
- Native support for mono microphones (plughw no longer needed).
- Added source detection for ALSA.
- Partially rewritten output backend.
- Improved mouse following algorithm.
- New icon.
- Bugfixes.

Version 0.2.2
-------------

- Bugfixes.

Version 0.2.1
-------------

- Bugfixes.

Version 0.2.0
-------------

- Added JACK support.
- Added fast audio resampler with drift correction support.
- Added translation support.
- Added sound notifications.
- Added much faster scaler.
- Added keyint custom codec option.
- Improved NVIDIA flipping dialog.
- Bugfixes.

Version 0.1.2
-------------

- Added minrate, maxrate and bufsize custom codec options.
- Bugfixes.

Version 0.1.1
-------------

- Bugfixes.

Version 0.1.0
-------------

- Native PulseAudio input.
- Show recording frame while entering x/y/width/height.
- Improved some GUI elements.
- Added system tray icon.
- Added custom video/audio codec options.
- Added workaround for PulseAudio-related glitches.
- Previewer works even when not recording.
- Don't show RTMP urls on the recording page.
- Added 'separate file per segment' option.
- Hotkey workaround for misbehaving applications in GLInject.
- Improved statistics and added external statistics file.
- Improved synchronizer.
- Added synchronization diagram for debugging.
- Optimizations.
- Bugfixes.

Version 0.0.7
-------------

- Improved streaming support.

Version 0.0.6
-------------

- Added link to Steam recording instructions for GLInject.

Version 0.0.5
-------------

- Detect and fix NVIDIA flipping issue.

Version 0.0.4
-------------

- Audio previewer is hidden if there is no audio.
- Bugfixes.

Version 0.0.3
-------------

- Added desktop entry.
- Switch from qmake to autotools.
- Bugfixes.

Version 0.0.2
-------------

- Added icon and welcome image.
- Bugfixes.

Version 0.0.1
-------------

- Native ALSA input to replace libavdevice.
- Improved synchronizer.
- Better audio codec support.
- GLInject can record the cursor.
- Added video and audio previewer.
- Added 'about' dialog.
- Many bugfixes.

Version 0.0.0
-------------

- First public version.
