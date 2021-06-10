---
date: 2001-01-01
layout: full-page
title: Test Generator
permalink: fakeurl
published: true
---

<div class="stygian-card">
  <div class="stygian-text">
    <div class="row">
      <div class="col-12 col-md-5" style="text-align:center;">
        <div class="logItem"><a onclick="newHunt()"><h3>Begin New Hunt</h3></a></div>
        <p id="huntText" style="text-align:left;"></p>
        <p id="saveHunt" style="text-align:center;"></p>
        <div id="mapIMG"></div>
      </div>
      <div class="col-12 col-md-7">
        <div id="logContent"></div>
        <hr class="stygian-hr">
        <div id="locationText"></div>
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