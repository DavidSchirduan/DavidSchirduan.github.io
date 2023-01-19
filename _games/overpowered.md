---
date: 2022-12-30
layout: project
title: Overpowered Solo Roleplaying
caption: $3 Rulebook
screenshot:
  src: /images/overpoweredteaser.png
image: /images/overpoweredteaser.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Speedrun any RPG adventure as a hardworking, explorer robot. Choose your paths wisely, manage your energy cores efficiently, and make your creators proud!

 - A Solo RPG that allows you to play through your favorite adventures in an hour or so.
 - Doubles as a GM prep tool.
 - Compare your high score to others. Be number one!

## How to Play

Your creator built you to scan treasure, sample creatures, and explore the unknown. There are millions of other bots landing on countless worlds. Will you prove yourself a talented explorer or a waste of power?

You are the size of a breadbox. Your smooth metal shell hides advanced technology with a sprinkle of magic. Three different power banks can store four dice each. You start with a <span class="d4">d4</span>, <span class="d6">d6</span>, <span class="d8">d8</span>, <span class="d10">d10</span>, <span class="d12">d12</span>, and a <span class="d20">d20</span> in your power banks.

<div class="over-card">
  <h3 id="rerollButton"><a style="cursor:pointer;" onclick="rerollDice();return false;">REROLL FOR 10 OVERPOWER</a></h3>
  <h3 id="tributeScore">OVERPOWER<br><span>0</span></h3>
  <div id="overpool" class="row">
    <div id="treasureCore" class="col-4">
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
    </div>
    <div id="foeCore" class="col-4">
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
    </div>
    <div id="obstacleCore" class="col-4">
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
    </div>
    <div class="col-4">
      <p id="scanner">SCANNER BANK</p>
    </div>
    <div class="col-4">
      <p id="sampler">SAMPLER BANK</p>
    </div>
    <div class="col-4">
      <p id="explorer">EXPLORER BANK</p>
    </div>
  </div>
  <!-- Add Dice Buttons -->
  <div style="border-top: 3px solid grey;" class="row">
    <div id="handfulGain" class="dwhite col-4">
      <button style="padding-top: .25em;" onclick="gainDie(4)" class="dicierHeavy"><p>ANY_ON_D4</p></button>
      <p>TREASURE</p>
    </div>
    <div id="weakGain" class="dwhite col-4">
      <button style="padding-top: .25em;" onclick="gainDie(6)" class="dicierHeavy"><p>ANY_ON_D6</p></button>
      <p>WEAK</p>
    </div>
    <div id="obstacleGain" class="dwhite col-4">
      <button style="padding-top: .25em;" onclick="gainDie(8)" class="dicierHeavy"><p>ANY_ON_D8</p></button>
      <p>ENTER</p>
    </div>
  </div>
  <div class="row">
    <div id="magicGain" class="dwhite col-4">
      <button onclick="gainDie(20)" class="dicierHeavy"><p>ANY_ON_D20</p></button>
      <p>POWERFUL</p>
    </div>
    <div id="strongGain" class="dwhite col-4">
      <button onclick="gainDie(12)" class="dicierHeavy"><p>ANY_ON_D12</p></button>
      <p>STRONG</p>
    </div>
    <div id="areaGain" class="dwhite col-4">
      <button onclick="gainDie(10)" class="dicierHeavy"><p>ANY_ON_D10</p></button>
      <p>CLEARED</p>
    </div>
  </div>
  <div id="rerollPool" style="border-top: 3px solid gray;" class="row">
    <div id="crtButton" class="col-12">
    <p id="crtSwitch"><a class="d4" style="cursor:pointer;" onclick="toggleCRT();return false;">TOGGLE VISUAL EFFECTS</a></p>
    <p>Bookmark this page to save your session.</p>
    </div>
  </div>
</div>

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes.

## Gain Dice

Your creators reward you with fresh surges of Power after you accomplish any of your goals:

