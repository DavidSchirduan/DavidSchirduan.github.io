var tombdata = {};
var alarmDieSize = 4;

//get the json file and parse it
fetch('/assets/generator_resources/tombthousand.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        tombdata = data;
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });


function generateEncounter() {
  grammar = tracery.createGrammar(tombdata);
  grammar.addModifiers(baseEngModifiers);

  encounterCardText = "";

  encounterText = grammar.flatten("#OverloadedEncounters#");

  encounterCardText = "<p>" + encounterText + "</p>";

  //First line is h1, second line is h2, etc etc
  //var separateLines = encounterText.split(/\r?\n|\r|\n/g);

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
  for (i = 0; i < tombdata.Creatures.length; i++) {
    if (encounterText.includes(tombdata.Creatures[i].Name)) {

      encounterCardText = encounterCardText +
        "<h3>" + tombdata.Creatures[i].Name + "</h3>";

      if (tombdata.Creatures[i].hasOwnProperty("Description")) {
        encounterCardText = encounterCardText +
          "<p><i>" + tombdata.Creatures[i].Description + "</i></p>";
      }

      encounterCardText = encounterCardText +
        "<p>" + tombdata.Creatures[i].HP + " hp, STR " + tombdata.Creatures[i].STR + ", DEX " + tombdata.Creatures[i].DEX + ", WIL " + tombdata.Creatures[i].WIL;

      if (tombdata.Creatures[i].hasOwnProperty("Armor")) {
        encounterCardText = encounterCardText +
          ", Armor " + tombdata.Creatures[i].Armor;
      }
      encounterCardText = encounterCardText + "</p>"; //close stat block

      encounterCardText = encounterCardText +
        "<p>Attacks: " + tombdata.Creatures[i].Attacks + "</p>"

      if (tombdata.Creatures[i].hasOwnProperty("CriticalDamage")) {
        encounterCardText = encounterCardText +
          "<p>Critical Damage: " + tombdata.Creatures[i].CriticalDamage + "</p>";
      }

      if (tombdata.Creatures[i].hasOwnProperty("Special")) {
        encounterCardText = encounterCardText +
          "<p>Special: " + tombdata.Creatures[i].Special + "</p>";
      }

      encounterCardText = encounterCardText +
        "<p><strong>Wants</strong> " + tombdata.Creatures[i].Wants + "</p>"

      // if (tombdata.Creatures[i].hasOwnProperty("Inventory")) {
      //   inventorySize = 0;
      //   if (tombdata.Creatures[i].Name == "Kobold the Tunneler") {
      //     inventorySize = 6;
      //   } else {
      //     inventorySize = 3;
      //   }

      //   inventoryIndex = [];

      //   while (inventoryIndex.length < inventorySize) {
      //     //grab a bunch of unique items
      //     randIndex = Math.floor(Math.random() * tombdata.Creatures[i].Inventory.length);
      //     while (!inventoryIndex.includes(randIndex)) {
      //       randIndex = Math.floor(Math.random() * tombdata.Creatures[i].Inventory.length);
      //     }
      //     inventoryItems.push(tombdata.Creatures[i].Inventory[randIndex]);
      //   }

      //   encounterCardText = encounterCardText + "<p><strong>Inventory:</strong></p><ul>";

      //   for (i = 0; i < inventoryItems.length; i++) {
      //     encounterCardText = encounterCardText +
      //       "<li>" + inventoryItems[i] + "</li>";
      //   }
      //   encounterCardText = encounterCardText + "</ul>";


    }
  }

  document.getElementById("TombEncounterCard").innerHTML = encounterCardText;
}