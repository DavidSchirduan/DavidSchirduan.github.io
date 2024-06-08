//get the json file and parse it
fetch('/assets/generator_resources/ynn.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        ynnJSON = data;
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var ynn_currentLayer = -1;
var ynn_hrHTML = "<hr class=\"stygian-hr\">";
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
}

function generateSeed(oldSeed) {
  if (oldSeed){
    ynn_seed = oldSeed;
  } else {
    ynn_seed = Math.floor(Math.random() * (99999) + 1);
  }

  if (oldSeed == "demo"){
    demo_mode = true;
    console.log("Activated Demo Mode!")
  }

  //So this library can be re-used
  ynn_rng = new Math.seedrandom(ynn_seed); 

  //update url
  urlString = "?seed=" + ynn_seed;
  window.history.replaceState(null, null, urlString);
}

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [level, nextRoomNum, nextDetailNum]
var ynn_locationLog = [];

function ynn_getRandomInt(min, max, seedRandom) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (seedRandom){
    //used for truly random visitor events
    return Math.floor(ynn_rng() * (max - min)) + min; 
  } else {
    //used to build out the floors and details from seed.
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function ynn_getRoom(location) {

  document.getElementById("encounterContent").innerHTML = "";

  //build the level text
  document.getElementById("levelContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Level " +location[0] + ": " + ynnJSON.locations[location[1]].title + "</h2><p>" + ynnJSON.locations[location[1]].description + "</p>" + ynn_hrHTML + "<h2 style=\"margin-top: 10px;\" >Detail: " + ynnJSON.details[location[2]].title + "</h2><p>" + ynnJSON.details[location[2]].description + "</p>";

  //scroll to top
  window.scrollTo(0,0);
}

function ynn_newEvent(ynn_visitor) {
  rand20 = ynn_getRandomInt(0,20);
  visitorHTML = ""

  if (ynn_visitor) {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:cornflowerblue;\">Visitor</span> Event</h2>";
  } else {
    visitorHTML = "<h2 style=\"margin-top: 10px;\"><span style=\"color:crimson;\">Intruder</span> Event</h2>";
  }
  eventDescription = visitorHTML + "<p>" + ynnJSON.events[rand20].description + "</p>";
  encounters = "";
  nextEncounter = "";

  for (i = 0; i < ynnJSON.events[rand20].encounters; i++) {
    depth20 = ynn_getRandomInt(0,20) + ynn_currentLayer;

    if (depth20 >= 34) {
      depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (ynn_visitor) {
      nextEncounter = ynnJSON.visitorEncounters[depth20];
    } else {
      nextEncounter = ynnJSON.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<h3>" + nextEncounter.title + "</h3><p> " + nextEncounter.description + "</p>";
  }

  document.getElementById("encounterContent").innerHTML = eventDescription + encounters + ynn_hrHTML;
  
  //scroll to top
  window.scrollTo(0,0);
}

function ynn_goDeeper() {
  ynn_currentLayer = ynn_currentLayer + 1;

  nextRoomNum = ynn_getRandomInt(ynn_currentLayer, ynn_currentLayer + 20, true);
  nextDetailNum = ynn_getRandomInt(ynn_currentLayer, ynn_currentLayer + 20, true);

  if (demo_mode){
    nextRoomNum = ynn_currentLayer;
    nextDetailNum = ynn_currentLayer;
  }

  //If above 35, set to 35
  if (nextRoomNum > 34)
    nextRoomNum = 34;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  //add this to the log
  ynn_locationLog.push([ynn_currentLayer+1, nextRoomNum, nextDetailNum]);

  ynn_getRoom(ynn_locationLog[ynn_locationLog.length - 1]);

  ynn_updateLog();
}

function ynn_updateLog() {

  logHTML = "";

  for (const location of ynn_locationLog) {
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"ynn_getRoom(["+location+"])\"><p><span class=\"logLevel\">" + location[0] + "</span> " + ynnJSON.locations[location[1]].title + "<br><i>" + ynnJSON.details[location[2]].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML + "<div class=\"logItem\"><a onclick=\"ynn_goDeeper()\"><p><span class=\"logLevel\">▼</span> Go Deeper<br><i>to level "+ (ynn_locationLog.length+1) +"</i></p></a></div>";
}
