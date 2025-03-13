---
layout: article
category: questions
tags: technical, interview

title: "What steps would you take to avoid system failure or degraded performance?"
---

This article is part 2 of a short series of questions. See the full series [here](https://craigpetterson.co.uk/questions/2025/03/15/interview-questions.html).

### We expect increased traffic by 25% in the few next days (Black Friday for example). What steps would you take to avoid system failure or degraded performance?

I'm not too familiar with personally managing big bang days like this, but previously I've looked into auto-scaling features of Google Cloud and Heroku. Other than that, if this didn't work, we'd look into vertical scaling with more powerful machines.

For me, the focus is on the lead up to these days. I've performed load tests on applications before, using manual scripts and trying out software like Loader.io.

While I'm not a fan of over-optimisation, I'm familiar with several performance tools and particularly like Skylight for finding problem areas of the application and working on solutions. I think it's important to keep on top of performance problems and work towards an acceptable standard; making sure queries are fast, good database optimisation (with proper indexing, connections and if necessary, read databases), caching and CDNs.
