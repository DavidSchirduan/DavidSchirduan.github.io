---
date: 2023-01-02
layout: project
title: Overpowered Solo Roleplaying
caption: Free Rules
screenshot:
  src: /images/OverpoweredTeaser2.png
image: /images/OverpoweredTeaser2.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Speedrun adventure modules as a brave explorer bot. A solo TTRPG compatible with any game that uses math.

 - Free rules and mobile-friendly dice app available below.
 - Play through adventure modules from any game in an hour or two.
 - Engaging dice-management rules present you with tough decisions and big rewards.
 - Doubles as a GM prep tool to familiarize yourself with a new setting or module.

 The **Deluxe Edition** includes:
 - A Fantasy Inventory version: Overloaded.
 - The original version of Overpowered where you're an evil murder-bot.
 - With more to come soon!

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Deluxe: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/318164/Tempered-Legacy" class="btn btn-primary dtrpgBTN">Deluxe: $3.20<br>at DriveThruRPG</a>
</div>

## Dice App

<div class="row">
  <div id="botDetails" class="col-xl col-12 crt">
    <h3 id="botName" class="majorDisplay">Wandering.Antares.17</h3>
    <img id="osrImg" style="width: 35%; float:left;" src="/images/overpoweredExamples/OSR4.gif">
    <ul>
      <li id="osrWeapon"><span class="itemName" style="color: rgb(223, 164, 252);">Stun Prod:</span> Short range
        electrical arc. <span class="noWrap">HP ❖ CON ❖ MAGIC DEF</span></li>
      <li id="osrDefense"><span class="itemName" style="color: rgb(206, 252, 164);">Cloak:</span> Avoid visual
        detection. <span class="noWrap">PER ❖ DEX ❖ WIS</span></li>
      <li id="osrTool"><span class="itemName" style="color: rgb(252, 239, 164);">Drill:</span> Loudly tunnel through
        obstacles. <span class="noWrap">DC ❖ HEALTH ❖ ARMOR</span></li>
      <li id="osrTalk"><span class="itemName" style="color: rgb(176, 164, 252);">Pheromones:</span> Induce positive
        emotions. <span class="noWrap">CHA ❖ CON ❖ BREATH</span></li>
      <li id="osrMove"><span class="itemName" style="color: rgb(252, 164, 164);">Hover Jets:</span> Free 3D
        movement.<br> SPEED <span class="statBars">▰▱▱▱▱<br></span> &nbsp; JUMP <span class="statBars">▰▰▰▱▱<br></span>
        CLIMB <span class="statBars">▰▰▰▱▱</span></li>
    </ul>
    <p style="border-top:3px solid grey"><a class="d6 textButton" onclick="generateBotDetails();return false;">GENERATE
        NEW BOT</a> ❖ <a class="d4 textButton" onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a>
    </p>
    <p>Bookmark this page to save your session.</p>
  </div>
  <div id="overCard" class="col-xl col-12 crt">
    <h3 id="tributeScore" class="majorDisplay">ØVerpower: <span class="dtribute">30</span></h3>
    <div class="row">
      <div id="treasureCore" class="col-4"><button onclick="spendTreasure(3)" class="d20 dicierHeavy">6_ON_D20</button>
        <button onclick="spendTreasure(2)" class="d20 dicierHeavy">6_ON_D20</button>
        <button onclick="spendTreasure(1)" class="d20 dicierHeavy">7_ON_D20</button>
        <button onclick="spendTreasure(0)" class="d4 dicierHeavy">4_ON_D4</button>
      </div>
      <div id="foeCore" class="col-4">
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <button onclick="spendFoe(1)" class="d6 dicierHeavy">2_ON_D6</button>
        <button onclick="spendFoe(0)" class="d12 dicierHeavy">7_ON_D12</button>
      </div>
      <div id="obstacleCore" class="col-4">
        <p class="dicierDark">ANY_ON_D20</p>
        <p class="dicierDark">ANY_ON_D20</p>
        <button onclick="spendObstacle(1)" class="d8 dicierHeavy">6_ON_D8</button>
        <button onclick="spendObstacle(0)" class="d10 dicierHeavy">8_ON_D10</button>
      </div>
    </div>
    <div class="row"> <button onclick="gainDie(4)" class="dwhite col-4 dicierHeavy">ANY_ON_D4<p>HANDFUL</p></button>
      <button onclick="gainDie(6)" class="dwhite col-4 dicierHeavy">ANY_ON_D6<p>WEAK</p></button> <button
        onclick="gainDie(8)" class="dwhite col-4 dicierHeavy">ANY_ON_D8<p>ENTER</p></button> <button
        onclick="gainDie(20)" class="dwhite col-4 dicierHeavy">ANY_ON_D20<p>POWERFUL</p></button> <button
        onclick="gainDie(12)" class="dwhite col-4 dicierHeavy">ANY_ON_D12<p>STRONG</p></button> <button
        onclick="gainDie(10)" class="dwhite col-4 dicierHeavy">ANY_ON_D10<p>COMPLETE</p></button>
    </div>
    <button id="rerollButton"><a onclick="rerollDice();">10 <span
          style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower:</span> <strong>REROLL DICE</strong></a></button>
    <button id="d20Button"><a onclick="gainTwentyAbility();">20 <span
          style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower:</span><strong> GAIN 1d20</strong></a></button>
    <button id="gainDiceButton"><a onclick="gainAllDice();">40 <span
          style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower:</span> <strong>GAIN ALL DICE</strong></a></button>
    <button id="gainRowButton"><a onclick="gainDiceRow();">100 <span
          style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower:</span> <strong>GAIN ROW</strong></a></button>
  </div>