- Gain a <span class="d4">d4</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D4</span> for each handful of treasure scanned.
- Gain a <span class="d6">d6</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D6</span> when you scan a powerful object.
- Gain a <span class="d8">d8</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> after sampling a weak creature.
- Gain a <span class="d10">d10</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D10</span> after sampling a strong creature.
- Gain a <span class="d12">d12</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D12</span> when you enter a new area.
- Gain a <span class="d20">d20</span> <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D20</span> after you have scanned and sampled everything in an area.

If your banks are full when you gain a new die, the oldest die is converted into Overpower. Overpower can be spent to re-roll your dice, but it also acts as a high score. Try to earn as much Overpower as possible!

## Overcoming Obstacles

Unfortunately, treasure is often hidden, creatures don't like being sampled, and obstacles prevent you from exploring further. For each secret, creature, and obstacle, you must spend enough Power to exceed one of its Numbers.

- To sample a hostile creature, you may need to pierce its Armor Class.
- To disarm a dangerous trap, you can overcome its Difficulty Class.
- To get past a lava pit, your shield withstands its Highest Damage.
- To stun a fleeing creature you may overwhelm its Health Points.
- Or whatever Number makes the most sense. The Number you choose should reflect however you're dealing with that obstacle: running past it, stunning it, sneaking by, attacking head-on, etc.

Dice contain Power equal to the number they show. A <span class="d8">d8</span> showing [6] and a <span class="d20">d20</span> showing [6] are both worth 6 Power. Click on a die to spend it. Once you spend enough power to exceed the obstacle's Number, you overcome it and may continue to pursue your goals.

You may end your adventure at any time. Sometimes going further isn't worth the cost. Share your final Overpower score with others using the #OverpoweredSR hashtag and see if anyone can beat it!

## David's High Scores

As I clear more adventures I'll post my scores here. Share your high scores with #OverpoweredSR, and see if you can beat me!

