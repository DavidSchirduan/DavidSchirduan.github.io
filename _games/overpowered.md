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

Speedrun RPG adventures as a magi-tech construct. All you need is the Google Dice Roller and an OSR adventure you've been wanting to play.

Her Eminent Luminescence granted you technology that exceeds the bounds of magic and reason. Venture forth and return with even more power than you were originally bestowed, lest she darken your visage forever.

<div class="shopping-buttons">
<a target="_blank" href="https://davidschirduan.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Rulebook: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Rulebook: $3.20<br>at DriveThruRPG</a>
<button class="btn btn-primary" onClick="document.getElementById('tributeScore').scrollIntoView();">Online Dice App</button>
</div>

## Features:

 - Play through any old-school adventure in an hour or two.
 - Rules, Examples, and Scoring all fit on one page.
 - Manage your Power Cores by gaining, spending, and rerolling large pools of dice.
 - Compare your high score to others online. Be number one!

## Dice App (Beta)

<div class="over-card">
  <h3 class="crt" id="tributeScore">OVERPOWERED CORES<br>BECOME TRIBUTE: <span>0</span></h3>
  <div id="overpool" class="row" style="margin-top:1em; margin-bottom:1em; padding-bottom:.5em; border-top: 3px solid grey; border-bottom: 3px solid grey;">
    <div id="treasureBank" class="col-4">
      <p>TREASURE CORE</p>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
      <button class="dicierDark">0_ON_D4</button>
    </div>
    <div id="foeBank" class="col-4">
      <p>COMBAT CORE</p>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
      <button class="dicierDark">0_ON_D6</button>
    </div>
    <div id="obstacleBank" class="col-4">
      <p>EXPLORATION CORE<p/>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
      <button class="dicierDark">0_ON_D8</button>
    </div>
  </div>
  <!-- Add Dice Buttons -->
  <div id="gainDice1" class="row">
    <div class="crt col-12"><h3>GAIN NEW DICE</h3></div>
    <div class="dwhite col-4">
      <button onclick="gainDie(4)" class="dicierHeavy">ANY_ON_D4</button>
      <p>HANDFUL</p>
    </div>
    <div class="dwhite col-4">
      <button onclick="gainDie(6)" class="dicierHeavy">ANY_ON_D6</button>
      <p>FOE</p>
    </div>
    <div class="dwhite col-4">
      <button onclick="gainDie(8)" class="dicierHeavy">ANY_ON_D8</button>
      <p>OBSTACLE</p>
    </div>
  </div>
  <div id="gainDice2" class="row">
    <div class="dwhite col-4">
      <button onclick="gainDie(20)" class="dicierHeavy">ANY_ON_D20</button>
      <p>MAGIC</p>
    </div>
    <div class="dwhite col-4">
      <button onclick="gainDie(12)" class="dicierHeavy">ANY_ON_D12</button>
      <p>STRONG</p>
    </div>
    <div class="dwhite col-4">
      <button onclick="gainDie(10)" class="dicierHeavy">ANY_ON_D10</button>
      <p>AREA</p>
    </div>
  </div>
  <div id="rerollPool" class="row">
    <div class="col-4">
      <button onclick="rerollDice()" class="dicierHeavy">ANY_FLIP</button>
      <p>REROLL</p>
    </div>
    <div class="col-4">
      <button onclick="rerollDice()" class="dicierHeavy">ANY_FLIP</button>
      <p>REROLL</p>
    </div>
    <div class="col-4">
      <button onclick="rerollDice()" class="dicierHeavy">ANY_FLIP</button>
      <p>REROLL</p>
    </div>
  </div>
</div>

## Personal High Scores

As I clear more adventures I'll post my scores here. Share your high scores with #OverpoweredSR, and see if you can beat me!

