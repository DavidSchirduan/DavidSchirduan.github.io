---
date: 2021-01-01
layout: project
title: ABIDE
caption: >
  Elders Fighting Against their Harvest
  <br>
  RPG Rulebook
screenshot:
  src: /images/Ripe-teaser.png
image: /images/Ripe-teaser.png
hide_description: true
permalink: abide
featured: false
redirect_from:
  - "/ripe"
---

<div class="shoppingCard">
  <div class="shoppingColumn">
    <p>You are an Elder. You have seen and accomplished much throughout your 70 years of life. You’ve done a little of everything, mastered a few skills, and have survived dozens of trials and dangers. You know what you’re capable of.</p>
    <p>During your 70th year a Harvester will descend from the skies to hunt you down and take you away. Even if you manage to vanquish it, your Harvester will return sometime during your 71st year. It will continue to hunt you, year after year, until it either succeeds in its grim task or you perish in some other fashion.</p>
    <p>You can’t do this alone!</p>
  </div>
  <div class="row" style="justify-content:space-around">
    <div class="col-10 col-md-5">
      <a class="btn wyrd-btn" href="/files/Ripe_final_beta.pdf"><h3>Playtest PDF</h3></a>
    </div>
    <div class="col-10 col-md-5">
      <input class="ripetextbox" type="text" id="enterElderName" placeholder="Enter an Elder's Name">
      <a class="btn wyrd-btn" onclick="return ripe_generate();"><h3>Summon Harvester</h3></a>
    </div>
  </div>
</div>

**Wasn't this called RIPE before?** [Learn more about the name-change here](/david/2021/06/LCCReturnsRIPE).

## How is ABIDE different?

A lot of the rules and procedures of ABIDE will be familiar to you if you’ve played other roleplaying games. But some things may be new to you:

**Conversation is gameplay.** Who will do what? What’s the plan? How are we accomplishing this? Discussions are the core part of the game.

**Teamwork is required.** Instead of taking turns, ABIDE has a heavy focus on coordinated teamwork. The players succeed or fail together.

**Finding life under darkness.** The threat of the Harvesters is dark and grim. Every Elder processes this fear in their own way. But everyone strives to create a joyful, fulfilling life in spite of their fears. Embrace the small joys your Elders discover, and help your Elder work through their struggles and Burdens.

ABIDE was the first game I developed publicly, and the one I've playtested the most. If you're curious about its development you can see [all previous versions here](https://drive.google.com/drive/folders/1kxKYyoTanjiQ2kzvjiYyyh-7HpV4jhwG?usp=sharing).

<div class="container generatorCard" id="harvesterCard" style="display:none;">
<div class="row centerButtons">
<div class="col-md-5 col-12">
    <h3 class="tightSpacing" id="genElderName"></h3>
  </div>
  <div class="col-md-5 col-12">
    <button class="btn wyrd-btn" id="age1" onclick="agePlus()" style="display:none;">Age+1</button>
  </div>
</div>
<div id="harvesterDesc"></div>
</div>



## Example of Play

> The GM starts by describing the situation, threats, opportunities, and so on.

**GM:** You emerge from the forest and come upon a dirt path. Your pursuers are close behind. The path leads east to a nearby town, or west to the mountains. What do you want to do?

**Tabitha:** We should probably ditch our pursuers first, right? Or fight them off?

**Rita:** Nah, if we keep traveling then they’ll never catch up!

**Louis:** Agreed. There are too many to fight. If we make it to the next town fast enough, then we can find some help. Hopefully those people won’t hate Elders.

> The GM takes all the ideas and forms a Task from them.

**GM:** How does this Task sound: ‘Get to town before the extremists.’

> All the Players agree. 
> The GM has a lot of cool ideas for the extremists, so racing them should be a big deal. The GM gives the Task 20 Progress, 5 Roll Limit. This trip could take a few hours, or it could take weeks. The Progress and Roll Limit are more about pacing rather than about time or difficulty.

**Rita:** Wow, this is a long journey, huh? I guess we should get started. I’m going to use my officer’s cloak to drag along the ground behind us and cover our tracks as we walk. My old commander would kill me if he saw me purposefully dirtying my uniform!

> The fancy cloak is assisting Rita with this Task, so he gets to roll two dice and pick one result. Rita rolls a 14 and an 8; he chooses the 14 which makes 4 Progress for the Task. He decides to spend another 3 Energy from his Reserves for 3 more Progress. 

> The Task has 13 Progress left and 4 Rolls left.

**Tabitha:** I don’t really have a useful item, but I can still help carry stuff and keep pace.

> Any Elder can contribute to a Task as long as their action makes sense. Items just make things easier. Tabitha rolls a 17 which applies 7 Progress to the Task. The Task has 6 Progress left, 3 Roll Limit.

**Tabitha:** Oh no! I had Marked a 17 earlier and it’s still Marked. Dangit. I lose all my Simple Items. I guess I dropped them to keep moving faster? That’s a bummer.

> When an Elder rolls a Marked Number, they should mention it to the group and try to work it into the narrative. But any consequences occur after the roll is complete. Most Marked Numbers won't rob you of your Progress.

**Louis:** Ouch, sorry Tabitha! I can cast my spell DISTANT VIEW to see if the town will let us in as we get close.

**GM:** I don’t think that will help you. Remember the Task is about getting to town before the extremists. We’ll make other Tasks after we get there.

**Louis:** Yeah, but Tabitha and Rita are doing just fine. I think my Elder would be preparing for when they arrive.

**GM:** Ooh, great idea! I’ll make you a new Task for that. How about this:  ‘Scout the town and prepare for arrival’ 

> The GM thinks this should be quick, so gives the task 4 Progress, 2 Roll Limit.

> Louis is using his Spell to see that far ahead; without that spell he couldn’t work on this task at all. It’s allowing him, not assisting him. Louis agrees and rolls a die and gets a 7. Louis Marks a Number and wants to roll again since there is one roll left on this task. The second roll is a 15. 5 Progress is made, the Task is finished!

**GM:** Nice work! By climbing tall trees and using your Spell you get snapshots of the town over the course of your journey. It’s a small place, no walls, only a few guards. 

**Tabitha:** Dangit, they might not be much help against the extremists. Do we even wanna keep going that way? Might be better to keep hiding in the woods.

**Rita:** Yeah, I was hoping it would be a larger town. And I don’t want to endanger anyone else. Can we abandon this task and take our chances in the woods?

**GM:** Yes, but you’ll have to face the consequences for failing at this Task; the extremists will arrive immediately and you won’t have time to prepare.

> Failing a Task always has consequences, in this case it means that the Elders will suddenly have to face the extremists on their own.

**Louis:** Can we make a new Task to hide in the woods? Let them pass us by?

**GM:** I don’t think you’ll have time; besides the whole point of failing the Task is that they catch up to you.

**Tabitha:** You’re right; we’ll just have to handle this as best we can.

**Rita:** …I have a weird and terrible idea. My Harvester is only one checkbox away. Can I trigger it early and have its arrival cause havoc?

**GM:** That’s insane. I love it. We’ll end today’s game on this cliffhanger and see what happens next time. I cannot wait to see this go down!

> The rules of RIPE provide a framework to support your stories; but don't let the rules limit your creativity. Ultimately, the group can play the game however they want!

<script async src="/assets/js/mods-eng-basic.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/tracery.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/js/seedrandom.min.js" language="javascript" type="text/javascript"></script>
<script async src="/assets/generator_resources/ripe.js" language="javascript" type="text/javascript"></script>