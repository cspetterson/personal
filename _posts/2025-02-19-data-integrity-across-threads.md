---
layout: article
category: questions
tags: technical, interview

title: "How would you ensure data integrity across multiple threads/workers?"
---

At the end of May 2024, a recruiter contacted me for a job. For this particular job, the company wanted me to answer 5 questions alongside receiving my CV. Having to jump through these kinds of hoops (albeit sounding quite small), has always been a terrible experience for me.

_I never heard back from them._

Maybe my answers are lacking and can be improved. I'll be sharing each question separately, but I'm open to feedback. Roast me!

This article is part of a short series of questions. This is part 1. For other questions, see [the end of this article](#questions).

### How would you ensure data integrity across multiple threads/workers within one SaaS application? For example background processing tool is scheduled twice to execute the same action (for example reduction of product's price), how can we prevent duplicated price changes?

The first thing that comes to mind is making jobs idempotent. In the example of a price reduction, we could check the current price hasn't already changed and skip the job if it has. This way, we can assume there was another change after the job was queued which would take precedence.

In several codebases, I've seen use of redis locks which has helped with some scalability issues in the past.

So depending on the task, I would likely use some combination of both.

I've also experienced using the sidekiq-unique-jobs gem and while it did help a little, it was a pain to migrate away from when we had to perform some system upgrades.

I saw recently that in the latest version of rails (7.1.3.3), you can use the new locking options `locking_version` and `with_lock` to increase readability and reduce the overhead of adding ugly transaction blocks.

### Questions

This article is part of a short series of questions.

1. How would you ensure data integrity across multiple threads/workers? [See answer](https://craigpetterson.co.uk/questions/2025/02/19/data-integrity-across-threads.html)
2. What steps would you take to avoid system failure or degraded performance? [See answer](https://craigpetterson.co.uk/questions/2025/02/26/what-steps-would-you-take-to-avoid-degraded-performance.html)
3. What is your opinion on The Rails Way? [See answer](https://craigpetterson.co.uk/questions/2025/03/06/what-is-your-opinion-on-the-rails-way.html)
