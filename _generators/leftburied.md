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
  <div class="col-6">
    <button id="CharButton" class="btn leftburied-btn" onclick="blb_generate()">
      <h3>Generate Character</h3>
    </button>
  </div>
</div>

<div class="container leftburiedCard" id="leftburiedCard">
    <div style="display:flex;justify-content:space-between;">
  <h2 id="charName">John the Monster</h2>
    <button id="downloadBTN" class="btn leftburied-btn-sm data-html2canvas-ignore" onclick="blb_saveCharacterIMG()" style="width:160px;margin-bottom:auto;">
      <p style="margin-bottom: 0;">DOWNLOAD</p>
    </button>
  </div>
  <div class="row">
		<div class="col-md col-4"><h3 style="text-align:center" id="charBR">+2 Will</h3></div>
		<div class="col-md col-4"><h3 style="text-align:center" id="charWIT">+2 Will</h3></div>
		<div class="col-md col-4"><h3 style="text-align:center" id="charWILL">+2 Will</h3></div>
		<div class="col-md col-6"><h3 style="text-align:center" id="charGRI">+2 Will</h3></div>
		<div class="col-md col-6"><h3 style="text-align:center" id="charVIG">+2 Will</h3></div>
	</div>
  <p id="charCareer"></p>
  <hr>
  <div class="row">
    <div class="col-lg-6 col-12">
      <h2 id="charARCH"></h2>
      <p id="archText"></p>
    </div>
    <div class="col-lg-6 col-12">
      <h2>Equipment</h2>
      <p id="charItems"></p>
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