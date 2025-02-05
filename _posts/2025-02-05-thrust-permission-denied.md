---
layout: article
category: articles
tags: technical

title: "/rails/bin/thrust: Permission denied"
---

If you performed `rails new` and started a new application with Rails 8, then [Thruster](https://github.com/basecamp/thruster) is installed by default. However, if you manually installed thruster, like I did when I was upgrading from Rails 7.2 to 8.0, then you might have encountered this issue...

I added the gem to my Gemfile, ran `bundle` and copied the contents of `bin/thrust` from another project.

When deploying that project, I got an error: `/rails/bin/docker-entrypoint: line 8: /rails/bin/thrust: Permission denied`

It took a bit of time to notice that the file looked different in my terminal.

<img width="321" alt="thrust" src="https://github.com/user-attachments/assets/45f4a152-b6c3-455f-82c6-9f38db0605d2" />

Why was that...?

It turns out, I needed to make it executable (executable is red with an asterisks). I had just added a new, plain, _unexecutable_ file.

I ran `chmod +x bin/thrust` and that resolved my issue.
