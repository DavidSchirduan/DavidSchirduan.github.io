---
date: 2020-12-01
layout: project
title: Troika Generator & Tracker
permalink: troikagenerator
published: true
hide_description: true
image: /images/troika.png
description: >
  A mobile-friendly Character Generator and Turn Tracker for the Troika! RPG.
---

Use the buttons below to generate characters for the Troika! roleplaying game. The turn tracker lets you manage Troika's weird turn system. You can view [all **344** backgrounds here](/assets/generator_resources/troika.json).

## Character Generator

<button class="troika-button" id="generateCharButton" onclick="tr_generate('chaos')">Generate Character</button>
<button class="troika-button troika-core" onclick="tr_generate('core')">Rulebook Only</button>
<button class="troika-button troika-academy" onclick="tr_generate('academy')">Academies of the Arcane</button>

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
    <div class="col-md-6 col-12">
      <h3 class="tightSpacing">Advanced Skills & Spells</h3>
      <p>Add your Skill ( + <span id="skillpara" style="color:crimson;">5</span> ) to each of these:</p>
      <ul id="skills"></ul>
      <div id="special" style="display:none;"></div>
    </div>
    <div class="col-md-6 col-12">
      <h3>Possessions</h3>
      <p>Each item takes up one slot unless otherwise specified.</p>
      <ul id="possessions"></ul>
    </div>
  </div>
</div>


<hr>

## Turn Tracker

<div class="col tightSpacing buttonWrapper" style="align-items: initial;">
<button id="showTracker" class="troika-button" onclick="tr_showTracker()">Turn Tracker</button>
</div>

<div id="turnCard" style="display:none;">
  <div class="row">
    <div class="col-md-6 col-12">
      <div id="spinners" style="text-align:center;">
        <h3 class="tightSpacing">Player Characters</h3>
        <button class="troika-smallbtn" onclick="addPlayers()">Add More Players</button>
        <div class="row" id="playerNames"></div>
        <p><i>Delete names to remove them.</i></p>
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
      </div>
      <div class="col tightSpacing buttonWrapper"><button id="newRoundbtn" class="troika-button" onclick="tr_newRound()">Start Round</button></div>
      <div id="turnInfo" style="margin:20px;display:none;">
        <div id="tokenList">
          <h3 class="tightSpacing">Set the numbers above then click "New Round".</h3>
        </div>
        <h3 class="tightSpacing">Turn Log:<br></h3>
        <div id="turnList" style="margin:unset;overflow-y:scroll;height:200px;max-height:200px;"></div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="col tightSpacing buttonWrapper"><button id="nextTurnbtn" class="troika-button" onclick="tr_nextTurn()" style="display:none;">Next Turn</button></div>
      <div class="col tightSpacing buttonWrapper">
        <div id="troikacard">
          <div id="troikacardsides">
            <div id="troikacardfront">
            </div>
            <div id="troikacardback">
              <h3 id="backText">Back</h3>
            </div>
          </div>
        </div>
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

<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/troika.js" charset="utf-8"></script>