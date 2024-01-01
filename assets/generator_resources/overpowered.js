//get the json file and parse it 
fetch('/assets/generator_resources/overpowered.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        overpowered = data;
        grabParamsURL();
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

function grabParamsURL() {
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.search != "" && urlParams.has('name')) {
    try {
      botName = decodeURI(urlParams.get('name')); //split it up into an array
      generateSeed(botName);
    } catch (e) {
      console.log(e); // pass exception object to error handler (i.e. your own function)
      generateSeed();
    }
  } else {
    generateSeed();
  }

  if (window.location.search != "" && urlParams.has('treasure')) {
    if (urlParams.get('treasure')) { //testing for an empty array
      treasurePool = urlParams.get('treasure').split(","); //split it up into an array
    } //else leave it as an empty array
  } else {
    gainDie(4);
    gainDie(20);
  }

  if (window.location.search != "" && urlParams.has('foe')) {
    if (urlParams.get('foe')) { //testing for an empty array
      foePool = urlParams.get('foe').split(","); //split it up into an array
    } //else leave it as an empty array 
  } else {
    gainDie(6);
    gainDie(12);
  }

  if (window.location.search != "" && urlParams.has('obstacle')) {
    if (urlParams.get('obstacle')) { //testing for an empty array
      obstaclePool = urlParams.get('obstacle').split(","); //split it up into an array
    } //else leave it as an empty array
  } else {
    gainDie(8);
    gainDie(10);
  }

  prepRolls(); //populate pre-rolled dice in case no gainDie triggered

  //Get the size from the last save state, and pop off the numbers that were already used.
  if (window.location.search != "" && urlParams.get('d4s')) {
    while (preRolledD4s.length > urlParams.get('d4s')) {
      preRolledD4s.pop();
    }
  }
  if (window.location.search != "" && urlParams.get('d6s')) {
    while (preRolledD6s.length > urlParams.get('d6s')) {
      preRolledD6s.pop();
    }
  }
  if (window.location.search != "" && urlParams.get('d8s')) {
    while (preRolledD8s.length > urlParams.get('d8s')) {
      preRolledD8s.pop();
    }
  }
  if (window.location.search != "" && urlParams.get('d10s')) {
    while (preRolledD10s.length > urlParams.get('d10s')) {
      preRolledD10s.pop();
    }
  }
  if (window.location.search != "" && urlParams.get('d12s')) {
    while (preRolledD12s.length > urlParams.get('d12s')) {
      preRolledD12s.pop();
    }
  }
  if (window.location.search != "" && urlParams.get('d20s')) {
    while (preRolledD20s.length > urlParams.get('d20s')) {
      preRolledD20s.pop();
    }
  }

  if (window.location.search != "" && urlParams.get('overpower')) {
    finalScore = parseInt(decodeURI(urlParams.get('overpower')));
  }

  if (window.location.search != "" && urlParams.get('rush')) {
    diceRush = parseInt(decodeURI(urlParams.get('rush')));
  }

  if (window.location.search != "" && urlParams.get('endgame')) {
    endGame = parseInt(decodeURI(urlParams.get('endgame')));
  }

  renderAll();
}

//setup the pools and vars
var overpowered = {}; //contain JSON data
botName = "ERROR.7";
var myrng = function () {}; //contain random seed
let runningAnimation; //prevent animations from crashing each other
lastRender = 0;

//Dice Notation: "20-13-s" for a d20 showing 13 that is selected. 
treasurePool = []; //d4 and d20s
foePool = []; // d6s and d12s
obstaclePool = []; // d8s and d10s
enableEffects = true;
maxRows = 3; //always 3 columns, but rows can vary
finalScore = 50; //start with 50 Overpower for spending
undoTracker = []; //list of previous url states
undoHistory = 12; //how many changes to save for undoing
endGame = 0; //show the fancy endscreen
diceRush = 0; //tracker for how many targets per room

//Pre-rolled dice rolls
preRollLimit = 200;
preRolledD4s = [];
preRolledD6s = [];
preRolledD8s = [];
preRolledD10s = [];
preRolledD12s = [];
preRolledD20s = [];

function generateSeed(oldSeed) {
  //Uses the name of the bot to save the details
  //create a new code if we don't have one
  if (!oldSeed) {
    botName = overpowered.Adjectives[Math.floor(Math.random() * overpowered.Adjectives.length)] + "." +
      overpowered.Names[Math.floor(Math.random() * overpowered.Names.length)] + "." +
      Math.floor(Math.random() * (20) + 1); //so numbers are from 1-20
    botName = botName.toUpperCase();
  } else {
    botName = oldSeed;
  }

  myrng = new Math.seedrandom(botName.toUpperCase()); //force uppercase for consistency
}

