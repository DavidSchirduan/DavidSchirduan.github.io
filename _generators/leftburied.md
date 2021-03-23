---
date: 2019-09-01
layout: full-page
title: Best Left Buried Character Generator
permalink: leftburiedgenerator
published: true
image: /images/blb_logo.png
description: >
  A mobile-friendly Character Generator for the Best Left Buried RPG.
---


<div class="leftburied-card">
  <div class="stygian-text" id="leftburiedInto">
    <h3>How to use this Generator</h3>
        <ul>
      <li><strong>Archetype Generation</strong> attempts to create a character with useful equipment and advancements.</li>
      <li><strong>Random Generation</strong> is chaotic and unpredictable.</li>
      <li>Check the <strong>Human Only</strong> box to avoid other ancestries.</li>
    </ul>
    <p>Best Left Buried is an fantasy horror game that threatens your characters' sanities as much as their lives. <a href="https://www.drivethrurpg.com/product/254584/Best-Left-Buried-Full-Rules">Buy it Here</a>!</p>
    <div class="leftburied-log">
      <button class="leftburied-button" type="button" onclick="blb_generate('archetype')">Archetype Generation</button>
      <button class="leftburied-button" type="button" onclick="blb_generate('random')">Random Generation</button>
      <div class="leftburied-check">
        <input type="checkbox" id="humanBox" name="humanBox" style="scale:2;margin-right:20px;cursor:pointer;">
        <label for="humanBox" style="cursor:pointer;">Humans Only</label>
      </div>
    </div>
    <div id="leftburiedCharacter" style="display:none;">
      <hr class="stygian-hr">
      <p id="saveCharacter" style="text-align:center;"></p>
      <div class="row" style="justify-content:space-around;">
        <div class="col-12 col-sm">
          <h2 style="margin-top: 10px;" id="charName">Character Name</h2>
          <div id="description">Description</div>
          <div class="row" style="justify-content:space-around;">
            <div class="leftburied-stat sketchy">
              <h3 id="charBR">1</h3>
              <h2>Brawn</h2>
            </div>
            <div class="leftburied-stat sketchy">
              <h3 id="charWIT">1</h3>
              <h2>Wit</h2>
            </div>
            <div class="leftburied-stat sketchy">
              <h3 id="charWILL">1</h3>
              <h2>Will</h2>
            </div>
            <div class="leftburied-stat sketchy">
              <h3 id="charVIG">1</h3>
              <h2>Vigour</h2>
            </div>
            <div class="" style="margin-top:auto;margin-bottom:auto;display:block;width:150px;">
              <img src="/images/blb_logo.png">
            </div>
            <div class="leftburied-stat sketchy">
              <h3 id="charGRIP">1</h3>
              <h2>Grip</h2>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm" style="max-width:400px;">
          <h2>Equipment</h2>
          <p id="charSlotLimit"></p>
          <p id="charItems"></p>
        </div>
      </div>
      <hr>
      <h2>Abilities</h2>
      <div id="charAbilities" class="row" style="justify-content:center;align-items: baseline;">
      </div>
      <p>Commissioned by <a href="https://www.drivethrurpg.com/browse/pub/13749/SoulMuppet-Publishing">SoulMuppet Publishing</a>.</p>
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
</style>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/leftburied.js" charset="utf-8"></script>