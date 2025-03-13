---
layout: article
category: questions
tags: technical, interview

title: "How would you ensure data integrity across multiple threads/workers?"
---

This article is part 1 of a short series of questions. See the full series [here](https://craigpetterson.co.uk/questions/2025/03/15/interview-questions.html).

### How would you ensure data integrity across multiple threads/workers within one SaaS application? For example background processing tool is scheduled twice to execute the same action (for example reduction of product's price), how can we prevent duplicated price changes?

The first thing that comes to mind is making jobs idempotent. In the example of a price reduction, we could check the current price hasn't already changed and skip the job if it has. This way, we can assume there was another change after the job was queued which would take precedence.

In several codebases, I've seen use of redis locks which has helped with some scalability issues in the past.

So depending on the task, I would likely use some combination of both.

I've also experienced using the sidekiq-unique-jobs gem and while it did help a little, it was a pain to migrate away from when we had to perform some system upgrades.

I saw recently that in the latest version of rails (7.1.3.3), you can use the new locking options `locking_version` and `with_lock` to increase readability and reduce the overhead of adding ugly transaction blocks.
