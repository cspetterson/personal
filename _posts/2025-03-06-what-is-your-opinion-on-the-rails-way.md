---
layout: article
category: questions
tags: technical, interview

title: "What is your opinion on The Rails Way?"
---

This article is part 3 of a short series of questions. See the full series [here](https://craigpetterson.co.uk/questions/2025/03/15/interview-questions.html).

Not to be confused with the "The Rails Way" book by Obie Fernandez, this question is asking for my opinion on the Rails way of developing applications.

### What is your opinion about the rails-way approach to designing and implementing an application with complex business requirements?

I've always loved the rails way when it comes to approaching code in general. The focus on simplicity, readability and developer happiness has kept me with this language. I like how rails has optimised common tasks with expanding boiler plates like ActiveRecord, ActiveMailer, etc. I like how they provide a structure for naming things (views matching routes matching controllers, for example). I like how rails "provides sharp knives" when it comes to coding conventions, something I've tried to take into working on white label applications before.

When it comes to complex logic though, I think rails makes it pretty easy to get yourself tangled up. It's very easy to make models gigantic, increase complexity with unnecessary service objects and put code in the wrong place.

The recent videos and code releases showing uses of concerns not just for logic that multiple models use, but using them for individual models to extracts single concepts has been a great example to take forward into other codebases and help resolve the issue. Not only does it extract away the complex logic, it makes it easier to extract and modify single responsibilities.

Keeping code in a simple MVC style, making use of concerns and POROs can take a you a long way.
