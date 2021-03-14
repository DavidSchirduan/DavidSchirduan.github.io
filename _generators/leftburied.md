---
date: 2019-09-01
layout: full-page
title: Best Left Buried Character Generator
permalink: leftburiedgenerator
published: true
image: /images/blb.png
description: >
  A mobile-friendly Character Generator for the Best Left Buried RPG.
---

Best Left Buried is an fantasy horror game that threatens your characters' sanities as much as their lives. Within the Crypt, these adventurers will be beset by strange monsters, bizarre environments and eldritch magics, which will take them on their journey from freshfaced recruits from to grizzled survivors. [Buy it here](https://www.drivethrurpg.com/product/254584/Best-Left-Buried-Full-Rules)!

<div class="row centerButtons">
  <div class="col-3">
    <button id="CharButton" class="btn leftburied-btn" onclick="blb_generate()">
      <h3>Generate Character</h3>
    </button>
  </div>
</div>

<div class="container leftburiedCard" id="leftburiedCard">
  <div class="row">
    <div class="col-12 col-md-5">
      <h2 id="charName">John the Monster</h2>
      <p id="description"></p>
    </div>
    <div class="col-12 col-md-6">
      <div class="row" style="justify-content:space-around;">
        <div class="col leftburied-stat sketchy">
          <h3 style="font-size: 4em;line-height: 1em;" id="charBR">1</h3>
          <h3>Brawn</h3>
        </div>
        <div class="col leftburied-stat sketchy">
          <h3 style="font-size: 4em;line-height: 1em;" id="charWIT">1</h3>
          <h3>Wit</h3>
        </div>
        <div class="col leftburied-stat sketchy">
          <h3 style="font-size: 4em;line-height: 1em;" id="charWILL">1</h3>
          <h3>Will</h3>
        </div>
        <div class="col leftburied-stat sketchy">
          <h3 style="font-size: 4em;line-height: 1em;" id="charVIG">1</h3>
          <h3>Vigour</h3>
        </div>
        <div class="col leftburied-stat sketchy">
          <h3 style="font-size: 4em;line-height: 1em;" id="charGRIP">1</h3>
          <h3>Grip</h3>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-5">
      <hr>
      <h2>Equipment</h2>
      <p id="charSlotLimit"></p>
      <p id="charItems"></p>
    </div>
    <div class="col-12 col-md-6">
      <hr>
      <h2>Abilities</h2>
      <div id="charAbilities" class="row" style="justify-content:space-around;">
      </div>
    </div>
  </div>
</div>

Commissioned by [SoulMuppet Publishing](https://www.drivethrurpg.com/browse/pub/13749/SoulMuppet-Publishing).

<style>
  body {
    background-color: #313131;
    color: #F5F5F5;
  }
  body a {
    color: #F5F5F5;
  }
    hy-push-state, hy-drawer {
  overflow: clip;
  display: contents;
  }
</style>

<script async src="/assets/generator_resources/leftburied.js" charset="utf-8"></script>