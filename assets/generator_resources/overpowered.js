//get the json file and parse it
fetch('/assets/generator_resources/overpowered.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        overpowered = data;
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  function grabParamsURL() {
    //if someone is loading a character code
    if (window.location.search != "") {
      const urlParams = new URLSearchParams(window.location.search);
       if (urlParams.get('name')) {
        botName = decodeURI(urlParams.get('name'));//split it up into an array
        generateSeed(botName);
       } else {
        generateSeed();
       }
      
       generateBotDetails(); 

        if (urlParams.get('treasure')) {
          treasurePool = decodeURI(urlParams.get('treasure')).split(",");//split it up into an array
        } else {
        gainDie(4);
        gainDie(20);
        }
      
        if (urlParams.get('foe')) {
          foePool = decodeURI(urlParams.get('foe')).split(",");//split it up into an array
        } else {
        gainDie(6);
        gainDie(12);
        }
      
        if (urlParams.get('obstacle')) {
          obstaclePool = decodeURI(urlParams.get('obstacle')).split(",");//split it up into an array
        } else {
        gainDie(8);
        gainDie(10);
        }
      
        if (urlParams.get('maxRows')) {
          maxRows = decodeURI(urlParams.get('maxRows'));//split it up into an array
        }
      
        // if (urlParams.get('turn')) {
        //   turnNumber = decodeURI(urlParams.get('turn'));//split it up into an array
        // }
      
        if (urlParams.get('overpower')) {
           tribute = parseInt(decodeURI(urlParams.get('overpower')));
        }
   
        renderPools();
      } else {
        //No params, start fresh!
        generateSeed();
       generateBotDetails(); 
        gainDie(4);
        gainDie(6);        
        gainDie(8);
        gainDie(10);        
        gainDie(12);
        gainDie(20);
      }
  }

//setup the pools and vars
var overpowered = {};
botName = "ERROR.7";
myrng = new Math.seedrandom(botName); //use this seed for dice generation as well!

//dice are notated: 4-1 for a d4 showing 1. 20-13-s for a d20 showing 13 that is selected. 
treasurePool = [];
foePool = [];
obstaclePool = [];
enableEffects = true;
maxRows = 4;
tribute = 0;
//turnNumber = 0;

//Pre-rolled dice rolls
preRolledD4s = [];
preRolledD6s = [];
preRolledD8s = [];
preRolledD10s = [];
preRolledD12s = [];
preRolledD20s = [];

function generateSeed(oldSeed){
  //Uses the name of the bot to save the details
  //create a new code if we don't have one
  if (!oldSeed){
    botName =  overpowered.Adjectives[Math.floor(Math.random() * overpowered.Adjectives.length)].toUpperCase() + "." + 
    overpowered.Names[Math.floor(Math.random() * overpowered.Names.length)].toUpperCase() + "." + 
    getRandomInt(1,20);
  } else {
    botName = oldSeed;
  }
  document.title = botName; // + " --- Turn:" + turnNumber; 
  document.getElementById('botName').innerText = botName.toUpperCase(); //+ " --- Turn: " + turnNumber;
  myrng = new Math.seedrandom(botName);
 
}

function checkRolls(){
   //in case we run out of rolls
  if (preRolledD4s.length < 1){
    for (d=0;d<100;d++){
      preRolledD4s.push(getRandomInt(4));
    }
  }
  
  if (preRolledD6s.length < 1){
    for (d=0;d<100;d++){
      preRolledD6s.push(getRandomInt(6));
    }
  } 
  
    if (preRolledD8s.length < 1){
    for (d=0;d<100;d++){
      preRolledD8s.push(getRandomInt(8));
    }
  } 
  
    if (preRolledD10s.length < 1){
    for (d=0;d<100;d++){
      preRolledD10s.push(getRandomInt(10));
    }
  } 
  
    if (preRolledD12s.length < 1){
    for (d=0;d<100;d++){
      preRolledD12s.push(getRandomInt(12));
    }
  } 
  
    if (preRolledD20s.length < 1){
    for (d=0;d<100;d++){
      preRolledD20s.push(getRandomInt(20));
    }
  } 
}

function toggleCRT() {
  enableEffects = !enableEffects;
  document.getElementById('overCard').classList.toggle('crt');
  document.getElementById('botDetails').classList.toggle('crt');
  document.getElementById('gainCard').classList.toggle('crt');
  generateBotDetails(botName); //to disable colored items
}

// Gaining dice for the pool
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(myrng() * (max - min + 1) + min);
}

