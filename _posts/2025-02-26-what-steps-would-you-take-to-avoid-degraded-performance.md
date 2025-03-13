---
layout: article
category: questions
tags: technical, interview

title: "What steps would you take to avoid system failure or degraded performance?"
---

At the end of May 2024, a recruiter contacted me for a job. For this particular job, the company wanted me to answer 5 questions alongside receiving my CV. Having to jump through these kinds of hoops (albeit sounding quite small), has always been a terrible experience for me.

_I never heard back from them._

Maybe my answers are lacking and can be improved. I'll be sharing each question separately, but I'm open to feedback. Roast me!

This article is part of a short series of questions. This is part 2. For other questions, see [the end of this article](#questions).

### We expect increased traffic by 25% in the few next days (Black Friday for example). What steps would you take to avoid system failure or degraded performance?

I'm not too familiar with personally managing big bang days like this, but previously I've looked into auto-scaling features of Google Cloud and Heroku. Other than that, if this didn't work, we'd look into vertical scaling with more powerful machines.

For me, the focus is on the lead up to these days. I've performed load tests on applications before, using manual scripts and trying out software like Loader.io.

While I'm not a fan of over-optimisation, I'm familiar with several performance tools and particularly like Skylight for finding problem areas of the application and working on solutions. I think it's important to keep on top of performance problems and work towards an acceptable standard; making sure queries are fast, good database optimisation (with proper indexing, connections and if necessary, read databases), caching and CDNs.

### Questions

This article is part of a short series of questions.

1. How would you ensure data integrity across multiple threads/workers? [See answer](https://craigpetterson.co.uk/questions/2025/02/19/data-integrity-across-threads.html)
2. What steps would you take to avoid system failure or degraded performance? [See answer](https://craigpetterson.co.uk/questions/2025/02/26/what-steps-would-you-take-to-avoid-degraded-performance.html)
3. What is your opinion on The Rails Way? [See answer](https://craigpetterson.co.uk/questions/2025/03/06/what-is-your-opinion-on-the-rails-way.html)
4. What do you use to optimise database performance in a Ruby on Rails application? [See answer](https://craigpetterson.co.uk/questions/2025/03/10/optimise-database-performance.html)
5. When do you decide to refactor code? [See answer](https://craigpetterson.co.uk/questions/2025/03/10/when-do-you-refactor-code.html)
