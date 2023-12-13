---
date: 2023-12-04
layout: full-page
title: Overpowered Web App (BETA)
permalink: overpowered-app-beta
published: true
hide_description: true
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
description: >
  A mobile-friendly web app for Overpowered.
---

<p style="color:white">A web app for the <a style="color:white" href="/overpowered">Overpowered</a> strategy game. Bookmark this page to save your session. The Adventure Log will NOT be saved!</p>

<!--Hidden High Score Submission Form!-->
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
      <label for="botNameForm">Bot Name</label>
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

<div class="row" style="justify-content: center;">
  <div id="overCard" class="col-xl col-12 crtCard crt">
    <h3 style="width:100%;"><span id="tributeScore">30</span></h3>
    <div class="shopping-buttons" style="border-bottom: none;">
      <button class="btn btn-primary" id="overpoweredShowForm"
        style="display:none;color: var(--OPwhite);background-color: var(--OPdarkblue);border: none;">SUBMIT YOUR HIGH
        SCORE</button>
    </div>
    <!-- <h3 style="margin-top:1rem;">Power Banks</h3> -->
    <div class="row" style="border-bottom:none;">
      <div id="treasureCore" class="col-4">
        <!-- <div id="treasure3">
          <p class="dicierDark">ANY_ON_D20</p>
        </div> -->
        <div id="treasure2">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="treasure1">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="treasure0">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
      </div>
      <div id="foeCore" class="col-4">
        <!-- <div id="foe3">
          <p class="dicierDark">ANY_ON_D20</p>
        </div> -->
        <div id="foe2">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="foe1">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="foe0">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
      </div>
      <div id="obstacleCore" class="col-4">
        <!-- <div id="obstacle3">
          <p class="dicierDark">ANY_ON_D20</p>
        </div> -->
        <div id="obstacle2">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="obstacle1">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
        <div id="obstacle0">
          <p class="dicierDark">ANY_ON_D20</p>
        </div>
      </div>
    </div>
    <button class="spendOverpower" id="spendDice" style="text-align:center" onclick="spendSelectedDice()">SPEND 40 POWER</button>
    <button class="spendOverpower" id="undoButton" style="text-align:center" onclick="loadUndo()">UNDO LAST ACTION</button>
          <button class="spendOverpower" style="color: var(--OPlightblue);" onclick="toggleCRT()">TOGGLE VISUAL
      EFFECTS</button>
  </div>
  <div id="spendOverpower" class="col-xl col-12 crtCard crt" style="display: block;">
    <button class="spendOverpower" id="dataRush" onclick="scanSomething()" > DATA RUSH <span class="rushBars">▱▱▱▱▱▱</span></button>
    <button class="spendOverpower" id="enterArea" onclick="enterArea()" > NEW AREA</button>
    <h3>Spend Overpower</h3>
    <button class="spendOverpower" id="rerollButton" onclick="rerollDice()" disabled> 5 : REROLL DICE</button>
    <button class="spendOverpower" id="gainDiceButton" onclick="gainAllDice()" disabled> 30 : GAIN d4 d6 d8 d10 d12
      d20</button>
    <button class="spendOverpower" id="teleportButton" onclick="spendTeleport()" disabled> 50 : TELEPORT TO ANY
      AREA</button>
    <button class="spendOverpower" id="endButton" onclick="endAdventure()"><span style="color:#ff2e2e;">END</span> YOUR
      ADVENTURE<br> WITH A FINAL SCORE OF <span id="currentScore">50</span></button>
  </div>
    <div id="overCard" class="col-xl col-12 crtCard crt">
        <h3 id="botName">ERROR.8</h3>
        <ul id="botGlitches"></ul>
        <img id="smallBotImg">
    </div>
</div>

<div style="justify-content: center;" class="wideGrid crt row">
  <h3 class="col-12">Random Roller</h3>
  <div class="col-lg-3 col-5 row"
    style="border-right: 1px solid var(--OPwhite);align-content: flex-start;margin-bottom:1rem;">
    <button onclick="randomRoller(4)" class="col-6 dRoller dicierHeavy">4_ON_D4</button>
    <button onclick="randomRoller(6)" class="col-6 dRoller dicierHeavy">6_ON_D6</button>
    <button onclick="randomRoller(8)" class="col-6 dRoller dicierHeavy">8_ON_D8</button>
    <button onclick="randomRoller(10)" class="col-6 dRoller dicierHeavy">10_ON_D10</button>
    <button onclick="randomRoller(12)" class="col-6 dRoller dicierHeavy">12_ON_D12</button>
    <button onclick="randomRoller(20)" class="col-6 dRoller dicierHeavy">20_ON_D20</button>
  </div>
  <div id="rollerLog" class="col-lg-8 col-6"></div>
</div>

<div style="justify-content: center;" class="wideGrid crt row">
  <h3 class="col-12">Adventure Log</h3>
  <p class="col-12">THIS LOG WILL NOT BE SAVED. PRESERVE WITH CARE.</p>
  <ul class="col-12" id="adventureLog"></ul>
</div>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>
  body {
    background-color: #313131;
    color: #E5DED8;
  }

  hy-push-state, hy-drawer {
  overflow: clip;
  display: contents;
  }

  .content {
    padding: 1rem;
  }

  #_sidebar {
    display:none;
  }

  .nav-btn-bar {
    display:none;
  }

  .page {
    margin-bottom: 0rem;
  }

  footer {
    display:none;
  }

  h1 {
    display:none;
  }
</style>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/overpowered_beta.js" language="javascript" type="text/javascript"></script>
