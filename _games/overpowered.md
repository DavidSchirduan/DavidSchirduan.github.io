---
date: 2023-01-02
layout: project
title: Overpowered
caption: $3.20 Solo Strategy Game
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Overpowered transforms any RPG module into a solo strategy game. Play as a brave explorer bot charged with mapping, scanning, and pacifying a dangerous location. Compatible with any adventure that uses math and maps. Doubles as a GM prep tool to learn adventures.

Play through an adventures as fast as you can read them, make tough decisions, manage your dice, and post your high score to the Online Scoreboard below! [Join the Discord Server](https://discord.gg/JUWu4gDutf) to talk strategy or ask questions.

The Core Rules are freely available, and contain everything you need to play.

**The Deluxe PDF contains:**

* Retro art and layout inspired by 1980s tech manuals
* More examples and explanations
* Tutorial Adventure
* Adventure keys for competition
* Advice on making your own keys
* More to come? This game is still growing.

<div class="shopping-buttons" style="border: none;">
<a class="btn btn-primary itchBTN">Deluxe PDF: COMING SOON!</a>
<a target="_blank" href="https://docs.google.com/document/d/11-SzXiMr5Q6b8Shnelpwksft6OvTL-blS9T4gFq5FG4/edit?usp=sharing" class="btn btn-primary">Core Rules: FREE</a>
</div>

<div class="row" style="justify-content: center;">
  <div style="margin:1rem 0rem;" class="overBar1 col-2"></div>
  <a target="_blank" href="/overpowered-app" class="col-6 btn btn-primary btn-OP">LAUNCH NEW BOT</a>
  <div style="margin:1rem 0rem;" class="overBar2 col-2"></div>
</div>

<hr>

## What People are Saying

> “This is the least complicated way to quickly run through modules I've bought.” - [Nerd Leading the Nerd](https://www.youtube.com/watch?v=U-Oy0Yn_sV4)

> “It's fun to take these adventures and convert them into a little number puzzle.” - [Science Fantasy Awesome](https://www.youtube.com/watch?v=lHPakkHDEbc)

> "Overpowered rips. You should be playing it." - [theinstagrahame](https://www.tumblr.com/theinstagrahame)

## Online Scoreboard

<div class="shopping-buttons" style="border-bottom: none;">
  <button class="btn btn-primary" id="overpoweredShowForm">SUBMIT YOUR HIGH SCORE</button>
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
      style="color: var(--OPwhite);background-color: var(--OPd4);border: none;">Submit High Score</button>
  </form>
</section>

<div class="modal-overlay modal-hidden"></div>

<table class="overpowered-scores" id="overpowered-table">
</table>

*Scores may vary, depending on how specifics are interpreted by players. Use the Adventures from the Deluxe edition for true competition.*

> Web App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Pixel robots from [Torben Boekemeyer]([https://mounirtohami.itch.io/26-animated-pixelart-robots](https://torbenboekemeyer.me/)).

<script async src="/assets/generator_resources/overpoweredScoreboard.js" language="javascript" type="text/javascript"></script>
