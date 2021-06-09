---
date: 2001-01-01
layout: full-page
title: Test Generator
permalink: fakeurl
published: true
---

<div class="stygian-card">
  <div class="stygian-text" id="stygian-complete">
    <div class="row">
      <div class="col-12 col-md-4" style="text-align:center;">
        <button class="stygian-button" type="button" onclick="newHunt()">Begin New Hunt</button>
        <p id="huntText" style="text-align:left;"></p>
        <p id="saveHunt" style="text-align:center;"></p>
      </div>
      <div class="col-12 col-md-8">
        <div id="mapIMG"></div>
      </div>
    </div>
    <div id="encounterCard"></div>
    <hr class="stygian-hr">
    <div class="row">
      <div class="col-12 col-md-4">
        <div id="logContent">
        </div>
      </div>
      <div id="locationText" class="col-12 col-md-8">
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
  .stygian-text h3,h2 {
  margin-top: 0px;
  }

</style>

<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/test.js" language="javascript" type="text/javascript"></script>