Personal Page v2
================
My personal website.

You can use it as a template too. Just clone it and modify the content in `lib/data.js`. Modify the images in `public/img` accordingly. You will also need to create a file `/settings.json` with the following structure for the recaptcha:

```
{
  "public": {
    "recaptcha": {
      "key": [
        "<INSERT PUBLIC KEY HERE>"
      ]
    }
  },
  "private": {
    "recaptcha": {
      "secret": [
        "<INSERT PRIVATE KEY HERE>"
      ]
    }
  }
}
```

Then run the app with `./run.sh` and view at `http://localhost:3000`.
