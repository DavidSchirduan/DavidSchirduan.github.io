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
* [Join the Discord Server](https://discord.gg/J63pesx8) to talk strategy or ask questions.

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Digital: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Digital: $3.20<br>at DriveThruRPG</a>
<a target="_blank" href="/files/Overpowered/AUG23_Guidelines.pdf" class="btn btn-primary" style="color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;">Launch Wb App</a>
<a target="_blank" href="/files/Overpowered/AUG23_Guidelines.pdf" class="btn btn-primary" style="color: var(--OPwhite);background-color:#2c503e;border: none;">AUG23 Guidelines</a>
</div>

[![AUG23 Teaser](/images/overpowered/aug23.png)](/files/Overpowered/AUG23_Guidelines.pdf)
*Click for full Guidelines*

## Name Your Bot, Launch Web App
<form class="form-inline" target="_blank" action="/overpowered-app" method="get" >
  <div class="form-group">
    Bot Name: 
  </div>
  <div class="form-group col-6 mx-sm-3">
      <input style="width: inherit;" type="text" name="name" class="form-control" id="botName" placeholder="Leave blank for a random Bot name">
  </div>
  <button style="color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;" type="submit" class="btn btn-primary">Launch Web App</button>
</form>

## Online Scoreboard

<div class="shopping-buttons">
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdEXARUVTmTKCAVsnur_qb3Wj-nu7fMiXfNMBGnhINsNBbrBw/viewform?usp=sf_link" class="btn btn-primary" style="color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;">SUBMIT YOUR HIGH SCORE</a>
</div>

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

*Scores may vary, depending on how obstacles and rewards are interpreted by players. Monthly Challenges are the best place for objective competition.*

> Web App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Pixel robots from [Torben Boekemeyer]([https://mounirtohami.itch.io/26-animated-pixelart-robots](https://torbenboekemeyer.me/)).

<link href="/assets/viewer.css" rel="stylesheet">
<script>
window.addEventListener('DOMContentLoaded', function () {
  var galley = document.getElementById('images');
  var viewer = new Viewer(galley,{navbar: 0, title:0, toolbar:0});
});
</script>
<script async src="/assets/generator_resources/overpoweredScoreboard.js" language="javascript" type="text/javascript"></script>
