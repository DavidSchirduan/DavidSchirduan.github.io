---
date: 2023-05-20
layout: project
title: Overpowered
caption: $10 Digital Game
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Overpowered is a solo framework for speedrunning your favorite tabletop rpg adventures. Manage your power, choose your path, and perfect your strategy. Achieve a high score and dominate the online leaderboards. Try the demo adventure for free right now!

**This game is in early access.** The PDF will be improved upon and expanded over the next few months. Later this year we will fund a print run. Join the newsletter for updates!

<div class="shopping-buttons" style="border: none;">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">PDF Manual: $10<br>at Itch.io</a>
<a target="_blank" href="https://legacy.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">PDF Manual: $10<br>at DriveThruRPG</a>
<a target="_blank" href="/files/Overpowered_Demo.pdf" class="btn btn-primary">Free Demo!</a>
</div>

<div class="row" style="justify-content: center;">
  <div style="margin:1rem 0rem;" class="overBar1 col-2"></div>
  <a target="_blank" href="/overpowered-app" class="col-6 btn btn-primary btn-OP">LAUNCH NEW BOT</a>
  <div style="margin:1rem 0rem;" class="overBar2 col-2"></div>
</div>

<div id="images" class="shopping-images">
<p style="margin: 0px;padding:0px;text-align:center;font-style:italic;">Click to view</p>
<img src="/images/overpowered/Overpowered_Title.png" alt="an image of the front cover of Overpowered">
<img src="/images/Overpowered/Overpowered_1.png" alt="Spread of Overpowered">
<img src="/images/Overpowered/Overpowered_2.png" alt="Spread of Overpowered">
<img src="/images/Overpowered/marketing_3.png" alt="Early Access Marketing">
<img src="/images/Overpowered/marketing_4.png" alt="Patch Notes Marketing">
</div>

## The Early Access PDF Includes:

- A printable bookmark with all the rules.
- 50+ Pages of examples, adventures, strategy tips, and more!
- Compatible with any adventure that has math and maps.
- Play as you read. No journals, no oracles—just strategy.
- A game for game masters. Play as you prep your sessions.
- A 5-minute tutorial adventure.

## What People are Saying

> “Could easily play for 5-10 minutes before a session and easily see what I need to prep for the night!” -Derek Bizier, [Halfling’s Hoard](https://halflingshoard.wordpress.com/about/)

> “Genuinely cannot wait to have time to sit down and take it for a spin.” - [@sohkrates](https://www.tumblr.com/sohkrates/725864138600038400) on tumblr

> “This is the least complicated way to quickly run through modules I’ve bought. A great GM prep tool!” - [Nerd Leading the Nerd](https://www.youtube.com/watch?v=U-Oy0Yn_sV4)

> “It’s fun to take these adventures and convert them into a little number puzzle.” - [Science Fantasy Awesome](https://www.youtube.com/watch?v=lHPakkHDEbc)

<hr class="endShoppingImages">

## Online Scoreboard

<div class="shopping-buttons" style="border-bottom: none;">
  <button class="btn btn-primary" onClick="openSubmitModal()">SUBMIT YOUR HIGH SCORE</button>
</div>

<!--Hidden High Score Submission Form!-->
<section id="submitModal" class="overpoweredModal modal-hidden">
  <div class="row">
    <h2>Score Submission Form</h2>
    <button class="modal-close">⨉</button>
  </div>
  <form name="overpoweredScoreboard" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <p style="display:none;">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
    <p style="display:none;">
    <label>
      New submissions have the v3 label: <input name="version" value="3" />
    </label>
  </p>
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
      <small id="adventureLinkHelp" class="form-text text-muted">Link to a video or writeup about your playthrough.</small>
      <input type="text" class="form-control" id="playthroughLink" name="playthroughLink" aria-describedby="playthroughLinkHelp"
        placeholder="Enter the link to your playthrough">
    </div>
    <div class="form-group">
      <label for="botName">Bot Name</label>
      <input type="text" class="form-control" id="botName" name="botName" required aria-describedby="botNameHelp" placeholder="Enter the name of your bot">
    </div>
    <div class="form-group">
      <label for="finalScore">Final Score</label>
      <input type="text" class="form-control" id="finalScore" name="finalScore" required aria-describedby="finalScoreHelp" placeholder="Enter your final score">
    </div>
    <div class="form-group">
      <label for="overpoweredAdventureLog">Adventure Log</label>
      <textarea class="form-control" id="overpoweredAdventureLog" name="overpoweredAdventureLog" required rows="3" placeholder="Paste your adventure log here."></textarea>
    </div>
    <div class="form-group">
      <label for="overpoweredAdventureKey">Adventure Key (OPTIONAL)</label>
      <small id="adventureLinkHelp" class="form-text text-muted">Share your adventure key so other folks can compete with your score.</small>
      <textarea class="form-control" id="overpoweredAdventureKey" name="overpoweredAdventureKey" rows="3" placeholder="Enter the adventure key you used."></textarea>
    </div>
    <button type="submit" class="btn btn-primary"
      style="color: var(--OPwhite);background-color: var(--OPd6);border: none;">Submit High Score</button>
  </form>
</section>

<div class="modal-overlay modal-hidden"></div>

<table class="overpowered-scores" id="overpowered-table">
</table>

*Scores may vary, depending on how specifics are interpreted by players. Use the Adventures from the Deluxe edition for true competition.*

> Web App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Pixel robots from [Torben Boekemeyer]([https://mounirtohami.itch.io/26-animated-pixelart-robots](https://torbenboekemeyer.me/)).

<script async src="/assets/generator_resources/overpoweredScoreboard.js" language="javascript" type="text/javascript"></script>
