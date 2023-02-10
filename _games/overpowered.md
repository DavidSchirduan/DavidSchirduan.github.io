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

Speedrun tabletop RPG adventures as a hardworking, explorer robot. Choose your paths wisely, manage your energy cores efficiently, and make your creators proud! A solo RPG compatible with any game that uses math. Uses the **free dice app** available below.

 - Solo RPG that lets you play through adventure modules from any game in an hour or two.
 - Engaging resource-management mechanics engage you with tough decisions and big rewards.
 - Doubles as a GM prep tool to familiarize yourself with a new setting or module.

 The **Deluxe Edition** includes:
 - Fantasy Inventory Hack: Overloaded
 - The original version of Overpowered
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
            <li id="osrTool"><span class="itemName" style="color: rgb(252, 239, 164);">Drill:</span> Loudly tunnel
                through obstacles. <span class="noWrap">DC ❖ HEALTH ❖ ARMOR</span></li>
            <li id="osrTalk"><span class="itemName" style="color: rgb(176, 164, 252);">Pheromones:</span> Induce
                positive emotions. <span class="noWrap">CHA ❖ CON ❖ BREATH</span></li>
            <li id="osrMove"><span class="itemName" style="color: rgb(252, 164, 164);">Hover Jets:</span> Free 3D
                movement.<br> SPEED <span class="statBars">▰▱▱▱▱<br></span> &nbsp; JUMP <span
                    class="statBars">▰▰▰▱▱<br></span> CLIMB <span class="statBars">▰▰▰▱▱</span></li>
        </ul>
        <p style="border-top:3px solid grey"><a class="d6 textButton"
                onclick="generateBotDetails();return false;">GENERATE NEW BOT</a> ❖ <a class="d4 textButton"
                onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a></p>
        <p>Bookmark this page to save your session.</p>
    </div>
  <div id="overCard" class="col-xl col-12 crt">
        <h3 id="tributeScore" class="majorDisplay">ØVerpower: <span class="dtribute">30</span></h3>
        <div class="row">
            <div id="treasureCore" class="col-4"><button onclick="spendTreasure(3)"
                    class="d20 dicierHeavy">6_ON_D20</button>
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
        <button id="rerollButton"><a onclick="rerollDice();"><strong>REROLL:</strong> 10 <span
                    style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span></a></button>
                <button id="d20Button"><a onclick="gainTwentyAbility();"><strong>GAIN 1d20:</strong> 20 <span
                    style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span></a></button>
        <button id="gainDiceButton"><a onclick="gainAllDice();"><strong>GAIN ALL DICE:</strong> 40 <span
                    style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span></a></button>  
                <button id="gainRowButton"><a onclick="gainDiceRow();"><strong>GAIN NEW ROW:</strong> 100 <span
                    style="font-family: Major Mono Display,Helvetica,Arial,sans-serif;">ØVerpower</span></a></button>       
    </div>
</div>

## How to Play


Your creator built you to scan treasure, obtain creature samples, and explore the unknown. There are millions of other bots landing on countless worlds. Will you prove yourself a talented explorer or a waste of power?

You are the size of a breadbox. Your smooth metal shell hides advanced technology and a dash of magic. You start with a <span class="d4">d4</span>, <span class="d6">d6</span>, <span class="d8">d8</span>, <span class="d10">d10</span>, <span class="d12">d12</span>, and a <span class="d20">d20</span> in your power banks.

  <h2 id="gain-dice-by-achieving-goals">Gain Dice by Achieving Goals</h2>
  <p>Your programming rewards you with fresh power cores after you accomplish any of your goals. Gain new dice...</p>
  <ul style="list-style: none;">
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D4</span> <span class="d4">d4</span> for each <strong>handful</strong> of treasure scanned.</li>
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D20</span> <span class="d20">d20</span> when you scan a <strong>powerful</strong> object.</li>
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D6</span> <span class="d6">d6</span> after obtaining a sample from a <strong>weak</strong> creature.</li>
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D12</span> <span class="d12">d12</span> after obtaining a sample from a <strong>strong</strong> creature.</li>
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> <span class="d8">d8</span> after you’ve <strong>entered</strong> a new area.</li>
  <li><span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D10</span> <span class="d10">d10</span> after you <strong>completed</strong> scanning and sampling an area.</li>
  </ul>
  <p>If your banks are full when you gain a new die, the oldest die is converted into Overpower. Overpower can be spent to re-roll your dice, but it also acts as a high score. Try to earn as much Overpower as possible!</p>

## Spend Dice to Overcome Obstacles

Unfortunately, treasure is often hidden, most creatures don't like being sampled, and obstacles prevent you from exploring further. For each creature or obstacle you must spend enough Power to exceed one of its Stats.

Stats like: Armor Class, Health Points, Difficulty Class, Defenses, Saving Throws, Damage Dealt, Dexterity, Strength, Speed, Intelligence, or anything similar. If none of the Stats make any sense, or all of them are above 20, simply roll 2d6 to determine the Number of the creature or obstacle.

Dice contain Power equal to the number they show. A <span class="d8">d8</span> showing [6] and a <span class="d20">d20</span> showing [6] are both worth 6 Power. Click on a die to spend it. Once you spend enough power to exceed any one of the creature's or obstacle's Stats, you overcome it and may continue to pursue your goals.

You may choose to end your adventure at any time. Sometimes going further isn't worth the cost. Share your final Overpower score with others using the #OverpoweredSR hashtag and see if anyone can beat it!

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Cute robots from [Mounir Tohami](https://mounirtohami.itch.io/26-animated-pixelart-robots).

> Rules and Dice App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse it with attribution.

## David's High Scores

- Sepulchre of Seven: **70 Overpower**. [Detailed Play Report](/david/2023/01/sepulchreoverpowered).

And more to come soon!

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
