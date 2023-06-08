---
date: 2023-01-02
layout: project
title: Overpowered Solo Roleplaying
caption: $3.20 Rulebook
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Guide a brave explorer bot through your favorite tabletop roleplaying games. Overpowered is a solo game compatible with any adventure that uses math.

Inspired by video game speedruns, arcade scoreboards, and strategy board games, Overpowered offers an entirely new way to enjoy ttrpg adventures.

See the High Scores below for examples of play.

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Digital: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Digital: $3.20<br>at DriveThruRPG</a>
</div>

## Launch Dice App

Enter a Bot Name or use the provided one.

<form class="form-inline">
  <div class="form-group mx-sm-3">
      <label class="sr-only" for="botName">Bot Name</label>
      <input type="text" name="botName" class="form-control" id="botName" placeholder="Error.7">
    </div>
  <button type="submit" onclick="launchApp" class="btn btn-primary">Launch</button>
</form>

## [Click Here to Submit Your High Score](https://docs.google.com/forms/d/e/1FAIpQLSdEXARUVTmTKCAVsnur_qb3Wj-nu7fMiXfNMBGnhINsNBbrBw/viewform?usp=sf_link)

|ADVENTURE|HIGH SCORE|BOT NAME|NOTES|
|-----|-----|-----|
|[The Sinister Secret of Peacock Point](https://brad-kerr.itch.io/wyvern-songs)|**94 Overpower** by David Schirduan*|[Bouncy.Gyokuro.15](https://www.technicalgrimoire.com/overpowered-app?name=Bouncy.Gyokuro.15)|[Video Play Report](https://youtu.be/hNzL4wUip74)|
|[Drained Temple of the Brackish Basin](https://brstf.itch.io/brackish-basin)|**23 Overpower** by David Schirduan*|[Unstable.Arcturus.19](https://www.technicalgrimoire.com/overpowered-app?name=Unstable.Arcturus.19)|[Video Play Report](https://youtu.be/skfdnZeqjz8)|
|[Sepulchre of Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven)|**62 Overpower** by David Schirduan*|[Ancient.Ceylon.6](https://www.technicalgrimoire.com/overpowered-app?name=Ancient.Ceylon.6)|[Written Play Report](/david/2023/01/overpoweredsepulchre)|
|[Planar Compass #1](https://www.planarcompass.com/)|**15 Overpower** by David Schirduan*|[False.Castor.1](https://www.technicalgrimoire.com/overpowered-app?name=False.Castor.1)|[Written Play Report](/david/2023/02/overpoweredplanar)|
|[Pirate Borg](https://www.limithron.com/pirateborg)|**35 Overpower** by David Schirduan*|[Frigid.Procyon.11](https://www.technicalgrimoire.com/overpowered-app?name=Frigid.Procyon.11)|[Written Play Report](/david/2023/02/overpoweredpirateborg)|

_* High Scores achieved using beta rules, not valid after final release_

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Cute robots from [Mounir Tohami](https://mounirtohami.itch.io/26-animated-pixelart-robots). Rules and Dice App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse them with attribution.

<script>
//Generate random bot names for the entry box
fetch('/assets/generator_resources/overpowered.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        overpowered = data;
        botName = overpowered.Adjectives[Math.floor(Math.random() * overpowered.Adjectives.length)].toUpperCase() + "." + overpowered.Names[Math.floor(Math.random() * overpowered.Names.length)].toUpperCase() + "." + Math.floor(Math.random() * (20) + 1);
        document.getElementById('botname').textContent = botName;
        console.log(botName);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

function launchApp(){
  appUrl = "/overpowered-app?name=" + document.getElementById('botname').textContent;
  open(appUrl, _blank, popup)
}  

</script>
