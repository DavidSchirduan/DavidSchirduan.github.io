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
    gainDie(4, true);
    gainDie(20, true);
  }

  if (window.location.search != "" && urlParams.has('foe')) {
    if (urlParams.get('foe')) { //testing for an empty array
      foePool = urlParams.get('foe').split(","); //split it up into an array
    } //else leave it as an empty array 
  } else {
    gainDie(6, true);
    gainDie(12, true);
  }

  if (window.location.search != "" && urlParams.has('obstacle')) {
    if (urlParams.get('obstacle')) { //testing for an empty array
      obstaclePool = urlParams.get('obstacle').split(","); //split it up into an array
    } //else leave it as an empty array
  } else {
    gainDie(8, true);
    gainDie(10, true);
  }

  checkRolls(); //populate pre-rolled dice in case no gainDie triggered

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
    tribute = parseInt(decodeURI(urlParams.get('overpower')));
  }

  if (window.location.search != "" && urlParams.get('spent')) {
    diceSpent = parseInt(decodeURI(urlParams.get('spent')));
  }

  if (window.location.search != "" && urlParams.get('converted')) {
    diceConverted = parseInt(decodeURI(urlParams.get('converted')));
  }

  if (window.location.search != "" && urlParams.get('endgame')) {
    endGame = parseInt(decodeURI(urlParams.get('endgame')));
  }

  generateBotDetails();
  renderPools();
}

//setup the pools and vars
var overpowered = {};
botName = "ERROR.7";
var myrng = function () {};

//dice are notated: 4-1 for a d4 showing 1. 20-13-s for a d20 showing 13 that is selected. 
treasurePool = [];
foePool = [];
obstaclePool = [];
enableEffects = true;
maxRows = 4;
tribute = 50; //start with 50 Overpower for spending
diceSpent = 0;
diceConverted = 0;
//turnNumber = 0;
undoTracker = [];
endGame = 0;

//Pre-rolled dice rolls
preRollLimit = 1000;
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
      Math.floor(Math.random() * (20) + 1);
      botName = botName.toUpperCase();
  } else {
    botName = oldSeed;
  }

  myrng = new Math.seedrandom(botName.toUpperCase()); //force uppercase for consistency
}

function checkRolls() {
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
  if (undoTracker.length > 10) {
    undoTracker.shift(); //remove oldest element
  }
  console.log(undoTracker);
}

function loadUndo() {
  undoURL = new URLSearchParams(undoTracker.pop());
  console.log(undoTracker);

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

  checkRolls(); //populate pre-rolls

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

  tribute = parseInt(decodeURI(undoURL.get('overpower')));
  diceSpent = parseInt(decodeURI(undoURL.get('spent')));
  diceConverted = parseInt(decodeURI(undoURL.get('converted')));
  endGame = parseInt(decodeURI(undoURL.get('endgame')));
  renderPools();
}

function toggleCRT() {
  enableEffects = !enableEffects;
  document.getElementById('overCard').classList.toggle('crt');
  document.getElementById('botDetails').classList.toggle('crt');
  document.getElementById('gainCard').classList.toggle('crt');
  document.getElementById('spendOverpower').classList.toggle('crt');
}

// Gaining dice for the pool
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(myrng() * (max - min + 1) + min);
}

