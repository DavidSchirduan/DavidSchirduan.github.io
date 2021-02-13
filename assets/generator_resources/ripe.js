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

function ripe_generate() {
  elderName = "Lemuria";

  //if nothing entered, use Lemuria
  if (document.getElementById("elderName").value) {
    elderName = document.getElementById("elderName").value;
  }

  //set the deterministic harvester
  myrng = new Math.seedrandom(elderName);
  tracery.setRng(myrng);
  grammar = tracery.createGrammar(harvesterTables);
  grammar.addModifiers(baseEngModifiers);

  Harvestdescription = grammar.flatten(
    "<p>" + elderName + "'s harvester will arrive #Twenty# #Time# from now. #Impression#, #Locomotion#. #Behavior#</p>" +
    "<p>#Capture#</p>" +
    "<p>Allies may attempt to stop it (30 effort, 5 roll limit). #Defeat#</p>");

    //fill in the Elder's Name
    Harvestdescription = Harvestdescription.replace(/ELDER/g, elderName);

  //Show the output
  document.getElementById("harvesterDesc").innerHTML = Harvestdescription;

  document.getElementById("harvesterCard").style = "";
}