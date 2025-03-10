---
layout: article
tags: journal

title: "Rails: send_data"
created_at: 2019-10-30T04:28:27.000Z
published_at: 2019-10-30T05:45:21.000Z
---
Today, I was helping a newbie at work deal with a problem with a double render issue due to using send_data to generate a CSV.

We wanted to fill in a form and generate a CSV based on the parameters. Once the CSV was downloaded, we want to stay on the form and allow them to redo everything and generate a new CSV.

The problem with this in Rails is two-fold;

1.  Submitting a form (eg new to create) and redirecting can't happen nicely in the same action, because of the mentioned problem - send_data counts as a render, so you can't redirect after doing it
2.  Rails uses UJS to do some hidden magic. Submitting the form and redirecting actually locked the form from being used again. The form appeared to render beautifully, but the submit button was disabled. Tragic.

I think it's important when dealing with new programmers to admit when you don't know the answer and help them down the rabbit holes that ensue.

I feel like this should be a more common problem with an elegant solutions already.

We solved this problem by making the form submit a remote request, which then perform a bit of a hack to make **another** request which handles the send_data aspect of our request ...

```
<% date = { this: "that", that: "the other" }.to_query %>
window.open("/another_action?<%= data %>", target: "_blank");
```

Urgh.
