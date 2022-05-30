---
layout: default
category: jottings
tags: jottings

title: "Flutter in 3 Minutes"
created_at: 2019-08-13T06:19:28.000Z
published_at: 2019-08-13T06:44:11.000Z
---
I've finally got around to attempting some mobile app development.

As we've chosen to use [Flutter](https://flutter.dev/), it helps to install Flutter and it's relevant dependencies onto your machine. Fortunately, like most of these frameworks, they have a [handy installation guide](https://flutter.dev/docs/get-started/install/linux). Easy.

Okay, **Step 1**; download the latest stable version of their SDK - that's Software Development Kit. Easy, just click the button and it starts happening. Oh, okay, that's 339.5 MB. I guess I'll go make a cup of tea then. Is that done? Okay, yep. Nice. I'm so fucking good at being a developer.

**Step 2**: extract the file to the desired location. It even gives you the snippet to use:

```
 cd ~/development
```

```
 tar xf ~/Downloads/flutter_linux_v1.7.8+hotfix.4-stable.tar.xz
```

Well, my development is actually called workspace, but sure. God, I'm so clever for noticing that. Imagine if I put it in development. How dumb (scoffs in elitism).

**Step 3**: Add the Flutter tool to your path.

```
export PATH="$PATH:`pwd`/flutter/bin"
```

Urgh, gross. It's fine though, since this will only be temporary. I'll have to look into putting this into a permanent location another time.

**Step 4**: _Optionally_ pre-download devel... (fades into the background as the command is already running).

Okay, what did that do?

> The flutter tool downloads platform-specific development binaries as needed. For scenarios where pre-downloading these artifacts is preferable (for example, in hermetic build environments, or with intermittent network availability), iOS and Android binaries can be downloaded ahead of time by running:

```
flutter precache
```

Now you're ready to run Flutter commands! Huzzah! Run this command to see if there is any dependencies you need to complete the setup!

```
flutter doctor
```

Oh, you need [Android Studio](https://developer.android.com/studio) as well. Obviously. (Eyes dart back and forth)

Okay, okay. Easy.

**Step 1**: Download and install Android Studio.

Easy, just click the button and it starts happening. Oh, okay, that's 1037 MB. I guess I'll go make a cup of tea then (he says sipping his fresh cup of tea).

Wait a minute...

I'm going to leave it here tonight, because the download will take a bit longer. Maybe I'll write about the Android Studio install process tomorrow - but Flutter _did_ take me 3 minutes!