function prepRolls() {
  //in case we run out of rolls
  if (preRolledD4s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD4s.push(getRandomInt(1, 4));
    }
  }

  if (preRolledD6s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD6s.push(getRandomInt(1, 6));
    }
  }

  if (preRolledD8s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD8s.push(getRandomInt(1, 8));
    }
  }

  if (preRolledD10s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD10s.push(getRandomInt(1, 10));
    }
  }

  if (preRolledD12s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD12s.push(getRandomInt(1, 12));
    }
  }

  if (preRolledD20s.length < 1) {
    for (d = 0; d < preRollLimit; d++) {
      preRolledD20s.push(getRandomInt(1, 20));
    }
  }
}

//save current url
function saveUndo() {
  undoTracker.push(window.location.search);
  if (undoTracker.length > undoHistory) {
    undoTracker.shift(); //remove oldest element
  }
}

function loadUndo() {
  //disable the submission form first
  document.getElementById('overpoweredShowForm').style.display = "none";
  closeModal();

  //grab the latest URL
  undoURL = new URLSearchParams(undoTracker.pop());

  //regenerate the seed again
  generateSeed(botName);

  if (undoURL.get('treasure')) {
    treasurePool = undoURL.get('treasure').split(","); //split it up into an array
  } else {
    treasurePool = [];
  }
  if (undoURL.get('foe')) {
    foePool = undoURL.get('foe').split(","); //split it up into an array
  } else {
    foePool = [];
  }
  if (undoURL.get('obstacle')) {
    obstaclePool = undoURL.get('obstacle').split(","); //split it up into an array
  } else {
    obstaclePool = [];
  }

  //remove -s when undoing stuff
  for (i = 0; i < treasurePool.length; i++) {
    if (treasurePool[i].includes("-s")) {
      treasurePool[i] = treasurePool[i].replace("-s", "");
    }
  }
  for (i = 0; i < foePool.length; i++) {
    if (foePool[i].includes("-s")) {
      foePool[i] = foePool[i].replace("-s", "");
    }
  }
  for (i = 0; i < obstaclePool.length; i++) {
    if (obstaclePool[i].includes("-s")) {
      obstaclePool[i] = obstaclePool[i].replace("-s", "");
    }
  }

  //reset rolls and re-increment as if loading from save
  preRolledD4s = [];
  preRolledD6s = [];
  preRolledD8s = [];
  preRolledD10s = [];
  preRolledD12s = [];
  preRolledD20s = [];

  prepRolls(); //populate pre-rolls

  //Get the size from the last save state, and pop off the numbers that were already used.
  while (preRolledD4s.length > undoURL.get('d4s')) {
    preRolledD4s.pop();
  }

  while (preRolledD6s.length > undoURL.get('d6s')) {
    preRolledD6s.pop();
  }

  while (preRolledD8s.length > undoURL.get('d8s')) {
    preRolledD8s.pop();
  }

  while (preRolledD10s.length > undoURL.get('d10s')) {
    preRolledD10s.pop();
  }

  while (preRolledD12s.length > undoURL.get('d12s')) {
    preRolledD12s.pop();
  }

  while (preRolledD20s.length > undoURL.get('d20s')) {
    preRolledD20s.pop();
  }

  logDiv = document.getElementById('adventureLog');
  //if there are any logs
  if (logDiv.lastElementChild !== null) {
    //remove last event
    logDiv.removeChild(logDiv.firstChild);
  }

  finalScore = parseInt(decodeURI(undoURL.get('overpower')));
  endGame = parseInt(decodeURI(undoURL.get('endgame')));
  diceRush = parseInt(decodeURI(undoURL.get('rush')));
  endGame = parseInt(decodeURI(undoURL.get('endgame')));

  renderAll();
}

function toggleCRT() {
  enableEffects = !enableEffects;
  wgs = document.getElementsByClassName('wideGrid');
  cc = document.getElementsByClassName('crtCard');

  for (i = 0; i < wgs.length; i++) {
    wgs[i].classList.toggle('crt');
  }
  for (i = 0; i < cc.length; i++) {
    cc[i].classList.toggle('crt');
  }
}

// General random int function for simpler code
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(myrng() * (max - min + 1) + min);
}

function getNextPreroll(size) {
  roll = 0;
  prepRolls();
  switch (true) {
    case (size == 4):
      roll = preRolledD4s.pop();
      break;
    case (size == 6):
      roll = preRolledD6s.pop();
      break;
    case (size == 8):
      roll = preRolledD8s.pop();
      break;
    case (size == 10):
      roll = preRolledD10s.pop();
      break;
    case (size == 12):
      roll = preRolledD12s.pop();
      break;
    case (size == 20):
      roll = preRolledD20s.pop();
      break;
  }
  return roll;
}

