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

//For today, just take multiple tracks and add in blank beats. Include exceptions

//Maybe use a popup modal to fill in deets, and display the tracks when complete. Cleaner?

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

function getHighestSpeed(trackList) {
  //find the highest speed
  speeds = [];
  trackList.forEach(
    element => speeds.push(element[1])
  );
  speeds.sort(function (a, b) {
    return a - b;
  });
  console.log("The highest speed is " + speeds[speeds.length-1]);
  return speeds[speeds.length-1];
}

function fillBeats(track, highestSpeed) {
  beatTrack = [track[0], track[1]];
  for (i = 2; i < track.length; i++) {
    if (track[i] == "Move") {
      //Fill blank spaces for speed difference
      speedDiff = highestSpeed - track[1];
      for (s = 0; s < speedDiff; s++) {
        beatTrack.push("Blank");
      }
    }
    beatTrack.push(track[i]);
  }
  return beatTrack;
}

filledTracklist = [];
//for each track
allTracks.forEach(
  //for each action
  track => filledTracklist.push(fillBeats(track, getHighestSpeed(allTracks)))
)

console.log("Final Tracklist:");
filledTracklist.forEach(
  finalTrack => console.log(finalTrack.toString())
)