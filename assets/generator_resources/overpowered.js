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
    tribute = parseInt(decodeURI(urlParams.get('overpower')));
  }

  if (window.location.search != "" && urlParams.get('spent')) {
    diceSpent = parseInt(decodeURI(urlParams.get('spent')));
  }

  if (window.location.search != "" && urlParams.get('converted')) {
    diceConverted = parseInt(decodeURI(urlParams.get('converted')));
  }

  if (window.location.search != "" && urlParams.get('reroll')) {
    rerollCount = parseInt(decodeURI(urlParams.get('reroll')));
  }

  if (window.location.search != "" && urlParams.get('gainall')) {
    gainAllCount = parseInt(decodeURI(urlParams.get('gainall')));
  }

  if (window.location.search != "" && urlParams.get('endgame')) {
    endGame = parseInt(decodeURI(urlParams.get('endgame')));
  }
  renderBotDetails();
  renderPools(treasurePool, foePool, obstaclePool);
  renderOP(tribute);
  renderRest();
  renderEndGame();
}

//setup the pools and vars
var overpowered = {};
botName = "ERROR.7";
var myrng = function () {};
let runningAnimation;
lastRender = 0;

//dice are notated: 4-1 for a d4 showing 1. 20-13-s for a d20 showing 13 that is selected. 
treasurePool = []; //d4 and d20s
foePool = []; // d6s and d12s
obstaclePool = []; // d8s and d10s
enableEffects = true;
maxRows = 4; //this probably shouldn't change 
tribute = 50; //start with 50 Overpower for spending
diceSpent = 0;
diceConverted = 0;
undoTracker = []; //list of previous url states
endGame = 0; //show the fancy endscreen
undoHistory = 10; //how many changes to save for undoing
rerollCount = 0;
gainAllCount = 0;

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
  if (undoTracker.length > 10) {
    undoTracker.shift(); //remove oldest element
  }
}

