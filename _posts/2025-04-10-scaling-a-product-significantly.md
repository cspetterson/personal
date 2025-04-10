---
layout: article
category: questions
tags: technical, interview

title: "Can you provide an example of a project where you delivered a product that had to scale significantly? What strategies did you use to ensure its success?"
---

The most recent scaling challenge was onboarding a major client at Zapnito where infrastructure demands grew exponentially. While our initially response was to increase our infrastructure, we realised that we could make significant improvements internally.

Our email startegy also needed reworking, as we now send over 1.2 million user-specific emails every monthly. On our accountancy platform, end of year financial deadlines were particuarly high demand tasks which required making third-party APIs resilient with retries and failure handling.

To address these problems, the teams used several strategies:
* Performance Monitoring: Tools like New Relic and Skylight highlighted high-impact queries for use to prioritise refactoring. This work also included utilising tools for development that revealed problems, such as rack-mini-profiler and bullet.
* Background Jobs: Slower processes were shifted to background jobs where appropriate.
* Benchmarking: Queries were optimised to meet often quite strict performance benchmarks.
* Load Testing: We used an external tool called Loader.io to simulate heavy loads.
* Infrastructure Adjustments: Nate Berkopec’s Speedshop insights guided our server configuration.

We found that a few people had a particular interest in performance, so we leaned on their knowledge and ability to improve our platform.

Untlimately, there are many things to consider for scaling, so it depends on the problem being solved for and our target goals — maybe it's okay if a nightly job that runs at 3am takes a little bit longer, if we're working on a user visible problem that increases load times to multiple seconds.
