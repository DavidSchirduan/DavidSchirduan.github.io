---
date: 2023-04-15
layout: project
title: Bridgetown Span Generator
permalink: bridgetown-span
published: false
hide_description: true
image: /images/CessMaps/cover.png
description: >
  A mobile-friendly Bridgetown generator.
---

A mobile-friendly Bridgetown generator. Use the buttons to generate a span of the eternal Bridge.

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
  <p><a onclick="changeWeather()">Click here to change the weather.</a></p>
</p>

</div>


<script async src="/assets/generator_resources/bridgetown.js" language="javascript" type="text/javascript"></script>