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
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function grabParamsURL(){
  //if someone is loading a character code
  if (window.location.search != ""){
    console.log("Seed:" + window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('woods') && urlParams.get('target')){
      //populate the generator with the saved info
      beginHunt(decodeURI(urlParams.get('woods')), decodeURI(urlParams.get('target')));
    } else {
      console.log("invalid code, using new code");
    }
  } else {
    console.log("no params, using new code");
  }
}

var locationList; //contains all the html and text for each location

function newHunt(){
  woods = wyrd.names.prefix[Math.floor(Math.random() * wyrd.names.prefix.length)] + " of " + wyrd.names.suffix[Math.floor(Math.random() * wyrd.names.suffix.length)];

  target = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)].name;

  beginHunt(woods, target);
}

function beginHunt(seedWoods, seedTarget) {
  myrng = new Math.seedrandom(seedWoods + seedTarget);

  locationList = [];
  document.getElementById("locationText").innerHTML = "";

  document.getElementById("huntText").innerHTML = "Within the <strong>" + seedWoods + "</strong> there is rumored to be " + wyrd.secrets[Math.floor(myrng() * wyrd.secrets.length)] + " But beware! " + wyrd.dangers[Math.floor(myrng() * wyrd.dangers.length)] + "<br><br> You are hunting one or more <strong>" + seedTarget + "</strong> for fortune, fame, flesh, or some other reason altogether. You will need <strong>" + (Math.floor(myrng() * 20) + 1) + " Marks</strong> to track the creature(s).";

  //MAP GENERATION
  allPaths = ["A","B","C","D","E","F","G","H"];
  pathList = [];
  pathNotes = [];
  //1. pick a random path (A-H)
  pathList.push(allPaths.splice(Math.floor(myrng() *allPaths.length), 1));
  //2. give that path a random description
  pathNotes.push(wyrd.pathDescriptions[Math.floor(myrng() * wyrd.pathDescriptions.length)]);
  //3. Pick another random Path
  pathList.push(allPaths.splice(Math.floor(myrng() *allPaths.length), 1));
  //2. give that path a random description
  pathNotes.push(wyrd.pathDescriptions[Math.floor(myrng() * wyrd.pathDescriptions.length)]);

  //now we have a random list of letters that we attach paths to.
  //pathNotes is the same size as pathList, so we use the same index when referencing it

  //Pull images of the matching two paths and layer them
  document.getElementById("mapIMG").innerHTML = "<img src=\"/images/WyrdMaps/blankMap.png\">";
  document.getElementById("mapIMG").style = "background-image: url(/images/WyrdMaps/path"+pathList[0]+".png),url(/images/WyrdMaps/path"+pathList[1]+".png);background-size: contain;background-position: center;background-repeat: no-repeat;";

  //LOCATION GENERATION (8)

  logHTML = "<div class=\"logItem\"><a onclick=\"wy_nextEncounter()\"><p><span class=\"logWyrdLevel\" style=\"color:red;\">!</span>Random Encounter</p></a></div>";

  for (i = 0; i < 8; i++){
    nextLocation = wyrd.locations[Math.floor(myrng() * wyrd.locations.length)];
  
    //Build out the buttons
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"wyrd_getLoc('"+i+"')\"><p><span class=\"logWyrdLevel\">" + (i+1) + "</span> " + nextLocation.name + "</p></a></div>";

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

  exitText = "<br><ul>";

  //for each path on our list, construct the exits of each location
  for (path = 0; path < pathList.length; path++){
    //get the exits array for path X
    exits = wyrd.paths[pathList[path]];
    for (var exit of exits){
      if (exit[0] == i+1){ //if the current location has an exit in any of our paths
        direction = exit.substring(1);
        exitText = exitText + "<li><strong>" + directionKeys[direction] + "</strong>: " + pathNotes[path] + " " + wyrd.scenes[Math.floor(myrng() * wyrd.scenes.length)] + " " + wyrd.woods[Math.floor(myrng() * wyrd.woods.length)] +"<br>"+ wyrd.senses[Math.floor(myrng() * wyrd.senses.length)] + "</li>";
      }
    }
  }

  locationtext = nextLocation.description + exitText;
  locationList.push("<h3>" + nextLocation.name + "</h3><p>" + locationtext + "</p>");
  }
  //make the buttons
  document.getElementById("logContent").innerHTML = logHTML;

  //set url
  document.title = seedWoods; 
  window.history.replaceState(null, null, "?woods="+seedWoods+"&target="+seedTarget);
  document.getElementById("saveCharacter").innerHTML = "<i>Bookmark this page to save this hunt,<br>or <a href=\"" + window.location.href + "\"> copy this link</a>.</i>";
  
}

//display the location they click on
function wyrd_getLoc(x){

  document.getElementById("locationText").innerHTML = locationList[x];
  
}

function wy_nextEncounter() {
    var percentage = Math.floor(Math.random() * 100);
    var encounterText = "";

    switch (true) {
      case (percentage <= 33):
        var plant = wyrd.plants[Math.floor(Math.random() * wyrd.plants.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Plant: " + plant.name + "</h3>" + plant.description +
          "<br><strong>Uses:</strong> " + plant.uses;
        break;
      case (percentage > 33 && percentage <= 66):
        var trap = wyrd.traps[Math.floor(Math.random() * wyrd.traps.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Trap: " + trap.name + "</h3>" + trap.description +
          "<br><strong>Detect:</strong> " + trap.detect + 
          "<br><strong>Effect:</strong> " + trap.effect + 
          "<br><strong>Disable/Avoid:</strong> " + trap.disable;          
        break;
      case (percentage > 66):
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
  
  document.getElementById("locationText").innerHTML = encounterText;  

}