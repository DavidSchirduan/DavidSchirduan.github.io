---
date: 2023-01-02
layout: project
title: Overpowered
caption: $3.20 Solo Game
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

Play through an adventure, make tough decisions, manage your dice, and post your high score to the Online Scoreboard below!

* Simple 1-Page Rules + Tutorial Adventure
* Play through adventures as quickly as you can read them.
* Fully featured Web App (with a cool retro vibe).
* Online Scoreboards to compete with friends.
* Monthly Challenges for fun & prizes!
* Doubles as a GM prep tool to learn adventures.
* [Join the Discord Server](https://discord.gg/JUWu4gDutf) to talk strategy or ask questions.

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Digital PDF: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Digital PDF: $3.20<br>at DriveThruRPG</a>
<a target="_blank" href="/files/Overpowered/DEC2023.pdf" class="btn btn-primary" style="color: var(--OPwhite);background-color:#2c503e;border: none;">DEC2023<br>Challenge Guidelines</a>
</div>

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

*Bots with the same name get the exact same die rolls. Re-use a bot name to compete directly with them and try to beat their score!*

## DEC2023 Monthly Challenge

[![DEC2023 Teaser](/images/overpowered/DEC2023.png)](/files/Overpowered/DEC2023_Guidelines.pdf)
[*Click for Monthly Challenge Guidelines*](/files/Overpowered/DEC2023_Guidelines.pdf)

## Online Scoreboard

<div class="shopping-buttons" style="border-bottom: none;">
  <button class="btn btn-primary" id="overpoweredShowForm"
    style="color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;">SUBMIT YOUR HIGH SCORE</button>
</div>

<section class="overpoweredModal modal-hidden">
  <div class="row">
    <h2>Score Submission Form</h2>
    <button class="modal-close">⨉</button>
  </div>
  <form name="overpoweredScoreboard" method="POST" data-netlify="true">
    <div class="form-group">
      <label for="overpoweredEmail">Email Address</label>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      <input type="email" name="overpoweredEmail" class="form-control" required id="overpoweredEmail" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="overpoweredName">Player Name</label>
      <small id="nameHelp" class="form-text text-muted">Will be displayed on the scoreboard.</small>
      <input type="text" name="overpoweredName" class="form-control" required id="overpoweredName" aria-describedby="nameHelp" placeholder="Enter your name">
    </div>
    <div class="form-group">
      <label for="overpoweredLink">Personal Link (OPTIONAL)</label>
      <small id="linkHelp" class="form-text text-muted">Where can people find you?</small>
      <input type="text" class="form-control" id="overpoweredLink" name="overpoweredLink" aria-describedby="linkHelp"
        placeholder="Enter your website, social media, etc">
    </div>
    <div class="form-group">
      <label for="overpoweredAdventure">Adventure Name</label>
      <input type="text" class="form-control" id="overpoweredAdventure" required name="overpoweredAdventure" aria-describedby="adventureHelp" placeholder="Enter the name of the adventure you played">
    </div>
    <div class="form-group">
      <label for="overpoweredAdventureLink">Adventure Link (OPTIONAL)</label>
      <small id="adventureLinkHelp" class="form-text text-muted">Where can people get this adventure?</small>
      <input type="text" class="form-control" id="overpoweredAdventureLink" name="overpoweredAdventureLink" aria-describedby="adventureLinkHelp" placeholder="Enter purchase link">
    </div>
    <div class="form-group">
      <label for="playthroughLink">Playthrough Link (OPTIONAL)</label>
      <input type="text" class="form-control" id="playthroughLink" name="playthroughLink" aria-describedby="playthroughLinkHelp"
        placeholder="Enter the link to your playthrough">
    </div>
    <div class="form-group">
      <label for="botName">Bot Name</label>
      <input type="text" class="form-control" id="botNameForm" name="botName" required aria-describedby="botNameHelp" placeholder="Enter the name of your bot">
    </div>
    <div class="form-group">
      <label for="finalScore">Final Score</label>
      <input type="text" class="form-control" id="finalScore" name="finalScore" required aria-describedby="finalScoreHelp" placeholder="Enter your final score">
    </div>
    <div class="form-group">
      <label for="overpoweredAdventureLog">Adventure Log (OPTIONAL)</label>
      <textarea class="form-control" id="overpoweredAdventureLog" name="overpoweredAdventureLog" rows="3" placeholder="Enter your adventure log here."></textarea>
    </div>
    <button type="submit" class="btn btn-primary"
      style="color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;">Submit High Score</button>
  </form>
</section>

<div class="modal-overlay modal-hidden"></div>

<table class="overpowered-scores" id="overpowered-table">
</table>

*Scores may vary, depending on how obstacles and rewards are interpreted by players. Monthly Challenges are the best place for objective competition.*

> Web App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Pixel robots from [Torben Boekemeyer]([https://mounirtohami.itch.io/26-animated-pixelart-robots](https://torbenboekemeyer.me/)).

<script async src="/assets/generator_resources/overpoweredScoreboard.js" language="javascript" type="text/javascript"></script>
