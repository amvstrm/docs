# Video player

amvstrm provided a lot of different players + embeds in case one of them is not working.

![swplyr](/docs_assets/firefox_AZi3Kg5pQ3.png)

## How-to

To switch to a different player just click on the settings icon below the player and choose the player you want to use.

![plyrstting](/docs_assets/settings-amvstrm.png)

## Integrated Player

We use Artplayer as the primary integrated player because we want to customize the player and provide more features such as :

- Skip Opening and Ending with Skip Button and Auto Skip function
- Automatically save playtime
- Easily switch your stream source and quality
- Autoplay the next episode without selecting the episode list
- Proxy supported

## Embedded Player

Embedded player is the player that we and you can embed to the website. Noted that embedded player would not have the features that the integrated player has.

### Plyr & NSPL

> [!INFO]
> I know you miss the animixplay that why we use plyr specifically for it but we also use it for our old site and we realize that a lot of people use our stream API route just to get the player URL.

Plyr and NSPL are the options if the integrated player died for no reason. They are easy to use and provide small features with no ads.

### Vidstream embeds (Ads)

Vidstream powered gogoanime and other clone sites. If for some reason the integrated player died, you can use the Vidstream embeds or other embeds that are available on the gogoanime website. Most of the embeds have a lots of ads that might disrupt the viewing experience. If you want to use the Vidstream embeds, you can enable ad-blockers on your browser before watching the video.

## Video data

In case the stream data fails to load or gives you the wrong data, you can refresh the data from the API and fix the issue.

## Proxy

Proxy mode is a feature that allows you to stream the video through our server. This is useful if you are having trouble with the video quality or the video is not loading due to cors error.

To enable proxy mode, you can click on the settings icon below the player and add proxy to the input field ``https://proxy.cors/`` (Depending on the query or param that the proxy provider give you).