function gainDie(size) {
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
  
  if (size == 4 || size == 20) {
    treasurePool.unshift(size + "-" + roll);
    animateDice("treasureCore", size, roll);
    if (treasurePool.length > maxRows) {
      tributeDie = treasurePool.splice(maxRows)[0] //get the last of the list
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    animateDice("foeCore", size, roll);    
    if (foePool.length > maxRows) {
      tributeDie = foePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    animateDice("obstacleCore", size, roll);      
    if (obstaclePool.length > maxRows) {
      tributeDie = obstaclePool.splice(maxRows)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
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

  if (treasurePool[index].includes("-s")){
    treasurePool[index] = treasurePool[index].replace("-s","");
  } else {
    treasurePool[index] = treasurePool[index] + "-s";
  }
  renderPools();
}

function spendFoe(index) {
  if (foePool[index].includes("-s")){
    foePool[index] = foePool[index].replace("-s","");
  } else {
    foePool[index] = foePool[index] + "-s";
  }  
  renderPools();
}

function spendObstacle(index) {
  if (obstaclePool[index].includes("-s")){
    obstaclePool[index] = obstaclePool[index].replace("-s","");
  } else {
    obstaclePool[index] = obstaclePool[index] + "-s";
  }  
  renderPools();
}

function spendSelectedDice() {

  //iterate backwards through the array so you 
  //remove things off the end, and don't mess up the index

  for (var i = (treasurePool.length - 1); i >= 0; i--) {
    if (treasurePool[i].includes("-s")) {
      treasurePool.splice(i, 1);
    }
  }
  for (var i = (foePool.length - 1); i >= 0; i--) {
    if (foePool[i].includes("-s")) {
      foePool.splice(i, 1);
    }
  }
  for (var i = (obstaclePool.length - 1); i >= 0; i--) {
    if (obstaclePool[i].includes("-s")) {
      obstaclePool.splice(i, 1);
    }
  }
  renderPools();
}

function countSelectedPower(){

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
    gainTribute(-10);

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
        if (checkProgress-lastProgress> .1 ){ //only animate every .1 seconds
          lastProgress = checkProgress;
          for (var i=0;i<dice.length;i++){
            dice[i].style.color = colors[getRandomInt(0,colors.length)];
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
        newRoll = getRandomInt(1, dieSize);
        treasurePool.unshift(dieSize + "-" + newRoll);
      }
    }

    if (oldFoePool.length > 0) {
      for (var i = 0; i < oldFoePool.length; i++) {
        die = oldFoePool[i];
        dieSize = die.split("-")[0];
        newRoll = getRandomInt(1, dieSize);
        foePool.unshift(dieSize + "-" + newRoll);
      }
    }

    if (oldObstaclePool.length > 0) {
      for (var i = 0; i < oldObstaclePool.length; i++) {
        die = oldObstaclePool[i];
        dieSize = die.split("-")[0];
        newRoll = getRandomInt(1, dieSize);
        obstaclePool.unshift(dieSize + "-" + newRoll);
      }
    }

    if (enableEffects) {
      finishAnimation(1100).then(() => renderPools());
    } else {
      renderPools();
    }
  }


function gainTwentyAbility(){
  gainTribute(-20);
  gainDie(20);
}

function gainAllDice(){
  gainTribute(-40);
  gainDie(4);
  gainDie(6);
  gainDie(8);
  gainDie(10);
  gainDie(12);
  gainDie(20);
}

function gainDiceRow(){
  gainTribute(-100);
  maxRows = parseInt(maxRows) + 1;
  renderPools();
}

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

function animateDice(dieCore, dieSize, value){
  if (enableEffects) {
    var start = 0;
    var end = value;
    var duration = 1000;
    const target = document.getElementById(dieCore);//make sure this matches the id of the row
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
      
      if (treasurePool[i].includes("-s")){
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
      
      if (foePool[i].includes("-s")){
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

      if (obstaclePool[i].includes("-s")){
        dieButton = dieButton + " selectedDie";
        selectedDice = true;
      }

      obstacleHTML = dieButton + "\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
    } else {
      obstacleHTML = blankDieHTML + obstacleHTML;
    }
  }

  if (selectedDice == true){
    document.getElementById('spendDice').style.display = "block";
    document.getElementById('selectedPowerTotal').innerText = countSelectedPower();
  } else {
    document.getElementById('spendDice').style.display = "none";
  }

  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('tributeScore').innerText = tribute;
  document.getElementById('tributeScore').style.color = "yellow";

  //Update the window name for easy bookmarking
  // turnNumber = parseInt(turnNumber) + 1; //simple increment

  updateURL();
}

function updateURL(){
  urlString = "?treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + tribute + 
    "&name=" + botName + 
    "&maxRows=" + maxRows;
    //"&turn=" + turnNumber;

  window.history.replaceState(null, null, urlString);
}
/**
//Add +2 to all dice
function powerBoost() {
  gainTribute(-15);

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
      if (checkProgress-lastProgress> .1 ){ //only animate every .1 seconds
        lastProgress = checkProgress;
        for (var i=0;i<dice.length;i++){
          dice[i].style.color = colors[getRandomInt(0,colors.length)];
        }
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  for (i=0; i<treasurePool.length; i++){
    die = treasurePool[i].split('-'); //grab the value of each die
    die[1] = parseInt(die[1])+2;
    if (die[1] > die[0]){
      die[1] = die[0];
    }
    treasurePool[i] = die[0] + "-" + die[1]
  }

  for (i=0; i<foePool.length; i++){
    die = foePool[i].split('-'); //grab the value of each die
    die[1] = parseInt(die[1])+2;
    if (die[1] > die[0]){
      die[1] = die[0];
    }
    foePool[i] = die[0] + "-" + die[1]
  }

  for (i=0; i<obstaclePool.length; i++){
    die = obstaclePool[i].split('-'); //grab the value of each die
    die[1] = parseInt(die[1])+2;
    if (die[1] > die[0]){
      die[1] = die[0];
    }
    obstaclePool[i] = die[0] + "-" + die[1]
  }

  if (enableEffects) {
    finishAnimation(1100).then(() => renderPools());
  } else {
    renderPools();
  }
}
**/

function generateBotDetails(){
  
  document.title = botName; // + " --- Turn:" + turnNumber; 
  document.getElementById('botName').innerText = botName.toUpperCase(); //+ " --- Turn: " + turnNumber;

  //Store example bots in case JSON is modified
  switch (botName) {
    case 'Ancient.Ceylon.6':
      weaponChoice = overpowered.Weapons[0];
      defChoice = overpowered.Defenses[3];
      toolChoice = overpowered.Tools[0];
      talkChoice = overpowered.Communications[1];
      moveChoice = overpowered.Movement[1];      
      quirk1Choice = overpowered.Quirks[0];      
      quirk2Choice = overpowered.Quirks[1];      
      break;
    case 'False.Castor.1':
      weaponChoice = overpowered.Weapons[2];
      defChoice = overpowered.Defenses[4];
      toolChoice = overpowered.Tools[1];
      talkChoice = overpowered.Communications[1];
      moveChoice = overpowered.Movement[0];
      quirk1Choice = overpowered.Quirks[2];      
      quirk2Choice = overpowered.Quirks[3];       
      break;
    case 'Frigid.Procyon.11':
      weaponChoice = overpowered.Weapons[1];
      defChoice = overpowered.Defenses[3];
      toolChoice = overpowered.Tools[2];
      talkChoice = overpowered.Communications[0];
      moveChoice = overpowered.Movement[4];
      quirk1Choice = overpowered.Quirks[4];      
      quirk2Choice = overpowered.Quirks[1];    
      break;
    default: //else pick random options
      weaponChoice = overpowered.Weapons[Math.floor(myrng() * overpowered.Weapons.length)];
      defChoice = overpowered.Defenses[Math.floor(myrng() * overpowered.Defenses.length)];
      toolChoice = overpowered.Tools[Math.floor(myrng() * overpowered.Tools.length)];
      talkChoice = overpowered.Communications[Math.floor(myrng() * overpowered.Communications.length)];
      moveChoice = overpowered.Movement[Math.floor(myrng() * overpowered.Movement.length)];
      quirk1Choice = overpowered.Quirks[Math.floor(myrng() * overpowered.Quirks.length)];      
      quirk2Choice = overpowered.Quirks[Math.floor(myrng() * overpowered.Quirks.length)];    
      while (quirk1Choice == quirk2Choice){ //don't let them be the same
        quirk2Choice = overpowered.Quirks[Math.floor(myrng() * overpowered.Quirks.length)];    
      }
  }

  document.getElementById('osrWeapon').innerHTML = "<span class=\"itemName\">" + weaponChoice.Name + ":</span> " + weaponChoice.Description + " <span class=\"noWrap\">" + 
  weaponChoice.Stats[0] + " ❖ " + weaponChoice.Stats[1] + " ❖ " + weaponChoice.Stats[2] + "</span>";

  document.getElementById('osrDefense').innerHTML = "<span class=\"itemName\">" + defChoice.Name + ":</span> " + defChoice.Description + " <span class=\"noWrap\">" +
  defChoice.Stats[0] + " ❖ " + defChoice.Stats[1] + " ❖ " + defChoice.Stats[2] + "</span>";

  document.getElementById('osrTool').innerHTML = "<span class=\"itemName\">" + toolChoice.Name + ":</span> " + toolChoice.Description + " <span class=\"noWrap\">" +
  toolChoice.Stats[0] + " ❖ " + toolChoice.Stats[1] + " ❖ " + toolChoice.Stats[2] + "</span>";

  document.getElementById('osrTalk').innerHTML = "<span class=\"itemName\">" + talkChoice.Name + ":</span> " + talkChoice.Description + " <span class=\"noWrap\">" +
  talkChoice.Stats[0] + " ❖ " + talkChoice.Stats[1] + " ❖ " + talkChoice.Stats[2] + "</span>";

  moveHTML = "<span class=\"itemName\">" + moveChoice.Name + ":</span> " + moveChoice.Description;
  
  //▰▱▱▰
  moveHTML = moveHTML + "<br><span style=\"margin-left:.5rem;\">SPEED</span> <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[0];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[0];i++){
    moveHTML = moveHTML + "▱"
  }

  //▰▱
  moveHTML = moveHTML + "<br></span><span style=\"margin-left:.5rem;\">&nbsp JUMP</span> <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[1];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[1];i++){
    moveHTML = moveHTML + "▱"
  }

  //▰▱
  moveHTML = moveHTML + "<br></span><span style=\"margin-left:.5rem;\">CLIMB</span> <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[2];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[2];i++){
    moveHTML = moveHTML + "▱"
  }
  document.getElementById('osrMove').innerHTML = moveHTML + "</span>";

  document.getElementById('osrQuirk1').innerHTML = quirk1Choice;
  document.getElementById('osrQuirk2').innerHTML = quirk2Choice;

  //replace this with the fancy bot generator eventually
  document.getElementById('osrImg').src = "/images/Overpowered/overpoweredExamples/OSR" + (Math.floor(myrng() * 7) + 1) + ".gif"

  botItems = document.querySelectorAll(".itemName");

  if (enableEffects) {
  
    botItems[0].style.color = overpowered.Colors[Math.floor(myrng() * overpowered.Colors.length)];
    botItems[1].style.color = overpowered.Colors[Math.floor(myrng() * overpowered.Colors.length)];
    botItems[2].style.color = overpowered.Colors[Math.floor(myrng() * overpowered.Colors.length)];
    botItems[3].style.color = overpowered.Colors[Math.floor(myrng() * overpowered.Colors.length)];
    botItems[4].style.color = overpowered.Colors[Math.floor(myrng() * overpowered.Colors.length)];

    } else {
      botItems[0].style.color = "white";
      botItems[1].style.color = "white";
      botItems[2].style.color = "white";
      botItems[3].style.color = "white";
      botItems[4].style.color = "white";
    }
    updateURL();
}
