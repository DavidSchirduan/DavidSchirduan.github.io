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
  for (t=0;t<trackList.length;t++){
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

function logTracklist() {
  console.log("Final Tracklist:");
  allTracks.forEach(
    finalTrack => console.log(finalTrack.toString())
  )
}

function addTrack() {
  allTracks.push(["Track" + allTracks.length, 1, "Add"]); //autoincrement
  renderTable(allTracks);
}

function countColumns(){
  largestTrack = 0;
  for (i=0;i<allTracks.length;i++){
    if (allTracks[i].length > largestTrack){
      largestTrack = allTracks[i].length;
    }
  }
  return largestTrack;
}

function renderTable(trackList) {
  allColumns = countColumns() + 1; //add one for delete
  //fully rebuilds and re-renders the tracks with each button press
  mechTracks = document.getElementById('mechtracks');
  mechTracks.innerHTML = ''; //clear everything

  //for each track
  for (i = 0; i < trackList.length; i++) {
    newRow = mechTracks.insertRow();

    //name
    cellName = newRow.insertCell();
    cellName.appendChild(document.createTextNode(trackList[i][0]));
    cellName.setAttribute('contenteditable','true');
    cellName.row = i;
    cellName.col = 0;
    cellName.addEventListener('input', updateName, false);    
    newRow.appendChild(cellName);

    //speed
    cellSpeed = newRow.insertCell();
    buttonSpeed = document.createElement('button');
    buttonSpeed.appendChild(document.createTextNode(trackList[i][1]));
    buttonSpeed.row = i;
    buttonSpeed.col = 0;
    buttonSpeed.addEventListener('click', increaseSpeed, false);    
    cellSpeed.appendChild(buttonSpeed);
    newRow.appendChild(cellSpeed);

    //actions
    if (trackList[i].length > 2) {
      for (a = 2; a < trackList[i].length; a++) {
        //skip the first two elements, the label and the speed
        if (trackList[i][a] == "Blank"){
          //do nothing if there's a blank
          cellAction = newRow.insertCell();   
          cellAction.appendChild(document.createTextNode(trackList[i][a]));
          newRow.appendChild(cellAction);
        } else {
        //create a button for each action
        cellAction = newRow.insertCell();
        buttonAction = document.createElement('button');
        buttonAction.row = i;
        buttonAction.col = a;
        buttonAction.addEventListener('click', clickAction, false);    
        buttonAction.appendChild(document.createTextNode(trackList[i][a]));
        cellAction.appendChild(buttonAction);
        newRow.appendChild(cellAction);
        }
      }
    } else {
      console.log("This should have more than 2 items: " + trackList[i].toString());
    }

    //delete track
    cellDelete = newRow.insertCell();
    cellDelete.setAttribute('colspan', allColumns-trackList[i].length);
    buttonDelete = document.createElement('button');
    buttonDelete.row = i;
    buttonDelete.col = 0;
    buttonDelete.addEventListener('click', deleteTrack, false);     buttonDelete.appendChild(document.createTextNode("Delete Track"));
    cellDelete.appendChild(buttonDelete);
    newRow.appendChild(cellDelete);
  }
}

function clickAction(event) {
  row = event.currentTarget.row;
  col = event.currentTarget.col;

  //When someone clicks an existing action, it cycles between the types.
  cellText = allTracks[row][col];

  if (cellText == "Delete?") {
    //Delete action
    allTracks[row].splice(col, 1);
  } else {
    if (cellText == "Add") {
      //Add a new action to the track
      allTracks[row].splice(col + 1, 0, actionRotation[0])
    }

    if (actionRotation.includes(cellText)) {
      rotationIndex = actionRotation.indexOf(cellText);
      //increment to the next action type
      allTracks[row][col] = actionRotation[rotationIndex + 1];
    } else if (cellText == "Blank"){
      console.log("Blanks can't be edited");
    } else {
      console.log("The action is invalid");
    }
  }
  renderTable(allTracks);
}

function updateName(event){
  newName = event.currentTarget.innerText;
  allTracks[event.currentTarget.row][0] = newName;
}

function increaseSpeed(event){
  row = event.currentTarget.row;
  allTracks[row][1] = allTracks[row][1] + 1;
  if (allTracks[row][1] > 9){
    allTracks[row][1] = 1;
  }
  renderTable(allTracks);
}

function deleteTrack(event) {
  row = event.currentTarget.row;
  allTracks.splice(row, 1);
  renderTable(allTracks);
}

var PetrichorTrack = ["Petrichor", 4, "Quick", "Move", "Move", "Move", "Move", "Quick"];
var AbsalomTrack = ["Absalom", 3, "Move", "Move", "Quick", "Quick", "Overcharge", "Quick"];
var TitaniaTrack = ["Titania", 6, "Protocol", "Move", "Move", "Protocol", "Protocol", "Move", "Quick", "Move", "Move", "Protocol", "Protocol", "Quick", "Move", "Protocol", "Protocol", ];
var MargreaveTrack = ["Margreave", 3, "Move", "Quick", "Quick", "Overcharge", "Quick"];

var BerserkerTrack = ["Berserker", 5, "Move", "Move", "Move", "Move", "Quick", "Quick"];
var AssaultTrack = ["Assault", 4, "Move", "Move", "Move", "Move", "Quick", "Quick"];
var EliteTrack = ["Elite", 4, "Quick", "Move", "Move", "Move", "Quick", "Quick", "Move", "Move", "Move", "Quick", ];
var GoliathTrack = ["Goliath", 3, "Quick", "Move", "Move", "Move", "Quick"];
var PriestTrack = ["Priest", 5, "Quick", "Quick", "Move", "Move", "Move", "Move"];

var allTracks = [PetrichorTrack, AbsalomTrack, TitaniaTrack, MargreaveTrack, BerserkerTrack, AssaultTrack, EliteTrack, GoliathTrack, PriestTrack];

actionRotation = ["Add","Move", "Quick", "Full", "Free", "Protocol", "Reaction", "Overcharge", "Boost", "Superheavy Fire", "Delete?"];

renderTable(allTracks);

function startRound(){
  filledTracks = fillBeats(allTracks);
  renderTable(filledTracks);
}

function endRound(){
  renderTable(allTracks);
}

function clearTracks(){
  allTracks = [];
  addTrack();
}

