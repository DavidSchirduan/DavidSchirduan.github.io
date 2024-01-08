---
date: 2014-11-07
layout: project
title: RIPE
caption: Playtesting
screenshot:
  src: /images/Ripe-teaser.png
image: /images/Ripe-teaser.png
hide_description: true
permalink: ripe
featured: false
redirect_from:
  - "/abide"
---

RIPE is a roleplaying game about Elder adventurers defending their home against horrible monsters from space.

[Join the newsletter for updates](https://tinyletter.com/technicalgrimoire/subscribe)!

  <div class="shoppingColumn">
    <a class="btn shoppingButton" href="/files/RIPEPlaytest.pdf"><h3>Download Playtest PDF</h3></a>
    <hr>
    <input class="ripetextbox" type="text" id="enterElderName" placeholder="Enter an Elder's Name">
    <a class="btn shoppingButton" onclick="return ripe_generate();"><h3>Summon Harvester</h3></a>
  </div>

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

**You are an Elder.** You’ve done a little of everything, mastered many skills, and have survived hundreds of trials and dangers. You’re not a young fool who bets on raw strength or blind luck. Rather, you rely on your teammates, experience, and careful planning to achieve your goals.

**Your Harvester is Coming.** Harvesters descend from the sky in a rainbow trail of light and smoke. They make landfall with an earth-shaking crash and emerge from the smoking crater with one goal: Capture their target.

**You Can’t do This Alone.** Outcast by society and hunted by Harvesters, Elders tend to stick together. Instead of taking turns, RIPE has a heavy focus on coordinated teamwork. The players succeed or fail together.

## Harvester Generator
Enter your Elder's name to create a specialized Harvester just for them.

<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/ripe.js" language="javascript" type="text/javascript"></script>
