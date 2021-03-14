//get the json file and parse it
var blbJson = {};
fetch('/assets/generator_resources/leftburied.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        blbJson = data;
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

var CharName = "Test";

//helper function to simplify json lookups
function randomList(jsonList) {
  return jsonList[Math.floor(Math.random() * jsonList.length)];
}
//used for properties instead of lists
function randomProperty(obj) {
  var keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

function blb_generate() {
  //pick a random name
  CharName = randomList(blbJson.Names);

  //pick stats, "BRAWN WIT WILL"
  statStr = randomProperty(blbJson.Stats);
  stats = statStr.split(' ');
  brawn = parseInt(stats[0]);
  wit = parseInt(stats[1]);
  will = parseInt(stats[2]);
  vigour = brawn + 6;
  grip = will + 4;
  affluence = 1;
  
  slotLimit = 12 + (brawn * 2);
  if (will > wit){
    slotLimit = slotLimit + will;
  }else{
    slotLimit = slotLimit + wit;
  }

  //Archetype Abilities and Advancement
  //TODO add checkbox for human/non
  archetype = randomList(blbJson.Stats[statStr]);
  advancement = randomList(blbJson.Archetypes[archetype].Advancements);

  abilityHTML = "";

  for (i=0;i<blbJson.Archetypes[archetype].Abilities.length; i++){
    ability = blbJson.Archetypes[archetype].Abilities[i];
    abilityHTML = abilityHTML + 
    "<div class=\"col leftburied-ability sketchy\">" +
    "<h3>"+ability+"</h3>" +
    "<p>"+blbJson.Abilities[ability]+"</p></div>";
  }
  //Add Advancemeny
  abilityHTML = abilityHTML + "<div class=\"col leftburied-ability sketchy\">" +
  "<h3>Advancement: "+advancement+"</h3>" +
  "<p>"+blbJson.Advancements[advancement]+"</p></div>";

  //Equipment
  equipment = ["Rope (50')", "Torches (3)", "A Backpack", "A Bedroll", "Rations (1 week)", "Basic Armour"];

  //pick equipment based on stats, avoid duplicates
  i=0;
  while (i < brawn) {
    newItem = "Rope (50')";
    while (equipment.includes(newItem)) {
      newItem = randomList(blbJson.StatEquipment.Brawn);
    }
    equipment.push(newItem);
    i=i+1;
  }
  i=0;
  while (i < wit) {
        newItem = "Rope (50')";
    while (equipment.includes(newItem)) {
      newItem = randomList(blbJson.StatEquipment.Wit);
    }
    equipment.push(newItem);
    i=i+1;
  }
  i=0;
  while (i < will) {
    newItem = "Rope (50')";
    while (equipment.includes(newItem)) {
      newItem = randomList(blbJson.StatEquipment.Will);
    }
    equipment.push(newItem);
    i=i+1;
  }

  //Weapons
  weapon1 = "weapon";
  weapon2 = "weapon";

  switch (true) {
    case (will == 0):
      weapon1 = randomList(blbJson.Weapons.Brawn);
      weapon2 = randomList(blbJson.Weapons.Wit);
      break;
    case (brawn == 0):
      weapon1 = randomList(blbJson.Weapons.Will);
      weapon2 = randomList(blbJson.Weapons.Wit);
      break;
    case (wit == 0):
      weapon1 = randomList(blbJson.Weapons.Brawn);
      weapon2 = randomList(blbJson.Weapons.Will);
      break;
  }
  
  //put weapons on the top
  equipment.unshift(weapon1,weapon2);

  //format items for display
    equipStr = "<ul>";
    for (i=0;i<equipment.length; i++){
      equipStr = equipStr + "<li>" + equipment[i] + "</li>";
    }
    equipStr = equipStr + "</ul>";

  /**console.log("Character: " + CharName +
    "\n Stats: " + stats +
    "\n Vigor: " + vigour +
    "\n Grip: " + grip +
    "\n Archetype: " + archetype +
    "\n Advancement: " + advancement +
    "\n Weapons: " + weapon1 + " | " + weapon2 +
    "\n Equipment: " + equipment);
    */

  //Set Info
  document.getElementById("charBR").innerHTML = brawn;
  document.getElementById("charWIT").innerHTML = wit;
  document.getElementById("charWILL").innerHTML = will;
  document.getElementById("charGRIP").innerHTML = grip;
  document.getElementById("charVIG").innerHTML = vigour;

  document.getElementById("charName").innerHTML = CharName + " the " + archetype;
  document.getElementById("description").innerHTML = blbJson.Archetypes[archetype].Description;

  document.getElementById("charAbilities").innerHTML = abilityHTML;

  document.getElementById("charSlotLimit").innerHTML = "<i>" + slotLimit + " Max Item Slots</i>";
  document.getElementById("charItems").innerHTML = equipStr;

  document.getElementById("leftburiedCard").style.display = "block";
}

function blb_saveCharacterIMG() {
  document.getElementById("downloadBTN").style = "display:none;";
  imageName = blb_CHARname;
  window.scrollTo(window.pageXOffset, 0);
  var container = document.getElementById("leftburiedCard");
  useWidth = container.offsetWidth;
  useHeight = container.offsetHeight;
  html2canvas(container, {
    allowTaint: true,
    width: useWidth,
    height: useHeight,
    scale: 2,
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "blb-" + imageName.replace(/ /g, "-") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.target = '_blank';
    link.click();
  });
  document.getElementById("downloadBTN").style = "display:initial;";
}