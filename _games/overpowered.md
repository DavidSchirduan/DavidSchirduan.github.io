---
date: 2023-01-02
layout: project
title: Overpowered
caption: $3.20 Strategy Game
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Overpowered transforms any Role-Playing Game Adventure into a competitive solo strategy game. Play as a brave explorer bot charged with mapping, scanning, and pacifying a dangerous location. Compatible with any module that uses math and maps.

Play through an adventure, make tough decisions, manage your dice, and post your high score to the Online Leaderboards!

* Simple 1-Page Rules + Tutorial Adventure
* Play through adventures as quickly as you can read them.
* Free web app (in case you don’t have 24 dice).
* Online Scoreboards to compete with friends.
* Doubles as a GM prep tool to learn adventures.
* Join the Discord to talk strategy or ask questions.

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Digital: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Digital: $3.20<br>at DriveThruRPG</a>
</div>

## Launch Web App
In case you don't have 24 dice lying around, use this mobile-friendly web app!

<form class="form-inline" target="_blank" action="/overpowered-app" method="get" >
  <div class="form-group">
    Bot Name: 
  </div>
  <div class="form-group col-6 mx-sm-3">
      <input style="width: inherit;" type="text" name="name" class="form-control" id="botName" placeholder="Leave blank for a random Bot name">
  </div>
  <button style="color: var(--OPwhite);background-color: var(--OPred);border: none;" type="submit" class="btn btn-primary">Launch</button>
</form>

## [Click Here to Submit Your High Score](https://docs.google.com/forms/d/e/1FAIpQLSdEXARUVTmTKCAVsnur_qb3Wj-nu7fMiXfNMBGnhINsNBbrBw/viewform?usp=sf_link)

<table class="overpowered-scores" id="overpowered-table">
    <thead>
        <tr>
            <th>ADVENTURE</th>
            <th>HIGH SCORE</th>
            <th>BOT NAME</th>
            <th>DETAILS?</th>
        </tr>
    </thead>
</table>

*Scores will vary, depending on how obstacles and rewards are interpreted by players.*

> Web App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Pixel robots from [Torben Boekemeyer]([https://mounirtohami.itch.io/26-animated-pixelart-robots](https://torbenboekemeyer.me/)). Rules and Web App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse them with attribution.

<link href="/assets/viewer.css" rel="stylesheet">
<script>
window.addEventListener('DOMContentLoaded', function () {
  var galley = document.getElementById('images');
  var viewer = new Viewer(galley,{navbar: 0, title:0, toolbar:0});
});
</script>
<script async src="/assets/generator_resources/overpoweredScoreboard.js" language="javascript" type="text/javascript"></script>
