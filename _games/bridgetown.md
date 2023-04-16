---
date: 2023-01-13
layout: project
title: BridgeTown
caption: $30 Adventure
screenshot:
  src: /images/bridgetown/BridgeTownteaser.png
image: /images/bridgetown/BridgeTownteaser.png
hide_description: true
permalink: bridgetown
featured: false
---

Bridgetown is a pastoral liminal RPG setting of a never-ending, ever-crumbling bridge. Built for Troika, usable anywhere. *100 pages, black and white interior, A5 digest hardcover.*

> “We took breaks only to stare at Hieronymus Bosch paintings, eat goat cheese, and listen to hurdy gurdy music.” - the writers of Bridgetown.

<div class="shopping-buttons">
<a target="_blank" href="https://www.kickstarter.com/projects/technicalgrimoire/bridgetown-a-pastoral-liminal-rpg-setting" class="btn btn-primary" style="background-color:#028858;color:white;">Back the Kickstarter</a>
<button style="background-color:#D4CCCC;color:black;" class="btn btn-primary" onClick="document.getElementById('spanImage').scrollIntoView();">Generate a Span</button>
</div>

<div class="shopping-buttons">
</div>

<div id="images" class="shopping-images">
<p style="margin: 0px;padding:0px;text-align:center;font-style:italic;">Click to view.<br>Designs are not final!</p>
<img src="/images/bridgetown/hardcoverMockup.png" alt="hardcoverMockup.png">
<img src="/images/bridgetown/BT_marketing_2.png" alt="BT_marketing_2.png">
<img src="/images/bridgetown/BT_marketing_3.png" alt="BT_marketing_3.png">
<img src="/images/bridgetown/BT_marketing_4.png" alt="BT_marketing_4.png">
<img src="/images/bridgetown/BT_marketing_5.png" alt="BT_marketing_5.png">
<img src="/images/bridgetown/BT_marketing_6.png" alt="BT_marketing_6.png">
<img src="/images/bridgetown/BT_marketing_7.png" alt="BT_marketing_7.png">
</div>

<h2 style="margin-top:1rem;">The Book Features:</h2>

- **12 Backgrounds**. Play as a Goat-folk pilgrim, bug-sized Coblin swarms, or a pile of haunted rocks.
- **12 locations**. Cramped cities, mossy spans, crumbling gaps.
- **8 Gatehouses**. These fortresses demand tolls, harass travelers, and hinder your journey.
- **Stone Soup** campaign starter adventure. Gain an overpowered magic item and experiment with dangerous recipes as you explore the Bridge for rare ingredients.
- **Provisions-based economy**. Food is money! Water is gold! You are poor and starving!

## What People are Saying
- “Even though the Bridge is technically bounded, all the little bits sparked ever-branching growth in my mind.” - Ben
- “I felt like my character was really driven and highly motivated to explore every nook and cranny.” - Neal
- “I need to know more! Each location felt so engaging and lively.” - Jeremy

## What Makes Bridgetown Different?

**Pastoral Crumbling Cities**. Tight spaces, towering buildings, hazardous walkways, and lively characters fill the Bridge near to bursting. Land–and everything that goes in or on it–is at a premium on the Bridge. Rooftop gardens eke out food, protected groves offer precious timber, and if you want the luxury of metal you have to rip up the bones of the Bridge itself to get some. The law of the land is barter and trade, and folk sell things dearly.

**Infinite, Liminal, and Narrow**. The Bridge is a narrow band of solid ground straddling the gap between the infinite Sky above and the murky depths of the Under. It is wide enough for about 50 average-sized humans to stand shoulder-to-shoulder across it (the width of a modern 4-lane highway). You could walk it for a hundred years, and the only end you’d find is your own.

**A Bridge To Elsewhere?** Every now and then, something especially peculiar happens. The Under spits up something real, or things drop out of the empty Sky. Rarer still, sometimes those things are people. These strange out-of-towners claim they’re from other places; other worlds beyond the Bridge. Maybe you can find a way to travel between these various spheres?

<hr class="endShoppingImages">

## Span Generator

<button style="background-color:#D4CCCC;color:black;" class="btn btn-primary" onClick="generateSpan()">Generate a New Span</button>

<div id=spanImage></div>

<div class="shopping-buttons">
<button id="loc1Button" class="leftburied-button" type="button" onclick="showLocation(0)">Location 1</button>
<button id="loc2Button" class="leftburied-button" type="button" onclick="showLocation(1)">Location 2</button>
<button id="loc3Button" class="leftburied-button" type="button" onclick="showLocation(2)">Location 3</button>
</div>

<div id="bridgetownDiv" style="display:none;">

  <h2 id="locName">Location 1</h2>

  <p id="locQuote">What a crazy thing!</p>
  <p id="locQuoter">Someone weird</p>
  <p id="locDescription">This place is wild! Filled with stuff for sure.</p>

  <h3 id="locHeader2">Mr. Person</h3>
  <div id="locSection2">They have a face for sure.</div>

  <h3 id="locHeader3">Taco Tuesday</h3>
  <div id="locSection3">Yummy!</div>

  <h3 id="weather">It's Hot</h3>
  <p id="weatherDescription">Far too hot.</p>
  
  <div class="shopping-buttons">
<button class="leftburied-button" type="button" onclick="changeWeather()">Change Weather</button>
</div>

</div>

<link href="/assets/viewer.css" rel="stylesheet">
<script>
window.addEventListener('DOMContentLoaded', function () {
  var galley = document.getElementById('images');
  var viewer = new Viewer(galley,{navbar: 0, title:0, toolbar:0});
});
</script>
<script async src="/assets/generator_resources/bridgetown.js" language="javascript" type="text/javascript"></script>
