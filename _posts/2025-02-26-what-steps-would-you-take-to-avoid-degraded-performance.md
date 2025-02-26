---
layout: article
category: questions
tags: technical, interview

title: "Interview Question: What steps would you take to avoid system failure or degraded performance?"
---

At the end of May 2024, a recruiter contacted me for a job. For this particular job, the company wanted me to answer 5 questions alongside receiving my CV. Having to jump through these kinds of hoops (albeit sounding quite small), has always been a terrible experience for me.

_I never heard back from them._

Maybe my answers are lacking and can be improved. I'll be sharing each question separately, but I'm open to feedback. Roast me!

This is part 2. For part 1, see [the previous question](https://craigpetterson.co.uk/questions/2025/02/19/interview-question-data-integrity-across-threads.html).

### We expect increased traffic by 25% in the few next days (Black Friday for example). What steps would you take to avoid system failure or degraded performance?

I'm not too familiar with personally managing big bang days like this, but previously I've looked into auto-scaling features of Google Cloud and Heroku. Other than that, if this didn't work, we'd look into vertical scaling with more powerful machines.

For me, the focus is on the lead up to these days. I've performed load tests on applications before, using manual scripts and trying out software like Loader.io.

While I'm not a fan of over-optimisation, I'm familiar with several performance tools and particularly like Skylight for finding problem areas of the application and working on solutions. I think it's important to keep on top of performance problems and work towards an acceptable standard; making sure queries are fast, good database optimisation (with proper indexing, connections and if necessary, read databases), caching and CDNs.
