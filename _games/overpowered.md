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
 - Compare your high score to others. Be number one!

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
- Gain a <span style="font-family: DicierHeavy, sans-serif;">ANY_ON_D8</span> <span class="d8">d8</span> when you enter a **new** area.
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

## Detailed play report of [The Sepulchre of Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven).

Orbiting a green-blue planet, Ceylon-4 is activated. His matte-black shell conceals a host of deadly weaponry that he'll soon unleash upon...wait. His weapons. Gone. All gone. A final message from his creators instills the following command: "Learn".

Fine. Ceylon can learn. He'll show them all and be the best damn explorer the other bots have ever scanned. With reluctance he descends towards the planet to...learn. Ugh.

- [Click this link to see Ceylon's Power Banks at this point in the playthrough](https://www.technicalgrimoire.com/overpowered?treasure=20-11,4-2&foe=12-8,6-4&obstacle=10-1,8-6&overpower=0)

*Player notes will be in italics. Sepulchre of the Seven is a beautiful adventure by HexaGnome. Legends and myth clash with forgotten dreams in an emotional roller coaster. We'll see how much that Ceylon-4 picks up on as he speedruns through this module.*

#### 1. Roadside sanctuary

Ceylon is picking up a dim source of "magic", or something giving off spectral energy. Floating a few feet off the ground, his river-stone shape is difficult to notice in the dark of night. 

> Night Random Encounter: 3 Kobold hunters. AC 7 [12], HD 1/2, Att 1 × nailfitted clubs (1d4) or 1 x blowguns (1d2 + poison) or 1 x molotov (bodyguards), THAC0 19 [0], MV 60’ (20’), SV D14 W15 P16 B17 S18 (NH), ML 8, AL Chaotic

Ceylon decides this is his first opportunity to "learn". He activates a weak stunner and gives all three of them a good zap. After snipping off a bit of hair, he scans the small pile of meager belongings. Faint tracks lead further into the cave where they came from.

- Gains 1d8 after entering a new area.
- Spends a d8 to beat the first kobold's HP of 4.
- Spends a d6 and a d4 to beat the second kobold's HP of 4.
- Spends a d12 to beat the third kobold's HP of 4.
- Gains 3d6 after sampling their sleeping forms (weak creatures).
- Gains 1d4 from their small pile of treasure.
- Gains 1d10 after completing this area.
- [Click this link to see Ceylon's Power Banks at this point in the playthrough](https://www.technicalgrimoire.com/overpowered?treasure=4-2,20-11&foe=6-5,6-6,6-6&obstacle=10-1,8-5,10-1&overpower=0)

#### 2. Kobold deathtrap

Ceylon floats inside, noting the 2 kobolds playing some kind of gambling game, the arrow slits, the north door, the statue, and the well.

- Gains 1d8 after entering a new area.

Ceylon decides to explore a bit first before trying to stun the kobolds. Especially if someone is watching through the keyholes. He glides along the roof of the cavern, essentially invisible. The doors to rooms 3, 4, and 5 are locked. Damn. He'll have to make a little noise anyway. With a resigned warble he readies his stunner again.

- Spends 2d6 to stun both kobolds (4HP).
- Gains 26 for sampling weak creatures.
- Gains 1d10 for clearing the area.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-2,20-11&foe=6-4,6-1,6-6&obstacle=10-4,8-6,10-1,8-5&overpower=1)

No one has been alerted yet. Ceylon hovers over to the door leading to room 3, and prepares to enter.

#### 3. Kobold antechamber

Ceylon nudges the door open just wide enough to slip through. However the door makes a loud CLICK as it shuts behind him and a surprised grunt comes from behind an arrow slit. A molotov cocktails follows soon after and the room is quickly ablaze.

> Firetrap: When the door closes: Kobolds throw a bundle of 5 molotovs through each arrow slit (save vs petrification, 2d8 damage). 

*Whenever a stat has a range like "2d8 damage" I prefer to choose the highest possible value. In this case, 16.*

Ceylon is forced to strengthen his shields while he scans for an escape route. After a few moments he spots the secret door and makes a beeline fore it. The stone door is barred on the other side, but Ceylon's shields can melt almost anything. He strengthens them again, melting a small tunnel to the other side, escaping the flames and arriving in a new area.

*The stone door doesn't have any stats, so I just rolled two 6-sided dice to determine what number I need to beat to melt through it. I got a total of 6.*

- Gains 1d8 for entering a new area.
- Spends a d20 and a d6 to withstand the flames (16 damage).
- Spends a d8 and a d6 to melt through the door (difficulty of 6).
- Gains 1d10 for completing an area.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-2&foe=6-4&obstacle=10-4,8-1,10-4,10-1&overpower=6)

#### 4. Kobold cave