function gainDie(size) {
  roll = getNextPreroll(size);
  newFinalScore = 0; //to track overflow 

  if (size == 4 || size == 20) {
    treasurePool.unshift(size + "-" + roll);
    if (treasurePool.length > maxRows) {
      tributeDie = treasurePool.splice(maxRows)[0] //get the last of the list
      newFinalScore = newFinalScore + parseInt(tributeDie.split("-")[1]) //remove the die size
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    if (foePool.length > maxRows) {
      tributeDie = foePool.splice(maxRows)[0]
      newFinalScore = newFinalScore + parseInt(tributeDie.split("-")[1]) //remove the die size
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    if (obstaclePool.length > maxRows) {
      tributeDie = obstaclePool.splice(maxRows)[0]
      newFinalScore = newFinalScore + parseInt(tributeDie.split("-")[1]) //remove the die size
    }
  }
  if (newFinalScore > 0) {
    gainFinalScore(newFinalScore);
  }
}

function scanSomething() {
  saveUndo(); //save first in case undo
  diceRush = diceRush + 1;

  //Rewards d4, d6, d8, d10, d12, d20, 2d4, 2d6, 2d8 ...
  diceChain = [4, 6, 8, 10, 12, 20];

  //so the 8th reward will be 2d6, the 15th reward will be 3d8
  chainLoop = Math.floor((diceRush - 1) / 6);

  newDiceArray = [];
  //loop for gaining multiple dice
  for (i = 0; i <= chainLoop; i++) {
    newDiceArray.push(diceChain[((diceRush - 1) % 6)])
  }

  gainDice(newDiceArray); //this will render pools
  renderRush();
  renderURL();

}

function enterArea() {
  saveUndo(); //save first in case undo

  //reset dice rush
  diceRush = 0;

  renderRush();
  gainFinalScore(5); //gain 5 OP for finishing room
  logEvent("newArea");
}

/**
 * New logic:
 * Click on a die.
 * It gains a grey outline.
 * The Spend Dice changes to "Spend X Power", become a button.
 * Click more dice to give grey outline. Spend X Power updates.
 * Click a die again to unselect it.
 * Click Spend X Power to remove all selected dice.
 */

//Spend Dice by clicking
function clickTreasure(index) {
  if (treasurePool[index].includes("-s")) {
    treasurePool[index] = treasurePool[index].replace("-s", "");
  } else {
    treasurePool[index] = treasurePool[index] + "-s";
  }
  renderPools(treasurePool, foePool, obstaclePool);
}

function clickFoe(index) {
  if (foePool[index].includes("-s")) {
    foePool[index] = foePool[index].replace("-s", "");
  } else {
    foePool[index] = foePool[index] + "-s";
  }
  renderPools(treasurePool, foePool, obstaclePool);
}

function clickObstacle(index) {
  if (obstaclePool[index].includes("-s")) {
    obstaclePool[index] = obstaclePool[index].replace("-s", "");
  } else {
    obstaclePool[index] = obstaclePool[index] + "-s";
  }
  renderPools(treasurePool, foePool, obstaclePool);
}

function spendSelectedDice() {
  saveUndo(); //save first in case undo
  trackSpentDice = [];

  //iterate backwards through the array so you 
  //remove things off the end, and don't mess up the index
  for (var i = (treasurePool.length - 1); i >= 0; i--) {
    if (treasurePool[i].includes("-s")) {
      trackSpentDice.push(treasurePool[i]);
      treasurePool.splice(i, 1);
    }
  }
  for (var i = (foePool.length - 1); i >= 0; i--) {
    if (foePool[i].includes("-s")) {
      trackSpentDice.push(foePool[i]);
      foePool.splice(i, 1);
    }
  }
  for (var i = (obstaclePool.length - 1); i >= 0; i--) {
    if (obstaclePool[i].includes("-s")) {
      trackSpentDice.push(obstaclePool[i]);
      obstaclePool.splice(i, 1);
    }
  }
  logSpentDice(trackSpentDice);
  renderAll();
}

function countAllDice() {

  var countPower = 0;

  for (var i = 0; i < treasurePool.length; i++) {
    countPower = countPower + parseInt(treasurePool[i].split("-")[1]);
  }
  for (var i = 0; i < foePool.length; i++) {
    countPower = countPower + parseInt(foePool[i].split("-")[1]);
  }
  for (var i = 0; i < obstaclePool.length; i++) {
    countPower = countPower + parseInt(obstaclePool[i].split("-")[1]);
  }
  return countPower;
}

function countSelectedPower() {

  var countPower = 0;

  for (var i = 0; i < treasurePool.length; i++) {
    if (treasurePool[i].includes("-s")) {
      countPower = countPower + parseInt(treasurePool[i].split("-")[1]);
    }
  }
  for (var i = 0; i < foePool.length; i++) {
    if (foePool[i].includes("-s")) {
      countPower = countPower + parseInt(foePool[i].split("-")[1]);
    }
  }
  for (var i = 0; i < obstaclePool.length; i++) {
    if (obstaclePool[i].includes("-s")) {
      countPower = countPower + parseInt(obstaclePool[i].split("-")[1]);
    }
  }
  return countPower;
}

//Reroll all dice
function rerollDice() {
  saveUndo(); //save first in case undo

  logEvent("reroll");

  if (enableEffects) {
    var duration = 1000;
    const dice = document.querySelectorAll("#overCard .dicierHeavy");
    let startTimestamp = null;
    var lastProgress = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      checkProgress = progress;
      if (checkProgress - lastProgress > .1) { //only animate every .1 seconds
        lastProgress = checkProgress;
        for (var i = 0; i < dice.length; i++) {
          dice[i].style.color = overpowered.Colors[getRandomInt(0, overpowered.Colors.length)];
        }
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  //reverse so that when we ADD dice they appear from the bottom of the column
  oldTreasurePool = treasurePool.reverse();
  oldFoePool = foePool.reverse();
  oldObstaclePool = obstaclePool.reverse();

  treasurePool = [];
  foePool = [];
  obstaclePool = [];

  //actually reroll the values
  if (oldTreasurePool.length > 0) {
    for (var i = 0; i < oldTreasurePool.length; i++) {
      die = oldTreasurePool[i];
      dieSize = die.split("-")[0];
      newRoll = getNextPreroll(dieSize);
      treasurePool.unshift(dieSize + "-" + newRoll);
    }
  }

  if (oldFoePool.length > 0) {
    for (var i = 0; i < oldFoePool.length; i++) {
      die = oldFoePool[i];
      dieSize = die.split("-")[0];
      newRoll = getNextPreroll(dieSize);
      foePool.unshift(dieSize + "-" + newRoll);
    }
  }

  if (oldObstaclePool.length > 0) {
    for (var i = 0; i < oldObstaclePool.length; i++) {
      die = oldObstaclePool[i];
      dieSize = die.split("-")[0];
      newRoll = getNextPreroll(dieSize);
      obstaclePool.unshift(dieSize + "-" + newRoll);
    }
  }


  if (enableEffects) {
    finishAnimation(1100).then(() => renderPools(treasurePool, foePool, obstaclePool));
  } else {
    renderPools(treasurePool, foePool, obstaclePool);
  }

  gainFinalScore(-5);
  renderURL();
}

//End the adventure
function endAdventure() {
  saveUndo(); //save first in case undo

  buttonWindows = document.querySelectorAll("#treasureCore, #foeCore, #obstacleCore, #gainCard, #spendOverpower");

  gainFinalScore(-50);
  gainFinalScore((finalScore * 100) - finalScore); //just add some zeroes to make it arcadey
  //document.getElementById('finalScoreSpan').innerText = "Final Score: " + (finalScore * 100) - finalScore;
  endGame = 1; //trigger endgame and clear out stuff.
  logEvent("endGame");
  renderURL();
  window.scrollTo(0, 0);

  //Configure the Form Submission in case
  document.getElementById('overpoweredShowForm').style.display = "block";
  document.getElementById('botNameForm').value = botName;
  document.getElementById('finalScore').value = finalScore;
  document.getElementById('overpoweredAdventureLog').value = document.getElementById('adventureLog').innerText;
}

//For the OP button
function gainDiceSet() {
  saveUndo(); //save first in case undo
  logEvent("gainAll");
  gainDice([4, 6, 8, 10, 12, 20], true);
  gainFinalScore(-30);
}

//Fun teleport animation
function spendTeleport() {
  saveUndo(); //save first in case undo

  gainFinalScore(-50);

  logEvent("teleport");

  if (enableEffects) {
    var duration = 2000;
    const windows = document.getElementById("overCard").parentNode;
    const deets = document.getElementById("botDetails");
    let startTimestamp = null;
    var lastProgress = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 2);
      checkProgress = progress;
      if (checkProgress - lastProgress > .1) { //only animate every .1 seconds
        lastProgress = checkProgress;
        windows.style.opacity = Math.abs(1 - lastProgress);
        deets.style.opacity = Math.abs(1 - lastProgress);
      }
      if (progress < 2) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  if (enableEffects) {
    finishAnimation(2100);
  }
}

function gainDice(gainArray, skipLog) {
  //We want to copy by value, NOT reference
  //Pass this into the animation function so it can compare the new dice
  oldTpool = treasurePool.slice();
  oldFpool = foePool.slice();
  oldOpool = obstaclePool.slice();

  //go through each die in array, and gain that die
  for (i = 0; i < gainArray.length; i++) {
    gainDie(gainArray[i]);
  }

  if (enableEffects) {
    runningAnimation = window.requestAnimationFrame(function (timestamp) {
      starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      animateAllGain(timestamp, 1000, oldTpool, oldFpool, oldOpool)
    });
  } else {
    renderPools(treasurePool, foePool, obstaclePool);
  }

  if (!skipLog) {
    logEvent(gainArray);
  }
  renderURL();
}

function finishAnimation(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function gainFinalScore(amount) {
  var start = finalScore;
  var end = finalScore + amount;
  finalScore = amount + finalScore; //actually set the new finalScore

  if (enableEffects) {
    //prevent button mashing
    document.getElementById('gainDiceButton').disabled = true;
    document.getElementById('rerollButton').disabled = true;
    var duration = 1000;
    const target = document.getElementById("finalScoreSpan");
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (!endGame) {
        target.innerText = (Math.floor(progress * (end - start) + start));
      } else {
        target.innerText = (Math.floor(progress * (end - start) + start));
      }
      target.style.color = "var(--OPd20)";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    finishAnimation(1200).then(() => renderOP(finalScore));
  } else {
    renderOP(finalScore);
  }

  renderURL();
}

function randomRoller(size) {
  ranRoll = getRandomInt(1, size);

  document.getElementById('rollerLog').innerHTML = document.getElementById('rollerLog').innerHTML + "    <span class=\"dicierHeavy\">" + ranRoll + "_ON_D" + size + "</span>";

  logEvent(size + "-" + ranRoll);

  //color the most recent die white
  shadeDice = document.querySelectorAll("#rollerLog span");
  diceColors = [];

  for (i = 0; i < shadeDice.length; i++) {
    if (i == shadeDice.length - 1) {
      shadeDice[i].style.color = "var(--OPwhite)";
    } else {
      shadeDice[i].style.color = "var(--OPgrey)";
    }
  }
}

function logEvent(event) {
  logDiv = document.getElementById('adventureLog'); //ul

  //New Log
  logMessage = document.createElement('li');
  msgText = "";

  if (event == "reroll") {
    msgText = "REROLL: Spent <span class=\"dtribute\">5 Overpower</span>";
    logMessage.innerHTML = msgText;
  } else if (event == "teleport") {
    msgText = "TELEPORT: Spent <span class=\"dtribute\">50 Overpower</span>";
    logMessage.innerHTML = msgText;
  } else if (event == "gainAll") {
    msgText = "PURCHASE DICE: Spent <span class=\"dtribute\">30 Overpower</span> to gain <span class=\"d4\">d4</span>, <span class=\"d6\">d6</span>, <span class=\"d8\">d8</span>, <span class=\"d10\">d10</span>, <span class=\"d12\">d12</span>, <span class=\"d20\">d20</span>";
    logMessage.innerHTML = msgText;
  } else if (event == "newArea") {
    msgText = "> ENTERED New Area. Gained <span class=\"dtribute\">5 Overpower</span>";
    logMessage.innerHTML = msgText;
  } else if (event == "endGame") {
    msgText = "ENDED the game";
    logMessage.innerHTML = msgText;
  } else if (Array.isArray(event)) {
    //an array of dice were passed in and must be parsed
    msgText = "SCANNED DATA: "
    for (i = 0; i < event.length; i++) {
      msgText = msgText +
        "<span class=\"d" + event[i] + "\">d" + event[i] + "</span>, ";
    }
    //replace any last comma
    logMessage.innerHTML = msgText.replace(/,(?=[^,]+$)/, '');
  } else {
    //otherwise it's a random roll "6-1"
    ranSize = event.split("-")[0]
    ranVal = event.split("-")[1]
    msgText = "RANDOM ROLL: d" + ranSize + "[" + ranVal + "]";
    logMessage.innerHTML = msgText;
  }
  logDiv.prepend(logMessage);
  logDiv.scrollTop = 0;
}

function logSpentDice(diceList) {
  //Render Adventure Log
  logDiv = document.getElementById('adventureLog');
  newLog = document.createElement('li');

  logMessage = document.createElement('li');
  totalPower = 0;
  msgText = "";

  for (i = 0; i < diceList.length; i++) {
    dieSize = diceList[i].split("-")[0];
    dieVal = diceList[i].split("-")[1];
    totalPower = totalPower + parseInt(dieVal);
    msgText = msgText +
      "<span class=\"d" + dieSize + "\">d" + dieSize + "</span>[" + dieVal + "], ";
  }
  //replace any last comma
  msgText = msgText.replace(/,(?=[^,]+$)/, '');

  logMessage.innerHTML = "DEFEND: Spent " + totalPower + " Power: " + msgText;
  logDiv.prepend(logMessage);
  logDiv.scrollTop = 0; //scroll to the top
}

//pass in current state, end state is known by the long name
function animateAllGain(timestamp, duration, oldTpool, oldFpool, oldOpool) {
  //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
  var timestamp = timestamp || new Date().getTime();
  var runtime = timestamp - starttime;
  var progress = (runtime / duration) + .01; //to avoid 0%
  progress = Math.min(progress, 1); //to avoid over 100%

  //fill in new dice with blanks
  while (oldTpool.length < treasurePool.length) {
    oldTpool.unshift('1-1');
  }
  while (oldFpool.length < foePool.length) {
    oldFpool.unshift('1-1');
  }
  while (oldOpool.length < obstaclePool.length) {
    oldOpool.unshift('1-1');
  }

  //skip rendering old dice. Must check in order

  //treasurePool  = 20-13,  4-3,    20-14
  //oldTpool      = 4-3,    20-14,  4-2
  //Need to start at the end of tpool

  for (i = treasurePool.length - 1; i > 0; i--) {
    for (t = 0; t < oldTpool.length; t++) {
      if (oldTpool[t] == treasurePool[i]) {
        oldTpool[i] = treasurePool[i];
      }
    }
  }

  for (i = foePool.length - 1; i > 0; i--) {
    for (t = 0; t < oldFpool.length; t++) {
      if (oldFpool[t] == foePool[i]) {
        oldFpool[i] = foePool[i];
      }
    }
  }

  for (i = obstaclePool.length - 1; i > 0; i--) {
    for (t = 0; t < oldOpool.length; t++) {
      if (oldOpool[t] == obstaclePool[i]) {
        oldOpool[i] = obstaclePool[i];
      }
    }
  }

  //only render every 50ms
  if (timestamp - lastRender >= 100) {

    //for any dice that don't match final pool, increment that die
    for (i = 0; i < treasurePool.length; i++) {
      if (treasurePool[i] != oldTpool[i]) {
        newDieSize = treasurePool[i].split("-")[0]; //size will always be the same
        newDieValue = parseFloat(treasurePool[i].split("-")[1]) * progress;
        oldTpool[i] = newDieSize + '-' + Math.ceil(newDieValue);
      }
    }

    //for any dice that don't match final pool, increment that die
    for (i = 0; i < foePool.length; i++) {
      if (foePool[i] != oldFpool[i]) {
        newDieSize = foePool[i].split("-")[0]; //size will always be the same
        newDieValue = parseFloat(foePool[i].split("-")[1]) * progress;
        oldFpool[i] = newDieSize + '-' + Math.ceil(newDieValue);
      }
    }

    //for any dice that don't match final pool, increment that die
    for (i = 0; i < obstaclePool.length; i++) {
      if (obstaclePool[i] != oldOpool[i]) {
        newDieSize = obstaclePool[i].split("-")[0]; //size will always be the same
        newDieValue = parseFloat(obstaclePool[i].split("-")[1]) * progress;
        oldOpool[i] = newDieSize + '-' + Math.ceil(newDieValue);
      }
    }

    lastRender = timestamp;
    renderPools(oldTpool, oldFpool, oldOpool);
  }

  if (runtime < duration) { // if duration not met yet
    requestAnimationFrame(function (timestamp) { // call requestAnimationFrame again with parameters
      animateAllGain(timestamp, duration, oldTpool, oldFpool, oldOpool)
    })
  } else { //render the actual pools
    renderPools(treasurePool, foePool, obstaclePool);
    renderURL();
  }
}

//Functions for revealing and closing the submission form modal
const modal = document.querySelector(".overpoweredModal");
const overlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector("#overpoweredShowForm");
const closeModalBtn = document.querySelector(".modal-close");

const openModal = function () {
  modal.classList.remove("modal-hidden");
  overlay.classList.remove("modal-hidden");
  modal.scrollIntoView();
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("modal-hidden");
  overlay.classList.add("modal-hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//also close modal on ESCAPE key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("modal-hidden")) {
    closeModal();
  }
});

function clearRolls() {
  //clear out the rolls
  document.getElementById('rollerLog').innerHTML = "";
}

//========= RENDER FUNCTIONS ===========

function renderAll() {
  renderBotDetails(); //bot name determines bot image
  renderPools(treasurePool, foePool, obstaclePool); //power banks + spend selected
  renderOP(finalScore); //Overpower + OP buttons + End Adventure
  renderRush(); //Data Rush and Overcome Trackers
  renderURL(); //URL + Undo + Endgame
}

function renderBotDetails() {
  document.title = botName;
  document.getElementById('botName').innerText = botName;
  pickBot = {};

  //In case last two numbers determine bot. David.12 is 12th bot
  if ((parseInt(botName.slice(-2) % 20) > 0) &&
    (parseInt(botName.slice(-2) % 20) <= overpowered.Bots.length)) {
    pickBot = overpowered.Bots[(parseInt(botName.slice(-2)) % 20) - 1]; //since numbers go from 1-20
    //in case last single number determines bot. David.7 is the 7th bot,
  } else if ((parseInt(botName.slice(-1)) > 0) &&
    (parseInt(botName.slice(-1)) <= overpowered.Bots.length)) {
    pickBot = overpowered.Bots[parseInt(botName.slice(-1)) - 1];
    // If no numbers, just pick random
  } else {
    pickBot = overpowered.Bots[Math.floor(myrng() * overpowered.Bots.length)];
  }

  document.getElementById('smallBotImg').src = "/images/overpowered/sprites/" + pickBot.Model.toLowerCase() + ".png";
}

function renderPools(tpool, fpool, opool) {
  selectedDice = false;

  //Render dice row by row
  for (var i = 0; i < maxRows; i++) {
    if (i < tpool.length) {
      dieSize = tpool[i].split("-")[0];
      dieValue = tpool[i].split("-")[1];
      dieButton = document.createElement('button');
      dieButton.setAttribute("onClick", "clickTreasure(" + i + ");");
      dieButton.classList.add("d" + dieSize, "dicierHeavy");

      if (tpool[i].includes("-s")) {
        dieButton.classList.add("selectedDie");
        selectedDice = true;
      }
      dieButton.innerText = dieValue + "_ON_D" + dieSize;
      document.getElementById("treasure" + i).replaceChildren(dieButton);
    } else {
      blankDie = document.createElement('p');
      blankDie.classList.add("dicierDark");
      blankDie.innerText = "ANY_ON_D20";
      document.getElementById("treasure" + i).replaceChildren(blankDie);
    }

    if (i < fpool.length) {
      dieSize = fpool[i].split("-")[0];
      dieValue = fpool[i].split("-")[1];
      dieButton = document.createElement('button');
      dieButton.setAttribute("onClick", "clickFoe(" + i + ");");
      dieButton.classList.add("d" + dieSize, "dicierHeavy");

      if (fpool[i].includes("-s")) {
        dieButton.classList.add("selectedDie");
        selectedDice = true;
      }
      dieButton.innerText = dieValue + "_ON_D" + dieSize;
      document.getElementById("foe" + i).replaceChildren(dieButton);
    } else {
      blankDie = document.createElement('p');
      blankDie.classList.add("dicierDark");
      blankDie.innerText = "ANY_ON_D20";
      document.getElementById("foe" + i).replaceChildren(blankDie);
    }

    if (i < opool.length) {
      dieSize = opool[i].split("-")[0];
      dieValue = opool[i].split("-")[1];
      dieButton = document.createElement('button');
      dieButton.setAttribute("onClick", "clickObstacle(" + i + ");");
      dieButton.classList.add("d" + dieSize, "dicierHeavy");

      if (opool[i].includes("-s")) {
        dieButton.classList.add("selectedDie");
        selectedDice = true;
      }
      dieButton.innerText = dieValue + "_ON_D" + dieSize;
      document.getElementById("obstacle" + i).replaceChildren(dieButton);
    } else {
      blankDie = document.createElement('p');
      blankDie.classList.add("dicierDark");
      blankDie.innerText = "ANY_ON_D20";
      document.getElementById("obstacle" + i).replaceChildren(blankDie);
    }
  }

  //Show Spend selected power OR current total
  if (selectedDice) {
    if (countSelectedPower() <= 3) { //3 is the minimum stat for anything
      document.getElementById('spendDice').innerText = "MUST SPEND AT LEAST 4 POWER";
      document.getElementById('spendDice').disabled = true;
      document.getElementById('spendDice').classList.add("spendOverpowerDisabled");
      document.getElementById('spendDice').classList.remove("spendOverpower");
    } else {
      document.getElementById('spendDice').innerText = "SPEND " + countSelectedPower() + " POWER";
      document.getElementById('spendDice').disabled = false;
      document.getElementById('spendDice').classList.remove("spendOverpowerDisabled");
      document.getElementById('spendDice').classList.add("spendOverpower");
    }
  } else {
    document.getElementById('spendDice').innerText = "CLICK DICE TO SPEND";
    document.getElementById('spendDice').disabled = true;
    document.getElementById('spendDice').classList.remove("spendOverpower");
    document.getElementById('spendDice').classList.add("spendOverpowerDisabled");
  }
}

function renderOP(trib) {

  if (!endGame) {
    document.getElementById('finalScoreSpan').innerText = trib;
  } else {
    document.getElementById('finalScoreSpan').innerText = trib;
  }
  document.getElementById('finalScoreSpan').style.color = "var(--OPd10)";

  //Remove Overpower buttons if you don't have enough
  if (trib >= 50) {
    document.getElementById('teleportButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('teleportButton').classList.add("spendOverpower");
    document.getElementById('teleportButton').disabled = false;
  } else {
    document.getElementById('teleportButton').classList.add("spendOverpowerDisabled");
    document.getElementById('teleportButton').classList.remove("spendOverpower");
    document.getElementById('teleportButton').disabled = true;
  }

  //Only allowed if 3 slots are free to prevent spamming
  freeSlots = 9 - treasurePool.length - foePool.length - obstaclePool.length;
  if (trib >= 30 && (freeSlots >= 3)) {
    document.getElementById('gainDiceButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.add("spendOverpower");
    document.getElementById('gainDiceButton').disabled = false;
    document.getElementById('gainDiceButton').innerHTML = " <span style=\"color:var(--OPd10)\">30</span> : GAIN d4 d6 d8 d10 d12 d20"
  } else if (trib >= 30 && (freeSlots < 3)) {
    document.getElementById('gainDiceButton').classList.add("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.remove("spendOverpower");
    document.getElementById('gainDiceButton').disabled = true;
    document.getElementById('gainDiceButton').innerText = "REQUIRES 3 FREE SLOTS"
  } else if (trib < 30) {
    document.getElementById('gainDiceButton').classList.add("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.remove("spendOverpower");
    document.getElementById('gainDiceButton').disabled = true;
    document.getElementById('gainDiceButton').innerText = " 30 : GAIN d4 d6 d8 d10 d12 d20"
  }

  if (trib >= 5) {
    document.getElementById('rerollButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('rerollButton').classList.add("spendOverpower");
    document.getElementById('rerollButton').disabled = false;
  } else {
    document.getElementById('rerollButton').classList.add("spendOverpowerDisabled");
    document.getElementById('rerollButton').classList.remove("spendOverpower");
    document.getElementById('rerollButton').disabled = true;
  }

  //end adventure score
  document.getElementById('currentScore').innerText = (parseInt(finalScore) - 50) * 100;
  if (finalScore - 50 >= 0) {
    document.getElementById('endButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('endButton').classList.add("spendOverpower");
    document.getElementById('endButton').disabled = false;
  } else {
    document.getElementById('endButton').classList.add("spendOverpowerDisabled");
    document.getElementById('endButton').classList.remove("spendOverpower");
    document.getElementById('endButton').disabled = true;
  }
}

function renderRush() {
  rushHTML = "DATA RUSH <br>";
  diceMath = diceRush; //we don't want to change actual rush

  while (Math.floor(diceMath / 6) > 0) {
    rushHTML = rushHTML + "<span class=\"rushBars\">▰▰▰▰▰▰</span><br>"
    diceMath = diceMath - 6;
  }

  //now fill the last bar
  rushHTML = rushHTML + "<span class=\"rushBars\">"
  for (i = 0; i < 6; i++) {
    if (i < diceMath) {
      rushHTML = rushHTML + "▰";
    } else {
      rushHTML = rushHTML + "▱";
    }
  }
  rushHTML = rushHTML + "</span>";

  document.getElementById('dataRush').innerHTML = rushHTML;

  //Set the bar colors depending on how many bars there are
  botBars = document.querySelectorAll(".rushBars");
  for (i = 0; i < botBars.length; i++) {
    barText = botBars[i].innerText;
    barCount = 0;
    for (b = 0; b < barText.length; b++) {
      if (barText[b] == "▰") {
        barCount++;
      }
    }
    botBars[i].style.color = overpowered.Colors[barCount];
  }
}

function renderURL() {
  //only show undo button if applicable
  if (undoTracker.length > 0) { //only show UNDO button if no dice selected and undo has history
    document.getElementById('undoButton').classList.add("spendOverpower");
    document.getElementById('undoButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('undoButton').disabled = false;
  } else {
    document.getElementById('undoButton').classList.remove("spendOverpower");
    document.getElementById('undoButton').classList.add("spendOverpowerDisabled");
    document.getElementById('undoButton').disabled = true;
  }

  //update url
  urlString = "?name=" + botName +
    "&treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + finalScore +
    "&rush=" + diceRush +
    "&d4s=" + encodeURI(preRolledD4s.length) +
    "&d6s=" + encodeURI(preRolledD6s.length) +
    "&d8s=" + encodeURI(preRolledD8s.length) +
    "&d10s=" + encodeURI(preRolledD10s.length) +
    "&d12s=" + encodeURI(preRolledD12s.length) +
    "&d20s=" + encodeURI(preRolledD20s.length) +
    "&endgame=" + encodeURI(endGame);

  window.history.replaceState(null, null, urlString);

  if (endGame) {
    document.getElementById('treasureCore').style.display = "none";
    document.getElementById('treasureCore').style.opacity = 0;
    document.getElementById('foeCore').style.display = "none";
    document.getElementById('foeCore').style.opacity = 0;
    document.getElementById('obstacleCore').style.display = "none";
    document.getElementById('obstacleCore').style.opacity = 0;
    document.getElementById('spendOverpower').style.display = "none";
    document.getElementById('spendOverpower').style.opacity = 0;
    document.getElementById('spendDice').style.display = "none";
    document.getElementById('spendDice').style.opacity = 0;
  } else {
    document.getElementById('treasureCore').style.display = "block";
    document.getElementById('treasureCore').style.opacity = 1;
    document.getElementById('foeCore').style.display = "block";
    document.getElementById('foeCore').style.opacity = 1;
    document.getElementById('obstacleCore').style.display = "block";
    document.getElementById('obstacleCore').style.opacity = 1;
    document.getElementById('spendOverpower').style.display = "block";
    document.getElementById('spendOverpower').style.opacity = 1;
    document.getElementById('spendDice').style.display = "block";
    document.getElementById('spendDice').style.opacity = 1;
  }
}