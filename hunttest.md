---
date: 2001-01-01
layout: full-page
title: Test Generator
permalink: fakeurl
published: true
---

<div class="stygian-card">
  <div class="stygian-text" id="stygian-complete">
    <div id="encounterContent"></div>
    <p id="huntText"></p>
    <div id="mapIMG"></div>
    <div id="encounterCard"></div>    
    <div id="levelContent">
    <p id="loc1"></p>
    <p id="loc2"></p>
    <p id="loc3"></p>
    <p id="loc4"></p>
    <p id="loc5"></p>
    <p id="loc6"></p>
    <p id="loc7"></p>
    <p id="loc8"></p>
    </div>
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
      <button id="deeperButton" class="stygian-button" type="button" onclick="beginHunt()">Begin Hunt</button>
      <button class="stygian-button" type="button" onclick="wy_nextEncounter()">Random Encounter</button>
      <button class="stygian-button" type="button">Random Discovery</button>
    </div>
    <hr class="stygian-hr-dark">
    <div>
      <h3 style="margin-top: -20px;">
        Locations
      </h3>
      <div id="logContent">
      <div class="logItem"><a href="#mapIMG"><p><span class="logWyrdLevel">M</span>View Map</p></a></div>
      <div class="logItem" id="locbutton1"></div>
      <div class="logItem" id="locbutton2"></div>
      <div class="logItem" id="locbutton3"></div>
      <div class="logItem" id="locbutton4"></div>
      <div class="logItem" id="locbutton5"></div>
      <div class="logItem" id="locbutton6"></div>
      <div class="logItem" id="locbutton7"></div>
      <div class="logItem" id="locbutton8"></div>
      <div class="logItem"><a href="#mapIMG"><p><span class="logWyrdLevel">M</span>View Map</p></a></div>
      </div>
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
  .stygian-text h3 {
  margin-top: 0px;
  }

 /* Necessary for the pdf download*/

  .stygian-text ul {
  list-style: none; /* Remove default bullets */
}

.stygian-text ul li::before {
  content: ">";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>

<script async src="/assets/generator_resources/test.js" language="javascript" type="text/javascript"></script>