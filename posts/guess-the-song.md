---
title: Guess The Song
date: "2021-08-10"
---

**Guess The Song** bot is a quick and easy to use bot I built after a game with friends in the car. 

After adding a selection of songs through the !add command you can start the game with !play and it will randomly queue and pick a song to choose from.

![](https://squid.gay/dzD3mS4O.png)


<br>
<div class="text-3xl"> Code </div>

The entire bot is written in [lavaplayer](https://github.com/sedmelluq/lavaplayer) and uses it's youtube search capabilities. It uses a guild music manager but only supports streaming audio to one server at the moment. In the future I plan to subclass Sedmelluq's audio track instance and attaching a "safe name" of the song and playlist so multiple servers will be able to play guess the song at the same time.
<br>
The source will be available soon. 

<br>
<div class="text-3xl"> Future Plans </div>
I plan to move this bot over to lavalink so I can ideally host this on my ovh hosting. When I do this I'll be able to run this 24/7 and use the server for other audio playing configuration.

