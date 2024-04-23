---
date: 2024-3-16
layout: project
title: Tomb of a Thousand Doors Generator
permalink: tomb-thousand
published: true
hide_description: true
image: /images/TombofaThousand.png
description: >
  A mobile-friendly generator for Tomb of a Thousand Doors.
---

<div id="tombGeneratorDiv">
<img src="/tombTitle.png">

  <div id="alarmDieCard">
    <div>d4</div>
    <div>d8</div>
    <div>d12</div>
    <div>d20</div>
  </div>

  <div id="tombButtons">
    <button class="tomb-round-first tomb-round-button" onclick="decreaseAlarm()">➨</button>
    <button class="tomb-square-button" onclick="generateEncounter()">ROLL ENCOUNTER</button>
    <button class="tomb-round-button" onclick="increaseAlarm()">➨</button>
  </div>

  <div id="tombEncounterCard">
    <h2 id="tombEncounterText">Use the Arrow Buttons to increase or decrease the alarm die size.</h2>
    <div id="creatureStatsDiv"></div>
    <img src="/tombRatKing.png">
  </div>

</div>

<style>

#tombGeneratorDiv {
  color: #020401;
  padding: 1rem;
  max-width: 800px;
  background: linear-gradient(270deg, rgb(246, 237, 228), rgb(240, 220, 184) 70.71%);
}

#tombGeneratorDiv a{
  color: #020401;
  text-decoration: underline;
}

#tombGeneratorDiv img {
  width: 100%;
}

#tombGeneratorDiv h2,
h3 {
  margin-top: 0rem;
}

#alarmDieCard {
  display: flex;
  color: black;
  margin: 1rem;
  padding: .5rem;
}

#alarmDieCard>div {
  flex: 1 0 20%;
  text-align: center;
  font-size: larger;
  border: 1px dashed black;
  margin: 1rem;
}

.alarmHighlight {
  background-color: rgba(236, 43, 43, 0.5);
  box-shadow: 3px 3px 3px darkgrey;
  border: 1px solid black !important;
}

#tombButtons {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;
}

#tombButtons button:hover {
  background-color: #493b36;
}

.tomb-square-button {
  flex: 0 0 40%;
  display: block;
  line-height: 1rem;
  border: 2px solid #f5f5f5;
  color: #f5f5f5;
  text-align: center;
  background-color: #a6866b;
  box-shadow: 0 0 3px gray;
  font-weight: bold;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.3rem;
  line-height: 2rem;
}

.tomb-round-button {
  flex: 1 0 25%;
  display: block;
  max-width: 4rem;
  max-height: 4rem;
  line-height: 3rem;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
background-color: #a6866b;
  box-shadow: 0 0 3px gray;
  font-size: 3rem;
}

.tomb-round-first {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  unicode-bidi: bidi-override;
  direction: rtl;
}

#tombEncounterCard {
  color: black;
  border: 3px solid black;
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  overflow: auto;
}

.creatureDiv {
  border: 2px dashed #686053;
  margin: 1rem;
  padding: 1rem;
  line-height: 1.2rem;
}

#tombEncounterCard img {
  max-height: 100px;
  float: right;
  margin-right: -20px;
  margin-bottom: -20px;
  width:auto;
}

</style>

<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/tombThousand.js" language="javascript" type="text/javascript"></script>
