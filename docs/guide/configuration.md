# Configuration

> [!WARNING]
> amvstrm's Website will be shutting down. Read more about the future of amvstrm [here](/the-future).

## Frontend

amvstrm required API_URL and VERSION in order to work. If you plan to deploy your own one, you can use our amvstrm's API or deploy your own backend and use it.

```txt
API_URL=<your-api-url>
VERSION=<your-version / v2 is the default>

DISCUS_ID=<your-discus-id>
USE_ANALYTICS=true
POSTHOG_PK=<your-posthog-public-key>
POSTHOG_HOST=<your-posthog-host>
```

### Why Posthog?

> [!INFO]
> This is optinal and also this is not a sponsored by Posthog.

Posthog is a self-hostable and an open source analytic that offer a lot of features like session replay, product analytics, A/B testing, etc. Posthog also offer free tier which are better for hobby project and more.

You can use Google analytic by modifying our code and env but we recommend Posthog for this.

Try [Posthog now](https://posthog.com) :

## Backend

It is optional but you can configure it to bypass rate limiting or allow cors to your website domain. This is helpful if you want to save your server resource and protecting other people from using the API.

```txt
NODE_ENV=development
PORT=8000
RATE_LIMIT=80
RATE_LIMIT_DURATION=60000
ALLOWED_HOSTS=
BLOCK_WITH_CORS=false
HASH_IP=false

GOGOANIME_PROXY=https://anitaku.pe
ANILIST_PROXY=https://graphql.anilist.co
PROXY_URL=""
```

## Assets

You can change the page UI for your liking
but you must require to change the logo and name. Please read our [License](/license) page for more information.
