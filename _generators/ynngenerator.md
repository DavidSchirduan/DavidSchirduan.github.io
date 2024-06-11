---
date: 2024-06-02
layout: full-page
title: Gardens of Ynn Generator
permalink: ynngenerator
published: true
hide_description: true
image: /images/ynngenerator.png
description: >
  A mobile-friendly generator for the Gardens of Ynn.
---

<div class="stygian-card">
  <div class="stygian-text" id="stygian-complete">
    <div id="encounterContent">
    </div>
    <div id="levelContent">
      <h2 style="margin-top: 10px;" id="roomName">Welcome</h2>
      <p>The Gardens of Ynn is an adventure designed for old school roleplaying games written by <a href="https://twitter.com/DyingStylishly">Emmy 'Cavegirl' Allen</a>.</p>
      <p>After you've bought a copy of the book, you can use the buttons to generate levels and events.</p>
      <p><a href="https://www.kickstarter.com/projects/soulmuppet/gardens-of-ynn">Get it here.</a></p>
      <hr class="styled-hr">
    <h2 style="margin-top: 10px;" >Finding the Entrance</h2>
    <p>In any garden in any place (any place where there is a garden - one could even escape Hell this way, if one could find a garden there) find a wall covered in ivy, vines, moss, or similar. Clear that vegetation away, and using chalk and charcoal draw a realistic door (with keyhole, hinges and doorknob) on the surface below. Write upon the door “Ynn, by way of [the current location]”.</p><p>
Leave, so the drawing is no longer visible, and on return the drawing will be replaced by a real door. When it is opened, the Gardens of Ynn will be on the other side. The doorway remains there for a full day, after which it fades away as if it never existed, leaving anybody still on the other side stranded.
</p><p>
Ynn is a perpendicular world. Compare the concept of parallel worlds: from any place in the real world, you can cross over to an equivalent in the parallel world. Any place has its parallel version, just shifted slightly. A perpendicular world, meanwhile, exists at right-angles to reality. Crossing over at a certain point, the further one travels into the perpendicular world, the less like reality it becomes.</p><p>
Of the dazzling variety of such worlds, Ynn is just one. It appears as a vast garden, now untended, overrun, and fallen into ruin. Once, this place was a realm of rarefied luxury, but its masters are long dead and the machinery that maintained it has fallen into disrepair.
</p>
    </div>
  </div>
  <div class="stygian-log">
    <div class="stygian-buttons">
        <button class="stygian-button" type="button" onclick="ynn_newEvent(true)"><span style="color:#a5a188;">Day</span> Event</button>
        <button class="stygian-button" type="button" onclick="ynn_newEvent(false)"><span style="color:#cc94a9;">Night</span> Event</button>
    </div>
    <hr class="styled-hr-dark">
    <div>
      <h2 style="margin-top: -20px;color:white;">Levels</h2>
      <p style="text-align:center;">Click a level to return.</p>
      <div id="logContent">
        <div class="logItem"><a onclick="ynn_goDeeper()" style="color:white"><p><span class="logLevel">▼</span><strong>Enter</strong> the<br>Gardens of Ynn</p></a></div>
      </div>
    </div>
      <hr class="styled-hr-dark">
      <p style="text-align:center;">Bookmark this page URL <br>to save this EXACT Garden.</p>
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
  h1 {
      color: #cc94a9;
  }
  h2 {
    color: #58306c;
  }
  .stygian-text h3 {
  margin-top: 0px;
  color: #ab3a70;
  margin-bottom: .5rem;

  }

/*light cc94a9
med ab3a70
dark 58306c
green #a5a188
yellow #e2ca8f*/
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

/* Stygian Generator */
.stygian-card {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  color: black;
}

.stygian-card .permalink {
  display: none;
}

.stygian-card a {
  color: black;
}

.stygian-log {
  background-color: #313131;
  color: #F5F5F5;
  padding: 0px 20px;
  font-size: 14px;
  flex: 0 0 300px;
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  top: 6rem;
}

.stygian-log p {
  text-align: left;
}

.stygian-text {
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 20px;
  font-size: 14px;
  min-width: 300px;
  flex: 1 1 400px;
  margin-bottom: 20px;
}

.logItem p {
  color: white;
  background-color: #58306c;
  padding: 5px;
  transition: all 0.2s;
  cursor: pointer;
  margin: 0px;
}

.logItem h3 {
  color: white;
  background-color: black;
  padding: 10px;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 0px;
  height: 100%;
}

.logLevel {
  font-size: 4em;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  float: left;
  font-weight: bold;
  line-height: .7em;
}

.logItem {
  padding: 5px;
  background-color: #58306c;
  border: 0.2em solid #F5F5F5;
}

.logItem p:hover {
  color: #000000;
  background-color: #F5F5F5;
}

.logItem h3:hover {
  color: #000000;
  background-color: #F5F5F5;
}

.stygian-button {
  display: inline-block;
  max-width: 350px;
  padding: 0.35em 1.2em;
  border: 0.1em solid #F5F5F5;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #F5F5F5;
  background-color: black;
  text-align: center;
  transition: all 0.2s;
  width: 100%;
  cursor: pointer;
}

.stygian-button:hover {
  color: #000000;
  background-color: #F5F5F5;
}

@media all and (max-width:30em) {
  .stygian-button {
    display: block;
    margin: 0.4em auto;
  }
}

/* Glyph, by Harry Roberts */

hr.styled-hr {
  overflow: visible;
  /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #58306c;
  color: #58306c;
  text-align: center;
  line-height: 2em;
}

hr.styled-hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}

hr.styled-hr-dark {
  overflow: visible;
  /* For IE */
  padding: 0;
  border: none;
  border-top: medium double white;
  color: white;
  text-align: center;
  line-height: 2em;
}

hr.styled-hr-dark:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: #313131;
}

hr.styled-hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
}

.creatureDiv {
  background-color: lavender;
  padding: 10px;
  margin: 10px;
}

</style>

<script async src="/assets/generator_resources/ynngenerator.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
