---
date: 2019-04-01
layout: project
title: RIPE
caption: >
  Elder Adventures fighting against the Harvest
  <br>
  RPG Rulebook
  <br>
  Free (Under Development)
screenshot:
  src: images/Ripe-teaser.png
image: images/Ripe-teaser.png
hide_description: true
permalink: ripe
featured: false
---

<div class="shoppingCard">
  <div class="shoppingColumn">
    <p>An RPG of Elder Adventurers fighting against the Harvest. <strong>When you turn 70...</strong></p>
    <p>Your Harvester emerges from the skies to take you away. If you manage to kill your Harvester it comes back next year even stronger than before. You can’t do this alone.</p>
    <p><i>This game is in Beta.</i></p>
  </div>
  <div class="shoppingColumn">
    <a class="btn shoppingButton" href="/files/Ripe_Beta60.pdf"><h3>Download PDF</h3></a>
    <hr>
    <input class="ripetextbox" type="text" id="enterElderName" placeholder="Enter an Elder's Name">
    <a class="btn shoppingButton" onclick="return ripe_generate();"><h3>Summon Harvester</h3></a>
  </div>
</div>

## Harvester Database

<div class="container generatorCard" id="harvesterCard" style="display:none;">
<div class="row centerButtons">
<div class="col-md-5 col-12">
    <h3 class="tightSpacing" id="genElderName"></h3>
  </div>
  <div class="col-md-5 col-12">
    <button class="btn wyrd-btn" id="age1" onclick="agePlus()" style="display:none;">Age+1</button>
  </div>
</div>
<div id="harvesterDesc"></div>
</div>

<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/ripe.js" language="javascript" type="text/javascript"></script>