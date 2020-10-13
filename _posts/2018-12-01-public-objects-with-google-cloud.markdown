---
layout: default
category: articles
tags: technical

---

Google doesn't allow you to make a directory public. Who knows why? Please tell me. Maybe it's obvious and I just missed it all. Their example makes the entire bucket public, which we really don't want!

To overcome this, we allowed certain images to be public by manually updating them. This was feasible when there was a handful of images, but once we wanted to make company logos public to display on invoices... God damn, I'm not the guy going through each one to manually update tens of thousands of records.

## Updating existing content
Since just updating a single record manually isn't obvious. Here is how you do it:

1. Find the item in the bucket
2. Edit permissions
3. Add item with Entity: User, Name: allUsers, Access: Reader

Now, to update all necessary items systematically, you'll need to update the file's ACL, rather than the file itself. The file has a public attribute, but this isn't how you do it.

Following the information here: [public!](http://googlecloudplatform.github.io/google-cloud-ruby/docs/google-cloud-storage/v1.0.1/Google/Cloud/Storage/File/Acl.html#public!-instance_method)

You just need to run the following:

      require 'google/cloud/storage'
      storage = Google::Cloud::Storage.new
      bucket = storage.bucket 'my-bucket'
      file = bucket.file 'path/to/my-file.ext'
      file.acl.public!

Obviously, this only does it for 1 file, but a simple loop through a collection will solve this.

For us, we wanted to update our company logos.

      engine = ThirdParty::Google::Engine.new
      bucket = engine.bucket
      companies = Company.where.not(logo_file_name: nil)

      companies.find_each do |company|
        file = bucket.file(company.logo.path)
        file.acl.public!
      end

Our engine is used to deal with the require and wraps their API. Therefore, we can skip setting up storage as calling `bucket` does that for us.

## Uploading new public content
Once this was done, we needed to make all future uploads public too, but this was simply changing Fog Google to use `fog_public: true` in our Paperclip storage params.

    { storage: :fog,
      fog_public: true,
      fog_directory: GOOGLE_BUCKET_ID,
      fog_credentials: {
        provider: 'Google',
        google_storage_access_key_id: GOOGLE_STORAGE_ID,
        google_storage_secret_access_key: GOOGLE_STORAGE_SECRET
      }
    }

By default, fog_public is false, with an ACL setting of 'private'

    fog_public: false,
    fog_options: { acl: 'private' }

Just using `fog_public: false` works on it's own, but for some reason breaks Fog.mock! for our specs.