</div>

## Setup

Your creator built you to scan treasure, obtain creature samples, and explore the unknown. There are millions of other bots landing on countless worlds. Will you prove yourself a talented explorer or a waste of power?

To play a session of Overpowered you will need:
 - This web page open on your phone, tablet, or computer.
 - An RPG adventure module you've been wanting to play. 
 - An hour or two of your time.

You start with a <span class="d4">d4</span>, <span class="d6">d6</span>, <span class="d8">d8</span>, <span class="d10">d10</span>, <span class="d12">d12</span>, and a <span class="d20">d20</span> in your power banks. You will spend these dice to power your devices and overcome obstacles.

## Gain Dice by Achieving Goals

Your are rewarded with fresh power dice after you accomplish any of your goals.

 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D4</span> <span class="d4">d4</span> for each **handful** of treasure scanned.
 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D20</span> <span class="d20">d20</span> when you scan a **powerful** object.
 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D6</span> <span class="d6">d6</span> after obtaining a sample from a **weak** creature.
 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D12</span> <span class="d12">d12</span> after obtaining a sample from a **strong** creature.
 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> <span class="d8">d8</span> after you’ve **entered** a new area.
 - Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D10</span> <span class="d10">d10</span> after you **completed** scanning and sampling everything an area.

After you gain a die, it is rolled and added to your power banks. Dice are worth Power equal to the number they show. A <span class="d8">d8</span> showing [6] and a <span class="d20">d20</span> showing [6] are both worth 6 Power.

If your banks are full when you gain a new die, the oldest die is converted into <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span>. <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span> can be spent in different ways, but it also acts as a high score. Try to earn as much <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span> as possible! Or allow yourself to accumulate negative <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span> and try to make it up later.

## Spend Dice to Overcome Obstacles

Unfortunately, treasure is often hidden, most creatures don't like being sampled, and hazards prevent you from exploring further. You must overcome these obstacles by spending dice to fuel your devices.

To overcome an obstacle, follow these steps:

1. Examine the obstacle (creature, hazard, trap, etc). Look at its description and Stats.
2. Pick one Stat to overcome. Stats can look like STR, DEX, HP, DAMAGE, MORALE, SPEED, or anything else with a number value.
3. Use a device. Which of your devices would be most effective against this obstacle's Stat?
4. Spend one or more dice to power your device. You must spend enough Power to **exceed** the Stat's value. 
5. The creature, hazard, or obstacle is overcome completely! It will no longer trouble you. 

If a Stat is a range of numbers (3d6+4), use the highest possible value (22). If none of the Stats make sense, simply use **7** as the default Stat for most things.

## Example of Play

You enter the final room with a bank of four dice: 
- <span class="d4">d4</span> showing [2]
- <span class="d6">d6</span> showing [3]
- <span class="d10">d10</span> showing [9]
- <span class="d20">d20</span> showing [15].

You gain a <span class="d8">d8</span> after entering the room. After you add it to your banks it shows [4].

The coffin in the center of the room requires a DC of 12 to open. You spend the <span class="d20">d20</span> showing [15] to open it.

A vampire rises from the coffin. She has an AC of 18, HP of 25, and deals 2d8 damage. You choose to exceed her highest damage, which is 16. You spend all of your remaining dice for a total of 18 Power; barely enough to exceed her damage!

- You gain a <span class="d12">d12</span> after taking a sample of her blood.
- You gain a <span class="d20">d20</span> for scanning the magical amulet she was wearing.
- You gain two <span class="d4">d4</span>s after scanning a big golden box you found inside the coffin.
- You gain a <span class="d10">d10</span> for completing the room.

> For a longer, more detailed example, read through the high scores below.

You may choose to end your adventure at any time. Sometimes going further isn't worth the cost. Share your final <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span> score with others using the #OverpoweredSR hashtag and see if anyone can beat it!

## David's High Scores

- Sepulchre of Seven by HexaGnome: **62 <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span>**. [Detailed Play Report](/david/2023/01/overpoweredsepulchre).
- Wizard of Arms and Armor from the [Estate Adventure Collection](https://losing-games.itch.io/mausritter-the-estate-adventure-collection): **33 <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span>**. *I  used the Overloaded rules from the Deluxe edition.*
- Planar Compass #1: **15 <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span>**. [Detailed Play Report](/david/2023/02/overpoweredplanar).
- Pirate Borg: **35 <span style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span>**. [Detailed Play Report](/david/2023/02/overpoweredpirateborg)

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Cute robots from [Mounir Tohami](https://mounirtohami.itch.io/26-animated-pixelart-robots). Rules and Dice App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse them with attribution.

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
