---
layout: article
category: questions
tags: technical, interview

title: "What do you use to optimise database performance in a Ruby on Rails application?"
---

This article is part 4 of a short series of questions. See the full series [here](https://craigpetterson.co.uk/questions/2025/03/15/interview-questions.html).

### What tools, techniques or best practices do you use to optimise database performance in a Ruby on Rails application, especially when dealing with complex data models?

When building software, I like to make sure that I've the correct indexes are added and the query is correctly configured to eager load associations to reduce or prevent N+1 queries. Typically, I've used the `bullet` gem for this in the past.

For the next step, when dealing with large amounts of data, I'd make sure I'm not loading everything into memory by batching items with `find_each` instead of just `each`, for example. Focusing on the `each` example, I'd then look at view caching, which would prevent a database hit from even happening — not hitting the database is the best database optimisation of all.

In terms of tools, I know a lot of these types of code changes get caught by linters and automic code reviews in Code Climate for example. I don't typically use these directly in my local coding environment because I like to focus directly on the problem I'm solving rather than fighting with linters (although, I'm happy to alter after the fact).