- [Sepulchre of the Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven?term=sepulchre+of+). 84 Tribute.  
*A difficult adventure, but with LOTS of treasure. I failed my first try, and my second was okay. Might try it again someday. This one was painful to speedrun because it's so beautiful and rich; I felt like a vandal running through it guns blazing.*
- [The Waking of Willowby Hall](https://www.drivethrurpg.com/product/348439/The-Waking-of-Willowby-Hall). 109 Tribute.  
*After I immediately slew Bonebreaker Tom, the rest of the adventure was a breeze!*
- [The Isle of the Plangent Mage](https://www.drivethrurpg.com/product/348884/The-Isle-of-the-Plangent-Mage). 70 Tribute.  
*My wife played through this one, and even as someone who never GMed a game she enjoyed the chance to play through an adventure in a breezy, accelerated way.*

## Detailed play report of [Tomb of the Serpent Kings](https://www.drivethrurpg.com/product/252934/Tomb-of-the-Serpent-Kings--Deluxe-Print-Edition).

*NOTE: Due to a misread hammer trap, this speedrun is no longer valid, but is still a useful example of play. I'll update it with another run at some point in the future.*

Ceylon-4 is ejected from the Grand Cathedral orbiting earth. The wind whips past its face and the grounds grows larger in its one ocular sensor. After it smashed into the earth, Ceylon-4 leaps from the crater and begins sprinting towards the supposed tomb, eager to fulfill its programming and recover valuable power for Her Eminance.

> Starting Pool is 1d4, 1d6, 1d8, 1d10, 1d12, 1d20. Total: 24

**Rooms 1, 2, 2** Break two snake statues, resist two poison gas traps (6 damage, 6 damage), loot amulets.

- Spend d8 (showing 7)
- Spend d20 (showing 8)
- Gain 2d8 for overcoming both poison gas obstacles, 1d4 for a handful of treasure, 2d10 for clearing rooms

> 2d4, 1d6, 2d8, 3d10, 1d12. Total: 37

**3,4** Skip them, the real loot is probably deeper in. *I know there is some loot in these rooms, but I was eager to get further in the dungeon and started skipping rooms more liberally.

**5** Hammer Trap (10 damage). *EDIT I misread the damage on this, it should deal 16 damage (6+6+4). WHOOPS!*

- Spend 1d10 (showing 8), 1d4 (showing 3) to withstand the damage.
- Gain 1d8 for overcoming the obstacle, 1d10 cleared the room.

> 1d4, 1d6, 3d8, 3d10, 1d12. Total: 40

**6** Three Skeletons (8HP, 6 damage).

- Spend 1d8, 1d10, 1d12 to overcome the 6 damage from each.
- Gain 3d6 for defeating minor foes, 1d10 for clearing the room.

> 1d4, 4d6, 2d8, 3d10. Total: 30

**7, 8** Detect the hidden passage, dash down the stairs.

**9, 10** Melt the statue with the laser sword, loot the secret treasure room. Since this didn't require a save or check, it was free to get past the statue.

- Gain 1d4 for the treasure.

> 2d4, 4d6, 2d8, 3d10. Total: 34

**11** Two mummy claws (6 damage).

- Spend 1d8, 1d10
- Gain 2d6, 1d10

> 2d4, 6d6, 1d8, 3d10. Total: 48

**12** Lightning Trap (12 damage). I assumed Ceylon made the save, halving the damage.

- Spend 2d10
- Gain 1d4, 1d8, 1d10

> 3d4, 6d6, 2d8, 2d10. Total: 45

**13** Snake Skeleton (24HP, 8 damage).

- Spend 1d10
- Gain 1d4, 1d6, 1d10 

> 4d4, 7d6, 2d8, 2d10, 1d20. Total: 55

**14** Black Pudding (40HP, 18 damage).

- Reroll my dice pool, new Total: 65
- Spend 2d10
- Gain 1d4, 1d6, 1d10

> 5d4, 8d6, 2d8, 1d10. Total: 51

**18** Spikes (3 damage, I assume I saved for half)

- Spend 1d6
- Gain 1d8, 1d10

> 5d4, 7d6, 3d8, 2d10. Total: 59

**19** Guardian (48HP, AC 18, 20 damage)

- Spend 1d4, 1d8, 1d10
- Gain 1d12 for overcoming a notable foe, 1d10 for clearing the room.

> 4d4, 7d6, 2d8, 2d10, 1d12. Total: 53

**20, 22** Another Hammer Trap (10 damage). *See above where I got the damage wrong.*

- Spend 1d4, 1d12
- Gain 1d8, 1d10

> 3d4, 7d6, 3d8, 3d10. Total: 54

**23, 24** Skeleton Jelly (8HP, 4 damage)

- Spend 1d6
- Gain 1d6, 1d10

> 3d4, 7d6, 3d8, 4d10. Total: 59

**25** Pit Trap (12 damage)

- Spend 1d8, 1d10
- Gain 1d8, 1d10 (not enough treasure to count as a handful)

> 3d4, 7d6, 3d8, 4d10. Total: 65

**26, 27, 28** I know the big treasure room lies behind this thick door. I COULD blast through it, but I decide I want to find the key to this door so I don't damage anything inside. I also want to fight a big boss because that sounds like fun.

**30** Sacrifice Pit (12 damage)

- Spend 2d10
- Gain 1d4, 1d8, 1d10

> 4d4, 7d6, 4d8, 3d10. Total: 67

**31, 32** I free the prisoner, and they flee. I loot the rest of the room freely.

- Gain 3d4

> 7d4, 7d6, 4d8, 3d10. Total: 74

**33** Statue puzzle, poison gas (6 damage), gold pile

- Spend 1d8
- Gain 4d4 treasure (could probably be more, but 4 handfuls seems like a good amount)

> 11d4, 7d6, 3d8, 3d10. Total: 84

**34** Magic Eggs

- Gain 1d20 for absorbing a magical item

> 11d4, 7d6, 3d8, 3d10, 1d20. Total: 101

**35** Pit trap deals 6 damage three times, and then another 12 damage (30 total to overcome). I assumed the max damage in a large trap. A smarter robot might avoid more of that damage, but Ceylon-4 is more direct.

- Spend d20 (showing 17), d8 (showing 8), d8 (showing 8)
- Gain 1d8, 1d10

> 11d4, 7d6, 2d8, 4d10. Total: 72

**37** Pit Trap (12 damage)

- Reroll (to try and get some high d8s). New Total: 83
- Spend 1d6, 1d10
- Gain 1d8, 1d10

> 11d4, 6d6, 3d8, 4d10. Total: 79

**38** Basilisk (28HP, AC 18, 10 damage)

- Spend 1d4, 2d10
- Gain 1d10, 1d12
- I now have the key to the treasure room

> 10d4, 6d6, 3d8, 3d10, 1d12. Total: 80

**28, 29** Big Treasure Room. The adventure doesn't explicitly say what lies beyond. But as a fun reward I'll give myself 2 magic items.

- Gain 2d20

> 10d4, 6d6, 3d8, 3d10, 1d12, 2d20. Total: 97

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
