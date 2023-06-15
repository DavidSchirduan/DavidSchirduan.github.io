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

<div class="row" style="align-items: flex-start;justify-content: center;">
<div id="overCard" class="col-xl col-12 crt">
    <h3 style="border-bottom: 3px solid grey;width:100%;">Overpower: <span id="tributeScore">30</span></h3>
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
      <button style="display:none;" id="spendDice" onclick="spendSelectedDice()">SPEND <span id="selectedPowerTotal" style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">40</span> POWER</button>
    </div>
  </div>
  <div id="gainCard" class="col-xl col-12 crt row">
      <h3>Achieve Goals, Gain Dice</h3>
    <div class="row"> 
    <button onclick="gainDie(4)" class="dwhite col-4 dicierHeavy">4_ON_D4<p>Handful Treasure</p></button>
    <button onclick="gainDie(6)" class="dwhite col-4 dicierHeavy">6_ON_D6<p>Enter Area</p></button> 
    <button onclick="gainDie(8)" class="dwhite col-4 dicierHeavy">8_ON_D8<p>Unique Feature</p></button> 
    <button onclick="gainDie(20)" class="dwhite col-4 dicierHeavy">20_ON_D20<p>Powerful Object</p></button> 
    <button onclick="gainDie(12)" class="dwhite col-4 dicierHeavy">12_ON_D12<p>Complete Area</p></button> 
    <button onclick="gainDie(10)" class="dwhite col-4 dicierHeavy">10_ON_D10<p>Overcome Danger</p></button>
    </div>
  </div>
  <div id="spendOverpower" class="col-xl col-12 crt">
    <h3>Spend Overpower</h3>
    <button id="rerollButton" onclick="rerollDice()"> 5 : <strong>REROLL DICE</strong></button>
    <button id="boostButton" onclick="powerBoost();"> 15 : <strong>+2 ALL DICE</strong></button>
    <button id="convertButton" onclick="convertOverpower();"> 30 : <strong>CONVERT TO OVERPOWER</strong></button>
    <button id="gainDiceButton" onclick="gainAllDice();"> 40 : <strong>GAIN d4 d6 d8 d10 d12 d20</strong></button>
    <button id="teleportButton" onclick="spendTeleport();"> 50 : <strong> TELEPORT TO ANY AREA</strong></button>
  </div>  
  <div id="botDetails" class="col-xl col-12 crt row">
    <h3 class="col-12" id="botName"  style="letter-spacing: .5rem;width:100%;border-bottom: 3px solid grey;">ERROR.8</h3>
    <div id="osrImgContainer" class="col-4"><img id="osrImg" src="/images/overpoweredExamples/OSR4.gif"></div>
    <ul class="col-8">
      <li id="osrWeapon"><span class="itemName" style="color: rgb(223, 164, 252);">Stun Prod:</span> Short range
        electrical arc. <span class="noWrap">HP ❖ CON ❖ MAGIC DEF</span></li>
      <li id="osrDefense"><span class="itemName" style="color: rgb(206, 252, 164);">Cloak:</span> Avoid visual
        detection. <span class="noWrap">PER ❖ DEX ❖ WIS</span></li>
      <li id="osrTool"><span class="itemName" style="color: rgb(252, 239, 164);">Drill:</span> Loudly tunnel through
        obstacles. <span class="noWrap">DC ❖ HEALTH ❖ ARMOR</span></li>
      <li id="osrTalk"><span class="itemName" style="color: rgb(176, 164, 252);">Pheromones:</span> Induce positive
        emotions. <span class="noWrap">CHA ❖ CON ❖ BREATH</span></li>
      <li id="osrMove"><span class="itemName" style="color: rgb(252, 164, 164);">Hover Jets:</span> Free 3D
        movement.<br> SPEED <span class="statBars">▰▱▱▱▱<br></span> &nbsp; JUMP <span class="statBars">▰▰▰▱▱<br></span>
        CLIMB <span class="statBars">▰▰▰▱▱</span></li>
      <li><span id="osrQuirk1">Doesn't like Cheese</span></li>
      <li><span id="osrQuirk2">Loves Cheese</span></li>
    </ul>
    <p class="col-12" style="border-top:3px solid grey"><a class="d4 textButton" onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a> ❖ <a class="d12 textButton" href="/overpowered-app" style="text-decoration: none;">RESTART WITH RANDOM BOT</a></p>
    <p style="width:100%;font-style: italic;color: #abb6c2;"><span id="diceGained">42</span> Dice Gained, <span id="diceSpent">18</span> Spent, <span id="diceConverted">18</span> Converted</p>
  </div>
</div>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
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
