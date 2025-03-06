---
layout: article
category: questions
tags: technical, interview

title: "What is your opinion on The Rails Way?"
---

At the end of May 2024, a recruiter contacted me for a job. For this particular job, the company wanted me to answer 5 questions alongside receiving my CV. Having to jump through these kinds of hoops (albeit sounding quite small), has always been a terrible experience for me.

_I never heard back from them._

Maybe my answers are lacking and can be improved. I'll be sharing each question separately, but I'm open to feedback. Roast me!

This article is part of a short series of questions. This is part 3. For other questions, see [the end of this article](#questions).

Not to be confused with the "The Rails Way" book by Obie Fernandez, this question is asking for my opinion on the Rails way of developing applications.

### What is your opinion about the rails-way approach to designing and implementing an application with complex business requirements?

I've always loved the rails way when it comes to approaching code in general. The focus on simplicity, readability and developer happiness has kept me with this language. I like how rails has optimised common tasks with expanding boiler plates like ActiveRecord, ActiveMailer, etc. I like how they provide a structure for naming things (views matching routes matching controllers, for example). I like how rails "provides sharp knives" when it comes to coding conventions, something I've tried to take into working on white label applications before.

When it comes to complex logic though, I think rails makes it pretty easy to get yourself tangled up. It's very easy to make models gigantic, increase complexity with unnecessary service objects and put code in the wrong place.

The recent videos and code releases showing uses of concerns not just for logic that multiple models use, but using them for individual models to extracts single concepts has been a great example to take forward into other codebases and help resolve the issue. Not only does it extract away the complex logic, it makes it easier to extract and modify single responsibilities.

Keeping code in a simple MVC style, making use of concerns and POROs can take a you a long way.

### Questions

This article is part of a short series of questions.

1. How would you ensure data integrity across multiple threads/workers? [See answer](https://craigpetterson.co.uk/questions/2025/02/19/data-integrity-across-threads.html)
2. What steps would you take to avoid system failure or degraded performance? [See answer](https://craigpetterson.co.uk/questions/2025/02/26/what-steps-would-you-take-to-avoid-degraded-performance.html)
3. What is your opinion on The Rails Way? [See answer](https://craigpetterson.co.uk/questions/2025/03/06/what-is-your-opinion-on-the-rails-way.html)
