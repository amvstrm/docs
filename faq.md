# FAQ

This is all FAQ about our website and API.

## I got 500 errors, what should I do?

500 errors can occur due to:

- Too much request
- Backend error
- Frontend error
- No connection

If you think this error is caused by our backend or frontend, Please make an issue on our [Github](https://github.com/amvstrm/amvstrm/issues/new).

## The video is not loading on the player

If you see the loading animation for too long on the player, it's most likely because the video is not fully loaded, the video does not exist or the video URL has expired also CORS error.

You can fix it by refreshing the watch page or switching to a different player.

## API returned (Too much req) but the header isn't

Since we use the official Anilist's GraphQL API, we can only get __90 req per minute__ (__30 req per min__ for right now) as stated on their [API docs](https://docs.anilist.co/guide/rate-limiting).

## Can I use your logo and name?

No, go read our [License](/license)

## CORS error

This will happen sometime if the webmaster decided to allow CORS to their own website. We have 2 options to fix this.

- __Setting up your own proxy__:  
  To set or remove the proxy servers, Click on the settings, then find the proxy URL textbox and remove the default proxy URL, or use your own proxy server after that click __Save Proxy URL__ then refresh the page once again to apply the change.

  ![image](https://github.com/user-attachments/assets/4b4907dc-c18b-401f-a9ff-f1c4f152afef)

- __Use a browser extension__:  
  We recommended all of these extension and it works on almost every PC user.
  - Chromium: https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
  - Firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere
  - Opera: https://addons.opera.com/en/extensions/details/cors-toggle
  - Edge: https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh

## More scraper & streaming source when?

Working on it using [Anify's](https://anify.tv) API. (Anify died...)

## What if your website got DMCA?

Still completely operates normally but is available only in my country.

_just leave us and every pirater alone, COMPANIES... we are not US citizens or any rich person!_

## Will you rework your API from JS to TS?

YES!