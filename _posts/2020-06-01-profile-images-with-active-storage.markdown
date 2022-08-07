---
layout: article
category: articles
tags: technical

---

I was surprised how simple it was to implement Active Storage just following
[the guide](https://edgeguides.rubyonrails.org/active_storage_overview.html)
from Rails Guides. This is how I added profile images to [Speakers Live](https://speakerslive.tech)
in 6 easy steps!

### 1. Run the installation task and migrations

This will give us the correct schema we need for Rails to store our uploads.

```
bin/rails active_storage:install
bin/rails db:migrate
```

### 2. Add `image` to our controller's whitelisted params

```
def user_params
  params.fetch(:user, {}).permit(:email, :image, [...])
end
```

### 3. Update the model

```
has_one_attached :image
```

### 4. Add `form.file_field :image` to our User form

```
<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <%= f.label :image, class: "form-label" %>
  <%= f.file_field :image, class: "form-field" %>
</div>
```

### 5. Update the views to use the dynamic images

If a user doesn't have an image, then a broken image will be displayed if we
just use:

```
<%= image_tag user.image,
  loading: "lazy", alt: user.name, class: "rounded-full" %>
```

You'll need to separately handle a default profile image using the `attached?`
option. On user, we use a method to decide which image to show (this
presentational logic is a perfect candidate for some sort of presenter)

```
def displayed_image
  if image.attached?
    image
  else
    "path/to/default/image.png"
  end
end
```

Doing it this way allows us to keep using `image_tag` without having to make a
shared partial and worrying about different styles in different places:

```
<%= image_tag user.displayed_image,
  loading: "lazy", alt: user.name, class: "rounded-full" %>
```

### 6. Custom Validations

The Rails Guide doesn't show how to do this clearly, but we need to add custom
validations to our image uploads.

### 6.a. Only allow our desired file types

We're only dealing with images, but Active Storage allows uploads of all
file times - anything you can find on your computer; PDF, EXE, MP4.

We can prevent other types of uploads by checking the `image.content_type`
matches a type from an allowed list.

```
validate :acceptable_image_type?

def acceptable_image_type?
  return unless image.attached?
  return if image.content_type.in? ["image/png", "image/jpeg"]
  errors.add :image, "must be a PNG or JPG"
end
```

### 6.b. Limit uploaded file sizes

Lastly, we don't want them to upload HUGE images. Twitter stores your profile
image at less than 30KB. Incredibly small and efficient on page loads.

```
validate :acceptable_image_size?

def acceptable_image_size?
  return unless image.attached?
  return unless image.byte_size > 1.megabyte
  errors.add :image, "is over 1MB"
end
```

## That's it!

Now you have image uploads in a Rails application.

Some more improvements could be made though:

- In our custom validations, we're checking if the file is attached multiple
  times (once in each validation).

- This implementation is using the default local storage, on your server. The
  guide shows examples of setting up externally with AWS and Google Cloud.
  Remember: if you're storing images locally, you will need to add the storage
  folder to your deploy symlink otherwise they will stay with the release and be
  lost on your next deploy.

  ```
  set :linked_dirs, %w{storage}
  ```

- Image pre-processing - for our application, we know we never want profile
  images bigger than 150x150. Rather than storing the full image, we could
  process those images when they are upload to be our desired size. This will
  improve load times, storage space and allow us to handle initially larger
  images.

