---
layout: article
tags: journal

title: "Gemfile #2: Read The Fucking Manual"
created_at: 2019-06-14T06:49:59.000Z
published_at: 2019-06-14T16:21:06.000Z
---
[Continuing from Upgrade Early, Upgrade Often](gemfile-1-upgrade-early-upgrade-often)...

When upgrading, it's important to take little step. Usually, this means it's best to incrementally upgrade. Sure, maybe try upgrading everything straight to the latest version first and see what happens.

If that doesn't work, start upgrading a single gem at a time by upgrading that gem to the latest PATCH version, then the next MINOR version, and then finally the MAJOR versions. Making sure your code is functional or updated along the way.

Remember: RTFM - Read The Fucking Manual. In this case, the upgrade documentation or change log.

If necessary, make a PR for each stage detailing what was upgraded, why this is happening, where they can find the documentation and what implications this entails for your app. It'll be much easier for your team to hunt down any problems or see what change cause a specific issue.

It's also important to start with low hanging fruit. With Rails 6.0 around the corner, you don't want to jump right in with a major version bump for the main framework of your application. Make sure you're other gems are upgraded, functional and amended first.

All of this comes much easier if you stick to upgrading early and upgrading often. If you only updated gems when a new version of Rails came out, it would take months to upgrade, but it could be as simple as a version number change if you prepare in advance.

Let's all get in the habit of upgrading our Gemfile at least once a _(insert your time period)_... maybe a sprint?
