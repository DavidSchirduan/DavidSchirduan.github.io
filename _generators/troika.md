---
date: 2020-12-01
layout: full-page
title: Troika Generator & Tracker
permalink: troikagenerator
published: true
hide_description: true
image: /images/troika.png
description: >
  A mobile-friendly Character Generator and Turn Tracker for the Troika! RPG.
---

Use the buttons below to generate characters for the Troika! roleplaying game. The turn tracker lets you manage Troika's weird turn system. You can view [all **393** backgrounds here](/assets/generator_resources/troika.json).

<details>
  <summary>Add your own Backgrounds to the Generator</summary>
  <p>If you email me your backgrounds I may not be able to add them to the generator. My time is limited, unfortunately, and y'all have a LOT of backgrounds!</p>
  <p><strong>Follow the steps below to ensure your backgrounds are added in.</strong></p>
  <ol>
  <li>Login to your <a href="https://github.com/">github.com</a> account.</li>
  <li>Navigate to the <a href="https://github.com/DavidSchirduan/technicalgrimoire">technicalgrimoire</a> repository.</li>
  <li>Click that little fork button in the top right.</li>
  <li>Navigate to assets/generator_resources/troika.json.</li>
  <li>Edit the file (little pencil on the top right of the file).</li>
  <li>Scroll to the bottom of the file, add as many backgrounds as you like. Use the same formatting as the others.</li>
  <li>Click "Commit Changes" on the bottom.</li>
  <li>Click the "Code" tab along the top left.</li>
  <li>Next to "This branch is 1 commit ahead of DavidSchirduan:netlify" click the "contribute" button and then click "open pull request".</li>
  <li>Click "Create Pull Request". Click it again in the bottom right.</li>
  <li>You're done! I'll review your background and add it to the generator. Thanks!</li>
  </ol>
</details>

## Character Generator

<button class="troika-button" id="generateCharButton" onclick="tr_generate('chaos')">Generate Character</button>
<button class="troika-button troika-core" onclick="tr_generate('core')">Rulebook Only</button>
<button class="troika-button troika-academy" onclick="tr_generate('bones')">Bones Deep</button>

<div class="troikaCharCard" id="charCard" style="display:none;">
  <p id="saveCharacter" style="text-align:center;"></p>
  <div class="row">
    <div class="col-md-6 col-12">
      <h2 style="margin-top: 10px;" id="bgName">John the Monster</h2>
      <p id="bgSrc" style="font-style:italic"></p>
    </div>
    <div class="col-md-6 col-12">
      <div class="row" style="justify-content:space-evenly;">
        <div class="troika-stat">
          <h3 id="stam">18</h3>
          <h2>Stamina</h2>
        </div>
        <div class="troika-stat">
          <h3 id="luck">13</h3>
          <h2>Luck</h2>
        </div>
        <div class="troika-stat">
          <h3 id="skill">26</h3>
          <h2>Skill</h2>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h3>Description</h3>
      <p id="descr"></p>
    </div>
    <div id="possessions" class="col-xl col-md-6 col-12"></div>
    <div id="skills" class="col-xl col-md-6 col-12"></div>
    <div id="special" class="col-xl col-12"></div>
  </div>
</div>


<hr>

<h2 id="turnTrackerh2">Turn Tracker</h2>

<div class="col tightSpacing buttonWrapper" style="align-items: initial;">
<button id="showTracker" class="troika-button" onclick="tr_showTracker()">Turn Tracker</button>
</div>

<div id="turnCard" style="display:none;">
  <div class="row">
    <div class="col-md-5 col-12">
      <div id="troikacardContainer" style="padding:unset;" class="col tightSpacing buttonWrapper">
        <div id="troikacard" style="width:225px;height:315px;">
          <div id="troikacardsides">
            <div id="troikacardfront">
            </div>
            <div id="troikacardback">
              <h3 id="backText">Back</h3>
              <button id="delayButton" class="troika-grey-button" onclick="tr_delayTurn()" style="display:none;min-width:0px;">Delay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div id="spinners" style="text-align:center;">
        <h3 class="tightSpacing">Player Characters</h3>
        <button class="troika-button" onclick="addPlayer()">Add Player</button>
        <div class="row" id="playerNames"></div>
        <p><i>Clear names to remove them.</i></p>
        <h3 class="tightSpacing">Total Enemy Initiative</h3>
        <div class="number-input">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
          <input class="quantity pcboxes" min="0" name="quantity" value="10" type="number" max="99" id="turnEnemy">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
        </div>
        <h3 class="tightSpacing">Henchlings</h3>
        <div class="number-input">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
          <input class="quantity pcboxes" min="0" name="quantity" value="0" type="number" max="99" id="turnHench">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
        </div>
        <div class="col tightSpacing buttonWrapper"><button id="startRoundbtn" class="troika-button" onclick="tr_startRound()">Start Round</button></div>
      </div>
      <div class="row" id="turnInfo" style="display:none;">
        <div class="col tightSpacing buttonWrapper"><button id="nextTurnbtn" class="troika-button" onclick="tr_nextTurn()" style="display:none;">Next Turn</button></div>
        <div class="col-12" id="tokenList">
        </div>
        <h3 class="tightSpacing">Turn Log</h3>
        <div class="col-12" id="turnList" style="margin:unset;overflow-y:scroll;height:300px;"></div>
        <div class="col-12 tightSpacing buttonWrapper"><button id="newRoundbtn" class="troika-grey-button" onclick="tr_newRound()">Start New Round</button></div>
      </div>
    </div>
  </div>
</div>

<hr>

**Thanks to:**

 - [Luis Alvarez](https://www.luislikesdesign.com/) for the beautiful card art. All rights belong to Luis.
 - Andrei Gheorghiu for the excellent [number spinner code](https://stackoverflow.com/a/45396364/2611856).
 - Uyuxo for collecting the list.
 - Daniel Sell for making Troika such an incredible game.
 - All the creatives who contributed their backgrounds to this generator. You're all amazing!

![Troika-logo.png](/images/Troika-logo.png){: .leftSmallImg}

_This generator is an independent production by Technical Grimoire and is not affiliated with the Melsonian Arts Council. All backgrounds were added with the explicit permission of their respective creators, and those creators retain sole rights to their creations._

<style>
  hy-push-state, hy-drawer {
  overflow: clip;
  display: contents;
  }

  @media print {
    #charCard {
        background-color: white;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 15px;
    }
    #turnTrackerh2 {
      display:none;
    }
    #showTracker {
      display:none;
    }

    a {
      text-decoration: none;
    }
}
</style>

<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/troika.js" charset="utf-8"></script>