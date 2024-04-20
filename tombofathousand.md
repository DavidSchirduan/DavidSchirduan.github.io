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
<h3>Tomb of a Thousand Doors Encounter Generator</h3>

  <div id="alarmDieCard">
    <div>d4</div>
    <div>d8</div>
    <div>d12</div>
    <div>d20</div>
  </div>

  <div id="tombButtons">
    <button onclick="decreaseAlarm()">Alarm -</button>
    <button onclick="generateEncounter()">ENCOUNTER</button>
    <button onclick="increaseAlarm()">Alarm +</button>
  </div>

  <div id="tombEncounterCard">
    <h3 id="tombEncounterText">Click <strong>"ENCOUNTER"</strong> to roll a random encounter. Use the Alarm Buttons to increase or decrease the alarm die size.</h3>
    <div id="creatureStatsDiv"></div>
  </div>

</div>

<style>

  #tombGeneratorDiv{
    background-color: #f6eadc;
    color: #020401;
    padding: 1rem;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    border: 10px solid gray;
    border-bottom: 0;
    text-align:center;
  }

  #alarmDieCard {
    display:flex;
    background-color: white;
    color: black;
    margin:1rem;
    padding: .5rem;
    background-color: #f8ecdc;
    border-top: 3px solid #686053;
    border-bottom: 3px solid #686053;
  }

  .alarmHighlight {
    background-color: lightcoral;
  }

  #alarmDieCard > div{
    flex: 1 0 20%;
    text-align: center;
    font-size: larger;
    background-color: #f8ecdc;
    border-top: 1px solid #686053;
    margin: 1rem;
  }

  #tombButtons {
    display:flex
  }

  #tombButtons > button {
    flex: 1 0 33%;
    text-align: center;
    font-size: 1.3rem;
    padding: .5em;
    background-color: #686053;
    color: #f8ecdc;
    margin: .5rem;
  }

  #tombButtons > button : hover {
    background-color: black;
    color: white;
  }

  #tombEncounterCard {
    color: black;
    background-color: white;
    border: 3px solid black;
  }

  .creatureDiv {
    background-color: white;
    border: 1px dotted #686053;
  }
</style>

<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/tombThousand.js" language="javascript" type="text/javascript"></script>
