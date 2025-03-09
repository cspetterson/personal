---
layout: article
category: jottings
tags: jottings

title: "Rails Doctrine"
created_at: 2019-12-06T05:11:36.000Z
published_at: 2019-12-06T22:44:48.000Z
---

_Collated from notes written in December 2019_

Yes, [Rails has a doctrine](https://rubyonrails.org/doctrine/), as if it's some kind of cult. Sometimes I can feel that way, but don't most platforms...

It has 9 points, the first of which I'm extremely happy about...

**1. Optimize for programmer happiness**

Programmer happiness is often overlooked in a lot of environments, not just programming languages, but offices, companies and more.

Ruby recognises programmers are often forgotten about as a piece of the puzzle.  They have to work with the code every day, but that isn't considered. Ruby has many methods that are easily understandable and readable, but underneath are "an acrobatic mess of wires under the hood". Often, this is critisied by lovers of Java or whatever other language, but that just triggered DHH (the creator of Rails) to introduce methods like `forty_two` for trolling measures...

If you read this section of the doctrine, you will note how much Rails is written to appease DHH himself. To make DHH smile. Not for anybody else. I find this amazing - isn't this why we write every day? Isn't this why we do certain things in our life? For ourselves, not for others. Sure, you might share them.  Sure, you might prioritise other people. I have no doubt that there are things you do for yourself.

**2. Convention over Configuration**

> You’re not a beautiful and unique snowflake

Rails is a framework made by DHH. Did you expect any other language?

He argues that there are many things people shouldn't need to worry about. Do you care what the primary key is declared as? postId, post_id or just id. Do you need to think about this for every model?

The Rails framework argues that these recurrent decisions don't need to be made. This argument is essentially the transfer of configuration to convention. It's the Rails convention that associated ids are written as association_id. For example, if a user has many posts, then a post's user id would be declared as `user_id`.

This use of convention lowers the barriers to delivery.

That's a maker's motto isn't it? Deliver fast. Move fast and break things. Move fast and make things.

If you don't have to worry about these conventions, your time and energy can be used to work on the problem you're actually trying to solve.

**6. Provide sharp knives**

The doctrine definitely includes some "out there" quotes, including ones that let programmers do dangerous things. It's argued that programmers should be allowed to do them and often I'd agree.

> [...] included a hanging rope in the welcome kit

**More to come...**
