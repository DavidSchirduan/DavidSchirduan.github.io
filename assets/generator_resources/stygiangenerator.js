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
        stygian = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var sty_currentLayer = -1;
var sty_hrHTML = "<hr class=\"stygian-hr\">";

//A list of number sets tracking the previous rooms and details. 
//used when backtracking: [level, nextRoomNum, nextDetailNum]
var sty_locationLog = [];

function sty_getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function sty_getRoom(location) {

  document.getElementById("encounterContent").innerHTML = "";

  console.log(location);

  //build the level text
  document.getElementById("levelContent").innerHTML = "<h2 style=\"margin-top: 10px;\" >Level " +location[0] + ": " + stygian.locations[location[1]].title + "</h2><p>" + stygian.locations[location[1]].description + "</p>" + sty_hrHTML + "<h2 style=\"margin-top: 10px;\" >Detail: " + stygian.details[location[2]].title + "</h2><p>" + stygian.details[location[2]].description + "</p>";

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
  console.log(rand20);
  eventDescription = visitorHTML + "<p>" + stygian.events[rand20].description + "</p>";
  encounters = "";
  nextEncounter = "";

  for (i = 0; i < stygian.events[rand20].encounters; i++) {
    depth20 = sty_getRandomInt(0,20) + sty_currentLayer;

    if (depth20 >= 34) {
      depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (sty_visitor) {
      nextEncounter = stygian.visitorEncounters[depth20];
    } else {
      nextEncounter = stygian.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<h3>" + nextEncounter.title + "</h3><p> " + nextEncounter.description + "</p>";
  }

  document.getElementById("encounterContent").innerHTML = eventDescription + encounters + sty_hrHTML;
  
  //scroll to top
  window.scrollTo(0,0);
}

function sty_goDeeper() {
  document.getElementById("deeperButton").innerHTML = "Go Deeper";

  sty_currentLayer = sty_currentLayer + 1;

  nextRoomNum = sty_getRandomInt(sty_currentLayer, sty_currentLayer + 20);
  nextDetailNum = sty_getRandomInt(sty_currentLayer, sty_currentLayer + 20);

  //If above 35, then re-roll
  if (nextRoomNum >= 34)
    nextRoomNum = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;

  //max for details is 35
  if (nextDetailNum > 34)
    nextDetailNum = 34;

  //add this to the log
  sty_locationLog.push([sty_currentLayer+1, nextRoomNum, nextDetailNum]);

  sty_getRoom(sty_locationLog[sty_locationLog.length - 1]);

  sty_updateLog();
}

function sty_updateLog() {

  logHTML = "";
  lvlCounter = 0;

  for (const location of sty_locationLog) {
    logHTML = logHTML + "<div class=\"logItem\"><a onclick=\"sty_getRoom(["+location+"])\"><p><span class=\"logLevel\">" + location[0] + "</span> " + stygian.locations[location[1]].title + "<br><i>" + stygian.details[location[2]].title + "</i></p></a></div>";
  }

  document.getElementById("logContent").innerHTML = logHTML + "<div class=\"logItem\"><a onclick=\"printLibrary()\"><p><span class=\"logLevel\" style=\"color:lightgreen;\">S</span> Save this Libary<br><i>as PDF</i></p></a></div>";
}

function printLibrary() {
//There are so many things about this function that I CAN'T control. font size, font type, etc etc. But I CAN set the size of the div and the size of the paper. So this is as close as I've got....definitely room for improvement.

  //Go through and expand all the rooms
  printHTML = "";
  document.getElementById("encounterContent").innerHTML = "";
  document.getElementById("stygian-img").style = "display:none;";

  for (const location of sty_locationLog) {

    //build the level text
    printHTML = printHTML + "<h2 style=\"margin-top: 10px;\" >Level " + location[0] + ": " + stygian.locations[location[1]].title + "</h2>" + "<p>" + stygian.locations[location[1]].description + "</p><h2 style=\"margin-top: 10px;\" >Detail: " + stygian.details[location[2]].title + "</h2>" + "<p>" + stygian.details[location[2]].description + "</p>" + sty_hrHTML;

  }

  document.getElementById("levelContent").innerHTML = printHTML;

  var jsPDF = window.jspdf.jsPDF;
  var container = document.getElementById("stygian-complete");

  //force the width so it will print at the right size
  container.style.maxWidth = "720px";
  container.style.minWidth = "720px";
  container.style.Width = "720px";

  var doc = new jsPDF({
    unit: "px",
    format: [720, 975],
    putOnlyUsedFonts: true
  });

  doc.html(document.getElementById("stygian-complete"), {
    callback: function (doc) {
      doc.save("stygian-generated.pdf");
      //set back to latest location
      latestRoom = sty_locationLog[sty_locationLog.length - 1];
      sty_getRoom(latestRoom);
      document.getElementById("stygian-img").style = "max-height: 300px;float:right;margin-right: -20px;margin-bottom: -20px;";
      container.style.maxWidth = null;
      container.style.minWidth = null;
      container.style.width = null;    
    }
  });

}