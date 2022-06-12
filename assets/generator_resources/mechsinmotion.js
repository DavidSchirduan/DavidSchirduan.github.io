/**
PSEUDOCODE
Action Types: Move, Quick, Full, Free, Protocol, Reaction, Overcharge, Boost Movement, Superheavy Fire

Each player has a track. Players input their actions: Move, Quick, Free, Quick, Overcharge.Each action has a short description as well. "e.g. Tune Up (quick)"

Track = [Steve, 6, Quick, Full, Move, Move Move, Overcharge]

Once you have a bunch of tracks the tool takes them all and uses their speed to figure out turn order.

1. The combatant with the highest Speed places an action in every column until their actions are completed.
2. The combatants with the next highest Speed will skip one beat between each move action. 3rd highest skip 2 beats, and so on.
3. All actions that resolve in the same Beat will resolve simultaneously, except when two actions resolving on the same beat may affect each other’s outcome. In these cases, the action from the character with the highest Speed resolves first.

EXCEPTIONS:
A. Superheavy weapons fire on the second beat of the Barrage action used to fire them.
B. Any action taken following an Overcharge action resolves on the following beat, occupying its own beat on the Action Track.
C. Boost movement always occurs in consecutive beats and is not adjusted for the character’s speed.

CREATING TRACKS

Character Name (editable)
Speed
First Action | dropdown for type | short description
Second Action | dropdown for type | short description
Button to add more inputs

Add player | Remove player

Start Round

CREATING BEATS



DISPLAY ROUNDS

Uses a table setup, scrollable. 
Highlights the current column.
Sort by speed

Name  Speed   First Second  Third

Al     6      move  boost    shoot
Jin    4      move   blank    boost
Gub    3
Fan    3


CURRENT BEAT
Click one of the current beats to pop up a modal:

Wait (delay current action till next beat)
Killed (clear rest of track)
Edit Track (same edit screen as before)

 */


function getHighestSpeed(trackList) {
  //find the highest speed
  speeds = [];
  for (i = 0; i < trackList.length; i++) {
    speeds.push(trackList[i][1]);
  }

  speeds.sort(function (a, b) {
    return a - b;
  });
  console.log("The highest speed is " + speeds[speeds.length - 1]);
  return speeds[speeds.length - 1];
}

function fillBeats(trackList) {
  newTracklist = [];
  highestSpeed = getHighestSpeed(trackList);
  for (t = 0; t < trackList.length; t++) {
    //preserve name and speed
    beatTrack = [trackList[t][0], trackList[t][1]];
    for (i = 2; i < trackList[t].length; i++) {
      if (trackList[t][i] == "Move") {
        //Fill blank spaces for speed difference
        speedDiff = highestSpeed - trackList[t][1];
        for (s = 0; s < speedDiff; s++) {
          beatTrack.push("Blank");
        }
      }
      beatTrack.push(trackList[t][i]);
    }
    newTracklist.push(beatTrack);
  }
  return newTracklist;
}

function logTracklist(trackList) {
  console.log("Final Tracklist:");
  trackList.forEach(
    logTrack => console.log(logTrack.toString())
  )
}

function countColumns(trackList) {
  largestTrack = 0;
  for (i = 0; i < trackList.length; i++) {
    if (trackList[i].length > largestTrack) {
      largestTrack = trackList[i].length;
    }
  }
  return largestTrack;
}

function renderTable(trackList) {
  allColumns = countColumns(trackList);
  //fully rebuilds and re-renders the tracks with each button press
  mechTracks = document.getElementById('mechtracks');
  mechTracks.innerHTML = ''; //clear everything

  //for each track
  for (i = 0; i < trackList.length; i++) {
    newRow = mechTracks.insertRow();

    //name
    cellName = newRow.insertCell();
    cellName.appendChild(document.createTextNode(trackList[i][0]));
    cellName.row = i;
    cellName.col = 0;
    newRow.appendChild(cellName);

    //speed
    cellSpeed = newRow.insertCell();
    cellSpeed.appendChild(document.createTextNode(trackList[i][1]));
    cellSpeed.row = i;
    cellSpeed.col = 0;
    newRow.appendChild(cellSpeed);

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
      }
    } else {
      console.log("This should have more than 2 items: " + trackList[i].toString());
    }
  }
}

function createActionHex(action) {
  containerBox = document.createElement('div');
  containerBox.className = "containerBox";

  textBox = document.createElement('div');
  textBox.className = "text-box";
  textBox.appendChild(document.createTextNode(action));

  hexImg = document.createElement("img");
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
  text = document.getElementById('quickEntry');
  quickText = text.value;
  quickLine = quickText.split('\n');
  //create a new tracklist
  quickTracks = [];

  for (i = 0; i < quickLine.length; i++) {
    quickTrack = []; //the new track

    //split with last number, in case the name has a number
    //David456abcdeg = [David 4 5 6 abcdefg]
    splits = quickLine[i].split(/(\d)/);
    
    if (splits.length > 1) {
      trackActions = splits.pop(splits.length); //the last element
      trackSpeed = splits.pop(splits.length); //the second to last element
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
            break;
          default:
            console.log("Quick Entry action not recognized: " + trackActions[a]);
        }
        if (action != "error"){
        quickTrack.push(action);
        }
      }
      quickTracks.push(quickTrack);
    } else {
      console.log("Invalid line, no Number: " + quickLine[i]);
    }
  }
  //simple resize text area
  text.style.height = 'auto';
  text.style.height = text.scrollHeight + 'px';
  text.style.width = '100%';

  renderTable(quickTracks);
  masterTracks = quickTracks;
}

function increaseSpeed(event) {
  row = event.currentTarget.row;
  allTracks[row][1] = allTracks[row][1] + 1;
  if (allTracks[row][1] > 9) {
    allTracks[row][1] = 1;
  }
  renderTable(allTracks);
}

function deleteTrack(event) {
  row = event.currentTarget.row;
  allTracks.splice(row, 1);
  renderTable(allTracks);
}

masterTracks = [];

document.getElementById("quickEntry").addEventListener('input', parseQuick, false);

text = document.getElementById('quickEntry');
text.style.height = 'auto';
text.style.height = text.scrollHeight + 'px';
text.style.width = '100%';

parseQuick();


function startRound() {
  filledTracks = fillBeats(masterTracks);
  renderTable(filledTracks);

//   var table = document.getElementById("mechtracks");

//   for (var i = 0, row; row = table.rows[i]; i++) {
//     //iterate through rows
//     row.style = "background-color: rgba(95,160,160,0.5);"
//     for (var j = 0, col; col = row.cells[j]; j++) {
//       //iterate through columns
//       col.style = "background-color: rgba(95,160,160,0.5);"
//     }  
//  }
}

function nextAction(){

}

function endRound() {
  renderTable(masterTracks);
}