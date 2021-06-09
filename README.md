# Web frontend for [Mileways.com](https://www.mileways.com)

This is the frontend for the Mileways web platform.

It includes the landing page as well as the flight views.

## Technologies
- [Nuxt](https://nuxtjs.org/)
- [Tailwind](https://tailwindcss.com/)

## Pages

We are using the [Nuxt content module](https://content.nuxtjs.org/) for generating pages from markdown.
Every markdown file placed inside `/content` is automatically rendered as a content page.

Pages are generated in two versions
- a normal version
- a "plain" version, consisting of a minimal version for usage in other systems

## Environment variables

The following environment variables are available:
- `API_BASE_URL`=https://mileways-flieger.xyz/api/v1/;
- `MAILCHIMP_CONFIG` a json object (containing these values: formUrl, u, ht, id - all of which can be found when generating a form on the mailchimp platform)
- `MAPBOX_ACCESS_TOKEN`
- `APP_STORE_URL`
- `INSTAGRAM_URL`
- `TWITTER_URL`
- `FACEBOOK_URL`

## Deployment
Deployments are currently done using [Netlify](https://www.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/072bf2d1-89be-4075-9d7a-1919b830d607/deploy-status)](https://app.netlify.com/sites/mileways/deploys)
