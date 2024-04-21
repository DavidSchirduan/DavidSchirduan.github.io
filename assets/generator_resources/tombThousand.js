//get the json file and parse it
fetch('/assets/generator_resources/tombThousand.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        tombdata = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var alarmDieSize = 4;
highlightAlarm();
var tombdata = {};

function increaseAlarm() {
  switch (alarmDieSize) {
    case 4:
      alarmDieSize = 8;
      break;
    case 8:
      alarmDieSize = 12;
      break;
    case 12:
      alarmDieSize = 20;
      break;
    default:
      //do nothing if die is 20
  }
  highlightAlarm();
}

function decreaseAlarm() {
  switch (alarmDieSize) {
    case 20:
      alarmDieSize = 12;
      break;
    case 12:
      alarmDieSize = 8;
      break;
    case 8:
      alarmDieSize = 4;
      break;
    default:
      //do nothing if die is 4
  }
  highlightAlarm();
}

function highlightAlarm() {
  if (alarmDieSize == 4) {
    document.getElementById('alarmDieCard').children[0].classList.add("alarmHighlight");
  } else {
    document.getElementById('alarmDieCard').children[0].classList.remove("alarmHighlight");
  }
  if (alarmDieSize == 8) {
    document.getElementById('alarmDieCard').children[1].classList.add("alarmHighlight");
  } else {
    document.getElementById('alarmDieCard').children[1].classList.remove("alarmHighlight");
  }
  if (alarmDieSize == 12) {
    document.getElementById('alarmDieCard').children[2].classList.add("alarmHighlight");
  } else {
    document.getElementById('alarmDieCard').children[2].classList.remove("alarmHighlight");
  }
  if (alarmDieSize == 20) {
    document.getElementById('alarmDieCard').children[3].classList.add("alarmHighlight");
  } else {
    document.getElementById('alarmDieCard').children[3].classList.remove("alarmHighlight");
  }
}


function generateEncounter() {
  grammar = tracery.createGrammar(tombdata);
  grammar.addModifiers(baseEngModifiers);

  encounterText = "";

  d6 = Math.floor(Math.random() * 6) //0-5

  if (d6 == 0) {
    //if alarm die is referenced, roll it.
    alarmDie = Math.floor(Math.random() * alarmDieSize);
    encounterText = grammar.flatten(tombdata.AlarmDie[alarmDie]);
  } else {
    //for most things, just flatten
    encounterText = grammar.flatten(tombdata.OverloadedEncounters[parseInt(d6)]);
  }

  document.getElementById("tombEncounterText").innerHTML = encounterText;

  //If one of the creatures is named, show it's stats
  /**
   *  Vampire Mushroom
      A fungal treat
      1hp,STR5,DEX4,WIL3, Armor 2
      Attacks: d6 bite, d4spores
      Critical damage: target believes their party to be enemy mushrooms Wants to grow and plant spores
      Special: It can fly
      Wants: to protect the Black Diamond Snake
   */
  encounterCardText = "";
  creaturesEncountered = 0;
  for (c = 0; c < tombdata.Creatures.length; c++) {
    if (encounterText.includes(tombdata.Creatures[c].Name)) {
      creaturesEncountered = creaturesEncountered + 1;
      encounterCardText = encounterCardText + "<div class=\"creatureDiv\">";

      encounterCardText = encounterCardText +
        "<h3>" + tombdata.Creatures[c].Name + "</h3>";

      if (tombdata.Creatures[c].hasOwnProperty("Description")) {
        encounterCardText = encounterCardText +
          "<p><i>" + tombdata.Creatures[c].Description + "</i></p>";
      }

      encounterCardText = encounterCardText +
        "<p>" + tombdata.Creatures[c].HP + " hp, STR " + tombdata.Creatures[c].STR + ", DEX " + tombdata.Creatures[c].DEX + ", WIL " + tombdata.Creatures[c].WIL;

      if (tombdata.Creatures[c].hasOwnProperty("Armor")) {
        encounterCardText = encounterCardText +
          ", Armor " + tombdata.Creatures[c].Armor;
      }
      encounterCardText = encounterCardText + "</p>"; //close stat block

      encounterCardText = encounterCardText +
        "<p>Attacks: " + tombdata.Creatures[c].Attacks + "</p>"

      if (tombdata.Creatures[c].hasOwnProperty("CriticalDamage")) {
        encounterCardText = encounterCardText +
          "<p>Critical Damage: " + tombdata.Creatures[c].CriticalDamage + "</p>";
      }

      if (tombdata.Creatures[c].hasOwnProperty("Special")) {
        encounterCardText = encounterCardText +
          "<p>Special: " + tombdata.Creatures[c].Special + "</p>";
      }

      encounterCardText = encounterCardText +
        "<p><strong>Wants</strong> " + tombdata.Creatures[c].Wants + "</p>"

      if (tombdata.Creatures[c].hasOwnProperty("Inventory")) {
        inventorySize = 0;
        if (tombdata.Creatures[c].Name == "Kobold the Tunneler") {
          //kobold has 6 items
          inventorySize = 6;
        } else {
          inventorySize = 3;
        }

        inventoryItems = [];

        for (i = 0; i < inventorySize; i++) {
          randItem = Math.floor(Math.random() * tombdata.Creatures[c].Inventory.length);
          if (!inventoryItems.includes(tombdata.Creatures[c].Inventory[randItem])) {
            inventoryItems.push(tombdata.Creatures[c].Inventory[randItem]);
          } else {
            i = i - 1; //retry loop until item isn't duplicate
          }
        }

        encounterCardText = encounterCardText + "<p><strong>Inventory:</strong></p><ul>";

        for (i = 0; i < inventoryItems.length; i++) {
          encounterCardText = encounterCardText +
            "<li>" + inventoryItems[i] + "</li>";
        }
        encounterCardText = encounterCardText + "</ul>";
      }

      encounterCardText = encounterCardText + "</div>";
    }
    if (creaturesEncountered > 0){ //only show stuff if it exists
      document.getElementById("creatureStatsDiv").innerHTML = encounterCardText;
      document.getElementById("creatureStatsDiv").style.display = "block";

    } else {
      document.getElementById("creatureStatsDiv").innerHTML = "";
      document.getElementById("creatureStatsDiv").style.display = "none";
    }
  }
}

