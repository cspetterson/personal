---
layout: article
category: questions
tags: technical, interview

title: "When do you decide to refactor code?"
---

This article is part 5 of a short series of questions. See the full series [here](https://craigpetterson.co.uk/questions/2025/03/15/interview-questions.html).

### When do you decide to refactor code? What criteria do you use? And how do you ensure successful refactoring without introducing issues?

Refactoring code is a continuous effort in an application but I wouldn't want to refactor something just for the sake of refactoring — if someone looks awful, but it's been working fine, untouched for years, then I would avoid refactoring if possible.

However for me, common cases for refactoring code are hard to understand code that is read often, frequent bugs or performance issues and while implementing new requirements.

My main focus for a refactor is readability. I want my code to be clear and easy to understand and therefore easier to read when reviewing why something happened or what caused a bug and also making it easier to rewrite when new requirements are being introduced.

To ensure a successful refactoring, we have to be confident in our test suite. I've worked on applications with nearly zero testing which makes refactoring hard. In this scenario, it's easiest to write tests for how the currently implementation works to raise confidence, then rewrite the tests with the new requirements and changes things in an incremental manner using TDD.

If you're more confident in a test suite, then you don't need to write the initial tests, but rewriting tests for the new requirements and still making small, incremental changes is hugely beneficial. I've seen countless times when developers change half a dozen things before commiting anything, then bump into a problem and are unsure which change causes the issue.
