---
date: 2019-04-01
layout: project
title: RIPE
caption: >
  Elder Adventures fighting against the Harvest
  <br>
  (Complete Game Rules)
screenshot:
  src: images/Ripe-teaser.png
image: images/Ripe-teaser.png
hide_description: true
permalink: ripe
featured: false
---

An RPG of Elder Adventures fighting against the Harvest.

### When you turn 70...

Your Harvester emerges from the skies to take you away. If you manage to kill your Harvester it comes back next year even stronger than before. You can’t do this alone. 

Luckily you have other Elders by your side supporting you and protecting you while you do the same for them.

*This game is in Beta. The rules can (and will) change over time. Please send any feedback to technicalgrimoire@gmail.com.*

<div class="row centerButtons">
 <div class="col-md-7 col-7">
    <button class="btn wyrd-btn" onclick="location.href='/files/Ripe_Beta46.pdf'" type="button">Download RIPE</button>
 </div>
</div>

## Harvester Generator (Under Development)
Every Elder has their own Harvester. Try a different name to get a different result.
<div class="row centerButtons">
<div class="col-md-5 col-12">
    <input class="ripetextbox" type="text" id="elderName" placeholder="Enter the Elder's Name">
  </div>
<div class="col-md-5 col-12">
    <button class="btn wyrd-btn" onclick="ripe_generate()">
      Generate
    </button>
  </div>
</div>

<div class="container generatorCard" id="harvesterCard" style="display:none;">
  <p id="harvesterDesc">A simple but well-crafted blade</p>
</div>

<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/ripe.js" language="javascript" type="text/javascript"></script>