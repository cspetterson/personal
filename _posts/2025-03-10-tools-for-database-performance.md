---
layout: article
category: questions
tags: technical, interview

title: "What do you use to optimize database performance in a Ruby on Rails application?"
---

At the end of May 2024, a recruiter contacted me for a job. For this particular job, the company wanted me to answer 5 questions alongside receiving my CV. Having to jump through these kinds of hoops (albeit sounding quite small), has always been a terrible experience for me.

_I never heard back from them._

Maybe my answers are lacking and can be improved. I'll be sharing each question separately, but I'm open to feedback. Roast me!

This article is part of a short series of questions. This is part 4. For other questions, see [the end of this article](#questions).

### What tools, techniques or best practices do you use to optimize database performance in a Ruby on Rails application, especially when dealing with complex data models?

When building software, I like to make sure that I've the correct indexes are added and the query is correctly configured to eager load associations to reduce or prevent N+1 queries. Typically, I've used the `bullet` gem for this in the past.

For the next step, when dealing with large amounts of data, I'd make sure I'm not loading everything into memory by batching items with `find_each` instead of just `each`, for example. Focusing on the `each` example, I'd then look at view caching, which would prevent a database hit from even happening — not hitting the database is the best database optimisation of all.

In terms of tools, I know a lot of these types of code changes get caught by linters and automic code reviews in Code Climate for example. I don't typically use these directly in my local coding environment because I like to focus directly on the problem I'm solving rather than fighting with linters (although, I'm happy to alter after the fact).
### Questions

This article is part of a short series of questions.

1. How would you ensure data integrity across multiple threads/workers? [See answer](https://craigpetterson.co.uk/questions/2025/02/19/data-integrity-across-threads.html)
2. What steps would you take to avoid system failure or degraded performance? [See answer](https://craigpetterson.co.uk/questions/2025/02/26/what-steps-would-you-take-to-avoid-degraded-performance.html)
3. What is your opinion on The Rails Way? [See answer](https://craigpetterson.co.uk/questions/2025/03/06/what-is-your-opinion-on-the-rails-way.html)
4. What do you use to optimize database performance in a Ruby on Rails application? [See answer](https://craigpetterson.co.uk/questions/2025/03/10/tools-for-database-performance.html)