function getNextPreroll(size){
  roll = 0;
  checkRolls();
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

function gainDie(size, skipUndo) {
  if (!skipUndo) { //sometime we don't want to save each die gain
    saveUndo(); //save first in case undo
  }
  roll = getNextPreroll(size);

  if (size == 4 || size == 20) {
    treasurePool.unshift(size + "-" + roll);
    animateDice("treasureCore", size, roll);
    if (treasurePool.length > maxRows) {
      tributeDie = treasurePool.splice(maxRows)[0] //get the last of the list
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    animateDice("foeCore", size, roll);
    if (foePool.length > maxRows) {
      tributeDie = foePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    animateDice("obstacleCore", size, roll);
    if (obstaclePool.length > maxRows) {
      tributeDie = obstaclePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  }
  renderPools();
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
function spendTreasure(index) {

  if (treasurePool[index].includes("-s")) {
    treasurePool[index] = treasurePool[index].replace("-s", "");
  } else {
    treasurePool[index] = treasurePool[index] + "-s";
  }
  renderPools();
}

function spendFoe(index) {
  if (foePool[index].includes("-s")) {
    foePool[index] = foePool[index].replace("-s", "");
  } else {
    foePool[index] = foePool[index] + "-s";
  }
  renderPools();
}

function spendObstacle(index) {
  if (obstaclePool[index].includes("-s")) {
    obstaclePool[index] = obstaclePool[index].replace("-s", "");
  } else {
    obstaclePool[index] = obstaclePool[index] + "-s";
  }
  renderPools();
}

function spendSelectedDice() {
  saveUndo(); //save first in case undo

  //iterate backwards through the array so you 
  //remove things off the end, and don't mess up the index

  for (var i = (treasurePool.length - 1); i >= 0; i--) {
    if (treasurePool[i].includes("-s")) {
      treasurePool.splice(i, 1);
      diceSpent++;
    }
  }
  for (var i = (foePool.length - 1); i >= 0; i--) {
    if (foePool[i].includes("-s")) {
      foePool.splice(i, 1);
      diceSpent++;
    }
  }
  for (var i = (obstaclePool.length - 1); i >= 0; i--) {
    if (obstaclePool[i].includes("-s")) {
      obstaclePool.splice(i, 1);
      diceSpent++;
    }
  }
  renderPools();
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
//Change it to just grab the next die in the pre-rolled list instead. For consistency.
function rerollDice() {
  saveUndo(); //save first in case undo

  gainTribute(-5);

  //reverse so that when we ADD dice they appear from the bottom of the column
  oldTreasurePool = treasurePool.reverse();
  oldFoePool = foePool.reverse();
  oldObstaclePool = obstaclePool.reverse();

  treasurePool = [];
  foePool = [];
  obstaclePool = [];

  if (enableEffects) {
    var duration = 1000;
    const dice = document.querySelectorAll(".dicierHeavy:not(.dwhite)");
    const colors = overpowered.Colors;
    let startTimestamp = null;
    var lastProgress = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      checkProgress = progress;
      if (checkProgress - lastProgress > .1) { //only animate every .1 seconds
        lastProgress = checkProgress;
        for (var i = 0; i < dice.length; i++) {
          dice[i].style.color = colors[getRandomInt(0, colors.length)];
        }
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

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
    finishAnimation(1100).then(() => renderPools());
  } else {
    renderPools();
  }
}

//Convert all dice to Overpower
function convertOverpower() {
  saveUndo(); //save first in case undo

  gainTribute(-20);

  buttonWindows = document.querySelectorAll("#treasureCore, #foeCore, #obstacleCore, #gainCard, #spendOverpower");

  if (enableEffects) {
    var duration = 1000;
    let startTimestamp = null;
    var lastProgress = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      checkProgress = progress;
      if (checkProgress - lastProgress > .1) { //only animate every .1 seconds
        lastProgress = checkProgress;
        for (var i = 0; i < buttonWindows.length; i++) {
          buttonWindows[i].style.opacity = 1 - lastProgress;
        }
      }
      if (progress < 1.1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  //convert Treasure
  loop = treasurePool.length;
  for (var i = 0; i < loop; i++) {
    poppedDie = treasurePool.pop();
    gainTribute(parseInt(poppedDie.split("-")[1])) //remove the die size
  }

  //convert Foe
  loop = foePool.length;
  for (var i = 0; i < loop; i++) {
    poppedDie = foePool.pop();
    gainTribute(parseInt(poppedDie.split("-")[1])) //remove the die size
  }

  //convert Obstacle
  loop = obstaclePool.length;
  for (var i = 0; i < loop; i++) {
    poppedDie = obstaclePool.pop();
    gainTribute(parseInt(poppedDie.split("-")[1])) //remove the die size
  }

  endGame = 1; //trigger endgame and clear out stuff.

  if (enableEffects) {
    finishAnimation(1100).then(() => renderPools());
  } else {
    renderPools();
  }
}

//button to overcome an obstacle or danger
function overcomeAny() {
  saveUndo(); //save first in case undo

  gainTribute(-20);
}

//Fun teleport animation
function spendTeleport() {
  saveUndo(); //save first in case undo

  gainTribute(-50);

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
    finishAnimation(2100).then(() => renderPools());
  }
}

function gainTwentyAbility() {
  saveUndo(); //save first in case undo

  gainTribute(-10);
  gainDie(20, true);
}

function gainAllDice() {
  saveUndo(); //save first in case undo

  gainTribute(-40);
  gainDie(4, true);
  gainDie(6, true);
  gainDie(8, true);
  gainDie(10, true);
  gainDie(12, true);
  gainDie(20, true);
}

// function gainDiceRow() {
//   gainTribute(-100);
//   maxRows = parseInt(maxRows) + 1;
//   renderPools();
// }

// //Add +2 to all dice
// function powerBoost() {
//   saveUndo(); //save first in case undo

//   gainTribute(-15);

//   if (enableEffects) {
//     var duration = 1000;
//     const dice = document.querySelectorAll(".dicierHeavy:not(.dwhite)");
//     const colors = overpowered.Colors;
//     let startTimestamp = null;
//     var lastProgress = 0;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       checkProgress = progress;
//       if (checkProgress-lastProgress> .1 ){ //only animate every .1 seconds
//         lastProgress = checkProgress;
//         for (var i=0;i<dice.length;i++){
//           dice[i].style.color = colors[getRandomInt(0,colors.length)];
//         }
//       }
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }

//   for (i=0; i<treasurePool.length; i++){
//     die = treasurePool[i].split('-'); //grab the value of each die
//     die[1] = parseInt(die[1])+2;
//     if (die[1] > die[0]){
//       die[1] = die[0];
//     }
//     treasurePool[i] = die[0] + "-" + die[1]
//   }

//   for (i=0; i<foePool.length; i++){
//     die = foePool[i].split('-'); //grab the value of each die
//     die[1] = parseInt(die[1])+2;
//     if (die[1] > die[0]){
//       die[1] = die[0];
//     }
//     foePool[i] = die[0] + "-" + die[1]
//   }

//   for (i=0; i<obstaclePool.length; i++){
//     die = obstaclePool[i].split('-'); //grab the value of each die
//     die[1] = parseInt(die[1])+2;
//     if (die[1] > die[0]){
//       die[1] = die[0];
//     }
//     obstaclePool[i] = die[0] + "-" + die[1]
//   }

//   if (enableEffects) {
//     finishAnimation(1100).then(() => renderPools());
//   } else {
//     renderPools();
//   }
// }

function finishAnimation(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function gainTribute(amount) {
  var start = tribute;
  var end = tribute + amount;
  tribute = amount + tribute; //actually set the new tribute

  if (enableEffects) {
    var duration = 1000;
    const target = document.getElementById("tributeScore");
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = Math.floor(progress * (end - start) + start);
      target.style.color = "lightcoral";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    finishAnimation(1200).then(() => renderPools());
  } else {
    renderPools();
  }
}

function animateDice(dieCore, dieSize, value) {
  if (enableEffects) {
    var start = 0;
    var end = value;
    var duration = 1000;
    const target = document.getElementById(dieCore); //make sure this matches the id of the row
    target.removeChild(target.firstElementChild);
    var targetHTML = target.innerHTML;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerHTML = targetHTML + "<button onclick=\"spendObstacle(" + 0 + ")\" class=\"d" + dieSize + " dicierHeavy\">" + Math.floor(progress * (end - start) + start) + "_ON_D" + dieSize + "</button>\n";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    finishAnimation(1200).then(() => renderPools());
  } else {
    renderPools();
  }
}

//render the pools & tribute score
function renderPools() {

  blankDieHTML = "<p class=\"dicierDark\">ANY_ON_D20</p>\n";

  treasureHTML = "";
  selectedDice = false;

  for (var i = 0; i < maxRows; i++) {
    if (i < treasurePool.length) {
      dieSize = treasurePool[i].split("-")[0];
      dieValue = treasurePool[i].split("-")[1];
      dieButton = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (treasurePool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }

      treasureHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + treasureHTML;
    } else {
      treasureHTML = blankDieHTML + treasureHTML;
    }
  }

  foeHTML = "";
  for (var i = 0; i < maxRows; i++) {
    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];

      dieButton = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (foePool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }

      foeHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + foeHTML;
    } else {
      foeHTML = blankDieHTML + foeHTML;
    }
  }

  obstacleHTML = "";
  for (var i = 0; i < maxRows; i++) {
    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];

      dieButton = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (obstaclePool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }

      obstacleHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
    } else {
      obstacleHTML = blankDieHTML + obstacleHTML;
    }
  }

  //Remove Overpower buttons if you don't have enough
  if (tribute >= 50) {
    document.getElementById('teleportButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('teleportButton').classList.add("spendOverpower");
    document.getElementById('teleportButton').disabled = false;
  } else {
    document.getElementById('teleportButton').classList.add("spendOverpowerDisabled");
    document.getElementById('teleportButton').classList.remove("spendOverpower");
    document.getElementById('teleportButton').disabled = true;
  }
  if (tribute >= 40) {
    document.getElementById('gainDiceButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.add("spendOverpower");
    document.getElementById('gainDiceButton').disabled = false;
  } else {
    document.getElementById('gainDiceButton').classList.add("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.remove("spendOverpower");
    document.getElementById('gainDiceButton').disabled = true;
  }
  if (tribute >= 30) {
    document.getElementById('convertButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('convertButton').classList.add("spendOverpower");
    document.getElementById('convertButton').disabled = false;
  } else {
    document.getElementById('convertButton').classList.add("spendOverpowerDisabled");
    document.getElementById('convertButton').classList.remove("spendOverpower");
    document.getElementById('convertButton').disabled = true;
  }
  if (tribute >= 20) {
    document.getElementById('overcomeAny').classList.remove("spendOverpowerDisabled");
    document.getElementById('overcomeAny').classList.add("spendOverpower");
    document.getElementById('overcomeAny').disabled = false;
  } else {
    document.getElementById('overcomeAny').classList.add("spendOverpowerDisabled");
    document.getElementById('overcomeAny').classList.remove("spendOverpower");
    document.getElementById('overcomeAny').disabled = true;
  }
  if (tribute >= 5) {
    document.getElementById('rerollButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('rerollButton').classList.add("spendOverpower");
    document.getElementById('rerollButton').disabled = false;
  } else {
    document.getElementById('rerollButton').classList.add("spendOverpowerDisabled");
    document.getElementById('rerollButton').classList.remove("spendOverpower");
    document.getElementById('rerollButton').disabled = true;
  }

  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('tributeScore').innerText = tribute;
  document.getElementById('tributeScore').style.color = "#FAB30C";

  //Update the window name for easy bookmarking
  // turnNumber = parseInt(turnNumber) + 1; //simple increment

  document.getElementById('diceGained').innerText = (
    (preRollLimit - preRolledD4s.length) +
    (preRollLimit - preRolledD6s.length) +
    (preRollLimit - preRolledD8s.length) +
    (preRollLimit - preRolledD10s.length) +
    (preRollLimit - preRolledD12s.length) +
    (preRollLimit - preRolledD20s.length));
  document.getElementById('diceSpent').innerText = diceSpent;
  document.getElementById('diceConverted').innerText = diceConverted;

  //If the game is ended, make a nice results screen.
  if (endGame) {
    document.getElementById('treasureCore').style.display = "none";
    document.getElementById('treasureCore').style.opacity = 0;
    document.getElementById('foeCore').style.display = "none";
    document.getElementById('foeCore').style.opacity = 0;
    document.getElementById('obstacleCore').style.display = "none";
    document.getElementById('obstacleCore').style.opacity = 0;
    document.getElementById('gainCard').style.display = "none";
    document.getElementById('gainCard').style.opacity = 0;
    document.getElementById('spendOverpower').style.display = "none";
    document.getElementById('spendOverpower').style.opacity = 0;
  } else {
    document.getElementById('treasureCore').style.display = "block";
    document.getElementById('treasureCore').style.opacity = 1;
    document.getElementById('foeCore').style.display = "block";
    document.getElementById('foeCore').style.opacity = 1;
    document.getElementById('obstacleCore').style.display = "block";
    document.getElementById('obstacleCore').style.opacity = 1;
    document.getElementById('gainCard').style.display = "block";
    document.getElementById('gainCard').style.opacity = 1;
    document.getElementById('spendOverpower').style.display = "block";
    document.getElementById('spendOverpower').style.opacity = 1;
  }

  if (selectedDice) {
    document.getElementById('spendDice').style.display = "block";
    if (countSelectedPower() <= 3){ //3 is the minimum stat for anything, so you have to spend at LEAST 4 power
      document.getElementById('spendDice').innerText = "Must spend 4 or more Power";
      document.getElementById('spendDice').disabled = true;
      document.getElementById('spendDice').classList.add("spendOverpowerDisabled");
      document.getElementById('spendDice').classList.remove("spendOverpower");
    // } else if (countSelectedPower() > 50){
    //   document.getElementById('spendDice').innerText = "No stat should be above 30";
    //   document.getElementById('spendDice').disabled = true;
    //   document.getElementById('spendDice').classList.add("spendOverpowerDisabled");
    //   document.getElementById('spendDice').classList.remove("spendOverpower");
    } else {
      document.getElementById('spendDice').innerText = "SPEND " + countSelectedPower() + " POWER";
      document.getElementById('spendDice').disabled = false;
      document.getElementById('spendDice').classList.remove("spendOverpowerDisabled");
      document.getElementById('spendDice').classList.add("spendOverpower");
    }
    document.getElementById('undoButton').style.display = "none";
  } else {
    document.getElementById('spendDice').style.display = "none";
    if (undoTracker.length > 0) { //only show UNDO button if no dice selected and undo has history
      document.getElementById('undoButton').style.display = "block";
    } else {
      document.getElementById('undoButton').style.display = "none";
    }
  }

  updateURL();
}

function updateURL() {
  urlString = "?name=" + botName +
    "&treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + tribute +
    "&spent=" + diceSpent +
    "&converted=" + diceConverted +
    "&d4s=" + encodeURI(preRolledD4s.length) +
    "&d6s=" + encodeURI(preRolledD6s.length) +
    "&d8s=" + encodeURI(preRolledD8s.length) +
    "&d10s=" + encodeURI(preRolledD10s.length) +
    "&d12s=" + encodeURI(preRolledD12s.length) +
    "&d20s=" + encodeURI(preRolledD20s.length) +
    "&endgame=" + encodeURI(endGame);

  //"&maxRows=" + maxRows;
  //"&turn=" + turnNumber;

  window.history.replaceState(null, null, urlString);
}

function generateBotDetails() {
  document.title = botName;
  document.getElementById('botName').innerText = botName; 
  pickBot = {};

  //last two letters determine the bot type. So David.12 is the 12th bot.
  if (parseInt(botName.slice(-2)) > 0 && parseInt(botName.slice(-2)) < 3){
    pickBot = overpowered.Bots[parseInt(botName.slice(-2))];
  } else {
    pickBot = overpowered.Bots[Math.floor(myrng() * overpowered.Bots.length)];
  }

  document.getElementById('smallBotImg').src = "/images/overpowered/sprites/" + pickBot.Model.toLowerCase() + ".png";

  quirkChoice = overpowered.Quirks[Math.floor(myrng() * overpowered.Quirks.length)];
  glitchChoice = overpowered.Glitches[Math.floor(myrng() * overpowered.Glitches.length)];
  document.getElementById('botGlitches').innerHTML = "<li><span class=\"itemName\">Glitch:</span> " + glitchChoice + "</li>" + 
  "<li><span class=\"itemName\">Quirk:</span> " + quirkChoice + "</li>";

  document.getElementById('botDescription').innerHTML = pickBot.Description;

  //Build out the table from JSON data
  const tbl = document.getElementById('statTable');
  const tblBody = document.createElement("tbody");

  for (let r = 0; r < pickBot.Stats.length; r++) { //for each row
    const row = document.createElement("tr");

    statName = document.createElement("td");
    statName.innerHTML = "<span class=\"itemName\">" + pickBot.Stats[r][0] + "</span>";
    row.appendChild(statName);

    statbars = document.createElement("td");
    statText = "";
    for (i = 0; i < pickBot.Stats[r][1]; i++) {
      statText = statText + "▰";
    }
    for (i = 0; i < 5 - pickBot.Stats[r][1]; i++) {
      statText = statText + "▱";
    }
    statbars.innerText = statText;
    row.appendChild(statbars);

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);

  //Set the bar colors depending on how many bars there are
  botBars = document.querySelectorAll("#statTable>tbody>tr>:nth-child(2)");
  for (i = 0; i < botBars.length; i++){
    botBars[i].style.color = overpowered.Colors[pickBot.Stats[i][1]];
  }

}
