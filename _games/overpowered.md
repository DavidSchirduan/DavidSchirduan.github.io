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

Speedrun tabletop RPG adventures as a hardworking, explorer robot. Choose your paths wisely, manage your energy cores efficiently, and make your creators proud! A solo RPG compatible with any game that uses math.

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR1.gif){: .rightBotGif}

 - Complete rules, mobile app, and a detailed example of play available further down this page.
 - Solo RPG that lets you play through adventure modules from any game in an hour or two.
 - Engaging resource-management mechanics engage you with tough decisions and big rewards.
 - Doubles as a GM prep tool to familiarize yourself with a new setting or module.
 - Skip to the bottom for detailed play reports and my personal high scores for several adventures. Can you beat me?

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR4.gif){: .rightBotGif}

Over the next few months I hope to release more content for the **Deluxe Edition**:

 - Print and Play rules; no app required
 - Adventures specifically for Overpowered
 - Genre re-skins & reworks
 - Expansions, extra abilities, more customization
 - And more! Let me know what you want to see!

<div class="shopping-buttons">
<button class="crt btn btn-primary" onClick="document.getElementById('tributeScore').scrollIntoView();" style="overflow: hidden;position: relative;">Free Rules + App</button>
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Deluxe: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/318164/Tempered-Legacy" class="btn btn-primary dtrpgBTN">Deluxe: $3.20<br>at DriveThruRPG</a>
</div>

## How to Play

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR3.gif){: .leftBotGif}

Your creator built you to scan treasure, obtain creature samples, and explore the unknown. There are millions of other bots landing on countless worlds. Will you prove yourself a talented explorer or a waste of power?

You are the size of a breadbox. Your smooth metal shell hides advanced technology and a dash of magic. You start with a <span class="d4">d4</span>, <span class="d6">d6</span>, <span class="d8">d8</span>, <span class="d10">d10</span>, <span class="d12">d12</span>, and a <span class="d20">d20</span> in your power banks.

Use the **Dice App** below to manage your power banks and play Overpowered.

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
        <td style="padding-top: 1rem;"><button onclick="gainDie(4)" class="dicierHeavy">ANY_ON_D4<p>HANDFUL</p></button></td>
        <td style="padding-top: 1rem;"><button onclick="gainDie(6)" class="dicierHeavy">ANY_ON_D6<p>WEAK</p></button></td>
        <td style="padding-top: 1rem;"><button onclick="gainDie(8)" class="dicierHeavy">ANY_ON_D8<p>ENTERED</p></button></td>
    </tr>
    <tr>
        <td><button onclick="gainDie(20)" class="dicierHeavy">ANY_ON_D20<p>POWERFUL</p></button></td>
        <td><button onclick="gainDie(12)" class="dicierHeavy">ANY_ON_D12<p>STRONG</p></button></td>
        <td><button onclick="gainDie(10)" class="dicierHeavy">ANY_ON_D10<p>COMPLETED</p></button></td>
    </tr>
    </table>
    <p id="rerollButton" style="display: none;">
        <a onclick="rerollDice();return false;"></a>
    </p>
    <div id="crtButton">
    <p><a class="d4" onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a></p>
    <p>Bookmark this page to save your session</p>
    </div>
</div>

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Cute robots from [Mounir Tohami](https://mounirtohami.itch.io/26-animated-pixelart-robots).

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR2.gif){: .rightBotGif}

## Gain Dice by Achieving Goals

Your programming rewards you with fresh power cores after you accomplish any of your goals:

- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D4</span> <span class="d4">d4</span> for each **handful** of treasure scanned.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D20</span> <span class="d20">d20</span> when you scan a **powerful** object.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D6</span> <span class="d6">d6</span> after obtaining a sample from a **weak** creature.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D12</span> <span class="d12">d12</span> after obtaining a sample from a **strong** creature.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> <span class="d8">d8</span> after you've **entered** a new area.
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D10</span> <span class="d10">d10</span> after you **completed** scanning and sampling an area.

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR5.gif){: .rightBotGif}

If your banks are full when you gain a new die, the oldest die is converted into Overpower. Overpower can be spent to re-roll your dice, but it also acts as a high score. Try to earn as much Overpower as possible!

## Spend Dice to Overcome Obstacles

Unfortunately, treasure is often hidden, most creatures don't like being sampled, and obstacles prevent you from exploring further. For each creature or obstacle you must spend enough Power to exceed one of its Stats.

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR6.gif){: .rightBotGif}

Stats like: Armor Class, Health Points, Difficulty Class, Defenses, Saving Throws, Damage Dealt, Dexterity, Strength, Speed, Intelligence, or anything similar. If none of the Stats make any sense, or all of them are above 20, simply roll 2d6 to determine the Number of the creature or obstacle.

Dice contain Power equal to the number they show. A <span class="d8">d8</span> showing [6] and a <span class="d20">d20</span> showing [6] are both worth 6 Power. Click on a die to spend it. Once you spend enough power to exceed any one of the creature's or obstacle's Stats, you overcome it and may continue to pursue your goals.

![logo.gif]({{site.url}}/images/overpoweredExamples/OSR7.gif){: .leftBotGif}

You may choose to end your adventure at any time. Sometimes going further isn't worth the cost. Share your final Overpower score with others using the #OverpoweredSR hashtag and see if anyone can beat it!

> Rules and Dice App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse it with attribution.

## David's High Scores

- Sepulchre of Seven: **70 Overpower**. [Detailed Play Report](/david/2023/01/sepulchreoverpowered).

And more to come soon!

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
