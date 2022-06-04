---
date: 2022-05-01
layout: full-page
title: Mechs in Motion Online Tracker
permalink: mechsinmotion
published: true
hide_description: true
image: /images/StygianHelpDesk.png
description: >
  An online tracker for Mechs in Motion
---


<div class="stygian-card">
  <h3>Left Click and Right Click to add actions and cycle through action types.</h3>
  <table id="mechtracks"></table>
</div>

<button class="stygian-button" type="button" onclick="addTrack()">Add a new Track</button>

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

<script async src="/assets/generator_resources/mechsinmotion.js" language="javascript" type="text/javascript"></script>