Ceylon quickly finds the kobold who threw the molotov cocktail at him. He stuns the kobold with a slightly higher stun setting, purely out of spite. Then reluctantly takes a sample and continues to explore the rest of the room.

> Supply crates: 3,500 cp ◆ emerald (350 gp) ◆ 2 molotovs ◆ rope (50’) ◆ saddlebags ◆  carpenter tools ◆ 2 gold teeth (10 gp) ◆ 6 Humansbane arrows (2d6 damage against humans) ◆ a broken shortbow

Jackpot. Here's some treasure with dubious artistic value. Still counts as "learning"!

*A handful of treasure is purposefully vague, so go with your gut. In this case, I think the emerald counts as 1 handful, the copper pieces count as 3 handfuls, and the rest count as another 2 handfuls.*

Ceylon passes by a kobold cook minding his own business. No need for a sample here; he's seen enough kobolds. Ceylon passes through one of the drainage holes and melts through the wooden door into room 6.

- Gains 1d8 for entering a new area.
- Spends a d4 and a d6 to stun the kobold (4 HP).
- Gains 1d6 for sampling a weak creature.
- Gains 6d4 for 6 handfuls of treasure.
- Spends 1d4 and 1d6 to melt through the door (difficulty 4).
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-3,4-4,4-2&foe=&obstacle=8-4,10-4,8-1,10-4&overpower=13)

*If I had stunned that last kobold cook I would have gotten the completion bonus, but I figure Ceylon is ready to move on. He might start skipping rooms more liberally from now on.*

#### 6. Time-worn honey trap

The floor is covered in a gross sticky substance. Ceylon hovers over it, nervous. If that stuff got into his shell...ugh. 

> Blue-black substance (covering the entire floor). Sticks to everything. Save vs paralysis
every 10’ or become stuck. Highly flammable. Crossing with a torch: 1-in-20 chance per  round of setting the room alight.

*In this case, it's unlikely Ceylon would be affected by such a trap. But it's a neat room, and I want to interact with it.*

Ceylon is so busy examining the floor that he doesn't notice a big glob of goo drop onto him. In a panic he flares his shields, hoping to burn away the substance. The goop ignites, and flames quickly fill the room.

*The molotov trap dealt 2d8 damage, we'll use that value again here.*

Ceylon rushes to the end of the room, past the flaming goop, quickly scanning some fallen skeletons before darting into a side passage.

- Gains 1d8 for entering a new area.
- Spends 2d4, 1d10, and 1d8 to withstand the flames (16 damage).
- Gains 1d4 for the skeleton treasures.
- Gains 1d10 for clearing the room.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-3,4-2&foe=&obstacle=10-7,8-3,8-1&overpower=17)

#### 7. Starved Grey Ooze

This alcove was a mistake. A rusty iron door blocks the way. Ceylon blasts it open with a small force projector and rushes in only to get swallowed by an ooze monster.

> 1 Grey Ooze: AC 8 [11], HD 3* (13hp), Att 1 × touch (2d8), THAC0 17 [+2], MV 10’ (3’), SV D12 W13 P14 B15 S16 (2), ML 12, AL Neutral, XP 50. Energy immunity: Unharmed by cold or fire. Swallowed scattered diamonds (worth 2,100 gp).

Ceylon flares his shields, but they don't have much effect. This creature isn't bothered by energy fields. Ceylon barely has the presence of mind to scan the beautiful diamonds embadded in this things "flesh". He flares his engines, straining to escape the goopy mass. He bursts out from it's "stomach" and quickly darts back into the previous room.

*The shield won't help him deal or withstand damage from this creature. So instead Ceylon will outrun it. It has a move speed of 10, so he spends enough power to beat that. I also decide this counts as a strong creature, especially since it resists Ceylon's normal tools.*

- Spends 2d4 melting through the door (rolled up a difficulty of 4).
- Gains 1d8 for entering a new area.
- Spends 2d8 and 1d10 to outrun the ooze (movement of 10).
- Gains 1d12 for sampling a strong creature.
- Gain 6d4 for scanning the diamonds.
- Gain 1d10 for completing the area.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-2,4-1,4-4,4-4&foe=12-6&obstacle=10-10,8-2&overpower=21)

#### 9. Unskilful Frescos

Ceylon scans the murals, but doesn't really pay much attention. He continues forward and takes a right, heading towards a large chamber.

*These aren't exactly a handful of treasure, but they should count for something.*

- Gains 1d8 for entering a new area.
- Gains 3d4 for scanning the murals.
- Gains 1d10 for completing the area.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-3,4-1,4-3,4-2&foe=12-6&obstacle=10-2,8-6,10-10,8-2&overpower=30)

#### 13. Hall of the loyal retainers

Ceylon is immediately met with a thick locked door. Just before he melts a hole through it, he notices the detailed carvings and silver inlay. He scans it first and THEN melts a hole through it.

