---
layout: article
tags: journal, talk

title: "Talk Script"
created_at: 2019-06-02T07:45:15.000Z
published_at: 2019-06-02T07:47:50.000Z
---

### Intro

Hey, I’m Craig and this talk is “Does it have to be complicated?”

I wanted talk experience, so here I am - this is my first talk.

If you have any questions as we’re going through, feel free to interrupt me. Just remember that you’re going to throw me off and probably ruin the whole talk.

_--- switch slide_

I wanted to keep the overall focus of my talk ambiguous - this is why I’m talking about “All the C’s” - Complexity, Cooking, Code, Colleagues and Clogs… that’s meant to be Blogs, but it didn’t begin with a C.

The more I thought about it though, the more it became about time and money.

_--- switch slide_

### Food

I’m gonna dive right into the best topic: Food.

Quick show of hands. Who here eats food?

Thank god. It’s not just me.

Who can tell me what they had to eat 6 months ago today? That’s the 6th December 2018. Anyone?

Nobody? That’s what I thought.
Really? What was it? Must have been amazing.

So then, there is an argument to be made that maybe what you eat doesn’t really matter. We don’t remember it, unless it’s a special occasion or some amazing meal, so why not make it simple?

These books use just 5 ingredients in every recipe - some are even optional, you could do 3 or 4 and they would be fine. They’re cheap and most of them take no longer than 20 minutes.

This saves time and money, which is super useful if you’re on a budget. If these cook books were full of complicated Michelin Star recipes, chances are we would mess them up and waste our time and money - and that’s how we should think about code too.

Obviously, sometimes you want a change in routine, so you make different meals, different ingredients, some extra spices, whatever. You want to try new things. That’s fine and I’d encourage it, but they take longer and cost more - especially if you get them wrong.

I’m already setting a precedence that you shouldn’t experiment, but that’s not my intention. Often, things require more thought that we give them. We go into autopilot without thinking of the consequences.

_--- switch slide_

### Blogs

Would this be a talk without at least one meme?

It’s easy to get sucked into making an overly complicated websites, especially for blogs. We’ve all done it, I certainly have.

I’m a Rails Developer, so I made a Rails application for my posts. I spent weeks setting up a server, sorted out hosting, bought a theme, tweaked the design and then never made any posts!

Content is key. Just get it out there.

Notice though, that I mentioned time and money again.
I spent time setting it up.
I spent money buying a theme and hosting.

It could have been a single file uploaded via an FTP like Filezilla.

I could have saved a bunch of time and use a blogging service like WordPress or Medium.

Buying my theme cost me a tenner. It’s probably already cost me way, way more in time and energy.

Knowing the overall goal of an application upfront can save a huge amount of time and money.

_--- switch slide_

### Code

Bloody hell. What have I gotten myself into, talking about code complexity at a developer’s meetup…?

Some examples in this bit are going to be for Ruby on Rails, but bear with me! Hopefully, they apply across a lot of different languages.

_--- switch slide_

### Principles

You’ve probably heard of Occam’s Razor and KISS.

Occam’s Razor is effectively, the simplest solution is usually correct.

And KISS is “Keep It Simple, Stupid.”

These are great, but let’s gloss over that. I just wanted to remind you that you should keep your code as simple as possible, but also that simple is hard!

Often, developers reach for complexity, but we don’t need to. Often, we try to learn the complexity, and we don’t need to do that either.

Simple is probably better.

If you have a method like this, do you need to know what TokenFinder does? If you do, you can go find out.

_--- switch slide_

### Naming

We’ve got some acronym here. These are actually used in the project I work on.

It’s understandable, naming is hard and typing out long names can be frustrating.

… but what the hell do they mean?

Anyone care to take a guess? (Pandle people quiet, for a minute…)

BT is Bank Transaction
BFI is Bank Feed Import
BPF is Billing Plan Feature
BFP is Bank Feed Profile
PA is Payment Allocation
GGA is Government Gateway Account
SBTLI is as much of a mouthful to say as what it actually means; Split Bank Transaction Line Item

These names can be a lot to take in for new - even experienced developers.

We’ve got some other problems with this list though.

BFP and BPF are very similar. We could have a typo that throws off a whole conversation here.
bt is backtrace for byebug

_--- switch slide_

### CRUD

I'm a firm believer in CRUD controllers. These are controllers that adhere to the 7 actions that are needed to do everything.

If you're adding more actions over these 7, then you’re just making actions that should be in a different controller.

The perfect controller would be like this picture - A (nearly) empty, default Rails controller.

_--- switch slide_

### Colleagues

Sometimes being the only person who knows how a piece of code works can feel great. Almost like you're Liam Neeson.

Until you realise, you're that unnamed bad guy that dies in the first fight scene.

Making code readable and ready to hand off to anyone is the ultimate goal. If you can't let it go or you think you're the only one that can manage it. You've done a bad job.

The complexity of code can be a huge stepping stone for new employees.

I'm not even referring to junior or graduate developers.

Off the top of my head, I don't even know how to make a basic table in Pandle. Sure, I can figure it out from experience but a new (even experienced) starter probably couldn't pick it up without help, because Bootgrid is garbage!

_--- switch slide_

### Tie up

To wrap it up, development is about managing complexity in order to save time or money.

Unfortunately, it’s not that black and white, as you can use money to save time and time to save money.

But, spending time upfront can save you more time down the road, which in turn can be a big money saver in the long run.

You can do this by keeping your code simple and easy to understand.

_--- switch slide_

### Close

Thanks for listening.
