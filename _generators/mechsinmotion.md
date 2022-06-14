---
date: 2000-05-01
layout: full-page
title: Mechs in Motion Online Tracker
permalink: mechsinmotion
published: true
hide_description: true
image: /images/StygianHelpDesk.png
description: >
  An online tracker for Mechs in Motion
---

  <h3>Edit the text box to configure your Action Tracks</h3>
  <div class="row">
  <div class="col">
  <textarea id="quickEntry">Petrichor4qmmmmq&#10;
Absalom-33mmqqoq&#10;
Titania6pmmppmqmmppqmpp&#10;
Margreave3mqqoq&#10;
Berserker5mmmmqq&#10;
Assault4mmmmqs&#10;
Elite4qmmmqqmmmuf&#10;
Goliath3qmmq&#10;
Priest5qqmmmmm</textarea>
  </div>
  <div class="col">
  <p><strong>Action Key</strong><br>m = Move<br>q = Quick<br>u = Full<br>f = Free<br>p = Protocol<br>r = Reaction<br>o = Overcharge<br>b = Boost Movement<br>s = Superheavy Fire</p>
  </div>
  </div>
  <table id="mechtracks" style="width:100%;"></table>

<button class="stygian-button" type="button" onclick="startRound()">Start Round</button>
<button id="nextAction" style="display:none;" class="stygian-button" type="button" onclick="nextAction()">Next Action</button>
<button class="stygian-button" type="button" onclick="endRound()">End Round</button>

<!--Necessary for allowing the sticky buttons and background changes-->
<style>

hy-push-state, hy-drawer {
overflow: clip;
display: contents;
}

.containerBox {
    position: relative;
    display: inline-block;
}
.text-box {
    position: absolute;    
    height: 100%;
    text-align: center;    
    width: 100%;
    font-size: .9rem;
}
.text-box:before {
   content: '';
   display: inline-block;
   height: 100%;
   vertical-align: middle;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>

<script async src="/assets/generator_resources/mechsinmotion.js" language="javascript" type="text/javascript"></script>