- Gains 1d8 for entering a new area.
- Gains 2d4 for scanning the door.
- Spends 1d10 to melt the door (difficulty 8).
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-1,4-2,4-3,4-1&foe=12-6&obstacle=8-4,10-2,8-6&overpower=37)

Inside is a large chamber lined with alcoves. Each alcove has a few skeletons huddled within. The chamber is LITTERED with treasure.

> 8 silver candelabras (5’ tall, between alcoves, 400 gp each). Seven huge statues carved from Blue Amber. Each skeleton wears a shiny amulet (leaf ornaments; worth 150 gp.
3,900 gp in total). A potion of polymorph.

- Gains 10d4 for all the scanned treasures.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-2,4-1,4-2,4-3&foe=12-6&obstacle=8-4,10-2,8-6&overpower=63)

One of the alcoves hides a secret door leading to room 14. Ceylon eagerly heads down the passage.

#### 14. Beekeeper's Tomb

At the end of the passage is a tomb with bee-related imagery. Ceylon uses his force project to blast the lid off the sarcophagus. After scanning some treasure, he peers at the shelves, findings a few bits and bobs.

Nothing else. Maybe he missed something back in that big chamber.

- Gains 1d8 for entering a new area.
- Spends 3d4 opening the sarcophagus (difficulty 6).
- Gains 2d4 of treasure from the sarcophagus.
- Gains 2d4 of treasure from the shelves.
- Gains 1d10 for completing the room.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-2,4-2,4-4,4-2&foe=12-6&obstacle=10-8,8-5,8-4,10-2&overpower=70)

#### 13. Hall of the loyal retainers (again)

Ceylon explores the next few alcoves and detects another secret door. This one is quite large and thick. He prepares his shield to melt a tunnel through it. Just as he begins, however, all of the skeletons stumble out of the alcoves, brandish weapons, and begin running towards Ceylon.

Oops.

> 26 Skeletons: AC 7 [12], HD 1 (4hp each), Att 1 × rusty weapon (1d6), THAC0 19 [0], MV 60’ (20’), SV D12 W13 P14 B15 S16 (1), ML 12, AL Chaotic, XP 10

*The adventure intends this to be a big threat, but once Ceylon melts a few inches into the door, the skeletons won't be able to hurt him. Instead of having Ceylon fight all 26 skeletons, we'll have him take a few hits from some of them and spend most of his energy melting through this huge door.*

- Spend 1d12, 1d10, 1d8 withstanding 18 damage from the skeleton's attacks (3 attacks, 6 damage each).
- Spend 4d4, 1d8, and 1d10 melting through the door (difficulty 15).
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=&foe=&obstacle=&overpower=70)

#### 15. Jayne's True Tomb

Exhausted and drained, Ceylon shoves open the door and drifts into the tomb. Green lights settle around him like some kind of spectral escort. He scans the beautiful bas-relief door as an afterthought.

- Gains 1d8 for entering a new area.
- Gains 1d4 for scanning the door.
- [Power Banks](https://www.technicalgrimoire.com/overpowered?treasure=4-3&foe=&obstacle=8-8&overpower=70)

As he turns back to the sarcophagus, a ghostly figure manifests in front of him giving off a powerful energy signature.

"Hello, little light. I greet thee and commend thine efforts in reaching me. You have traveled far indeed. Why have you disturbed my rest?"

Ceylon thinks for a moment, pondering. This is the first being who's actually tried to TALK to him. How bizarre. "Is it truly restful? This place doesn't seem like a home to anyone but scavengers and specters."

The tall woman smirks. "True. My rest is fitful, for soon the Sunnestead Sorceresse shall return and I shudder at the prospect of facing her once again. I'd rather find true rest, somehow."

Ceylon examines his near-empty power banks. "What if I could offer you more than rest? My masters have sent me to extract knowledge and learn what we can from distant places. There is much you could teach our people."

"I am bound to this place while my companions suffer. And their pain is long-suffering indeed." The pale figures offers a sad smile. "Yet, I will sit a while and enjoy this momentary distraction. Ask what you will, and I shall answer."

And with that, Ceylon-4 took the first step in a life-long journey of learning. He never quite put away his weapons, but he learned to talk first, and shoot only when necessary.

**Final Score: 70 Overpower**

*Thanks for reading this playthrough! It was a beautiful adventure that I only skimmed the surface of. I probably could have explored more, but Ceylon's power banks ran low and this seemed like a fun way to end the adventure. I hope you get the chance to try [Sepulchre of Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven) out for yourself! If you do, tell me your high score.*

## David's High Scores

- [Sepulchre of Seven](https://www.drivethrurpg.com/product/366868/The-Sepulchre-of-Seven): 70.

And more to come soon!

<script async src="/assets/generator_resources/overpowered.js" language="javascript" type="text/javascript"></script>
