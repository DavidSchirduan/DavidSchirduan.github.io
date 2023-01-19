---
date: 2022-12-30
layout: project
title: Overpowered Solo Roleplaying
caption: Free Rules
screenshot:
  src: /images/overpoweredteaser.png
image: /images/overpoweredteaser.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Speedrun your favorite adventures as a hardworking, explorer robot. Choose your paths wisely, manage your energy cores efficiently, and make your creators proud! Compatible with any game that uses math.

 - Solo rules that let you play through any RPG adventure module in an hour or so.
 - Engaging resource-management mechanics present you with tough decisions and big rewards.
 - Doubles as a GM prep tool to familiarize yourself with a new setting or module.
 - Compare your high score to others. Be number one!
 - The rules and mobile app are freely available on this very page. 
 - Buy the **Digital Deluxe Edition** and receive future expansions, adventures, and re-skins; all coming soon to itch.io and DrivethruRPG.

<div class="shopping-buttons">
<button class="btn btn-primary" onClick="document.getElementById('tributeScore').scrollIntoView();">Free Rules + App</button>
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Deluxe: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/318164/Tempered-Legacy" class="btn btn-primary dtrpgBTN">Deluxe: $3.20<br>at DriveThruRPG</a>
</div>

## How to Play

Your creator built you to scan treasure, obtain creature samples, and explore the unknown. There are millions of other bots landing on countless worlds. Will you prove yourself a talented explorer or a waste of power?

You are the size of a breadbox. Your smooth metal shell hides advanced technology and a dash of magic. You start with a <span class="d4">d4</span>, <span class="d6">d6</span>, <span class="d8">d8</span>, <span class="d10">d10</span>, <span class="d12">d12</span>, and a <span class="d20">d20</span> in your power banks.

<div id="overCard">
  <h3 id="tributeScore">TOTAL OVERPOWER: <span class="dtribute">0</span></h3>
  <table id="powerBanks">
    <tr>
      <td><p class="dicierDark">⇡</p></td>
      <td><p class="dicierDark">⇡</p></td>
      <td><p class="dicierDark">⇡</p></td>
    </tr>
    <tr>
      <td><p class="dicierDark">⇡</p></td>
      <td><p class="dicierDark">⇡</p></td>
      <td><p class="dicierDark">⇡</p></td>
    </tr>
    <tr>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
    </tr>
    <tr>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
      <td><button onclick="spendTreasure(1)" class="d4 dicierHeavy">1_ON_D4</button></td>
    </tr>
  </table>
  <table id="gainTable">
    <tr>
        <td><button onclick="gainDie(4)" class="dicierHeavy">ANY_ON_D4<p>HANDFUL</p></button></td>
        <td><button onclick="gainDie(6)" class="dicierHeavy">ANY_ON_D6<p>WEAK</p></button></td>
        <td><button onclick="gainDie(8)" class="dicierHeavy">ANY_ON_D8<p>ENTERED</p></button></td>
    </tr>
    <tr>
        <td><button onclick="gainDie(20)" class="dicierHeavy">ANY_ON_D20<p>POWERFUL</p></button></td>
        <td><button onclick="gainDie(12)" class="dicierHeavy">ANY_ON_D12<p>STRONG</p></button></td>
        <td><button onclick="gainDie(10)" class="dicierHeavy">ANY_ON_D10<p>COMPLETED</p></button></td>
    </tr>
    </table>
    <h3 id="rerollButton" style="display: none;border-top:3px solid grey;">
        <a onclick="rerollDice();return false;"></a>
    </h3>
    <div id="crtButton">
    <p><a class="d4" onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a></p>
    <p>Bookmark this page to save your session</p>
    </div>
</div>

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes.

## Gain Dice by Achieving Goals

Your programming rewards you with fresh power cores after you accomplish any of your goals:

- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D4</span> <span class="d4">d4</span> for each **handful** of treasure scanned.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D20</span> <span class="d20">d20</span> when you scan a **powerful** object.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D6</span> <span class="d6">d6</span> after obtaining a sample from a **weak** creature.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D12</span> <span class="d12">d12</span> after obtaining a sample from a **strong** creature.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> <span class="d8">d8</span> when you enter a **new** area.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D10</span> <span class="d10">d10</span> after you **completed** scanning and sampling an area.

If your banks are full when you gain a new die, the oldest die is converted into Overpower. Overpower can be spent to re-roll your dice, but it also acts as a high score. Try to earn as much Overpower as possible!

## Spend Dice to Overcome Obstacles

Unfortunately, treasure is often hidden, most creatures don't like being sampled, and obstacles prevent you from exploring further. For each creature or obstacle you must spend enough Power to exceed one of its Numbers.

Numbers like: Armor Class, Health Points, Difficulty Class, Defenses, Saving Throws, Damage Dealt, Dexterity, Strength, Speed, Intelligence, or anything that shows up in a stat block. 

The Number you choose should reflect however you're dealing with that obstacle or creature: running past it, stunning it, sneaking by, rushing head-on, defending against attacks, etc. See the detailed playthrough below for good examples.

> If none of the Numbers make any sense, or all of them are above 20, simply roll 2d6 to determine the Number of the creature or obstacle.

Dice contain Power equal to the number they show. A <span class="d8">d8</span> showing [6] and a <span class="d20">d20</span> showing [6] are both worth 6 Power. Click on a die to spend it. Once you spend enough power to exceed the Number, you overcome it and may continue to pursue your goals.

You may choose to end your adventure at any time. Sometimes going further isn't worth the cost. Share your final Overpower score with others using the #OverpoweredSR hashtag and see if anyone can beat it!

## Detailed play report of [The Sepulchre of Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven).

Coming Soon!

## David's High Scores

Can you beat these?

<style>
  .over-card h3 {
  margin-top: 0px;
  }
</style>

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
