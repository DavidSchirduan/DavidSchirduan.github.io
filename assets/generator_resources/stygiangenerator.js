//get the json file and parse it
fetch('/assets/generator_resources/stygian.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        stygianJSON = data;
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var sty_currentLayer = 0;
var sty_hrHTML = "<hr class=\"styled-hr\">";
var stygianJSON = {};
var stygian_seed = "123456"; //goes in the url
var stygian_rng = function () { }; //only used for generating the library; not used for random events
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
    sty_currentLayer = parseInt(decodeURI(urlParams.get('depth')));
    for (l = 0; l <= sty_currentLayer; l++){
      sty_goDeeper(l); //fill in the blanks until you reach the same room
    }
  }
}

function generateSeed(oldSeed) {
  if (oldSeed){
    stygian_seed = oldSeed;
  } else {
    stygian_seed = Math.floor(Math.random() * (99999) + 1);
  }

  if (oldSeed == "demo"){
    demo_mode = true;
    console.log("Activated Demo Mode!")
  }

  //So this library can be re-used
  stygian_rng = new Math.seedrandom(stygian_seed); 

  //update url
  urlString = "?seed=" + stygian_seed;
  window.history.replaceState(null, null, urlString);
}

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [level, nextRoomNum, nextDetailNum]
var sty_locationLog = [];

function sty_getRandomInt(min, max, seedRandom) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (seedRandom){
    //used for truly random visitor events
    return Math.floor(stygian_rng() * (max - min)) + min; 
  } else {
    //used to build out the floors and details from seed.
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function sty_getRoom(location) {

  document.getElementById("encounterContent").innerHTML = "";

  //build the level text
  document.getElementById("levelContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Level " +location[0] + ": " + stygianJSON.locations[location[1]].title + "</h2><p>" + stygianJSON.locations[location[1]].description + "</p>" + sty_hrHTML + "<h2 style=\"margin-top: 10px;\" >Detail: " + stygianJSON.details[location[2]].title + "</h2><p>" + stygianJSON.details[location[2]].description + "</p>";

  //scroll to top
  window.scrollTo(0,0);
}

function sty_newEvent(sty_visitor) {
  rand20 = sty_getRandomInt(0,20);
  visitorHTML = ""

  if (sty_visitor) {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:cornflowerblue;\">Visitor</span> Event</h2>";
  } else {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:crimson;\">Intruder</span> Event</h2>";
  }
  eventDescription = visitorHTML + "<p>" + stygianJSON.events[rand20].description + "</p>";
  encounters = "";
  nextEncounter = "";

  for (i = 0; i < stygianJSON.events[rand20].encounters; i++) {
    depth20 = sty_getRandomInt(0,20) + sty_currentLayer;

    if (depth20 >= 34) {
      depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (sty_visitor) {
      nextEncounter = stygianJSON.visitorEncounters[depth20];
    } else {
      nextEncounter = stygianJSON.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<h3>" + nextEncounter.title + "</h3><p> " + nextEncounter.description + "</p>";
  }

  document.getElementById("encounterContent").innerHTML = eventDescription + encounters + sty_hrHTML;
  
  //scroll to top
  window.scrollTo(0,0);
}

function sty_goDeeper(level) {
  styg_generateLevel = 0;
  //If loading a garden from url, don't change the current layer
  if (level >= 0){
    styg_generateLevel = level;
  } else {
    styg_generateLevel = ynn_currentLayer;
  }

  nextRoomNum = sty_getRandomInt(styg_generateLevel, styg_generateLevel + 20, true);
  nextDetailNum = sty_getRandomInt(styg_generateLevel, styg_generateLevel + 20, true);

  if (demo_mode){
    nextRoomNum = styg_generateLevel;
    nextDetailNum = styg_generateLevel;
  }

  //If above 35, then re-roll
  if (nextRoomNum >= 34)
    nextRoomNum = Math.floor(stygian_rng() * 20) + Math.floor(stygian_rng() * 12) + 1 + 2;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  if (level >= 0){
    styg_generateLevel = level;
  } else {    
    //increment current layer
    sty_currentLayer = sty_currentLayer + 1;
  }

  //add this to the log
  sty_locationLog.push([sty_currentLayer, nextRoomNum, nextDetailNum]);

  sty_getRoom(sty_locationLog[sty_locationLog.length - 1]);

  sty_updateLog();
}

function sty_updateLog() {

  logHTML = "";

  for (const location of sty_locationLog) {
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"sty_getRoom(["+location+"])\"><p><span class=\"logLevel\">" + location[0] + "</span> " + stygianJSON.locations[location[1]].title + "<br><i>" + stygianJSON.details[location[2]].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML + "<div class=\"logItem\"><a onclick=\"sty_goDeeper()\"><p><span class=\"logLevel\">▼</span> Go Deeper<br><i>to level "+ (sty_locationLog.length+1) +"</i></p></a></div>";
}
