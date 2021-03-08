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

function agePlus(){
  elderAge = elderAge + 1;
  ripe_generate();
}

function ripe_generate() {

  //if nothing entered, show error message
  if (document.getElementById("enterElderName").value) {
    //If old name, increment the age, otherwise reset the age
    if (document.getElementById("enterElderName").value == elderName) {
    } else {
      elderAge = 70;
      elderName = document.getElementById("enterElderName").value;
    }
    //set the deterministic harvester
    myrng = new Math.seedrandom(elderName);
    tracery.setRng(myrng);
    grammar = tracery.createGrammar(harvesterTables);
    grammar.addModifiers(baseEngModifiers);

    harvesterEnergy = 30 + ((elderAge - 70) * 3);

    Harvestdescription = grammar.flatten(
      "<p>" + elderName + "'s Harvester #Arrival#</p>" +
      "<p>#Impression#. #Locomotion#, #Behavior#. As it gets close to " + elderName + ", #Approach#.</p>" +
      "<p>Defeating the Harvester will require <strong>" + harvesterEnergy + " Energy</strong>. After it is killed, #Defeat#.</p>" +
      "<p><strong>After 3 Rolls</strong>, #Capture#. #Escape#. " + elderName + " cannot take any action until the Harvester is defeated, but their allies may continue fighting.</p>" +
      "<p><strong>After 6 Rolls</strong>, the Harvester is gone, and " + elderName + " will never be seen again...");

    //fill in the Elder's Name
    Harvestdescription = Harvestdescription.replace(/ELDER/g, elderName);

    //Show the output
    document.getElementById("harvesterDesc").innerHTML = Harvestdescription;
    document.getElementById("genElderName").innerText = elderName + ", Age " + elderAge;
    document.getElementById("harvesterCard").style = "";
    document.getElementById("age1").style = "width:auto;";

  } else {
    document.getElementById("genElderName").innerText = "Please enter a Name.";
    document.getElementById("harvesterCard").style = "";
    document.getElementById("age1").style = "display:none;";
    document.getElementById("harvesterDesc").innerHTML = "";
  }
}