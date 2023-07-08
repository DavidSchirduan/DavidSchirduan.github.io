---
date: 2023-05-04
layout: full-page
title: Overpowered Dice App
permalink: overpowered-app
published: true
hide_description: true
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
description: >
  A mobile-friendly dice app for Overpowered.
---

A dice app for the [Overpowered Solo Roleplaying Game](/overpowered). Bookmark this page to save your session.

<div class="row" style="justify-content: center;">
<div id="overCard" class="col-xl col-12 crt">
    <h3 style="width:100%;">Overpower: <span id="tributeScore">30</span></h3>
    <!-- <h3 style="margin-top:1rem;">Power Banks</h3> -->
    <div class="row" style="border-bottom:none;">
      <div id="treasureCore" class="col-4">
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
      </div>
      <div id="foeCore" class="col-4">
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
      </div>
      <div id="obstacleCore" class="col-4">
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
      </div>
      <button class="spendOverpower" style="display:none;" id="spendDice" onclick="spendSelectedDice()">SPEND 40 POWER</button>
      <button class="spendOverpower" style="display:none;text-align:center" id="undoButton" onclick="loadUndo()">UNDO LAST ACTION</button>
    </div>
  </div>
  <div id="gainCard" class="col-xl col-12 crt" style="display: block;">
      <h3>Achieve Goals, Gain Dice</h3>
    <div class="row" style="margin-top:0rem;"> 
    <button onclick="gainDie(4)" class="dwhite col-4 dicierHeavy">4_ON_D4<p>Valuable Type</p></button>
    <button onclick="gainDie(6)" class="dwhite col-4 dicierHeavy">6_ON_D6<p>Enter Area</p></button> 
    <button onclick="gainDie(8)" class="dwhite col-4 dicierHeavy">8_ON_D8<p>Unique Feature</p></button> 
    <button onclick="gainDie(20)" class="dwhite col-4 dicierHeavy">20_ON_D20<p>Unique Creature</p></button> 
    <button onclick="gainDie(12)" class="dwhite col-4 dicierHeavy">12_ON_D12<p>Complete Area</p></button> 
    <button onclick="gainDie(10)" class="dwhite col-4 dicierHeavy">10_ON_D10<p>Powerful Object</p></button>
    </div>
  </div>
  <div id="spendOverpower" class="col-xl col-12 crt" style="display: block;">
    <h3>Spend Overpower</h3>
    <button class="spendOverpower" id="rerollButton" onclick="rerollDice()" disabled> 5 : REROLL DICE</button>
    <!-- <button class="spendOverpower" id="boostButton" onclick="powerBoost();"> 15 : +2 ALL DICE</button> -->
    <button class="spendOverpower" id="overcomeAny" onclick="overcomeAny()" disabled> 20 : OVERCOME A DNGR/OBSL</button>
    <button class="spendOverpower" id="gainDiceButton" onclick="gainAllDice()" disabled> 40 : GAIN d4 d6 d8 d10 d12 d20</button>
    <button class="spendOverpower" id="teleportButton" onclick="spendTeleport()" disabled> 50 :  TELEPORT TO ANY AREA</button>
    <button class="spendOverpower" id="convertButton" onclick="convertOverpower()" disabled> 20 : <span style="color:#ff2e2e;">END</span> YOUR ADVENTURE</button>
  </div>  
</div>

<div id="botDetails" style="justify-content: center;" class="crt row">
  <div id="bigImgContainer" class="col-12">
    <h3 id="botName">ERROR.8</h3>
  </div>
  <div class="col-md-8 col-12" id="botDevices">
    <ul id="botGlitches"></ul>
    <p id="botDescription"></p>
    <table id="statTable"></table>
  </div>
    <div class="col-md-4 col-12"
    style="display: flex;justify-content: center;max-width:500px;">
    <img id="smallBotImg">
  </div>
  <p class="col-12" style="border-top:3px solid #EFE7E0;margin:0px;"><a class="d8 textButton"
      onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a> ❖ <a class="d12 textButton" href="/overpowered-app"
      style="text-decoration: none;white-space: nowrap;">RESTART WITH RANDOM BOT</a></p>
  <p style="width:100%;font-style: italic;color: #EFE7E0;margin:0px;"><span id="diceGained">42</span> Dice Gained, <span id="diceSpent">18</span> Spent, <span id="diceConverted">18</span> Converted</p>
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
<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
