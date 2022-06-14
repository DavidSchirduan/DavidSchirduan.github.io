
masterTracks = []; //unfilled tracks
filledTracks = []; 
nextActionCell = 0; //for turn tracking

currentActionColor = "darkgrey";
currentBeatColor = "black";
oldActionColor = "lightgrey";

document.getElementById("quickEntry").addEventListener('input', parseQuick, false);
parseQuick();

function getHighestSpeed(trackList) {
  //find the highest speed in the tracklist
  var speeds = [];
  for (i = 0; i < trackList.length; i++) {
    speeds.push(trackList[i][1]);
  }

  speeds.sort(function (a, b) {
    return a - b;
  });
  return speeds[speeds.length - 1];
}

function fillBeats(trackList) {
  var newTracklist = [];
  var sortedTrackList = sortTracklist(trackList); //sort it by speed for display reasons
  var highestSpeed = getHighestSpeed(sortedTrackList);

  for (t = 0; t < sortedTrackList.length; t++) {
    //preserve name and speed
    var beatTrack = [sortedTrackList[t][0], sortedTrackList[t][1]];
    for (a = 2; a < sortedTrackList[t].length; a++) {
      if (sortedTrackList[t][a] == "Move") {
        //Fill blank spaces for speed difference
        var speedDiff = highestSpeed - sortedTrackList[t][1];
        for (s = 0; s < speedDiff; s++) {
          beatTrack.push("Blank");
        }
      }
      beatTrack.push(sortedTrackList[t][a]);
    }
    newTracklist.push(beatTrack);
  }
  return newTracklist;
}

function removeBlankColumns(){
  //iterate through the table and remove all the blank Columns
  var table = document.getElementById('mechtracks');

  //for each column
  for (col = 2; col < table.rows[0].cells.length; col++) {
    var allBlanks = true; //if this becomes false, then we're good
    //go through each cell in the column
    for (r = 0; r < table.rows.length; r++) {
      if (table.rows[r].cells[col].hasChildNodes()){
        allBlanks = false;
        r = 100;//break the loop
      }
    }
    if (allBlanks){
      for (r = 0; r < table.rows.length; r++) {
        table.rows[r].deleteCell(col);//remove that column
      }
      col = col - 1; //so it re-checks the latest column
    }
  }
}

function sortTracklist(trackList) {
  var newTracklist = [];
  var highestSpeed = getHighestSpeed(trackList);

  while (highestSpeed > 0){
    for (t = 0; t < trackList.length; t++) {
      if (trackList[t][1] == highestSpeed) {
        newTracklist.push(trackList[t]);
      }
    }
    highestSpeed = highestSpeed - 1;
  }
  return newTracklist;
}

function logTracklist(trackList) {
  console.log("Tracklist:");
  trackList.forEach(
    logTrack => console.log(logTrack.toString())
  )
}

function countColumns(trackList) {
  var largestTrack = 0;
  for (i = 0; i < trackList.length; i++) {
    if (trackList[i].length > largestTrack) {
      largestTrack = trackList[i].length;
    }
  }
  return largestTrack;
}

function renderTable(trackList) {
  var allColumns = countColumns(trackList);
  //fully rebuilds and re-renders the tracks with each button press
  var mechTracks = document.getElementById('mechtracks');
  mechTracks.innerHTML = ''; //clear everything

  //for each track
  for (i = 0; i < trackList.length; i++) {
    var newRow = mechTracks.insertRow();

    //name
    var cellName = newRow.insertCell();
    cellName.appendChild(document.createTextNode(trackList[i][0]));
    cellName.row = i;
    cellName.col = 0;
    newRow.appendChild(cellName);

    //speed
    var cellSpeed = newRow.insertCell();
    cellSpeed.appendChild(document.createTextNode(trackList[i][1]));
    cellSpeed.row = i;
    cellSpeed.col = 0;
    newRow.appendChild(cellSpeed);

    var cellAction;

    //actions
    if (trackList[i].length > 2) {
      for (a = 2; a < trackList[i].length; a++) {
        //skip the first two elements, the label and the speed
        if (trackList[i][a] == "Blank") {
          //do nothing if there's a blank
          cellAction = newRow.insertCell();
          newRow.appendChild(cellAction);
        } else {
          cellAction = newRow.insertCell();
          cellAction.appendChild(createActionHex(trackList[i][a]));
          newRow.appendChild(cellAction);
        }
        if ((a == trackList[i].length-1) && (a < allColumns-1)){ //at the end of the last loop
          //fill in blank columns at the end
          while (a < allColumns-1){
            cellAction = newRow.insertCell();
            newRow.appendChild(cellAction);
            a++;
          }
        }
      }
    }
  }
  removeBlankColumns();
}

