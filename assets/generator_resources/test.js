//get the json file and parse it
fetch('/assets/generator_resources/test.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        wyrd = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function beginHunt() {

  var target = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)];

  document.getElementById("huntText").innerHTML = "Within the <strong>" + wyrd.names.prefix[Math.floor(Math.random() * wyrd.names.prefix.length)] + " Of " + wyrd.names.suffix[Math.floor(Math.random() * wyrd.names.suffix.length)] + "</strong> there is rumored to be " + wyrd.secrets[Math.floor(Math.random() * wyrd.secrets.length)] + " But beware! " + wyrd.dangers[Math.floor(Math.random() * wyrd.dangers.length)] + "<br><br> You are hunting one or more <strong>" + target.name + "</strong> (pg. " + target.page + ") for fortune, fame, flesh, or some other reason altogether. You will need <strong>" + target.marks + " Marks</strong> to track the creature(s).";

  //pick the paths we'll be using
  var allPaths = ["A","B","C","D","E","F","G","H"];
  pathNotes = [];
  pathList = [];

  pathList.push(allPaths.splice(Math.floor(Math.random()*allPaths.length), 1));
  pathNotes.push(wyrd.pathDescriptions[Math.floor(Math.random() * wyrd.pathDescriptions.length)]);
  pathList.push(allPaths.splice(Math.floor(Math.random()*allPaths.length), 1));
  pathNotes.push(wyrd.pathDescriptions[Math.floor(Math.random() * wyrd.pathDescriptions.length)]);

  document.getElementById("mapIMG").innerHTML = "<img src=\"/images/WyrdMaps/blankMap.png\">";
  document.getElementById("mapIMG").style = "background-image: url(/images/WyrdMaps/path"+pathList[0]+".png),url(/images/WyrdMaps/path"+pathList[1]+".png);background-size: contain;background-position: center;background-repeat: no-repeat;";

  //now we have a random list of letters that we attach paths to.
  //pathNotes is the same size as pathList, so we use the same index when referencing it.

  //populate the map locations with 8 things
  for (i = 1; i < 9; i++){
    var nextLocation = wyrd.locations[Math.floor(Math.random() * wyrd.locations.length)];
    var locationtext = "<div class=\"h3\">" + i + ". ";
    locationtext = locationtext + nextLocation.name + "</div>";
    locationtext = locationtext + "<p>" + nextLocation.description + "</p>";

    document.getElementById("locbutton"+i).innerHTML = "<a href=\"#loc"+i+"\"><p><span class=\"logWyrdLevel\">"+i+"</span>"+nextLocation.name+"</p></a>";

    //now see if any of our chosen paths have exits in this location
    directionKeys = {
      "NN" : "North",
      "NE" : "NorthEast",
      "NW" : "NorthWest",
      "SS" : "South",
      "SE" : "SouthEast",
      "SW" : "SouthWest",
      "EE" : "East",
      "WW" : "West"
    }

    exitText = "<ul>";

    //for each path on our list, construct the exits of each location
    for (path = 0; path < pathList.length; path++){
      //get the exits array for path X
      exits = wyrd.paths[pathList[path]];
      for (var exit of exits){
        if (exit[0] == i){ //if the current location has an exit in any of our paths
          direction = exit.substring(1);
          exitText = exitText + "<li><strong>" + directionKeys[direction] + "</strong>: " + pathNotes[path] + " " + wyrd.scenes[Math.floor(Math.random() * wyrd.scenes.length)] + " " + wyrd.woods[Math.floor(Math.random() * wyrd.woods.length)] +"<br>"+ wyrd.senses[Math.floor(Math.random() * wyrd.senses.length)] + "</li>";
        } 
      }
    }

    locationtext = locationtext + exitText;
    document.getElementById("loc" + i).innerHTML = locationtext;
    }
}

function wy_nextEncounter() {
    var percentage = Math.floor(Math.random() * 100);
    var encounterText = "";

    switch (true) {
      case (percentage <= 20):
        var plant = wyrd.plants[Math.floor(Math.random() * wyrd.plants.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Plant: " + plant.name + "</h3>" + plant.description +
          "<br><strong>Uses:</strong> " + plant.uses;
        break;
      case (percentage > 20 && percentage <= 40):
        var trap = wyrd.traps[Math.floor(Math.random() * wyrd.traps.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Trap: " + trap.name + "</h3>" + trap.description +
          "<br><strong>Detect:</strong> " + trap.detect + 
          "<br><strong>Effect:</strong> " + trap.effect + 
          "<br><strong>Disable/Avoid:</strong> " + trap.disable;          
        break;
      case (percentage > 40 && percentage <= 80):
        var creature = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)];
        encounterText = encounterText +  "<h3 class=\"tightSpacing\">Creature: " + creature.name + " <i>(pg. " + creature.page + ")</i></h3>" +
          "<strong>Quantity:</strong> " + creature.quantity +
          "<br><strong>Armor Class:</strong> " + creature.ac +
          "<br><strong>Hit Dice:</strong> " + creature.hd +
          "<br><strong>Hit Points:</strong> " + creature.hp +
          "<br><strong>Move:</strong> " + creature.move +
          "<br><strong>Damage:</strong> " + creature.damage +
          "<br><strong>XP:</strong> " + creature.XP +
          "<br>" + creature.extra;
        break;
      default:
        encounterText = encounterText +  "No Encounter. Just an empty, restless silence.";
    }
document.getElementById("encounterCard").innerHTML = encounterText;
document.getElementById("encounterCard").scrollIntoView();
  
}