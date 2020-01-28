---
layout: default
category: article
tags: technical

---

Nested resources are a powerful tool and Rails has made it easy to deal with
doing this directly in your usual form, well, format...

A typical Rails form is made using the `form_for` tag. When dealing with a
normal form, you would just pass in your controller object and add in the
relevant input fields.

_The following example is using Devise, so #new and #create for a User is handle
differently. The form I'm showing is User#edit._

Say you have a user that just needs a name and a bio section, that would look as
follows;

```
<%= form_for @user do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.label :bio %>
  <%= f.text_area :bio %>
<% end %>
```

For a basic form this might do the job, but what if you know you want to create
other things at the same time? It's not always reasonable to force someone to
take multiple steps when one step will do.

Say we're building an application to record information for event organisers to
find speakers (who knows why that might be useful?), then you might want to let
them record what talks they have done in the past too.

This sounds like the perfect opportunity for nested forms.
We know that a user would have many talks;

```
has_many :talks
```

...and a talk belongs to a user;

```
belongs_to :user
```

So, we want to add their talk titles and a link as an option into the form when
they are updating their name and bio too. Our old form needs a nested form;

```
<%= form_for @user do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :bio %>
  <%= form.text_area :bio %>

  <%= form.fields_for :talks do |talks_form| %>
    <%= talks_form.label :title %>
    <%= talks_form.text_field :title %>
    <%= talks_form.label :link %>
    <%= talks_form.text_field :link %>
  <% end %>
<% end %>
```

It's important to remember that the form needs a new name. You might notice that
our original form was named `|form|` but out new form is called `|talks_form|`.

We're not out of the woods just yet. We need to update one more thing - our
controller.

With a nested form like this, we need to build the object that will be used -
much in the same way we do for a #new action (eg; `@talk = Talk.new`)

To do this in UserController, we would update the #edit action to:

```
def edit
  @user.talks.build
end
```

Without this, our talk fields would not be displayed correctly in the form.

Additionally, we need to whitelist these params. Otherwise they will be ignored
and thrown away by our controller;

```
def user_params
  params.fetch(:user, {}).permit \
    :name, :bio,
    talks_attributes: [:id, :title, :link, :user_id]
end
```

Now, the params passed through from the form are being permitted and will be
used to create the relevant records in our database. Note how we've included
`id` and `user_id` in our `talks_attributes`!

With these records saved, we're free to use a user's talks to display anywhere
we like in the usual manner. We might want to show their own talks on their
profile, which we can access with `@user.talks` thanks to our earlier
association.

Now, it's also possible to handle [nested resources](https://stackoverflow.com/questions/2034700/form-for-with-nested-resources),
not just using nested forms. A nested resource would still use it's own
controller to performs it's actions, but would also be available at a new route.
The Rails Guides [shows this](https://guides.rubyonrails.org/routing.html#nested-resources)
in great detail.

In our User / Talk example, you might show all talks as a nested resource for
users. In `config/routes.rb`, that would be written with a do/end;

```
resources :users do
  resources :talks
end
```

This would generate the CRUD routes for a user's talks. They would still use the
TalksController, but effectively pre-set the `:user_id` as a parameter. This
will also generate additional route helper methods, such as
`new_user_talk_path`, as follows;

|Helper|HTTP|Path|Controller#Action|
|-|
|user_talks_path|GET|/users/:user_id/talks(.:format)|talks#index|
||POST|/users/:user_id/talks(.:format)|talks#create|
|new_user_talk_path|GET|/users/:user_id/talks/new(.:format)|talks#new|
|edit_user_talk_path|GET|/users/:user_id/talks/:id/edit(.:format)|talks#edit|
|user_talk_path|GET|/users/:user_id/talks/:id(.:format)|talks#show|
||PATCH|/users/:user_id/talks/:id(.:format)|talks#update|
||PUT|/users/:user_id/talks/:id(.:format)|talks#update|
||DELETE|/users/:user_id/talks/:id(.:format)|talks#destroy|

Nested forms and nested resources can get complicated. It's important to think
about their usage before going crazy. Before you know it, you might have a
nested resource within another nested resource and, suddenly, you're bogged down
in a routing nightmare. Perhaps shallow nesting or routing concerns are what
you're looking for?