function createActionHex(action) {
  var containerBox = document.createElement('div');
  containerBox.className = "containerBox";

  var textBox = document.createElement('div');
  textBox.className = "text-box";
  textBox.appendChild(document.createTextNode(action));

  var hexImg = document.createElement("img");
  hexImg.className = "img-responsive";

  switch (action) {
    case 'Move':
      hexImg.src = "/assets/generator_resources/mechHexes/white.png";
      break;
    case 'Quick':
      hexImg.src = "/assets/generator_resources/mechHexes/pink.png";
      break;
    case 'Full':
      hexImg.src = "/assets/generator_resources/mechHexes/red.png";
      break;
    case 'Free':
      hexImg.src = "/assets/generator_resources/mechHexes/purple.png";
      break;
    case 'Protocol':
      hexImg.src = "/assets/generator_resources/mechHexes/green.png";
      break;
    case 'Reaction':
      hexImg.src = "/assets/generator_resources/mechHexes/orange.png";
      break;
    case 'Overchg':
      hexImg.src = "/assets/generator_resources/mechHexes/pink.png";
      break;
    case 'Boost':
      hexImg.src = "/assets/generator_resources/mechHexes/blue.png";
      break;
    case 'Sprhvy':
      hexImg.src = "/assets/generator_resources/mechHexes/white.png";
      break;
    default:
      hexImg.src = "/assets/generator_resources/mechHexes/white.png";
  }

  containerBox.appendChild(textBox);
  containerBox.appendChild(hexImg);

  return containerBox;
}

function parseQuick() {
  var text = document.getElementById('quickEntry');
  var quickText = text.value;
  var quickLine = quickText.split('\n');
  //create a new tracklist
  var quickTracks = [];

  for (i = 0; i < quickLine.length; i++) {
    var quickTrack = []; //the new track

    //split with last number, in case the name has a number
    //David456abcdeg = [David 4 5 6 abcdefg]
    var splits = quickLine[i].split(/(\d)/);
    
    if (splits.length > 1) {
      var trackActions = splits.pop(splits.length); //the last element
      var trackSpeed = splits.pop(splits.length); //the second to last element
      quickTrack.push(splits.join('')); //Add in the name
      quickTrack.push(trackSpeed); //Add in the speed

      //for each letter in the quickTrack
      for (a = 0; a < trackActions.length; a++) {
        action = "error";
        switch (trackActions[a]) {
          case 'm':
            action = "Move";
            break;
          case 'q':
            action = "Quick";
            break;
          case 'u':
            action = "Full";
            quickTrack.push(action);
            break;
          case 'f':
            action = "Free";
            break;
          case 'p':
            action = "Protocol";
            break;
          case 'r':
            action = "Reaction";
            break;
          case 'o':
            action = "Overchg";
            break;
          case 'b':
            action = "Boost";
            break;
          case 's':
            action = "Sprhvy";
            quickTrack.push(action);
            break;
          default:
            console.log("Quick Entry action not recognized: " + trackActions[a]);
        }
        if (action != "error"){
        quickTrack.push(action);
        }
      }
      quickTracks.push(quickTrack);
    }
  }
  //simple resize text area
  text.style.height = 'auto';
  text.style.height = text.scrollHeight + 'px';
  text.style.width = '100%';

  renderTable(quickTracks);
  masterTracks = quickTracks;
}


function startRound() {
  filledTracks = fillBeats(masterTracks);
  renderTable(filledTracks);

  //enable button
  document.getElementById('nextAction').style= "display:block;";

  //light first row and column
  var table = document.getElementById('mechtracks');
  table.rows[0].cells[2].style.backgroundColor = currentActionColor;
  //outline first cell of each row
  for (r = 0; r < table.rows.length; r++) {
    table.rows[r].cells[2].style.borderLeft = "3px solid " + currentBeatColor;
    table.rows[r].cells[2].style.borderRight = "3px solid " + currentBeatColor;
  }
}

function nextAction() {
  var table = document.getElementById('mechtracks');

  for (col = 2; col < table.rows[0].cells.length; col++) {
    //if the current column is lit, check cells
    if (table.rows[0].cells[col].style.borderLeftColor == currentBeatColor) {
      //go through each cell in the column
      for (r = 0; r < table.rows.length; r++) {
        //if the current cell is highlighted
        if (table.rows[r].cells[col].style.backgroundColor == currentActionColor) {
          //if it's the last cell, highlight the next column
          if (r == table.rows.length - 1) {
            //highlight next column
            for (i = 0; i < table.rows.length; i++) {
              table.rows[i].cells[col + 1].style.borderLeft = "3px solid " + currentBeatColor;
              table.rows[i].cells[col + 1].style.borderRight = "3px solid " + currentBeatColor;
              table.rows[i].cells[col].style.borderLeft = "none";
              table.rows[i].cells[col].style.borderRight = "none";
            }
            //light next cell
            table.rows[r].cells[col].style.backgroundColor = oldActionColor;
            table.rows[0].cells[col + 1].style.backgroundColor = currentActionColor;
            
            //break the loop if the action has content
            if (table.rows[0].cells[col + 1].hasChildNodes()){
              r = 100; //break the loop
              col = 100; //break the loop
            }
          } else {
            //Just highlight the next cell
            table.rows[r].cells[col].style.backgroundColor = oldActionColor;
            table.rows[r + 1].cells[col].style.backgroundColor = currentActionColor;
            
            //break the loop if the action has content
            if (table.rows[r + 1].cells[col].hasChildNodes()){
              r = 100; //break the loop
              col = 100; //break the loop
            }
          }          
        }
      }
    }
  }
}


function endRound() {
  renderTable(masterTracks);
}