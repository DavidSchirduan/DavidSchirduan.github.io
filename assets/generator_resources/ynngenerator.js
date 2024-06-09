//get the json file and parse it
fetch('/assets/generator_resources/ynn.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        ynnJSON = data;
        grabParamsURL();
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [level, nextRoomNum, nextDetailNum]
var ynn_locationLog = [];

var ynn_currentLayer = -1; //start at -1 on enter screen, then 0, then 1
var ynn_hrHTML = "<hr class=\"styled-hr\">";
var ynnJSON = {};
var ynn_seed = "123456"; //goes in the url
var ynn_rng = function () { }; //only used for generating the library; not used for random events
var demo_mode = false; //for checking content and presentation. Just rolls exact depth, no d20

function grabParamsURL() {
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.search != "" && urlParams.has('seed')) {
    try {
      oldSeed = decodeURI(urlParams.get('seed'));
      generateSeed(oldSeed);
    } catch (e) {
      console.log(e); // pass exception object to error handler (i.e. your own function)
      generateSeed();
    }
  } else {
    generateSeed();
  }
  if (window.location.search != "" && urlParams.has('depth')) {
    ynn_currentLayer = parseInt(decodeURI(urlParams.get('depth')));
    for (l = 0; l <= ynn_currentLayer; l++){
      ynn_goDeeper(l); //fill in the blanks until you reach the same room
    }
  }
}

function generateSeed(oldSeed) {
  if (oldSeed) {
    ynn_seed = oldSeed;
  } else {
    ynn_seed = Math.floor(Math.random() * (99999) + 1);
  }

  if (oldSeed == "demo") {
    demo_mode = true;
    console.log("Activated Demo Mode!")
  }

  //So this library can be re-used
  ynn_rng = new Math.seedrandom(ynn_seed);

  //update url
  urlString = "?seed=" + ynn_seed + "&depth=" + ynn_currentLayer;
  window.history.replaceState(null, null, urlString);
}

function ynn_getRandomInt(min, max, seedRandom) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (seedRandom) {
    //used to build out the floors and details from seed.
    return Math.floor(ynn_rng() * (max - min)) + min;
  } else {
    //used for truly random events
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function ynn_getRoom(location) {
  //[depth, nextRoomNum, nextDetailNum]
  document.getElementById("encounterContent").innerHTML = "";

  //build the level text, subtract one because of zero index
  document.getElementById("levelContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Depth " + location[0] + ": " + ynnJSON.locations[location[1]-1].title + "</h2><p>" + ynnJSON.locations[location[1]-1].description + "</p>" + ynn_hrHTML + "<h2 style=\"margin-top: 10px;\" >Detail: " + ynnJSON.details[location[2]-1].title + "</h2><p>" + ynnJSON.details[location[2]-1].description + "</p>";

  //scroll to top
  window.scrollTo(0, 0);
}

function ynn_newEvent(ynn_day) {
  rand20 = ynn_getRandomInt(1, 20); 
  headerHTML = "";
  encounterText = "";
  encounterCardText = ""; //hold creature statblocks

  if (ynn_day) {
    headerHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:#a5a188;\">Day</span> Event</h2>";
  } else {
    headerHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:#cc94a9;\">Night</span> Event</h2>";
  }

  for (i = 0; i < ynnJSON.events[rand20-1].encounters; i++) { //because of zero index
    depth20 = ynn_getRandomInt(1, 20) + ynn_currentLayer;

    if (demo_mode) {
      depth20 = ynn_currentLayer + 1; //in case of demo mode so it's same as depth, incremented because 0
    }

    if (depth20 > 34) {
      //d20+d10+d6-2, don’t add Depth
      depth20 = ynn_getRandomInt(1, 20) + ynn_getRandomInt(1, 10) + ynn_getRandomInt(1, 6) - 2;
    }

    if (ynn_day) {
      encounterText = encounterText + " (" + ynnJSON.dayEncounters[depth20-1] + ") "; //decrement because index 0
    } else {
      encounterText = encounterText + " (" + ynnJSON.nightEncounters[depth20-1] + ") "; //decrement because index 0
    }
  }

  //Add in creature stat blocks if they're part of the encounter text
  for (c = 0; c < ynnJSON.bestiary.length; c++) {
    if (encounterText.toLowerCase().includes(ynnJSON.bestiary[c].name.toLowerCase())) {

      encounterCardText = encounterCardText +
        "<div class=\"creatureDiv\">" +
        "<h3>" + ynnJSON.bestiary[c].name + "</h3>" +
        "<p>" + ynnJSON.bestiary[c].description + "</p>" +
        "<p><strong>STATS:</strong> " + ynnJSON.bestiary[c].stats + "</p>" +
        "<p>" + ynnJSON.bestiary[c].special + "</p>" +
        "</div>";
    }
  }

  document.getElementById("encounterContent").innerHTML = headerHTML + "<p>" + ynnJSON.events[rand20-1].description + encounterText + "</p>" + encounterCardText + ynn_hrHTML;

  //scroll to top
  window.scrollTo(0, 0);
}

function ynn_goDeeper(level) {
  ynn_generateLevel = 0;
  //If loading a garden from url, don't change the current layer
  if (level >= 0){
    ynn_generateLevel = level;
  } else {
    //increment current layer
    ynn_currentLayer = ynn_currentLayer + 1;
    ynn_generateLevel = ynn_currentLayer;
  }

  nextRoomNum = ynn_getRandomInt(1, 20, true) + ynn_generateLevel; //random d20
  nextDetailNum = ynn_getRandomInt(1, 20, true) + ynn_generateLevel; //random d20

  if (demo_mode) {
    nextRoomNum = ynn_generateLevel+1; //because depth + d20 is never 0
    nextDetailNum = ynn_generateLevel+1; //because depth + d20 is never 0
  }

  //If above 35, set to 35
  if (nextRoomNum > 34){
    nextRoomNum = 35;
  }

  //max for details is 35
  if (nextDetailNum > 34){
    nextDetailNum = 35;
  }

  //add this to the log
  ynn_locationLog.push([ynn_generateLevel, nextRoomNum, nextDetailNum]);

  ynn_getRoom(ynn_locationLog[ynn_locationLog.length - 1]); //grab latest from the log

  ynn_updateLog(); //add the log buttons

  //update url
  urlString = "?seed=" + ynn_seed + "&depth=" + ynn_currentLayer;
  window.history.replaceState(null, null, urlString);
}

function ynn_updateLog() {

  logHTML = "";

  for (const location of ynn_locationLog) {
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"ynn_getRoom([" + location + "])\"><p><span class=\"logLevel\">" + location[0] + "</span> " + ynnJSON.locations[location[1]-1].title + "<br><i>" + ynnJSON.details[location[2]-1].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML + "<div class=\"logItem\"><a onclick=\"ynn_goDeeper()\"><p><span class=\"logLevel\">▼</span> Go Deeper<br><i>to level " + (ynn_currentLayer+1) + "</i></p></a></div>";
}
