---
layout: article
category: articles
tags: technical

title: "Foreman error when installing TailwindCSS"
---

I followed the steps on the Tailwind website to [Install TailwindCSS with Ruby on Rails](https://tailwindcss.com/docs/guides/ruby-on-rails)

When I ran `bin/dev`, I had an issue with `foreman`...

```
bin/dev: line 16: exec: foreman: not found
```

It’s likely a pathing issue, because my gems get installed in `vendor/bundle` and that’s not in my `$PATH`. I was able to resolve this by installing foreman via brew, as [recommended on StackOverflow](https://stackoverflow.com/a/77369749) (yes, I copy and pasted random code from SO)

```
brew install foreman
```

However, I realised that Tailwind had added a `bin/dev` file which was just calling the commands in the `Procfile.dev` file. This was just merging the `bin/rails server` process with the `bin/rails tailwindcss:watch` so it was on the same pane.

It’s nice, but it’s not necessary.

Using the `bin/dev` option actually adds a bit of fluff by adding the timestamp and the process name to the beginning of each line:

```
craig@MacBook-Pro tailwind-example % bin/dev
23:11:14 web.1  | started with pid 100
23:11:14 css.1  | started with pid 101
23:11:16 web.1  | => Booting Puma
23:11:16 web.1  | => Rails 7.1.3.4 application starting in development 
23:11:16 web.1  | => Run `bin/rails server --help` for more startup options
23:11:17 web.1  | Puma starting in single mode...
23:11:17 web.1  | * Puma version: 6.4.2 (ruby 3.3.2-p78) ("The Eagle of Durango")
23:11:17 web.1  | *  Min threads: 5
23:11:17 web.1  | *  Max threads: 5
23:11:17 web.1  | *  Environment: development
23:11:17 web.1  | *          PID: 100
23:11:17 web.1  | * Listening on http://127.0.0.1:3000
23:11:17 web.1  | * Listening on http://[::1]:3000
23:11:17 web.1  | Use Ctrl-C to stop
23:11:18 css.1  | 
23:11:18 css.1  | Rebuilding...
23:11:18 css.1  | 
23:11:18 css.1  | Done in 844ms.
23:12:55 css.1  | 
23:12:55 css.1  | Rebuilding...
23:12:55 css.1  | 
23:12:55 css.1  | Done in 176ms.
```

We can run these commands separately with no issues:
* `bin/rails s`
* `bin/rails tailwindcss:watch`

```
craig@MacBook-Pro tailwind-example % bin/rails s
=> Booting Puma
=> Rails 7.1.3.4 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 6.4.2 (ruby 3.3.2-p78) ("The Eagle of Durango")
*  Min threads: 5
*  Max threads: 5
*  Environment: development
*          PID: 743
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop
```

AND

```
craig@MacBook-Pro tailwind-example % bin/rails tailwindcss:watch

Rebuilding...

Done in 716ms.
```

Maybe I’m biased because it’s no extra effort for me, since I use tmuxinator and open my projects with a single command. By putting them in separate panes, I was able to completely delete the `bin/dev` and `Procfile.dev` files from my codebase.

### Notes
* For me, using a `bin/dev` command when I'm used to doing `bin/rails` isn't worth it. I imagine it's worth it for teams or projects with more commands.
* I probably need to update my gem paths, so that running commands like foreman just works straight away.
* I really love just having a simple tmux command to run ever process when I start developing.
* I really love removing fluff like this from my projects.