function loadUndo() {
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
    //remove last event from this area
    if (logDiv.lastElementChild.lastElementChild !== null) {
      logDiv.lastElementChild.lastElementChild.remove();
    } else if (logDiv.lastElementChild.children.length == 0 &&
      !logDiv.lastElementChild.innerHTML.includes("Entering")) {
      logDiv.lastElementChild.remove();
    }
    if (logDiv.lastElementChild !== null) {
    //remove Entering New Area if it exists
    if (logDiv.lastElementChild.children.length == 0 &&
      logDiv.lastElementChild.innerHTML.includes("Entering")) {
      logDiv.lastElementChild.remove();
    }
  }
   

  tribute = parseInt(decodeURI(undoURL.get('overpower')));
  diceSpent = parseInt(decodeURI(undoURL.get('spent')));
  diceConverted = parseInt(decodeURI(undoURL.get('converted')));
  endGame = parseInt(decodeURI(undoURL.get('endgame')));
  rerollCount = parseInt(decodeURI(urlParams.get('reroll')));
  gainAllCount = parseInt(decodeURI(urlParams.get('gainall')));
  
  renderPools(treasurePool, foePool, obstaclePool);
  renderOP(tribute);
  renderRest();
  renderEndGame();
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

function gainDie(size, skipUndo) {
  //We want to copy by value, NOT reference in case of animation
  tpool = treasurePool.slice();
  fpool = foePool.slice();
  opool = obstaclePool.slice();

  roll = getNextPreroll(size);

  //AUG23, all d4s roll 4
  if (botName.toLowerCase().startsWith('AUG23')) {
    if (size == 4) {
      roll = 4;
    }
  }

  //save in case of Undo
  if (!skipUndo) {
    logMsg = logDieGain(size + "-" + roll);
    saveUndo(logMsg);
  }

  if (size == 4 || size == 20) {
    treasurePool.unshift(size + "-" + roll);
    if (treasurePool.length > maxRows) {
      tributeDie = treasurePool.splice(maxRows)[0] //get the last of the list
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    if (foePool.length > maxRows) {
      tributeDie = foePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    if (obstaclePool.length > maxRows) {
      tributeDie = obstaclePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
      diceConverted++;
    }
  }

  if (enableEffects && !skipUndo) {
    runningAnimation = window.requestAnimationFrame(function (timestamp) {
      starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      animateDieGain(timestamp, 1000, tpool, fpool, opool)
    });
  } else if (!skipUndo) {
    renderPools(treasurePool, foePool, obstaclePool);
    renderRest();
  }

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
  renderPools(treasurePool, foePool, obstaclePool);
}

function spendFoe(index) {
  if (foePool[index].includes("-s")) {
    foePool[index] = foePool[index].replace("-s", "");
  } else {
    foePool[index] = foePool[index] + "-s";
  }
  renderPools(treasurePool, foePool, obstaclePool);
}

function spendObstacle(index) {
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
      diceSpent++;
    }
  }
  for (var i = (foePool.length - 1); i >= 0; i--) {
    if (foePool[i].includes("-s")) {
      trackSpentDice.push(foePool[i]);
      foePool.splice(i, 1);
      diceSpent++;
    }
  }
  for (var i = (obstaclePool.length - 1); i >= 0; i--) {
    if (obstaclePool[i].includes("-s")) {
      trackSpentDice.push(obstaclePool[i]);
      obstaclePool.splice(i, 1);
      diceSpent++;
    }
  }
  logSpentDice(trackSpentDice);
  renderPools(treasurePool, foePool, obstaclePool);
  renderRest();
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
//Change it to just grab the next die in the pre-rolled list instead. For consistency.
function rerollDice() {
  saveUndo(); //save first in case undo
  gainTribute(-5);
  logEvent("reroll");

  if (enableEffects) {
    var duration = 1000;
    const dice = document.querySelectorAll(".dicierHeavy:not(.dwhite)");
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

  rerollCount++;

  if (enableEffects) {
    finishAnimation(1100).then(() => renderPools(treasurePool, foePool, obstaclePool));
  } else {
    renderPools(treasurePool, foePool, obstaclePool);
  }
  renderRest();
}

//End the adventure
function endAdventure() {
  saveUndo(); //save first in case undo

  buttonWindows = document.querySelectorAll("#treasureCore, #foeCore, #obstacleCore, #gainCard, #spendOverpower");

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

  gainTribute(-50);
  gainTribute((tribute * 100) - tribute); //just add some zeroes to make it arcadey
  endGame = 1; //trigger endgame and clear out stuff.
  logEvent("endGame");
  renderEndGame();
  renderRest();
  window.scrollTo(0, 0);
}

//button to overcome an obstacle or danger
function overcomeAny() {
  saveUndo(); //save first in case undo

  gainTribute(-20);
  logEvent("overcome");

}

//Fun teleport animation
function spendTeleport() {
  saveUndo(); //save first in case undo

  gainTribute(-50);
  //NO reason to teleport twice, so disable it.
  document.getElementById('teleportButton').disabled = true;

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

function gainAllDice() {
  saveUndo(); //save first in case undo

  //We want to copy by value, NOT reference
  tpool = treasurePool.slice();
  fpool = foePool.slice();
  opool = obstaclePool.slice();

  gainTribute(-40);
  gainDie(4, true);
  gainDie(6, true);
  gainDie(8, true);
  gainDie(10, true);
  gainDie(12, true);
  gainDie(20, true);

  gainAllCount++;

  logEvent("gainAll");

  if (enableEffects) {
    runningAnimation = window.requestAnimationFrame(function (timestamp) {
      starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
      animateAllGain(timestamp, 1000, tpool, fpool, opool)
    });
  } else {
    renderPools(treasurePool, foePool, obstaclePool);
    renderRest();
  }

}

function finishAnimation(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function gainTribute(amount) {
  var start = tribute;
  var end = tribute + amount;
  tribute = amount + tribute; //actually set the new tribute

  renderRest();

  if (enableEffects) {
    //prevent button mashing
    document.getElementById('overcomeAny').disabled = true;
    document.getElementById('gainDiceButton').disabled = true;
    document.getElementById('rerollButton').disabled = true;
    var duration = 1000;
    const target = document.getElementById("tributeScore");
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = Math.floor(progress * (end - start) + start);
      target.style.color = "var(--OPred)";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    finishAnimation(1200).then(() => renderOP(tribute));
  } else {
    renderOP(tribute);
  }
}

//render the pools & tribute score. Clean this up a bit
function renderPools(tpool, fpool, opool) {
  blankDieHTML = "<p class=\"dicierDark\">ANY_ON_D20</p>";
  selectedDice = false;

  for (var i = 0; i < maxRows; i++) {
    if (i < tpool.length) {
      dieSize = tpool[i].split("-")[0];
      dieValue = tpool[i].split("-")[1];
      dieButton = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (tpool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }
      document.getElementById("treasure" + i).innerHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      document.getElementById("treasure" + i).innerHTML = blankDieHTML;
    }

    if (i < fpool.length) {
      dieSize = fpool[i].split("-")[0];
      dieValue = fpool[i].split("-")[1];
      dieButton = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (fpool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }
      document.getElementById("foe" + i).innerHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      document.getElementById("foe" + i).innerHTML = blankDieHTML;
    }

    if (i < opool.length) {
      dieSize = opool[i].split("-")[0];
      dieValue = opool[i].split("-")[1];
      dieButton = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy";

      if (opool[i].includes("-s")) {
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }
      document.getElementById("obstacle" + i).innerHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      document.getElementById("obstacle" + i).innerHTML = blankDieHTML;
    }
  }

  //Show Spend selected power OR current total
  if (selectedDice) {
    if (countSelectedPower() <= 3) { //3 is the minimum stat for anything
      document.getElementById('spendDice').innerText = "Must spend at least 4 Power";
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
    document.getElementById('spendDice').innerText = "TOTAL DICE POWER: " + countAllDice();
    document.getElementById('spendDice').disabled = true;
    document.getElementById('spendDice').classList.remove("spendOverpower");
    document.getElementById('spendDice').classList.add("spendOverpowerDisabled");
  }
}

function renderRest() {
  renderTrackers();

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

  //end adventure score
  document.getElementById('currentScore').innerText = (parseInt(countAllDice() + tribute) - 50) * 100;
  if (countAllDice() + tribute - 50 >= 0) {
    document.getElementById('endButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('endButton').classList.add("spendOverpower");
    document.getElementById('endButton').disabled = false;
  } else {
    document.getElementById('endButton').classList.add("spendOverpowerDisabled");
    document.getElementById('endButton').classList.remove("spendOverpower");
    document.getElementById('endButton').disabled = true;
  }

  //update url
  urlString = "?name=" + botName +
    "&treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + tribute +
    "&spent=" + diceSpent +
    "&converted=" + diceConverted +
    "&rerolls=" + rerollCount +
    "&gainAll=" + gainAllCount +
    "&d4s=" + encodeURI(preRolledD4s.length) +
    "&d6s=" + encodeURI(preRolledD6s.length) +
    "&d8s=" + encodeURI(preRolledD8s.length) +
    "&d10s=" + encodeURI(preRolledD10s.length) +
    "&d12s=" + encodeURI(preRolledD12s.length) +
    "&d20s=" + encodeURI(preRolledD20s.length) +
    "&endgame=" + encodeURI(endGame);

  window.history.replaceState(null, null, urlString);

}

function renderTrackers() {
  //dice counters
  totalDiceGained = (
    (preRollLimit - preRolledD4s.length) +
    (preRollLimit - preRolledD6s.length) +
    (preRollLimit - preRolledD8s.length) +
    (preRollLimit - preRolledD10s.length) +
    (preRollLimit - preRolledD12s.length) +
    (preRollLimit - preRolledD20s.length) - 6 //don't count first 6 dice
    - (rerollCount * 6) - (gainAllCount * 6)); //don't count rerolls and gainall
  totalOvercome = preRollLimit - preRolledD4s.length - 1 - rerollCount - gainAllCount; //don't count first die or rerolls
  totalCompleted = preRollLimit - preRolledD12s.length - 1 - rerollCount - gainAllCount; //don't count first die
  totalScanned = (
    (preRollLimit - preRolledD6s.length) +
    (preRollLimit - preRolledD8s.length) +
    (preRollLimit - preRolledD10s.length) +
    (preRollLimit - preRolledD20s.length) - 4 //don't count first dice
    - (rerollCount * 4) - (gainAllCount * 4)); //don't count rerolls and gainall

  document.getElementById('counterGained').innerText = totalDiceGained;
  document.getElementById('counterConverted').innerText = diceConverted;
  document.getElementById('counterSpent').innerText = diceSpent;
  document.getElementById('counterOvercome').innerText = totalOvercome;
  document.getElementById('counterScanned').innerText = totalScanned;
  document.getElementById('counterCompleted').innerText = totalCompleted;
  document.getElementById('barsGained').innerText = numBars(totalDiceGained / 100);
  document.getElementById('barsConverted').innerText = numBars(diceConverted / 50);
  document.getElementById('barsSpent').innerText = numBars(diceSpent / 100);
  document.getElementById('barsOvercome').innerText = numBars(totalOvercome / 75);
  document.getElementById('barsScanned').innerText = numBars(totalScanned / 100);
  document.getElementById('barsCompleted').innerText = numBars(totalCompleted / 50);

  //Set the bar colors depending on how many bars there are
  botBars = document.querySelectorAll("#statTable>tbody>tr>:nth-child(2)");
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

function logEvent(event) {
  //Render Adventure Log
  newLog = document.createElement('li');
  logDiv = document.getElementById('adventureLog');
  today = new Date();

  logMessage = document.createElement('li');
  msgText = "";

  if (event == "reroll") {
    msgText = "Spent 5 Overpower to reroll";
    logMessage.innerHTML = msgText;
    logNewArea();
    logDiv.lastElementChild.appendChild(logMessage);
  } else if (event == "teleport") {
    msgText = "Spent 50 Overpower to teleport";
    logMessage.innerHTML = msgText;
    logDiv.appendChild(logMessage);
  } else if (event == "gainAll") {
    msgText = "Spent 40 Overpower to gain "
    //grab the last 6 dice and annotate them
    for (i = 0; i < 2; i++) {
      dieSize = treasurePool[i].split("-")[0];
      dieVal = treasurePool[i].split("-")[1];
      msgText = msgText + "<span class=\"d" + dieSize + "\">d" + dieSize + "</span>[" + dieVal + "], ";
      dieSize = foePool[i].split("-")[0];
      dieVal = foePool[i].split("-")[1];
      msgText = msgText +
        "<span class=\"d" + dieSize + "\">d" + dieSize + "</span>[" + dieVal + "], ";
      dieSize = obstaclePool[i].split("-")[0];
      dieVal = obstaclePool[i].split("-")[1];
      msgText = msgText +
        "<span class=\"d" + dieSize + "\">d" + dieSize + "</span>[" + dieVal + "], ";
    }
    //replace the last comma
    logMessage.innerHTML = msgText.replace(/,(?=[^,]+$)/, '');
    logNewArea();
    logDiv.lastElementChild.appendChild(logMessage);
  } else if (event == "overcome") {
    msgText = "Spent 20 Overpower to Overcome something";
    logMessage.innerHTML = msgText;
    logNewArea();
    logDiv.lastElementChild.appendChild(logMessage);
  } else if (event == "endGame") {
    msgText = today.toISOString().substring(11, 19) + " - Ended the game";
    logMessage.innerHTML = msgText;
    logDiv.appendChild(logMessage);
  }
}

function logNewArea() {
  //Render Adventure Log
  logDiv = document.getElementById('adventureLog');
  today = new Date();
  //Create a new log or append to existing
  if (logDiv.lastElementChild !== null) {
    if (logDiv.lastElementChild.innerHTML.includes('Completed') ||
      logDiv.lastElementChild.innerHTML.includes('Teleported')) {
      newArea = document.createElement('li');
      newArea.innerText = today.toISOString().substring(11, 19) + " - Entering New Area";
      logDiv.appendChild(newArea);
    }
  } else { //in case it's the very first
    newArea = document.createElement('li');
    newArea.innerText = today.toISOString().substring(11, 19) + " - Entering New Area";
    logDiv.appendChild(newArea);
  }
}

function logSpentDice(diceList) {
  //Render Adventure Log
  newLog = document.createElement('li');
  logDiv = document.getElementById('adventureLog');
  logNewArea();

  logMessage = document.createElement('li');
  totalPower = 0;
  msgText = "";

  console.log(diceList);

  for (i = 0; i < diceList.length; i++) {
    dieSize = diceList[i].split("-")[0];
    dieVal = diceList[i].split("-")[1];
    totalPower = totalPower + parseInt(dieVal);
    msgText = msgText +
      "<span class=\"d" + dieSize + "\">d" + dieSize + "</span>[" + dieVal + "], ";
  }
  msgText = msgText.replace(/,(?=[^,]+$)/, '');

  logMessage.innerHTML = "Spent " + totalPower + " Power: " + msgText;
  logDiv.lastElementChild.appendChild(logMessage);
}

function logDieGain(die) {
  //Render Adventure Log
  newLog = document.createElement('li');
  logDiv = document.getElementById('adventureLog');
  logNewArea();

  dieSize = die.split("-")[0];
  dieVal = die.split("-")[1];

  logMessage = document.createElement('li');

  switch (dieSize) {
    case '4':
      logMessage.innerHTML = "Overcame Something. Gained <span class=\"d4\">d4</span>[" + dieVal + "]";
      break;
    case '6':
      logMessage.innerHTML = "Type of Valuable. Gained <span class=\"d6\">d6</span>[" + dieVal + "]";
      break;
    case '8':
      logMessage.innerHTML = "Unique Feature. Gained <span class=\"d8\">d8</span>[" + dieVal + "]";
      break;
    case '10':
      logMessage.innerHTML = "Powerful Object. Gained <span class=\"d10\">d10</span>[" + dieVal + "]";
      break;
    case '12':
      logMessage.innerHTML = "Completed Area. Gained <span class=\"d12\">d12</span>[" + dieVal + "]";
      break;
    case '20':
      logMessage.innerHTML = "Named Creature. Gained <span class=\"d20\">d20</span>[" + dieVal + "]";
      break;
  }
  logDiv.lastElementChild.appendChild(logMessage);
}

function numBars(percent) {

  //under 10%
  barString = " ▱▱▱▱▱";

  if (percent > .05 && percent < .3) {
    barString = " ▰▱▱▱▱";
  } else if (percent >= .3 && percent < .5) {
    barString = " ▰▰▱▱▱";
  } else if (percent >= .5 && percent < .7) {
    barString = " ▰▰▰▱▱";
  } else if (percent >= .7 && percent < .9) {
    barString = " ▰▰▰▰▱";
  } else if (percent >= .9) {
    barString = " ▰▰▰▰▰";
  }

  return barString;
}

function renderEndGame() {
  //If the game is ended, make a nice results screen.
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
    document.getElementById('achieveHeader').style.display = "none";
    document.getElementById('achieveHeader').style.opacity = 0;
    document.getElementById('gainDiceRow').style.display = "none";
    document.getElementById('gainDiceRow').style.opacity = 0;
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
    document.getElementById('achieveHeader').style.display = "block";
    document.getElementById('achieveHeader').style.opacity = 1;
    document.getElementById('gainDiceRow').style.display = "flex";
    document.getElementById('gainDiceRow').style.opacity = 1;
  }
}

function renderOP(trib) {

  document.getElementById('tributeScore').innerText = trib;
  document.getElementById('tributeScore').style.color = "var(--OPyellow)";

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
  if (trib >= 40) {
    document.getElementById('gainDiceButton').classList.remove("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.add("spendOverpower");
    document.getElementById('gainDiceButton').disabled = false;
  } else {
    document.getElementById('gainDiceButton').classList.add("spendOverpowerDisabled");
    document.getElementById('gainDiceButton').classList.remove("spendOverpower");
    document.getElementById('gainDiceButton').disabled = true;
  }
  if (trib >= 20) {
    document.getElementById('overcomeAny').classList.remove("spendOverpowerDisabled");
    document.getElementById('overcomeAny').classList.add("spendOverpower");
    document.getElementById('overcomeAny').disabled = false;
  } else {
    document.getElementById('overcomeAny').classList.add("spendOverpowerDisabled");
    document.getElementById('overcomeAny').classList.remove("spendOverpower");
    document.getElementById('overcomeAny').disabled = true;
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

  //quirkChoice = overpowered.Quirks[Math.floor(myrng() * overpowered.Quirks.length)];
  glitchChoice = overpowered.Glitches[Math.floor(myrng() * overpowered.Glitches.length)];
  document.getElementById('botGlitches').innerHTML = "<span style=\"color: var(--OPyellow);\">Glitch:</span> " + glitchChoice;

  document.getElementById('botDescription').innerHTML = pickBot.Description;
}

//pass in current state, end state is known by the long name
function animateAllGain(timestamp, duration, tpool, fpool, opool) {
  //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
  var timestamp = timestamp || new Date().getTime();
  var runtime = timestamp - starttime;
  var progress = (runtime / duration) + .01; //to avoid 0s
  progress = Math.min(progress, 1);


  //only render every 50ms
  if (timestamp - lastRender >= 50) {

    //in case new dice are added, fill them in
    while (tpool.length < treasurePool.length) {
      tpool.unshift('1-1');
    }
    while (fpool.length < foePool.length) {
      fpool.unshift('1-1');
    }
    while (opool.length < obstaclePool.length) {
      opool.unshift('1-1');
    }

    //set all other dice to final values
    for (i = 2; i < treasurePool.length; i++) {
      tpool[i] = treasurePool[i];
    }
    //set all other dice to final values
    for (i = 2; i < foePool.length; i++) {
      fpool[i] = foePool[i];
    }
    //set all other dice to final values
    for (i = 2; i < obstaclePool.length; i++) {
      opool[i] = obstaclePool[i];
    }

    //start counting up the two new dice
    for (i = 0; i < 2; i++) {
      newDieSize = treasurePool[i].split("-")[0];
      newDieValue = parseFloat(treasurePool[i].split("-")[1]) * progress;
      tpool[i] = newDieSize + '-' + Math.ceil(newDieValue);
    }

    for (i = 0; i < 2; i++) {
      newDieSize = foePool[i].split("-")[0];
      newDieValue = parseFloat(foePool[i].split("-")[1]) * progress;
      fpool[i] = newDieSize + '-' + Math.ceil(newDieValue);
    }

    for (i = 0; i < 2; i++) {
      newDieSize = obstaclePool[i].split("-")[0];
      newDieValue = parseFloat(obstaclePool[i].split("-")[1]) * progress;
      opool[i] = newDieSize + '-' + Math.ceil(newDieValue);
    }

    lastRender = timestamp;
    renderPools(tpool, fpool, opool);
  }

  if (runtime < duration) { // if duration not met yet
    requestAnimationFrame(function (timestamp) { // call requestAnimationFrame again with parameters
      animateAllGain(timestamp, duration, tpool, fpool, opool)
    })
  } else { //render the actual pools
    renderPools(treasurePool, foePool, obstaclePool);
    renderRest();
  }
}


//pass in current state, end state is known by the long name
function animateDieGain(timestamp, duration, tpool, fpool, opool) {
  //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
  var timestamp = timestamp || new Date().getTime();
  var runtime = timestamp - starttime;
  var progress = (runtime / duration) + .01; //to avoid 0s
  progress = Math.min(progress, 1);

  //only render every 50ms
  if (timestamp - lastRender >= 50) {

    //in case new dice are added, fill them in
    while (tpool.length < treasurePool.length) {
      tpool.unshift('1-1');
    }
    while (fpool.length < foePool.length) {
      fpool.unshift('1-1');
    }
    while (opool.length < obstaclePool.length) {
      opool.unshift('1-1');
    }

    //set all other dice to final values
    for (i = 1; i < treasurePool.length; i++) {
      tpool[i] = treasurePool[i];
    }
    //set all other dice to final values
    for (i = 1; i < foePool.length; i++) {
      fpool[i] = foePool[i];
    }
    //set all other dice to final values
    for (i = 1; i < obstaclePool.length; i++) {
      opool[i] = obstaclePool[i];
    }

    //start animating newest die
    if (tpool[0] !== treasurePool[0]) {
      newDieSize = treasurePool[0].split("-")[0];
      newDieValue = parseFloat(treasurePool[0].split("-")[1]) * progress;
      tpool[0] = newDieSize + '-' + Math.ceil(newDieValue);
    }
    //start animating newest die
    if (fpool[0] !== foePool[0]) {
      newDieSize = foePool[0].split("-")[0];
      newDieValue = parseFloat(foePool[0].split("-")[1]) * progress;
      fpool[0] = newDieSize + '-' + Math.ceil(newDieValue);
    }
    //start animating newest die
    if (opool[0] !== obstaclePool[0]) {
      newDieSize = obstaclePool[0].split("-")[0];
      newDieValue = parseFloat(obstaclePool[0].split("-")[1]) * progress;
      opool[0] = newDieSize + '-' + Math.ceil(newDieValue);
    }

    lastRender = timestamp;
    renderPools(tpool, fpool, opool);
  }

  if (runtime < duration) { // if duration not met yet
    requestAnimationFrame(function (timestamp) { // call requestAnimationFrame again with parameters
      animateDieGain(timestamp, duration, tpool, fpool, opool)
    })
  } else { //render the actual pools
    renderPools(treasurePool, foePool, obstaclePool);
    renderRest();
  }
}