- [Sepulchre of the Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven?term=sepulchre+of+). 84 Tribute.  
*A difficult adventure, but with LOTS of treasure. I failed my first try, and my second was okay. Might try it again someday. This one was painful to speedrun because it's so beautiful and rich; I felt like a vandal running through it guns blazing.*
- [The Waking of Willowby Hall](https://www.drivethrurpg.com/product/348439/The-Waking-of-Willowby-Hall). 109 Tribute.  
*After I immediately slew Bonebreaker Tom, the rest of the adventure was a breeze!*
- [The Isle of the Plangent Mage](https://www.drivethrurpg.com/product/348884/The-Isle-of-the-Plangent-Mage). 70 Tribute.  
*My wife played through this one, and even as someone who never GMed a game she enjoyed the chance to play through an adventure in a breezy, accelerated way.*

## Detailed play report of [Tomb of the Serpent Kings](https://www.drivethrurpg.com/product/252934/Tomb-of-the-Serpent-Kings--Deluxe-Print-Edition).

Ceylon-4 is ejected from the Grand Cathedral orbiting earth. The wind whips past its face and the grounds grows larger in its one ocular sensor. After it smashed into the earth, Ceylon-4 leaps from the crater and begins sprinting towards the supposed tomb, eager to fulfill its programming and recover valuable power for Her Eminance.

> Starting Pool is 1d4, 1d6, 1d8, 1d10, 1d12, 1d20. click [this link](https://www.technicalgrimoire.com/overpowered?treasure=20-5,4-4&foe=12-8,6-5&obstacle=10-5,8-5&rerolls=3&tribute=0) to load my session and play along. 

**Rooms 1, 2, 2** Break two snake statues, resist two poison gas traps (6 damage, 6 damage), loot amulets.

- Spend d12 (showing 8)
- Spend d4+d6 (showing 9)
- Gain 2d8 for overcoming both poison gas obstacles, 1d4 for a handful of treasure, 2d10 for clearing rooms

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**3,4** Skip them, the real loot is probably deeper in. *I know there is some loot in these rooms, but I was eager to get further in the dungeon and started skipping rooms more liberally.*

**5** Hammer Trap that deals 16 damage (d6+d6+4).

- Spend 1d10 + 1d4 + 2d8 (total 19) to withstand the damage.
- Gain 1d8 for overcoming the obstacle, 1d10 cleared the room.

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=20-5&foe=&obstacle=10-2,8-3,10-4&rerolls=3&tribute=10) to load my session at this point.

**6** Three Skeletons (8HP, 6 damage).

- I'm going to spend a re-roll.
- Spend 1d8, 1d10, 1d12 to overcome the 6 damage from each.
- Gain 3d6 for defeating minor foes, 1d10 for clearing the room.

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**7, 8** Detect the hidden passage, dash down the stairs.

**9, 10** Melt the statue with the laser sword, loot the secret treasure room. Since this didn't require a save or check, it was free to get past the statue.

- Gain 1d4 for the treasure.

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**11** Two mummy claws (6 damage).

- Spend 1d8, 1d10
- Gain 2d6, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**12** Lightning Trap (12 damage). I assumed Ceylon made the save, halving the damage.

- Spend 2d10
- Gain 1d4, 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**13** Snake Skeleton (24HP, 8 damage).

- Spend 1d10
- Gain 1d4, 1d6, 1d10 

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**14** Black Pudding (40HP, 18 damage).

- Reroll my dice pool, new Total: 65
- Spend 2d10
- Gain 1d4, 1d6, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**18** Spikes (3 damage, I assume I saved for half)

- Spend 1d6
- Gain 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**19** Guardian (48HP, AC 18, 20 damage)

- Spend 1d4, 1d8, 1d10
- Gain 1d12 for overcoming a notable foe, 1d10 for clearing the room.

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**20, 22** Another Hammer Trap (10 damage). *See above where I got the damage wrong.*

- Spend 1d4, 1d12
- Gain 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**23, 24** Skeleton Jelly (8HP, 4 damage)

- Spend 1d6
- Gain 1d6, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**25** Pit Trap (12 damage)

- Spend 1d8, 1d10
- Gain 1d8, 1d10 (not enough treasure to count as a handful)

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**26, 27, 28** I know the big treasure room lies behind this thick door. I COULD blast through it, but I decide I want to find the key to this door so I don't damage anything inside. I also want to fight a big boss because that sounds like fun.

**30** Sacrifice Pit (12 damage)

- Spend 2d10
- Gain 1d4, 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**31, 32** I free the prisoner, and they flee. I loot the rest of the room freely.

- Gain 3d4

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**33** Statue puzzle, poison gas (6 damage), gold pile

- Spend 1d8
- Gain 4d4 treasure (could probably be more, but 4 handfuls seems like a good amount)

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**34** Magic Eggs

- Gain 1d20 for absorbing a magical item

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**35** Pit trap deals 6 damage three times, and then another 12 damage (30 total to overcome). I assumed the max damage in a large trap. A smarter robot might avoid more of that damage, but Ceylon-4 is more direct.

- Spend d20 (showing 17), d8 (showing 8), d8 (showing 8)
- Gain 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**37** Pit Trap (12 damage)

- Reroll (to try and get some high d8s). New Total: 83
- Spend 1d6, 1d10
- Gain 1d8, 1d10

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**38** Basilisk (28HP, AC 18, 10 damage)

- Spend 1d4, 2d10
- Gain 1d10, 1d12
- I now have the key to the treasure room

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**28, 29** Big Treasure Room. The adventure doesn't explicitly say what lies beyond. But as a fun reward I'll give myself 2 magic items.

- Gain 2d20

> Click [this link](https://www.technicalgrimoire.com/overpowered?treasure=4-4,20-5&foe=&obstacle=10-4,10-8,8-3,8-4&rerolls=3&tribute=10) to load my session at this point.

**Tribute Rerolling** Whenever an adventure ends, I try to re-roll the dice a bunch of times to see what my high score can be with my final pool. By this point there's always at least one die showing a "1". 

I ended up re-rolling 8 times before I settled on my final score.

1. 120
2. 107
3. 103
4. 85
5. 102
6. 99
7. 84
8. 109

- Final Tribute Score for Tomb of the Serpent Kings: 109
- Playtime: 65 minutes

<style>
  .over-card h3 {
  margin-top: 0px;
  }
</style>

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
