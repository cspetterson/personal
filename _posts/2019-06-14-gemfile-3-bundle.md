---
layout: article
category: jottings
tags: jottings

title: "Gemfile #3: Bundle"
created_at: 2019-06-14T07:05:43.000Z
published_at: 2019-06-16T06:33:09.000Z
---
This should close out my [previous Gemfile posts](gemfile-2-read-the-fucking-manual) with part 3. Potentially the final entry, but a lot of this is covered by Thoughtbot in '[A Healthy Bundle](https://thoughtbot.com/blog/a-healthy-bundle)'

Thoughtbot talk about exact and pessimistic versions, as well as versionless. Whenever I start a new project, I try not to lock my gems to a specific version, but if they are being problematic it can help.

If you're using a standard setup for Rails, you're probably using Bundler. These version 'states' will affect how bundler handles your gem updates.

Running `bundle update` will have the following affects:

Exact: ~~~gem 'devise', '1.2.34'` - no change

Pessimistic: `gem 'devise', '~> 1.2'` - updated to the latest PATCH version of 1.2.x, eg; 1.2.34

Versionless: `gem 'devise'` - updated to the latest version. Full stop.

Whatever time period you chose to upgrade in, you can see what needs to be upgraded by using `bundle outdated`.

The default gem source for Rails is [RubyGems.org](https://rubygems.org/), which is important to remember. Sometimes searching for a gem name could take you to the wrong documentation if the name is taken elsewhere.

When I pick what gem I'm updating, my priority is typically to open the changelog and inspect the changes. I've been bitten too many times by just upgrading a gem without doing this. Often, a gem might seemlessly upgrade, but introduce breaking or unknown consequences.
