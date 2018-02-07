<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="ar_SA">
<context>
    <name>DialogAbout</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="98"/>
        <source>About SimpleScreenRecorder</source>
        <translatorcomment>عن البرنامج</translatorcomment>
        <translation>عن برنامج (SimpleScreenRecorder)</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="107"/>
        <source>For more information:</source>
        <translatorcomment>لمعلومات أكثر</translatorcomment>
        <translation>لمعلومات أكثر:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="108"/>
        <source>The source code of this program can be found at:</source>
        <translatorcomment>أين توجد الشيفرة المصدية</translatorcomment>
        <translation>الشيفرة المصدرية لهذا البرنامج يمكن أن تجدها في:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="109"/>
        <source>This program uses:</source>
        <translatorcomment>هذا البرنامج يستعمل</translatorcomment>
        <translation>هذا البرنامج يستعمل:</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="110"/>
        <source>%1 for the graphical user interface</source>
        <translatorcomment>للواجهة الرسومية</translatorcomment>
        <translation>%1 للواجهة الرسومية</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="111"/>
        <source>%1 or %2 (depending on your distribution) for video/audio encoding</source>
        <translation>%1 أو %2 (اعتمادًا على توزيعتك) </translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="112"/>
        <source>%1 for hooking system functions for OpenGL recording</source>
        <translation>%1 لربط وظائف النظام للتسجيل بـ(OpenGL)</translation>
    </message>
</context>
<context>
    <name>DialogGLInject</name>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="34"/>
        <source>OpenGL Settings</source>
        <translation>إعدادات (OpenGl)</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="37"/>
        <source>&lt;p&gt;Warning: OpenGL recording works by injecting a library into the program that will be recorded. This library will override some system functions in order to capture the frames before they are displayed on the screen. If you are trying to record a game that tries to detect hacking attempts on the client side, it&apos;s (theoretically) possible that the game will consider this a hack. This might even get you banned, so it&apos;s a good idea to make sure that the program you want to record won&apos;t ban you, *before* you try to record it. You&apos;ve been warned :).&lt;/p&gt;

&lt;p&gt;Another warning: OpenGL recording is experimental, it may not work or even crash the program you are recording. If you are worried about losing program data, make a backup first!&lt;/p&gt;

&lt;p&gt;If you want to record Steam games, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;read this first&lt;/a&gt;.&lt;/p&gt;</source>
        <translation>&lt;p&gt;تحذير: تسجيلات أوبن جل(OpenGl) تعمل بحقن مكتبة إلى البرنامج الذي سوف يسجل. هذه المكتبة سوف تتجاهل بعض الأوامر أو الوظائف في سبيل تصوير والتقاط إطارات ومشاهد قبل أن تظهر على الشاشة. إذا كنت تحاول تسجيل لعبة وتلك الللعبة تحاول كشف محاولات الاختراق، هذا يجعل من الممكن (نظريًا) أن تعتبر اللعبة أن هذا اختراق. وهذا ربما أيضًا يسبب لك الحظر، لذا من الجيد أن تتأكد ان البرنامج الذي تريد أن تسجله لن يحظرك قبل أن تحاول تسجيله. وقد أعذر من أنذر :). &lt;/p&gt;

&lt;p&gt;تحذير آخر: أوبن جل(OpenGl) ما زال  تجريبيًا حتى الآن لذا من الممكن ألا يعمل أو ان يسبب انهيار للبرنامج الذي تستعمله. إذا كنت قلقًا بشأن خسارة بيانات البرنامج إذًا فاعمل نسخة احتياطية منه!&lt;/p&gt;

&lt;p&gt;إذا كنت تريد تسجيل ألعاب منصة ستيم (steam)&lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;فاقرأ هذا أولًا&lt;/a&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="51"/>
        <source>Choose channel</source>
        <translation>اختر قناة</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="53"/>
        <source>Channel name:</source>
        <translation>اسم القناة:</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="55"/>
        <source>Channel names are used to identify applications. You only need to use this if you want to record multiple applications at the same time.
If you leave this empty, the default name &apos;channel-YOURUSERNAME&apos; will be used.</source>
        <translation>أسماء القنوات تستعمل لتعريف التطبيقات. أنت تحتاج لهذا فقط إذا كنت ستسجل في أكثر من برنامج في نفس الوقت.
إذا تركت هذا المكان فارغًا فإن الاسم الافتراضي سيكون &quot;قناة-اسم المستخدم الخاص بك&quot;.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="57"/>
        <source>Relax shared memory permissions (insecure)</source>
        <translation>استرح بالذاكرة المشتركة (غير آمن)</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="58"/>
        <source>If checked, other users on the same machine will be able to attach to the shared memory that&apos;s used for communication with the OpenGL program.
This means other users can (theoretically) see what you are recording, modify the frames, inject their own frames, or simply disrupt the communication.
This even applies to users that are logged in remotely (ssh). You should only enable this if you need to record a program that runs as a different user.</source>
        <translation>إذا اخترت هذا الخيار المستخدمين الآخرين على نفس الجهاز سيستطيعون الاطلع على الذاكرة المخصصة للاتصال ببرنامج أوبن جل (OpenGl).

هذا يعني أن المستخدمين الآخرين (نظريًا) يستطيعون رؤية ما تسجله، التعديل على الإطارات،حقن الإطارات التي يريدونها، أو ببساطة تعطيل الاتصال بالبرنامج.

وهذا أيضًا يسمح للمستخدمين الذين يسجلون الدخول عن طريق ما يعرف بالـ(Remote desktop) باوسطة بروتوكول (ssh) عليك أن تفعل هذا الخيار فقط في حالة تسجيل برنامج يعمل من مستخدم آخر.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="73"/>
        <source>Launch application</source>
        <translation>ابدأ البرنامج</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="75"/>
        <source>Command:</source>
        <translation>الأمر:</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="77"/>
        <source>This command will be executed to start the program that should be recorded.</source>
        <translation>هذا الأمر سوف ينفذ لبداية البرنامج الذي من المفترض أن يسجل.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="79"/>
        <source>Working directory:</source>
        <translation>المسار المعمول به:</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="81"/>
        <source>The command will be executed in this directory. If you leave this empty, the working directory won&apos;t be changed.</source>
        <translation>هذا الأمر سوف ينفذ في هذا المسار. إذا تركت هذا المسار فارغًا، المسار المعمول به لن يتغير.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="83"/>
        <source>Launch automatically</source>
        <translation>ابدأ تلقائيًا</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="84"/>
        <source>If checked, the application will be launched automatically once you go to the recording page. If not checked, you have to start it manually.</source>
        <translation>غذا اخترت هذا الخيار، فإن التطبيق سوف يبدأ وحده آليًا عندما تذهب لصفحة التسجيل. إذا لم تختره فإنك سوف تضطر لبدء التسجيل يدويًا.</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="86"/>
        <source>Launch now</source>
        <translation>ابدأ الآن</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="107"/>
        <source>Stream settings</source>
        <translation>إعدادات التدفق</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="109"/>
        <source>Limit application frame rate</source>
        <translation>حدد معدل الإطارات للتطبيق</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="110"/>
        <source>If checked, the injected library will slow down the application so the frame rate doesn&apos;t become higher than the recording frame rate.
