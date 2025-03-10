---
layout: article
tags: journal

title: "Style doesn't matter"
created_at: 2019-09-23T06:13:45.000Z
published_at: 2019-09-23T06:39:02.000Z
---
I am a white space Nazi. I can't help it, it kills me. When I write code, I care about the white space, quotes and brackets. The code layout and position is important to me.

I often need to remind myself: as long as it is readable and logical, none of this matters. Substance over style.

Whenever I review a pull request, I now try to avoid saying anything about code style. The amount of time I've wasted over the years must be a staggering, eye watering amount. Granted, none of this would have been a problem if we bit the bullet and implemented a style guide.

A style guide would have reduced the number of conflicts on (at the end of the day) meaningless things. We talked about adding a style guide literally years ago, but due to these minor conflicts, we never went ahead with it.

A lot of people in the Ruby community use a static code analyser called [Rubocop](https://github.com/rubocop-hq/rubocop). Rubocop's rules are based on the community [style guide](https://rubystyle.guide/) which covers anything from number of spaces to method styles.

Our project has countless numbers of failures with this analyser, but so what?

BUT FUCK ME, WHY IS THERE SIX LINE BREAKS HERE?
