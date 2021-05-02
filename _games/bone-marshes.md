---
date: 2020-04-01
layout: project
title: The Bone Marshes
redirect_from:
  - "/bmchargen"
  - "/marsh-goons"
caption: >
  A Hex-Mapping Adventure About Getting Lost
  <br>
  RPG Adventure
  <br>
  $10 - $20
screenshot:
  src: images/BM_title.png
image: images/BM_title.png
hide_description: true
permalink: bone-marshes
featured: false
---

<div class="shoppingCard">
  <div class="shoppingColumn">
    <p>The Bone Marshes is a tabletop adventure about getting lost in a burning marsh. It’s tailor-made for groups that enjoy exploring complex spaces and drawing maps.</p>
    <p><strong>Now includes the sequel: "Marsh Goons" by <a href="https://joebanner.co.uk/">Joe Banner</a>.</strong></p>
    <p>64 Pages, Color Softcover, 8.5"x11" Book.</p>
    <p>Fantasy RPG Adventure with Rules Included.</p>
  </div>
  <div class="shoppingColumn">
    <a class="btn shoppingButton snipcart-add-item" 
      data-item-id="bone-marshes-pdf" 
      data-item-price="10.00"
      data-item-url="/bone-marshes"
      data-item-description="Includes the PDF. The Bone Marshes is a tabletop adventure about getting lost in a burning marsh. It’s tailor-made for groups that enjoy exploring complex spaces and drawing maps."
      data-item-image="/images/posts/bonemarshes_KS.jpg" 
      data-item-name="Bone Marshes (PDF)"
      data-item-file-guid="920a72b3-b68d-4495-9a90-27bf94fc9800"
      data-item-shippable="false"
      data-item-max-quantity="1">
      <h3>Buy PDF: $10</h3>
    </a>
      <a class="btn shoppingButton">
      <h3>Order Print+PDF: SOLD OUT</h3>
    </a>
    <a class="btn bonemarshes-btn" href="/files/BoneMarshes_CharacterSheets.pdf" target="_blank">
      <h3>Bone Marshes Character Sheet</h3>
    </a>
    <a class="btn bonemarshes-btn" href="/files/MG_CharSheet.pdf" target="_blank">
      <h3>Marsh Goons Character Sheet</h3>
    </a> 
  </div>
</div>

<p> </p>

<div class="row" style="justify-content: space-around !important;margin-bottom:30px;">
  <div class="col-md-5 col-10 noPadding">
<a class="btn bonemarshes-btn" onclick="bm_generate()"><h3>Generate a Bone Marshes Character</h3></a>
  </div>
  <div class="col-md-5 col-10 noPadding">
<a class="btn bonemarshes-btn" onclick="mg_generate()"><h3>Generate a Marsh Goons Character</h3></a>
  </div>
</div>

<div class="container bonemarshesCard" id="bmcharCard">
  <div style="display:flex;justify-content:space-between;">
    <h2 id="bmcharName" style="margin-top:0px;">Johnny</h2>
    <button id="bmdownloadBTN" class="btn bonemarshes-btn-sm data-html2canvas-ignore" onclick="bm_saveCharacterIMG()" style="width:160px;margin-bottom:auto;">
      <p style="margin-bottom: 0;">DOWNLOAD</p>
    </button>
  </div>
  <div class="row">
		<div class="col-6"><h3 id="bmcharHP"></h3></div>
		<div class="col-6"><h3>Lvl: 1</h3></div>
  </div>
  <p id="bmcharHistory"></p>
  <div class="row">
  	<div class="col-md-3 col-6" id="bmcharVirtue"></div>
		<div class="col-md-3 col-6" id="bmcharVice"></div>
		<div class="col-md-3 col-6" id="bmcharPhysique"></div>
		<div class="col-md-3 col-6" id="bmcharSkin"></div>
		<div class="col-md-3 col-6" id="bmcharFace"></div>
		<div class="col-md-3 col-6" id="bmcharHair"></div>
		<div class="col-md-3 col-6" id="bmcharSpeech"></div>
		<div class="col-md-3 col-6" id="bmcharClothing"></div>
		<div class="col-md-6 col-6" id="bmcharSmell"></div>
		<div class="col-md-6 col-6" id="bmcharAllergy"></div>
	</div>
  <hr>
  <div class="row">
		<div class="col-md col-6"><h3 id="bmcharSTR"></h3></div>
		<div class="col-md col-6"><h3 id="bmcharDEX"></h3></div>
		<div class="col-md col-6"><h3 id="bmcharCON"></h3></div>
		<div class="col-md col-6"><h3 id="bmcharINT"></h3></div>
		<div class="col-md col-6"><h3 id="bmcharWIS"></h3></div>
		<div class="col-md col-6"><h3 id="bmcharCHA"></h3></div>
	</div>
  <p style="text-align: right;margin-bottom:0px;"><small><i>You may swap any two ability bonuses</i></small></p>
  <hr>
  <h2 id="bmcharEquip">Equipment</h2>
  <p>You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot.</p>
  <p id="bmcharItems"></p>