This stops the application from wasting CPU time for frames that won&apos;t be recorded, and sometimes results in smoother video
(this depends on the application).</source>
        <translation>إذا تم اختياره، ستبطئ المكتبة المحقونة التطبيق كي لا يصبح معدل الإطارات في الثانية أعلى من معدل إطارات التسجيل. هذا يوقف التطبيق عن إضاعة وقت وحدة المعالجة المركزية (CPU) للإطارات التي لن يتم تسجيلها، وأحيانا يؤدي إلى سلاسة الفيديو (يعتمد على التطبيق).</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="119"/>
        <source>Close</source>
        <translation>إغلاق</translation>
    </message>
</context>
<context>
    <name>Logger</name>
    <message>
        <location filename="../AV/FastResampler.cpp" line="124"/>
        <source>Error: Resample ratio is out of range!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="128"/>
        <source>Error: Drift ratio is out of range!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="158"/>
        <source>Resample ratio is %1 (was %2).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="130"/>
        <source>Warning: Pixel format is not supported (%1 -&gt; %2), using swscale instead. This is not a problem, but performance will be worse.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="139"/>
        <location filename="../Benchmark.cpp" line="124"/>
        <location filename="../Benchmark.cpp" line="205"/>
        <source>Error: Can&apos;t get swscale context!</source>
        <comment>Don&apos;t translate &apos;swscale&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="161"/>
        <location filename="../AV/FastScaler.cpp" line="186"/>
        <location filename="../AV/FastScaler.cpp" line="211"/>
        <location filename="../AV/FastScaler.cpp" line="235"/>
        <location filename="../AV/FastScaler.cpp" line="257"/>
        <location filename="../AV/FastScaler.cpp" line="280"/>
        <source>Warning: Memory is not properly aligned for SSE, using fallback converter instead. This is not a problem, but performance will be worse.</source>
        <comment>Don&apos;t translate &apos;fallback&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="32"/>
        <source>Warning: An overrun has occurred, some samples were lost.</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="34"/>
        <source>Error: Can&apos;t recover device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="38"/>
        <source>Error: Can&apos;t start PCM device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="66"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="63"/>
        <location filename="../AV/Input/JACKInput.cpp" line="56"/>
        <location filename="../AV/Input/X11Input.cpp" line="207"/>
        <source>Stopping input thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="96"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="232"/>
        <source>Generating source list ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="115"/>
        <source>Error: Could not update ALSA configuration!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="162"/>
        <source>Found plugin: [%1] %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="175"/>
        <source>Warning: Could not open sound card %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="181"/>
        <source>Warning: Could not get info for sound card %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="185"/>
        <source>Found card: [%1] %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="210"/>
        <source>Found device: [%1] %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="259"/>
        <location filename="../AV/SimpleSynth.cpp" line="123"/>
        <source>Error: Can&apos;t open PCM device!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="263"/>
        <location filename="../AV/SimpleSynth.cpp" line="127"/>
        <source>Error: Can&apos;t get PCM hardware parameters!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="269"/>
        <location filename="../AV/SimpleSynth.cpp" line="133"/>
        <source>Error: Can&apos;t set access type!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="275"/>
        <location filename="../AV/SimpleSynth.cpp" line="139"/>
        <source>Error: Can&apos;t set sample format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="282"/>
        <location filename="../AV/SimpleSynth.cpp" line="146"/>
        <source>Error: Can&apos;t set sample rate!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="286"/>
        <location filename="../AV/SimpleSynth.cpp" line="150"/>
        <source>Warning: Sample rate %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="295"/>
        <location filename="../AV/SimpleSynth.cpp" line="158"/>
        <source>Error: Can&apos;t set channel count!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="299"/>
        <source>Warning: Channel count %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="308"/>
        <location filename="../AV/SimpleSynth.cpp" line="165"/>
        <source>Error: Can&apos;t set period size!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="312"/>
        <location filename="../AV/SimpleSynth.cpp" line="169"/>
        <source>Warning: Period size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="321"/>
        <location filename="../AV/SimpleSynth.cpp" line="178"/>
        <source>Error: Can&apos;t set buffer size!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="325"/>
        <location filename="../AV/SimpleSynth.cpp" line="182"/>
        <source>Warning: Buffer size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="333"/>
        <location filename="../AV/SimpleSynth.cpp" line="190"/>
        <source>Error: Can&apos;t apply PCM hardware parameters!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="351"/>
        <source>Error: Can&apos;t start PCM device!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="372"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="180"/>
        <location filename="../AV/Input/JACKInput.cpp" line="238"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="299"/>
        <location filename="../AV/Input/X11Input.cpp" line="345"/>
        <source>Input thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="387"/>
        <source>Error: Can&apos;t read samples!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="413"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="248"/>
        <location filename="../AV/Input/JACKInput.cpp" line="289"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="388"/>
        <location filename="../AV/Input/X11Input.cpp" line="444"/>
        <source>Input thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="417"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="252"/>
        <location filename="../AV/Input/JACKInput.cpp" line="293"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="392"/>
        <location filename="../AV/Input/X11Input.cpp" line="448"/>
        <source>Exception &apos;%1&apos; in input thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="420"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="255"/>
        <location filename="../AV/Input/JACKInput.cpp" line="296"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="395"/>
        <location filename="../AV/Input/X11Input.cpp" line="451"/>
        <source>Unknown exception in input thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="149"/>
        <source>Error: Could not read stream, this usually means that the stream was already gone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="72"/>
        <source>Error: Could not connect to JACK!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="81"/>
        <source>Error: Could not create JACK port!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="87"/>
        <source>Error: Could not set JACK process callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="91"/>
        <source>Error: Could not set JACK sample rate callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="95"/>
        <source>Error: Could not set JACK xrun callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="99"/>
        <source>Error: Could not set JACK port connect callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="104"/>
        <source>Error: Could not activate JACK client!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="112"/>
        <location filename="../AV/Input/JACKInput.cpp" line="123"/>
        <location filename="../AV/Input/JACKInput.cpp" line="252"/>
        <source>Connecting port %1 to %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="256"/>
        <source>Disconnecting port %1 from %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="35"/>
        <source>Error: pa_mainloop_prepare failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_prepare&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="39"/>
        <source>Error: pa_mainloop_poll failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_poll&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="43"/>
        <source>Error: pa_mainloop_dispatch failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_dispatch&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="53"/>
        <source>Error: Could not create main loop!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="60"/>
        <source>Error: Could not create context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="64"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio. Try using the ALSA backend instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="77"/>
        <source>Error: Connection attempt failed! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="114"/>
        <source>Error: Could not create stream! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="121"/>
        <source>Error: Could not connect stream! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="132"/>
        <source>Error: Stream connection attempt failed! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="223"/>
        <source>Found source: [%1] %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="244"/>
        <source>Error: Could not get names of sources! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="313"/>
        <source>Error: pa_stream_peek failed!</source>
        <comment>Don&apos;t translate &apos;pa_stream_peek&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="377"/>
        <source>Warning: Audio source was suspended. The current segment will be stopped until the source is resumed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="382"/>
        <source>Warning: Stream was moved to a different source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="64"/>
        <source>Created video stream reader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="69"/>
        <source>Error: Can&apos;t open video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="76"/>
        <source>Error: Can&apos;t resize video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="83"/>
        <source>Error: Can&apos;t memory-map video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="92"/>
        <source>Error: Can&apos;t open video frame file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="142"/>
        <source>Destroyed video stream reader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="238"/>
        <source>Error: Size of video frame file is incorrect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="247"/>
        <source>Error: Can&apos;t memory-map video frame file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="94"/>
        <source>Error: Can&apos;t create channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="102"/>
        <source>Error: Can&apos;t stat channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="106"/>
        <source>Error: Channel directory is not a regular directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="111"/>
        <source>Error: Can&apos;t set channel directory mode!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="116"/>
        <source>Error: Channel directory is owned by a different user! Choose a different channel name, or enable relaxed file permissions to use it anyway.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="126"/>
        <source>Error: Can&apos;t initialize inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="132"/>
        <source>Error: Can&apos;t watch channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="144"/>
        <source>Error: Can&apos;t open channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="162"/>
        <source>Added pre-existing stream %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="197"/>
        <source>Error: Can&apos;t get read length from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="205"/>
        <source>Error: Can&apos;t read from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="215"/>
        <source>Error: Received partial event from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="227"/>
        <source>Error: Received partial name from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="241"/>
        <source>Added stream %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="249"/>
        <source>Removed stream %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="275"/>
        <source>Deleted abandoned stream %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="74"/>
        <source>Error: Unsupported X11 image pixel format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="186"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="97"/>
        <source>Error: Width or height is zero!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="190"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="101"/>
        <source>Error: Width or height is too large, the maximum width and height is %1!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="236"/>
        <location filename="../GUI/HotkeyListener.cpp" line="118"/>
        <source>Error: Can&apos;t open X display!</source>
        <comment>Don&apos;t translate &apos;display&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="245"/>
        <source>Using X11 shared memory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="248"/>
        <source>Error: Can&apos;t create shared image!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="253"/>
        <source>Error: Can&apos;t get shared memory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="258"/>
        <source>Error: Can&apos;t attach to shared memory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="264"/>
        <source>Not using X11 shared memory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="271"/>
        <source>Warning: XFixes is not supported by X server, the cursor has been hidden.</source>
        <comment>Don&apos;t translate &apos;XFixes&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="329"/>
        <source>Error: Invalid screen bounding box!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="393"/>
        <source>Error: Can&apos;t attach server to shared memory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="399"/>
        <source>Error: Can&apos;t get image (using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="410"/>
        <source>Error: Can&apos;t get image (not using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="101"/>
        <source>Error: Channel count is zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="105"/>
        <source>Error: Sample rate is zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="142"/>
        <source>Using sample format %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="147"/>
        <source>Error: Encoder requires an unsupported sample format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="176"/>
        <source>Error: Sending of audio frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="197"/>
        <source>Error: Receiving of audio packet failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="210"/>
        <location filename="../AV/Output/AudioEncoder.cpp" line="232"/>
        <source>Error: Encoding of audio frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="31"/>
        <location filename="../AV/Output/BaseEncoder.cpp" line="40"/>
        <source>Error: Option &apos;%1&apos; could not be parsed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="97"/>
        <source>Stopping encoder thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="165"/>
        <source>Error: Can&apos;t open codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="173"/>
        <source>Warning: Codec option &apos;%1&apos; was not recognised!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="189"/>
        <source>Encoder thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="218"/>
        <source>Flushing encoder ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="229"/>
        <source>Encoder thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="233"/>
        <source>Exception &apos;%1&apos; in encoder thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="236"/>
        <source>Unknown exception in encoder thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="71"/>
        <source>Stopping encoders ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="78"/>
        <source>Waiting for muxer thread to stop ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="101"/>
        <location filename="../AV/Output/Muxer.cpp" line="125"/>
        <source>Error: Can&apos;t copy parameters to stream!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="147"/>
        <source>Error: Can&apos;t write header!</source>
        <comment>Don&apos;t translate &apos;header&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="158"/>
        <source>Finishing encoders ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="200"/>
        <source>Error: Can&apos;t find chosen output format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="204"/>
        <source>Using format %1 (%2).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="210"/>
        <source>Error: Can&apos;t allocate format context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="217"/>
        <source>Error: Can&apos;t open output file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="230"/>
        <source>Error: Can&apos;t write trailer, continuing anyway.</source>
        <comment>Don&apos;t translate &apos;trailer&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="268"/>
        <source>Error: Can&apos;t find codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="278"/>
        <source>Using codec %1 (%2).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="289"/>
        <source>Error: Can&apos;t create new stream!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="296"/>
        <source>Error: Can&apos;t create new codec context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="308"/>
        <source>Error: Can&apos;t get codec context defaults!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="321"/>
        <source>Warning: This codec is considered experimental by libav/ffmpeg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="337"/>
        <source>Muxer thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="397"/>
        <source>Error: Can&apos;t write frame to muxer!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="425"/>
        <source>Muxer thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="429"/>
        <source>Exception &apos;%1&apos; in muxer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="432"/>
        <source>Unknown exception in muxer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="221"/>
        <source>Stopping synchronizer thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="329"/>
        <source>Warning: Received video frame with non-monotonic timestamp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="356"/>
        <source>Warning: Video buffer overflow, some frames will be lost. The audio input seems to be too slow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="413"/>
        <source>Warning: Received audio samples with non-monotonic timestamp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="438"/>
        <source>Warning: Too many audio samples, dropping samples to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="444"/>
        <source>Warning: Not enough audio samples, inserting silence to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="510"/>
        <source>Warning: Audio input is more than 2% too slow!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="514"/>
        <source>Warning: Audio input is more than 2% too fast!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="549"/>
        <source>Warning: Audio buffer overflow, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost). The video input seems to be too slow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="585"/>
        <source>Warning: Received hole in audio stream, inserting silence to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="886"/>
        <source>Synchronizer thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="908"/>
        <source>Synchronizer thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="912"/>
        <source>Exception &apos;%1&apos; in synchronizer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="915"/>
        <source>Unknown exception in synchronizer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="105"/>
        <source>Error: Width or height is not an even number!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="109"/>
        <source>Error: Frame rate is zero!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="166"/>
        <source>Using pixel format %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="180"/>
        <source>Error: The pixel format is not supported by the codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="208"/>
        <source>Error: Sending of video frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="229"/>
        <source>Error: Receiving of video packet failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="242"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="263"/>
        <source>Error: Encoding of video frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="40"/>
        <source>Using real-time priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="50"/>
        <source>Using nice priority.</source>
        <comment>Don&apos;t translate &apos;nice&apos;, it&apos;s a UNIX parameter that defines the priority of a process.</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="55"/>
        <source>Warning: Can&apos;t increase the thread priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="63"/>
        <source>Error: Can&apos;t recover device after underrun!</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="90"/>
        <source>Stopping synth thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="223"/>
        <source>Synth thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="276"/>
        <source>Error: Can&apos;t write samples!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="284"/>
        <source>Synth thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="288"/>
        <source>Exception &apos;%1&apos; in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="291"/>
        <source>Unknown exception in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../common/CPUFeatures.cpp" line="46"/>
        <source>CPU features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="159"/>
        <source>The application could not be launched.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/HotkeyListener.cpp" line="164"/>
        <source>Warning: XInput2 is not supported by X server, hotkeys may not work in some applications.</source>
        <comment>Don&apos;t translate &apos;XInput2&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="119"/>
        <source>Error: Command-line option &apos;%1&apos; does not take a value!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="150"/>
        <source>Error: Unknown command-line option &apos;%1&apos;!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="160"/>
        <source>Error: Unknown command-line argument &apos;%1&apos;!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="200"/>
        <source>SSR started</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="228"/>
        <source>SSR stopped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="245"/>
        <source>Error: Can&apos;t create .ssr directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="165"/>
        <source>BGRA %1 to BGRA %2  |  SWScale %3 us  |  Fallback %4 us (%5%)  |  SSSE3 %6 us (%7%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="243"/>
        <source>%1 %2 to %3 %4  |  SWScale %5 us  |  Fallback %6 us (%7%)  |  SSSE3 %8 us (%9%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="253"/>
        <source>Starting scaler benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="260"/>
        <source>Starting converter benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="71"/>
        <source>Stopping fragment thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="347"/>
        <source>Fragment thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="365"/>
        <source>Next fragment ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="369"/>
        <source>Finishing ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="381"/>
        <source>Fragment thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="385"/>
        <source>Exception &apos;%1&apos; in fragment thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="388"/>
        <source>Unknown exception in fragment thread.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="74"/>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>برنامج (SimpleScreenRecorder) اكتشف أنك تستخدم بطاقة شاشة من نوع نفيدا(NVIDIA) مع إمكانية تدوير الشاشة. وهذا قد يسبب خلل أثناء التسجيل. منالمفضل أن تلغي خاصية التدوير.هل تريد من البرنامج فعل ذلك ؟

أنت تستطيع تغيير هذا أيضًا في إعدادات بطاقة عرض نفيديا(NIVIDIA).</translation>
    </message>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="90"/>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>لم يستطع البرنامج تعطيل تدوير الشاشة لسبب ما - عذرًا! حاول تغييرها في لوحة إعدادات نفيديا(NVIDIA).</translation>
    </message>
</context>
<context>
    <name>PageDone</name>
    <message>
        <location filename="../GUI/PageDone.cpp" line="30"/>
        <source>The recording has been saved. You can edit the video now, or re-encode it with better settings to make the file smaller (the default settings are optimized for quality and speed, not file size).</source>
        <translation>التسجيل تم حفظه.يمكنك الآن أن تحرر الفيديو أو تعيد تحريره وترميزه وتعديل إعداداته لجعل الملف أصغر(الإعدادات الافتراضية معدة لجودة وسرعة أفضل لا مساحة ملف أقل).</translation>
    </message>
    <message>
        <location filename="../GUI/PageDone.cpp" line="33"/>
        <source>Back to the start screen</source>
        <translation>ارجع إلى صفحة البداية</translation>
    </message>
</context>
<context>
    <name>PageInput</name>
    <message>
        <location filename="../GUI/PageInput.cpp" line="118"/>
        <source>Video input</source>
        <translation>الفيديو المدخل</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="121"/>
        <source>Record the entire screen</source>
        <translation>سجل الشاشة بأكملها</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="122"/>
        <source>Record a fixed rectangle</source>
        <translation>سجل منطقة محددة فقط</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="123"/>
        <source>Follow the cursor</source>
        <translation>اتبع المؤشر</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="124"/>
        <source>Record OpenGL (experimental)</source>
        <translation>تسجيل عبر (OpenGL) (تحت التجربة)</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="130"/>
        <source>Select what monitor should be recorded in a multi-monitor configuration.</source>
        <translation>اختر الشاشة التي يفترض أن تسجل في تعدد الشاشات بالترتيب.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="131"/>
        <source>Select rectangle...</source>
        <translation>اختر مساحة مستطيلة...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="132"/>
        <source>Use the mouse to select the recorded rectangle.</source>
        <translation>استعمل مؤشر الفأرة لاختيار مساحة مستطيلة للتسجيل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="133"/>
        <source>Select window...</source>
        <translation>اختر نافذة...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="134"/>
        <source>Use the mouse to select a window to record.
Hint: If you click the border of a window, the entire window will be recorded (including the borders). Otherwise only
the client area of the window will be recorded.</source>
        <translation>استعمل مؤشر الفأرة لتختار نافذة ليتم تسجيلها.
تلميح:إذا ضغطت على حواف النافذة، كل النافذة الحالية سوف تسجل (بحدودها وإطارها).غير ذلك فقط نافذة العميل هي التي ستسجل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="137"/>
        <source>OpenGL settings...</source>
        <translation>إعدادات OpenGL...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="138"/>
        <source>Change the settings for OpenGL recording.</source>
        <translation>غير إعدادات OpenGL.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="139"/>
        <source>Left:</source>
        <translation>اليسار:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="143"/>
        <source>The x coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>هذا هو المعامل س هو تنسيق الجزء الأعلى الأيسر للمساحة التسجيل.
تلميح: يمكنك أيضًا تغيير هذا المعامل عن طريق بكرة الفأرة أو الأسهم لأعلى وأسفل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="145"/>
        <source>Top:</source>
        <translation>أعلى:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="149"/>
        <source>The y coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>هذا هو المعامل ص هو تنسيق الجزء الأعلى الأيسر لمساحة التسجيل.
تلميح: يمكنك أيضًا تغيير هذا المعامل عن طريق بكرة الفأرة أو الأسهم لأعلى وأسفل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="151"/>
        <source>Width:</source>
        <translation>العرض:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="155"/>
        <source>The width of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>عرض مساحة التسجيل.
تلميح: يمكنك أيضًا تغيير هذا المعامل عن طريق بكرة الفأرة أو الأسهم لأعلى وأسفل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="157"/>
        <source>Height:</source>
        <translation>الطول:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="161"/>
        <source>The height of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>طول مساحة التسجيل.
تلميح: يمكنك أيضًا تغيير هذا المعامل عن طريق بكرة الفأرة أو الأسهم لأعلى وأسفل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="163"/>
        <source>Frame rate:</source>
        <translation>عدد الإطارات:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="167"/>
        <source>The number of frames per second in the final video. Higher frame rates use more CPU time.</source>
        <translation>عدد الإطارات في لثانية في الفيديو النهائي.معدل إطارات أعلى يعني استهلاكًا أكثر للمعالج.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="168"/>
        <source>Scale video</source>
        <translation>حرشفة الفيديو</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="169"/>
        <source>Enable or disable scaling. Scaling uses more CPU time, but if the scaled video is smaller, it could make the encoding faster.</source>
        <translation>تمكين أو عدم تكمكين حرشفة الفيديو.حرشفة الفيديو تحتاج وقت معالج أكثر، ولكن إذا كان الفيديو أصغر فإنها يمكن أن تجعل عملية الترميز أسرع.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="170"/>
        <source>Scaled width:</source>
        <translation>عرض الحرشفة:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="174"/>
        <source>Scaled height:</source>
        <translation>طول الحرشفة:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="178"/>
        <source>Record cursor</source>
        <translation>تسجيل مؤشر الفأرة</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="248"/>
        <source>Audio input</source>
        <translation>مدخل الصوت</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="250"/>
        <source>Record audio</source>
        <translation>سجل الصوت</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="251"/>
        <source>Backend:</source>
        <translation>الواجهة الخلفية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="260"/>
        <source>The audio backend that will be used for recording.
The ALSA backend will also work on systems that use PulseAudio, but it is better to use the PulseAudio backend directly.</source>
        <translation>الواجهة الخلفية للصوت الذي سوف يستعمل في التسجيل.
الواجهة الخلفية(AlSA) يمكن أن تعمل على الأنمة التي تستعمل (PulseAudio)ولكن من  الأفضل استعمال (PulseAudio) مباشرة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="262"/>
        <location filename="../GUI/PageInput.cpp" line="270"/>
        <source>Source:</source>
        <translation>المصدر:</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="265"/>
        <source>The ALSA source that will be used for recording.
The default is usually fine. The &apos;shared&apos; sources allow multiple programs to record at the same time, but they may be less reliable.</source>
        <translation>مصدر الواجهة الخلفية النهائية ألسا(ALSA) الذي سوف يستعمل أثناء التسجيل.
الإعدادات الافتراضية في العادة جيدة(لا يستحسن تغييرها). المصادر &quot;المُشاركة-shared&quot; تسمح بعدة برامج لتسجل في نفس الوقت ولكنها قد تكون ليست ذات فعالية كبيرة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="267"/>
        <location filename="../GUI/PageInput.cpp" line="275"/>
        <source>Refresh</source>
        <translation>إعادة تحميل</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="268"/>
        <source>Refreshes the list of ALSA sources.</source>
        <translation>تعيد تحميل قاءمة مصادر الألسا (ALSA)&gt;.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="273"/>
        <source>The PulseAudio source that will be used for recording.
A &apos;monitor&apos; is a source that records the audio played by other applications.</source>
        <comment>Don&apos;t translate &apos;monitor&apos; unless PulseAudio does this as well</comment>
        <translation>مصدر الواجهة الخلفية النهائية البالص أوديو(PulseAudio) الذي سوف يستعمل أثناء التسجيل.
المونيتور (monitor)هي المصدر الذي يسجل الصوت المشغل عن طريق التطبيقات الأخرى.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="276"/>
        <source>Refreshes the list of PulseAudio sources.</source>
        <translation>تعيد تحميل قائمة مصادر البالص أوديو (PulseAudio).</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="279"/>
        <source>Record system microphone</source>
        <translation>تسجيل صوت اللاقط</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="280"/>
        <source>If checked, the ports will be automatically connected to the system capture ports.</source>
        <translation>إذا اخترت هذا الخيار فإن النظام يتصل آليًا بمنافذ الالتقاط.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="281"/>
        <source>Record system speakers</source>
        <translation>تسجيل صوت السماعات</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="282"/>
        <source>If checked, the ports will be automatically connected to anything that connects to the system playback ports.</source>
        <translation>إذا اخترت هذا الخيار فإن النظام سيتصل آليًا بالمنافذ التي تعمل في الخلفية.</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="325"/>
        <source>Back</source>
        <translation>رجوع</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="326"/>
        <source>Continue</source>
        <translation>استمرار</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="698"/>
        <source>All screens: %1x%2</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>جميع الشاشات: %1×%2</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="702"/>
        <source>Screen %1: %2x%3 at %4,%5</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>شاشة %1: %2x%3 في %4,%5</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="872"/>
        <source>Screen %1</source>
        <comment>This appears in the screen labels</comment>
        <translation>شاشة %1</translation>
    </message>
</context>
<context>
    <name>PageOutput</name>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="83"/>
        <location filename="../GUI/PageOutput.cpp" line="86"/>
        <location filename="../GUI/PageOutput.cpp" line="89"/>
        <location filename="../GUI/PageOutput.cpp" line="92"/>
        <location filename="../GUI/PageOutput.cpp" line="128"/>
        <source>%1 files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation>%1 ملف</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="95"/>
        <location filename="../GUI/PageOutput.cpp" line="101"/>
        <location filename="../GUI/PageOutput.cpp" line="108"/>
        <source>Other...</source>
        <translation>آخر...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="107"/>
        <source>Uncompressed</source>
        <translation>غير مضغوط</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="162"/>
        <source>Error: Could not find any suitable container in libavformat!</source>
        <translation>خطأ: لا يستطيع إيجاد أي حاوية مناسبة في (libavformat)!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="166"/>
        <source>Error: Could not find any suitable video codec in libavcodec!</source>
        <translation>خطأ: لا يستطيع إيجاد أي ترميز فيديو مناسب في (libavcodec)!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="170"/>
        <source>Error: Could not find any suitable audio codec in libavcodec!</source>
        <translation>خطأ: لا يستطيع إيجاد أي ترميز صوت مناسب في (libavcodec)!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="180"/>
        <source>File</source>
        <translation>ملف</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="182"/>
        <source>Save as:</source>
        <translation>حفظ كـ:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="184"/>
        <source>The recording will be saved to this location.</source>
        <translation>الملف سيحفظ في هذا المسار.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="185"/>
        <source>Browse...</source>
        <translation>تصفح...</translation>
    </message>
    <message>
        <source>Separate file per segment</source>
        <translation type="obsolete">فصل الملف لكل دورة</translation>
    </message>
    <message>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.
If the original file name is &apos;test.mkv&apos;, the segments will be saved as &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</source>
        <translation type="obsolete">إذا اخترت هذا الخيار سوف يتم إنشاء ملف فيديو منفصل لكل مرة توقف التسجيل ثم تبدؤه.
إذا كان اسم الملف الافتراضي &quot;تجربة.mkv&quot; ستسمى الملفات المنفصلة كالتالي &quot;تجربة-السنة-الشهر-اليوم_الساعة- الدقيقة-الثانية&quot;.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="189"/>
        <source>Container:</source>
        <translation>الحاوية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="194"/>
        <source>(not installed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="197"/>
        <source>The container (file format) that will be used to save the recording.
Note that not all codecs are supported by all containers, and that not all media players can read all file formats.
- Matroska (MKV) supports all the codecs, but is less well-known.
- MP4 is the most well-known format and will play on almost any modern media player, but supports only H.264 video
   (and many media players only support AAC audio).
- WebM is intended for embedding video into websites (with the HTML5 &lt;video&gt; tag). The format was created by Google.
   WebM is supported by default in Firefox, Chrome and Opera, and plugins are available for Internet Explorer and Safari.
   It supports only VP8 and Vorbis.
- OGG supports only Theora and Vorbis.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="206"/>
        <source>Container name:</source>
        <translation>اسم الحاوية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="212"/>
        <source>For advanced users. You can use any libav/ffmpeg format, but many of them are not useful or may not work.</source>
        <translation>للمستخدمين المتقدمين. تستطيع استعمال أي ترميز libav/ffmpeg ولكن العديد منهم لن يكون مفيدًا أو لن يعمل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="228"/>
        <source>Video</source>
        <translation>الفيديو</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="230"/>
        <location filename="../GUI/PageOutput.cpp" line="310"/>
        <source>Codec:</source>
        <translation>الترميز:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="235"/>
        <source>The codec that will be used to compress the video stream.
- H.264 (libx264) is by far the best codec - high quality and very fast.
- VP8 (libvpx) is quite good but also quite slow.
- Theora (libtheora) isn&apos;t really recommended because the quality isn&apos;t very good.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="239"/>
        <location filename="../GUI/PageOutput.cpp" line="323"/>
        <source>Codec name:</source>
        <translation>اسم الترميز:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="245"/>
        <source>For advanced users. You can use any libav/ffmpeg video codec, but many of them are not useful or may not work.</source>
        <translation>للمستخدمين المتقدمين. تستطيع استعمال أي ترميز libav/ffmpeg ولكن العديد منهم لن يكون مفيدًا أو لن يعمل.</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="246"/>
        <location filename="../GUI/PageOutput.cpp" line="330"/>
        <source>Bit rate (in kbps):</source>
        <translation>معدل البتات (لكل كيلو بت للثانية):</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="248"/>
        <source>The video bit rate (in kilobit per second). A higher value means a higher quality.
If you have no idea where to start, try 5000 and change it if needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="250"/>
        <source>Constant rate factor:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="255"/>
        <source>This setting changes the video quality. A lower value means a higher quality.
The allowed range is 0-51 (0 means lossless, the default is 23).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="261"/>
        <source>Preset:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>الإعدادات المسبقة:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="266"/>
        <source>The encoding speed. A higher speed uses less CPU (making higher recording frame rates possible),
but results in larger files. The quality shouldn&apos;t be affected too much.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="268"/>
        <source>CPU used:</source>
        <comment>libvpx setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>استعمال المعالج:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="270"/>
        <source>fastest</source>
        <translation>أسرع</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="275"/>
        <source>slowest</source>
        <translation>أبطأ</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="276"/>
        <source>The encoding speed. A higher value uses *less* CPU time. (I didn&apos;t choose the name, this is the name
used by the VP8 encoder). Higher values result in lower quality video, unless you increase the bit rate too.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="278"/>
        <location filename="../GUI/PageOutput.cpp" line="333"/>
        <source>Custom options:</source>
        <translation>خيارات خاصة:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="280"/>
        <location filename="../GUI/PageOutput.cpp" line="335"/>
        <source>Custom codec options separated by commas (e.g. option1=value1,option2=value2,option3=value3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="281"/>
        <source>Allow frame skipping</source>
        <translation>السماح بتجاوز الإطارات</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="282"/>
        <source>If checked, the video encoder will be allowed to skip frames if the input frame rate is
lower than the output frame rate. If not checked, input frames will be duplicated to fill the holes.
This increases the file size and CPU usage, but reduces the latency for live streams in some cases.
It shouldn&apos;t affect the appearance of the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="308"/>
        <source>Audio</source>
        <translation>الصوت</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="315"/>
        <source>The codec that will be used to compress the audio stream. You shouldn&apos;t worry too much about
this, because the size of the audio data is usually negligible compared to the size of the video data.
And if you&apos;re only recording your own voice (i.e. no music), the quality won&apos;t matter that much anyway.
- Vorbis (libvorbis) is great, this is the recommended codec.
- MP3 (libmp3lame) is reasonably good.
- AAC is a good codec, but the implementations used here (libvo_aacenc or the experimental ffmpeg aac encoder)
   are pretty bad. Only use it if you have no other choice.
- Uncompressed will simply store the sound data without compressing it. The file will be quite large, but it&apos;s very fast.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="329"/>
        <source>For advanced users. You can use any libav/ffmpeg audio codec, but many of them are not useful or may not work.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="332"/>
        <source>The audio bit rate (in kilobit per second). A higher value means a higher quality. The typical value is 128.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="357"/>
        <source>Back</source>
        <translation>رجوع</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="358"/>
        <source>Continue</source>
        <translation>استمرار</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="598"/>
        <location filename="../GUI/PageOutput.cpp" line="606"/>
        <source>not installed</source>
        <translation>لم يُثبت</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="600"/>
        <location filename="../GUI/PageOutput.cpp" line="608"/>
        <source>not supported by container</source>
        <translation>غير مدعوم من الحاوية</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="651"/>
        <source>Save recording as</source>
        <translation>حفظ التسجيل باسم</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="492"/>
        <source>You did not select an output file!</source>
        <translation>لم تختر ملفًا للحفظ!</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="186"/>
        <source>Create separate timestamped file for each segment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="187"/>
        <source>If checked, a separate timestamped video file will be created every time you pause and resume the recording.
If the original file name is &apos;test.mkv&apos;, the segments will be saved as &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="497"/>
        <source>The file &apos;%1&apos; already exists. Are you sure that you want to overwrite it?</source>
        <translation>الملف &apos;%1&apos; موجود بالفعل هل أنت متأكد من أنك تريد الكتابة عليه؟</translation>
    </message>
</context>
<context>
    <name>PageRecord</name>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="146"/>
        <source>Recording</source>
        <translation>التسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="150"/>
        <source>Enable recording hotkey</source>
        <translation>السماح باختصار للتسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="151"/>
        <source>Enable sound notifications</source>
        <translation>السماح بالتنبيهات الصوتية</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="152"/>
        <source>Hotkey:</source>
        <translation>الاختصار:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="153"/>
        <source>Ctrl +</source>
        <translation>Ctrl +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="154"/>
        <source>Shift +</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="155"/>
        <source>Alt +</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="156"/>
        <source>Super +</source>
        <translation>Super+</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="158"/>
        <source>The key that you have to press (combined with the given modifiers) to start or pause recording.
The program that you are recording will not receive the key press.</source>
        <translation>الزر الذي يجب ان تضغطه(جنبًا إلى جنب مع الالأزرار المعطاة) لبدء أو إيقاف التسجيل. البرنامج الذي تسجله لن يستقبل أو يسمح بالمفتاح الذي ضغطت.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="198"/>
        <source>Information</source>
        <translation>معلومات</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="200"/>
        <source>Total time:</source>
        <translation>إجمالي الوقت:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="202"/>
        <source>FPS in:</source>
        <translation>كم إطار مدخل في كل ثانية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="204"/>
        <source>FPS out:</source>
        <translation>كم إطار مخرج في كل ثانية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="206"/>
        <source>Size in:</source>
        <translation>الحجم المدخل:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="208"/>
        <source>Size out:</source>
        <translation>الحجم المخرج:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="210"/>
        <source>File name:</source>
        <translation>اسم الملف:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="213"/>
        <source>File size:</source>
        <translation>حجم الملف:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="215"/>
        <source>Bit rate:</source>
        <translation>معدل البت في كل ثانية:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="238"/>
        <source>Preview</source>
        <translation>معاينة</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="242"/>
        <source>Preview frame rate:</source>
        <translation>عدد الإطارات للثانية في المعاينة:</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="246"/>
        <source>Note: Previewing requires extra CPU time (especially at high frame rates).</source>
        <translation>لاحظ الآتي: المعاينة تحتاج إمكانيات معالج أكثر (خصوصًا إذا كان عدد اللقطات أو الإطارات في الثانيةكبيرًا).</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="295"/>
        <source>Log</source>
        <translation>خطأ</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="310"/>
        <location filename="../GUI/PageRecord.cpp" line="318"/>
        <source>Cancel recording</source>
        <translation>إلغاء التسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="311"/>
        <location filename="../GUI/PageRecord.cpp" line="320"/>
        <source>Save recording</source>
        <translation>حفظ التسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="325"/>
        <source>Quit</source>
        <translation>إغلاق</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="368"/>
        <source>You have not saved the current recording yet, if you quit now it will be lost.
Are you sure that you want to quit?</source>
        <translation>أنت لم تحفظ هذا التسجيل بعد إذاأغلقت الآن فإن التسجيل سوف يضيع .
هل أنت متأكد بأنك تريد الإغلاق؟</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="380"/>
        <source>Hide window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="382"/>
        <source>Show window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="550"/>
        <source>Starting page ...</source>
        <translation>يبدأ الصفحة...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="571"/>
        <location filename="../GUI/PageRecord.cpp" line="712"/>
        <location filename="../GUI/PageRecord.cpp" line="797"/>
        <source>Error: Something went wrong during initialization.</source>
        <translation>خطأ: حدث خطأ ما أثناء التهيئة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="578"/>
        <source>Started page.</source>
        <translation>تم بدء الصفحة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="602"/>
        <source>Stopping page ...</source>
        <translation>صفحة الإيقاف...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="627"/>
        <source>Stopped page.</source>
        <translation>صفحة متوقفة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="651"/>
        <source>Starting output ...</source>
        <translation>يبدأ الإخراج...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="662"/>
        <source>Error: Could not get the size of the OpenGL application because the GLInject input has not been created.</source>
        <translation>خطأ: لا يستطيع البرنامج أن يحدد حجم برنامج (OpenGL) لأن إدخاله(GLInjection) لم يتم إنشاؤه.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="667"/>
        <source>Error: Could not get the size of the OpenGL application. Either the application wasn&apos;t started correctly, or the application hasn&apos;t created an OpenGL window yet. If you want to start recording before starting the application, you have to enable scaling and enter the video size manually.</source>
        <translation>خطأ: لم يتمكن من الإتيان بحجم تطبيق OpenGl. إما أن التطبيق لم يبدأ بشكل صحيح أو أن التطبيق لم يفتح نافذة لـOpenG. إذا أردت أن تبدأ بالتسجيل قبل بدأ التطبيق ستحتاج إلى أن تحدد مقياس النافذة يدويًا.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="703"/>
        <source>Started output.</source>
        <translation>بدأ الإخراج.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="723"/>
        <source>Stopping output ...</source>
        <translation>يوقف الإخراج...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="741"/>
        <source>Stopped output.</source>
        <translation>توقف الإخراج.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="768"/>
        <source>Starting input ...</source>
        <translation>يبدأ الإدخال...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="773"/>
        <source>Error: Could not start the GLInject input because it has not been created.</source>
        <translation>خطأ: لا يمكن بدأ مدخل GLInject لأن لم يتم إنشاؤه.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="792"/>
        <source>Started input.</source>
        <translation>بدأ الإدخال.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="817"/>
        <source>Stopping input ...</source>
        <translation>يوقف الإدخال...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="828"/>
        <source>Stopped input.</source>
        <translation>توقف الإدخال.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="844"/>
        <source>Encoding remaining data ...</source>
        <translation>ترميز البيانات المتبقية...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="931"/>
        <location filename="../GUI/PageRecord.cpp" line="941"/>
        <source>Pause recording</source>
        <translation>إيقاف التسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="934"/>
        <location filename="../GUI/PageRecord.cpp" line="944"/>
        <source>Start recording</source>
        <translation>بدأ التسجيل</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="952"/>
        <source>Stop preview</source>
        <translation>إيقاف العرض</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="955"/>
        <source>Start preview</source>
        <translation>بدأ العرض</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="984"/>
        <source>Error: Something went wrong while creating the synth.</source>
        <translation>خطأ: شيء ما عمل بطريقة خاطئة أثناء إدراج المزامنة.</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1026"/>
        <source>Are you sure that you want to cancel this recording?</source>
        <translation>هل أنت متأكد أنك تريد إلغاء هذا التسجيل؟</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1041"/>
        <source>You haven&apos;t recorded anything, there is nothing to save.

The start button is at the top ;).</source>
        <translation>أنت لم تسجل أي شيءليس هناك شيء ليتم حفظه.

زر البداية في الأعلى ؛).</translation>
    </message>
</context>
<context>
    <name>PageWelcome</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="40"/>
        <source>&lt;p&gt;Welcome to SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Despite the name, this program actually has a lot of options. Don&apos;t worry though, there are really just two things that you need to know. One, the default settings are usually fine. If you don&apos;t know what something does, just use the default. Two, almost all settings have tooltips. Just hover the mouse over something to find out what it does.&lt;/p&gt;

&lt;p&gt;For more information:&lt;br&gt;
%1&lt;/p&gt;</source>
        <translation>&lt;p&gt;أهلًا بك في برنامج (SimpleScreenRecorder)!&lt;/p&gt;
&lt;p&gt;بالرغم من اسم هذا البرنامج فإنه يملك خيارات متعددة. ولكن لا تقلق بشأن ذلك لأنه في الحقيقة يوجد شيئين يجب أن تعلمهما. أولًا:أن الإعدادات الفتراضية غالبًا ما تكون كافية. إذا لم تكن تعلم ماذا يفعل شيء ما فقط استعمل الإعدادات الفتراضية. ثانيًا تقريبًا جميع الإعدادات تملك إرشادات. فقط ستحتاج أن تمرر المؤشر على ذلك الشيء لتعلم ماذا يعمل.&lt;/p&gt;

&lt;p&gt;لمزيد من المعلومات:&lt;br&gt;
%1&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="50"/>
        <source>About SimpleScreenRecorder</source>
        <translation>عن برنامج (SimpleScreenRecorder)</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="72"/>
        <source>Continue</source>
        <translation>استمر</translation>
    </message>
</context>
<context>
    <name>ProfileBox</name>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="28"/>
        <source>Profile</source>
        <translation>البيانات الشخصية(الحساب)</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="37"/>
        <source>Save</source>
        <translation>حفظ</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="38"/>
        <source>Save the current settings to this profile.</source>
        <translation>احفظ الإعدادات الحالية إلى هذا الحساب.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="39"/>
        <source>New</source>
        <translation>جديد</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="40"/>
        <source>Create a new profile with the current settings.</source>
        <translation>أنشئ حسابًا جديدًا بالإعدادات الحالية.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="41"/>
        <source>Delete</source>
        <translation>حذف</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="42"/>
        <source>Delete this profile.</source>
        <translation>حذف هذا الحساب.</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="96"/>
        <source>(none)</source>
        <translation>(لا شيء)</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="139"/>
        <source>Error: Can&apos;t load profile!</source>
        <translation>خطأ: لا يستطيع تحميل الحساب!</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="147"/>
        <source>Are you sure that you want to overwrite this profile?</source>
        <translation>هل أنت متأكد من أنك تريد استبدال هذا الحساب؟</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="159"/>
        <source>Enter a name for the new profile:</source>
        <translation>أدخل اسمًا للحساب الجديد:</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="165"/>
        <source>A profile with the same name already exists. Are you sure that you want to replace it?</source>
        <translation>يوجد حساب بنفس الاسم.هل أنت متأكد بأنك تريد استبداله؟</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="181"/>
        <source>Are you sure that you want to delete this profile?</source>
        <translation>هل أنت متأكد من أنك تريد حذف هذا الحساب؟</translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="../common/Dialogs.cpp" line="35"/>
        <location filename="../common/Dialogs.cpp" line="72"/>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;حسنًا</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="36"/>
        <location filename="../common/Dialogs.cpp" line="73"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;إلغاء</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="37"/>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;نعم</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="38"/>
        <source>Yes, always</source>
        <translation type="unfinished">نعم، دائمًا</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="39"/>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;لا</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="40"/>
        <source>No, never</source>
        <translation type="unfinished">ﻻ، أبدًا</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;حسنًا</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;إلغاء</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;نعم</translation>
    </message>
    <message>
        <source>Yes, always</source>
        <translation type="obsolete">نعم، دائمًا</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;لا</translation>
    </message>
    <message>
        <source>No, never</source>
        <translation type="obsolete">ﻻ، أبدًا</translation>
    </message>
</context>
<context>
    <name>SyncDiagram</name>
    <message>
        <location filename="../AV/Output/SyncDiagram.cpp" line="50"/>
        <source>Synchronization Diagram</source>
        <translation>تزامن الرسم البياني</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="258"/>
        <source>Video in</source>
        <translation>الفيديو</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="259"/>
        <source>Audio in</source>
        <translation>الصوت</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="260"/>
        <source>Video out</source>
        <translation>مخرج الفيديو</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="261"/>
        <source>Audio out</source>
        <translation>مخرج الصوت</translation>
    </message>
</context>
</TS>
