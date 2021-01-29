/*
Tracery LowDown: https: //github.com/galaxykate/tracery/tree/tracery2
grammar.flatten("#creature#") = horse
grammar.flatten("#creature.capitalize#") = Horse
grammar.flatten("#creature.a#") = a horse
grammar.flatten("#creature.a.capitalize#") = A horse
grammar.flatten("#creature.capitalize.a#") = a Horse
grammar.flatten("#creature.a.capitalizeAll#") = A Horse
grammar.flatten("#random-100-200.calc#") = 137
*/

//get the json file and parse it
fetch('/assets/generator_resources/ripe.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        harvesterTables = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var elderName = "Lemuria";
var harvesterTables = {};

function ripe_generate() {

  elderName = document.getElementById("harvesterName").value;
  console.log(elderName);
  var myrng = new Math.seedrandom(elderName);
  console.log(myrng);
  tracery.setRng(myrng());
  grammar = tracery.createGrammar(harvesterTables);
  grammar.addModifiers(baseEngModifiers);

  //get a hash based on the contents of the text box
  //pick a bunch of stuff from the tables, assemble together
  //output to the site

  //should return the same spell each time
  document.getElementById("harvesterDesc").innerHTML = grammar.flatten("#test#");

}


function tl_generateWeapon() {
  document.getElementById("wpnBtn").innerHTML = "Generate another Weapon";
  document.getElementById("slotBtn").innerHTML = "Generate a Slot";

  tl_WeaponName = grammar.flatten("#nameTemplate#");
  document.getElementById("weaponName").innerHTML = tl_WeaponName;

  document.getElementById("temperedSlots").innerHTML = tl_createSlot(3);

  tl_WeaponType = grammar.flatten("#weapon#"); //generate weapon type
  //A dagger #description#
  descrip = AvsAnSimple.query(tl_WeaponType) + " " + tl_WeaponType + " " + grammar.flatten("#description#");
  document.getElementById("weaponDesc").innerHTML = descrip.charAt(0).toUpperCase() + descrip.substring(1);

  document.getElementById("weaponImg").src = "/images/TemperedWeapons/" +
    tl_WeaponType.replace(/ /g, "_") + ".png";
  tl_setWeaponColors();

  //document.getElementById("interacting").innerHTML =
  //  '<p class="h3 tightSpacing">Interacting With Slots</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-unlocked.png"><strong>Unlock A Slot</strong>.</p><p>When you fulfill the regret of a previous owner, you unlock that Slot and gain access to the Spell/Knowledge/Enchantment.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-shaking-hands.png"><strong>Help An Ally</strong>.</p><p>After you help an ally unlock one of their Slots, you may use the "Slot Generator" to replace any Slot in your own weapon with one from the generator.</p><p><img class="temperedicon" style="margin-left: 10px;margin-right: 10px;" src="/images/TemperedWeapons/icon-skull-crossed-bones.png"><strong>Character Death</strong>.</p><p>When a character dies they can choose to have some aspect of themselves stored in the item. Create a new slot based on the character that just died, lock it behind a Regret, and add it to the weapon.</p>';
  document.getElementById("weaponCard").style = ""; //reveal the card
}
