---
layout: default
category: jottings
tags: jottings

title: "Gemfile #1: Upgrade Early, Upgrade Often"
created_at: 2019-06-14T06:17:22.000Z
published_at: 2019-06-14T06:47:45.000Z
---
A Gemfile is the home for dependancies in a Rails application.

Ruby gems use semantic versioning. This is a version number that read like `MAJOR.MINOR.PATCH`, for example a line like: `gem 'devise', '1.2.34'` would take a Rail application to install the 'devise' gem at MAJOR version 1, MINOR version 2, and PATCH version 34.

A Gemfile can continuously grow, but as it does, so does the number of dependancies in your app. Being tied up by dependancies can be a bad thing. Maybe you want to change how a specific thing works, even just tweak it slightly and it becomes a bigger problem. Making your own version of that dependancy can be beneficial in the long run. That being said, certain dependancies are invalueable and provide benefits you couldn't possible have the time to develop for yourself. In almost every application, I use Devise for user authenication.

When you have dependancies, it's important to keep them up to date. It's easy to install them, get them working and then forget about. What happens when they start blocking other changes? You're forced to update them, sometimes several versions at a time. That can have a catastrophic impact on your development speed.

So how do you approach this?

[Upgrade early. Upgrade often.](https://thoughtbot.com/blog/keep-your-gems-up-to-date)
