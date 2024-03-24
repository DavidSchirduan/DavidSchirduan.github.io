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

<div id="tombButtons">
<button id="TombGenerateButton" onclick="decreaseAlarm()">Alarm -</button>
<button id="TombGenerateButton" onclick="generateEncounter()">ENCOUNTER</button>
<button id="TombGenerateButton" onclick="increaseAlarm()">Alarm +</button>
</div>

<h3>Alarm Die Size</h3>
<div id="alarmDieCard">
<div>d4</div>
<div>d8</div>
<div>d12</div>
<div>d20</div>
</div>

<div id="TombEncounterCard"><h3>Click <strong>"ENCOUNTER"</strong> to roll a random encounter.</h3></div>

<div id="creatureStatsDiv"></div>

<style>
  #tombButtons {
    display:flex
  }

  #tombButtons > button {
    flex: 1 0 33%;
    text-align: center;
    font-size: 1.3rem;
    padding: .5em;
  }

  #alarmDieCard {
    display:flex;
    background-color: white;
    color: black;
  }

  #alarmDieCard > div{
    flex: 1 0 25%;
    text-align: center;
    font-size: larger;
  }

  .alarmHighlight {
    background-color: lightcoral;
  }
</style>

<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/tombThousand.js" language="javascript" type="text/javascript"></script>
