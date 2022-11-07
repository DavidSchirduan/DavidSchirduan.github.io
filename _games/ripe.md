---
date: 2022-11-07
layout: project
title: RIPE
caption: Playtesting
screenshot:
  src: /images/Ripe-teaser.png
image: /images/Ripe-teaser.png
hide_description: true
permalink: ripe
featured: false
redirect_from:
  - "/abide"
---

RIPE is the newest game from Technical Grimoire. It's presented as a **choose your path multiplayer story** that leads into a traditional tabletop RPG book. The playtest demo is freely available below, but the final product will be a shiny hardcover book with art.

**You are an Elder.** You’ve done a little of everything, mastered many skills, and have survived hundreds of trials and dangers. You’re not a young fool who bets on raw strength or blind luck. Rather, you rely on your teammates, experience, and careful planning to achieve your goals.

**Your Harvester is Coming.** Harvesters descend from the sky in a rainbow trail of light and smoke. They make landfall with an earth-shaking crash and emerge from the smoking crater with one goal: Capture their target.

**You Can’t do This Alone.** Outcast by society and hunted by Harvesters, Elders tend to stick together. Instead of taking turns, RIPE has a heavy focus on coordinated teamwork. The players succeed or fail together.

## Playtest / Demo

RIPE is an active development (we add new stuff every week or so). 

[Join the newsletter for updates](https://tinyletter.com/technicalgrimoire/subscribe)!

<div><iframe id="my_iframe" src="/files/ripe-twine.html" scrolling="yes" width="100%"></iframe></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript">

window.addEventListener('message', function(e) {

  //find iframe element with jquery
  var $iframe = jQuery("#my_iframe");

  //load parameters
  var eventName = e.data[0];
  var data = e.data[1];

  //choose action based on event name
  switch(eventName) {
    case 'setHeight':
      $iframe.height(data);  //change the height
      break;
  }
}, false);

</script>


<script>

function RLUpdateHeight(){
    var passage = document.getElementsByTagName("tw-passage")[0];
    var newHeight = passage.offsetHeight;
    if(newHeight<500){newHeight=500;}
    newHeight = newHeight + 88;//margin on tw-story is 2x40.6333
    window.parent.postMessage(["setHeight", newHeight], "*"); 
}

setTimeout(RLUpdateHeight, 50);

</script>

<script>
var passage = document.getElementsByTagName("tw-passage")[0];//get passage
var newHeight = passage.offsetHeight;//read its height

if(newHeight<500){newHeight=500;}//minimum height
newHeight = newHeight + 88;//margin on tw-story is 2x40.63

window.parent.postMessage(["setHeight", newHeight], "*");//send message to parent page 
</script>