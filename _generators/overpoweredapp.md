---
date: 2010-01-13
layout: full-page
title: Overpowered App (beta)
permalink: overpowered-app
published: true
hide_description: true
image: /images/overpoweredteaser.png
description: >
  A mobile-friendly dice app for the Overpowered Solo RPG
---

<div class="over-card crt">
  <div id="overpool" class="row" style="width:100%; align-items:end;text-align:center;">
      <!-- Dice Pools -->
    <div class="d4 col-2">
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
    </div>
    <div class="d6 col-2">
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
    </div>
    <div class="d8 col-2">
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
    </div>
    <div class="d10 col-2">
      <button class="dicierDark">0_ON_D10</button>
      <button class="dicierDark">0_ON_D10</button>
      <button class="dicierDark">0_ON_D10</button>
      <button class="dicierDark">0_ON_D10</button>
    </div>
    <div class="d12 col-2">
      <button class="dicierDark">0_ON_D12</button>
      <button class="dicierDark">0_ON_D12</button>
      <button class="dicierDark">0_ON_D12</button>
      <button class="dicierDark">0_ON_D12</button>
    </div>
    <div class="d20 col-2">
      <button class="dicierDark">0_ON_D20</button>
      <button class="dicierDark">0_ON_D20</button>
      <button class="dicierDark">0_ON_D20</button>
      <button class="dicierDark">0_ON_D20</button>
    </div>
  </div>
  <!-- Add Dice Buttons -->
  <div class="row" style="margin-top:1vw; border-top: 3px solid white; width:100%; align-items:end;text-align:center;">
    <div class="dwhite col-2">
      <button onclick="gainD4()" class="dicierHeavy">ANY_ON_D4</button>
      <p>TREASURE</p>
    </div>
    <div class="dwhite col-2">
      <button onclick="gainD6()" class="dicierHeavy">ANY_ON_D6</button>
      <p>WEAK FOE</p>
    </div>
    <div class="dwhite col-2">
      <button onclick="gainD8()" class="dicierHeavy">ANY_ON_D8</button>
      <p>OBSTACLE</p>
    </div>
    <div class="dwhite col-2">
      <button onclick="gainD10()" class="dicierHeavy">ANY_ON_D10</button>
      <p>AREA CLEAR</p>
    </div>
    <div class="dwhite col-2">
      <button onclick="gainD12()" class="dicierHeavy">ANY_ON_D12</button>
      <p>STRONG FOE</p>
    </div>
    <div class="dwhite col-2">
      <button onclick="gainD20()" class="dicierHeavy">ANY_ON_D20</button>
      <p>MAGIC ITEM</p>
    </div>
  </div>
  <div class="row" style="width:100%; justify-content:space-around;text-align:center;">
    <div class="col-5">
      <button onclick="rerollDice()" id="rerollButton" class="over-button" type="button">
        Rerolls: [X] [X] [X]
      </button>
    </div>
    <div class="col-5">
      <button id="tributeButton" class="over-button" type="button">
        <span style="color:red;">End Game</span><br>Tribute: 107
      </button>
    </div>
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

</style>

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>

