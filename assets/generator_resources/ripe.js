/*
Tracery LowDown: https: //github.com/galaxykate/tracery/tree/tracery2
grammar.flatten("#creature#") = horse
grammar.flatten("#creature.capitalize#") = Horse
grammar.flatten("#creature.a#") = a horse
grammar.flatten("#creature.a.capitalize#") = A horse
grammar.flatten("#creature.capitalize.a#") = a Horse
grammar.flatten("#creature.a.capitalizeAll#") = A Horse
grammar.flatten("#random-100-200.calc#") = 137 NOT DETERMINISTIC!
*/

var harvesterTables = {};

//get the json file and parse it
fetch('/assets/generator_resources/ripe.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        harvesterTables = data;
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

var elderAge = 70; //click the generator multiple times to increase age
var elderName = "";

function ripe_generate() {

  //if nothing entered, do nothing
  if (document.getElementById("enterElderName").value) {

    elderName = document.getElementById("enterElderName").value;

    //set the deterministic harvester
    myrng = new Math.seedrandom(elderName);
    tracery.setRng(myrng);
    grammar = tracery.createGrammar(harvesterTables);
    grammar.addModifiers(baseEngModifiers); //from English mods

    harvesterEnergy = 30;

    Harvestdescription = grammar.flatten(
      "<p>" + elderName + "'s Harvester #Arrival#</p>" +
      "<p>#Impression#. #Locomotion#, #Behavior#. As it gets close to " + elderName + ", #Approach#.</p>" +
      "<p>Defeating the Harvester will require <strong>" + harvesterEnergy + " Energy</strong>. After it is killed, #Defeat#.</p>" +
      "<p><strong>After 3 Rolls</strong>, #Capture#. " + elderName + " cannot take any action until the Harvester is defeated, but their allies may continue fighting.</p>" +
      "<p><strong>After 6 Rolls</strong>, the Harvester disappears in a flash of light, taking " + elderName + " with it. "+ elderName +" will be remembered.");

    //fill in the Elder's Name
    Harvestdescription = Harvestdescription.replace(/ELDER/g, elderName);

    //Show the output
    document.getElementById("harvesterDesc").innerHTML = Harvestdescription;
    document.getElementById("genElderName").innerText = elderName;
    document.getElementById("harvesterCard").style = "";

  }
}