# TwitchDog
 Streaming assistant to monitor and help with lives on Twitch

### To install, you need:
piper   TTS    https://github.com/rhasspy/piper
piper voices        https://huggingface.co/rhasspy/piper-voices

to create app bot   https://dev.twitch.tv/console/apps
generate ypur clientId app and get ypur OAuth in    `https://id.twitch.tv/oauth2/authorize?client_id=[YPUR CLIENT ID]
&redirect_uri=http://localhost&response_type=token&scope=chat:read+chat:edit`

The browser will be redirected to http://localhost/#access_token=YOUR_TOKEN.
Copy YOUR_TOKEN (the code after access_token=).

To create a twitch token        https://twitchtokengenerator.com/