</div>

<div class="container bonemarshesCard" id="mgcharCard">
  <div style="display:flex;justify-content:space-between;">
    <h2 id="mgcharName" style="margin-top:0px;">Johnny</h2>
    <button id="mgdownloadBTN" class="btn bonemarshes-btn-sm data-html2canvas-ignore" onclick="mg_saveCharacterIMG()" style="width:160px;margin-bottom:auto;">
      <p style="margin-bottom: 0;">DOWNLOAD</p>
    </button>
  </div>
  <div class="row">
		<div class="col-md col-10"><h3 id="mgcharHP" style="text-align:center;">23</h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="mgcharPOW"></h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="mgcharINS"></h3></div>
		<div class="col-md col-10"><h3 style="text-align:center;" id="mgcharKNO"></h3></div>
	</div>
  <hr>
  <p class="h2" style="margin-top: 10px;" id="mgcharEquip">Starting Equipment</p>
  <p>Choose <strong>three</strong> of the items below to start. Unless otherwise noted, each item takes up one slot.</p>
  <p id="mgcharItems"></p>
</div>

> "Easily one of the best. A 'real' adventure, and there’s not many of those out there." - [tenfootpole.org](https://tenfootpole.org/ironspike/?p=6116)

> "Its content will provide a gaming group with many sessions of entertainment and tales to regal. Bone Marshes is a good investment and a worthwhile quest to take on." - [Rolling Boxcars](https://rollingboxcars.com/2019/09/18/mapping-out-david-schirduans-bone-marshes/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7D2SLD5gtTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Marshes are burning, and we don't know why...

The Bone Marshes is an adventure filled with mapping and exploration challenges for the players. It uses special time-keeping and travel rules with player handouts to keep everyone engaged and on the same page in this topsy-turvey land.

The Bone Marshes is a three part adventure module, each of which can be run separately or consecutively. Each part provides 2-4 sessions of gameplay.

**Part I**: The marshes burn from constant daylight. The sun never sets! The mage Azimech recently discovered this terrible situation and has put out a call for adventurers to map safe routes through the flaming swamp.

**Part II**: After the caravan has arrived (thanks to your mapping skills), Azimech needs you to head back out and discover the source of the constant daylight.

**Part III**: Now that she knows the root cause of the problem, she thinks there is a solution. It involves plumbing the depths of the tunnels beneath the marshes, plundering an ancient vault, and returning with valuable artifacts.

![BM_Marketing_1.png](/images/posts/BM_Marketing_1.png)
![BM_Marketing_2.png](/images/posts/BM_Marketing_2.png)
![BM_Marketing_3.png](/images/posts/BM_Marketing_3.png)
![BM_Marketing_4.png](/images/posts/BM_Marketing_4.png)
![BM_Marketing_5.png](/images/posts/BM_Marketing_5.png)
![BM_Marketing_6.png](/images/posts/BM_Marketing_6.png)
![BM_Marketing_7.png](/images/posts/BM_Marketing_7.png)

<script async src="/assets/generator_resources/bm_generator.js" charset="utf-8"></script>
<script async src="/assets/generator_resources/mg_generator.js" charset="utf-8"></script>
