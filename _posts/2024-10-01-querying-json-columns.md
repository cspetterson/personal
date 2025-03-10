---
layout: article
tags: technical

title: "Querying JSON columns"
---

This is written from a bad example, but we have a model that can have many widgets, which are all saved in a JSON column. I know I just said `has_many`, so really we should refactor this. However, that's a separate refactor for another time.

We were removing a specific widget, but I didn't know how to verify where it was being used programmatically.

Turns out, you can dig through a JSON column by casting it to `jsonb` and using an arrow operator `->` and then query a specific key using `@>`

As an example, if I wanted to check out my model's `column` attribute for any `widgets` with the `type: 'widget_name'`. 

```
Model.where("column::jsonb -> widgets @> ?", [{ "type" => "widget_name" }].to_json)
```

I original thought the column _was_ a `jsonb` type. It was not, but I was able to cast it to `jsonb` using `column::jsonb`. Without casting it to `jsonb` this would raise operation errors: `operator does not exist: json @> unknown`
