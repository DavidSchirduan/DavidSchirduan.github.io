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

Use the buttons below to generate characters for the Troika! roleplaying game. The turn tracker lets you manage Troika's weird turn system. [Buy Troika!](https://melsonian-arts-council.itch.io/) Download a shiny [rules reference](/files/troikaRef.pdf).

You can view [all **338** backgrounds here](/assets/generator_resources/troika.json).

<div class="row">
  <div class="col tightSpacing" style="text-align:center"><button class="btn troikabtn btn-lg" style="padding:none;" onclick="tr_generate('chaos')">Generate Character</button>
  <button class="btn wyrd-btn" style="width:225px;padding:initial;" onclick="tr_generate('core')">Core Only</button>
  </div>
  <div class="col tightSpacing buttonWrapper" style="align-items: initial;"><button class="btn troikabtn btn-lg" onclick="tr_showTracker()">Turn Tracker</button></div>
</div>

<div class="container generatorCard" id="charCard" style="display:none;">
  <p id="saveCharacter" style="text-align:center;"></p>
  <h2 style="margin-top: 10px;" id="bgName">John the Monster</h2>
  <p id="bgSrc"></p>
  <hr class="tightSpacing">
  <div class="row">
    <div class="col-lg-6 col-12" id="descr">
    </div>
    <div class="col-lg-6 col-12" id="poss">
    </div>
  </div>
</div>

<div class="container generatorCard" id="turnCard" style="display:none;">
  <div class="row">
    <div class="col-lg-6 col-12">
    <div class="col tightSpacing buttonWrapper">
      <div id="troikacard">
        <div id="troikacardsides">
          <div id="troikacardfront">
          </div>
          <div id="troikacardback">
            <p id="backText" class="tightSpacing" style="padding-top: 90%;font-size:.6em">Back</p>
          </div>
        </div>
      </div>
      </div>
      <div class="col tightSpacing buttonWrapper"><button id="nextTurnbtn" class="btn troikabtn btn-lg" onclick="tr_nextTurn()" style="display:none;">Next Turn</button></div>
    </div>
    <div class="col-lg-6 col-12">
      <div id="spinners" style="text-align:center;">
        <h2 class="tightSpacing">Player Characters</h2>
        <div class="number-input">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
          <input class="quantity" min="0" name="quantity" value="4" type="number" max="20" id="turnPC">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
        </div>
        <h2 class="tightSpacing">Henchlings</h2>
        <div class="number-input">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
          <input class="quantity" min="0" name="quantity" value="0" type="number" max="99" id="turnHench">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
        </div>
        <h2 class="tightSpacing">Total Enemy Initiative</h2>
        <div class="number-input">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
          <input class="quantity" min="0" name="quantity" value="10" type="number" max="99" id="turnEnemy">
          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
        </div>
      </div>
      <div id="turnInfo" style="margin:20px;display:none;">
        <div id="tokenList">
            <h3 class="tightSpacing">Set the numbers above then click "New Round".</h3>
        </div>
        <h3 class="tightSpacing">Turn Log:<br></h3>
        <div id="turnList"></div>
      </div>
      <div class="col tightSpacing buttonWrapper"><button id="newRoundbtn" class="btn troikabtn btn-lg" onclick="tr_newRound()">Start Round</button></div>
    </div>
  </div>
</div>

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
