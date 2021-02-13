---
date: 2019-11-01
layout: project
title: Wyrd Hunt Generator
permalink: wyrdhuntgenerator
published: true
image: /images/posts/wyrd_generator.png
description: >
  A mobile-friendly Hunt generator for the Wyrd and Wild.
---

Into the Wyrd and Wild is a book for those seeking to incorporate a dark, grim forest into their game. You can [read my
review here](/david/2019/07/WyrdWild).

Click the buttons below to generate a map and a starting Hunt.

<div id="mainButtons" class="row centerButtons">
  <div class="col-md-6 col-12">
    <button id="downloadBTN" class="btn wyrd-btn" onclick="wy_showMap()">
      <h3 id="locBtn">Generate Map</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="wy_nextEncounter()">
      <h3>Random Encounter</h3>
    </button>
  </div>
</div>

<div id="locationCard" class="container generatorCard" style="margin-bottom: 30px;display:none;">
  <p id="huntText"></p>
  <div id="mapIMG"></div>
  <div id="mapNav" class="row centerButtons" style="margin-top:40px;margin-left:0px;">
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc1"><h3 class="tightSpacing">1</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc2"><h3 class="tightSpacing">2</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc3"><h3 class="tightSpacing">3</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc4"><h3 class="tightSpacing">4</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc5"><h3 class="tightSpacing">5</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc6"><h3 class="tightSpacing">6</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc7"><h3 class="tightSpacing">7</h3></a>
</div>
  <div class="col" style="padding-right: 5px;padding-left: 5px;">
<a class="btn wyrd-btn" href="#loc8"><h3 class="tightSpacing">8</h3></a>
</div>
</div>
  <p id="loc1"></p>
  <p id="loc2"></p>
  <p id="loc3"></p>
  <p id="loc4"></p>
  <p id="loc5"></p>
  <p id="loc6"></p>
  <p id="loc7"></p>
  <p id="loc8"></p>
</div>

 Refresh the page to get a new map. You can connect multiple maps together for a larger adventure.

<div id="encounterCard" class="container generatorCard tightSpacing" style="margin-bottom: 30px;display:none;">
  Click the buttons above to generate locations and encounters
</div>

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="wy_searchBody()">
      <h3>Search Body</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="wy_spell()">
      <h3>Spell</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="wy_artifact()">
      <h3>Artifact</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="wy_mutation()">
      <h3>Wild Mutation</h3>
    </button>
  </div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://twitter.com/CharlieFergaves">Charles Avery</a> for making such a terrifying world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script async src="/assets/generator_resources/wyrdhunt.js" language="javascript" type="text/javascript"></script>