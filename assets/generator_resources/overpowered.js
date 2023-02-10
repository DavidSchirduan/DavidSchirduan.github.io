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
      if (urlParams.get('overpower')) { //we can't test the pools because if the pools are empty then the param is also empty and breaks things.
        //populate the generator with the saved info
        if (urlParams.get('treasure')) {
          treasurePool = decodeURI(urlParams.get('treasure')).split(",");//split it up into an array
        }
        if (urlParams.get('foe')) {
          foePool = decodeURI(urlParams.get('foe')).split(",");//split it up into an array
        }
        if (urlParams.get('obstacle')) {
          obstaclePool = decodeURI(urlParams.get('obstacle')).split(",");//split it up into an array
        }
        if (urlParams.get('name')) {
          botName = decodeURI(urlParams.get('name'));//split it up into an array
          generateBotDetails(botName);
        } else { 
          generateBotDetails();
        }
        if (urlParams.get('maxRows')) {
          maxRows = decodeURI(urlParams.get('maxRows'));//split it up into an array
        }
        tribute = parseInt(decodeURI(urlParams.get('overpower')));
        renderPools();
        document.getElementById('tributeScore').scrollIntoView();
      } else {
        console.log("invalid params, starting fresh");
        //Start the game!
        gainDie(4);
        gainDie(6);
        gainDie(8);
        gainDie(10);
        gainDie(12);
        gainDie(20);
        generateBotDetails();
      }
    } else {
      console.log("no params, starting fresh");
      //Start the game!
      gainDie(4);
      gainDie(6);
      gainDie(8);
      gainDie(10);
      gainDie(12);
      gainDie(20);
      generateBotDetails();
    }
  }

//setup the pools and vars
var overpowered = {};
botName = "Error.7";

//dice are notated: 4-1 for a d4 showing 1. 20-13 for a d20 showing 13
treasurePool = [];
foePool = [];
obstaclePool = [];
enableEffects = true;
maxRows = 4;
tribute = 0;

function toggleCRT() {
  enableEffects = !enableEffects;
  document.getElementById('overCard').classList.toggle('crt');
  document.getElementById('botDetails').classList.toggle('crt');
  generateBotDetails(botName); //to disable colored items
}

// Gaining dice for the pool
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gainDie(size) {
  roll = getRandomInt(1, size)

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

//Spend Dice by clicking
function spendTreasure(index) {
  treasurePool.splice(index, 1);
  renderPools();
}

function spendFoe(index) {
  foePool.splice(index, 1);
  renderPools();
}

function spendObstacle(index) {
  obstaclePool.splice(index, 1);
  renderPools();
}

//Reroll all dice
function rerollDice() {
  if (tribute >= 10) {

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
      target.innerHTML = "ØVerpower: <span style=\"color:lightcoral;\">" + Math.floor(progress * (end - start) + start) + "</span>";
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
  for (var i = 0; i < maxRows; i++) {
    if (i < treasurePool.length) {
      dieSize = treasurePool[i].split("-")[0];
      dieValue = treasurePool[i].split("-")[1];
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + treasureHTML;
    } else {
      treasureHTML = blankDieHTML + treasureHTML;
    }
  }

  foeHTML = "";
  for (var i = 0; i < maxRows; i++) {
    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];
      foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + foeHTML;
    } else {
      foeHTML = blankDieHTML + foeHTML;
  }
}

  obstacleHTML = "";
  for (var i = 0; i < maxRows; i++) {
    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];
      obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
    } else {
      obstacleHTML = blankDieHTML + obstacleHTML;
    }
  }

  //Display Abilities
  if (tribute >= 10) {
    document.getElementById('rerollButton').style.display = "initial";
  } else {
    document.getElementById('rerollButton').style.display = "none";
  }

  if (tribute >= 20) {
    document.getElementById('d20Button').style.display = "initial";
  } else {
    document.getElementById('d20Button').style.display = "none";
  }

  if (tribute >= 40) {
    document.getElementById('gainDiceButton').style.display = "initial";
  } else {
    document.getElementById('gainDiceButton').style.display = "none";
  }

  if (tribute >= 100) {
    document.getElementById('gainRowButton').style.display = "initial";
  } else {
    document.getElementById('gainRowButton').style.display = "none";
  }

  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('tributeScore').innerHTML = "ØVerpower: <span class=\"dtribute\">" + tribute + "</span>";

  updateURL();
  // console.log("Treasure Pool = " + treasurePool.toString());
  // console.log("Foe Pool = " + foePool.toString());
  // console.log("Obstacle Pool = " + obstaclePool.toString());
}

function updateURL(){
  urlString = "?treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + tribute + 
    "&name=" + botName + 
    "&maxRows=" + maxRows;

  window.history.replaceState(null, null, urlString);
}

function generateBotDetails(oldSeed){
  //Uses the name of the bot to save the details
  //create a new code if we don't have one
  if (!oldSeed){
    botName =  overpowered.Adjectives[Math.floor(Math.random() * overpowered.Adjectives.length)] + "." + 
    overpowered.Names[Math.floor(Math.random() * overpowered.Names.length)] + "." + 
    getRandomInt(1,20);
  } else {
    botName = oldSeed;
  }
  myrng = new Math.seedrandom(botName);
  document.getElementById('botName').innerText = botName;

  weaponChoice = overpowered.Weapons[Math.floor(myrng() * overpowered.Weapons.length)];
  document.getElementById('osrWeapon').innerHTML = "<span class=\"itemName\">" + weaponChoice.Name + ":</span> " + weaponChoice.Description + " <span class=\"noWrap\">" + 
  weaponChoice.Stats[0] + " ❖ " + weaponChoice.Stats[1] + " ❖ " + weaponChoice.Stats[2] + "</span>";

  defChoice = overpowered.Defenses[Math.floor(myrng() * overpowered.Defenses.length)];
  document.getElementById('osrDefense').innerHTML = "<span class=\"itemName\">" + defChoice.Name + ":</span> " + defChoice.Description + " <span class=\"noWrap\">" +
  defChoice.Stats[0] + " ❖ " + defChoice.Stats[1] + " ❖ " + defChoice.Stats[2] + "</span>";

  toolChoice = overpowered.Tools[Math.floor(myrng() * overpowered.Tools.length)];
  document.getElementById('osrTool').innerHTML = "<span class=\"itemName\">" + toolChoice.Name + ":</span> " + toolChoice.Description + " <span class=\"noWrap\">" +
  toolChoice.Stats[0] + " ❖ " + toolChoice.Stats[1] + " ❖ " + toolChoice.Stats[2] + "</span>";

  talkChoice = overpowered.Communications[Math.floor(myrng() * overpowered.Communications.length)];
  document.getElementById('osrTalk').innerHTML = "<span class=\"itemName\">" + talkChoice.Name + ":</span> " + talkChoice.Description + " <span class=\"noWrap\">" +
  talkChoice.Stats[0] + " ❖ " + talkChoice.Stats[1] + " ❖ " + talkChoice.Stats[2] + "</span>";

  moveChoice = overpowered.Movement[Math.floor(myrng() * overpowered.Movement.length)];
  moveHTML = "<span class=\"itemName\">" + moveChoice.Name + ":</span> " + moveChoice.Description;
  
  //▰▱▱▰
  moveHTML = moveHTML + "<br> SPEED <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[0];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[0];i++){
    moveHTML = moveHTML + "▱"
  }

  //▰▱
  moveHTML = moveHTML + "<br></span> &nbsp JUMP <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[1];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[1];i++){
    moveHTML = moveHTML + "▱"
  }

  //▰▱
  moveHTML = moveHTML + "<br></span> CLIMB <span class=\"statBars\">";
  for (i=0;i<moveChoice.Stats[2];i++){
    moveHTML = moveHTML + "▰"
  }
  for (i=0;i<5-moveChoice.Stats[2];i++){
    moveHTML = moveHTML + "▱"
  }
  document.getElementById('osrMove').innerHTML = moveHTML + "</span>";

  //replace this with the fancy bot generator eventually
  document.getElementById('osrImg').src = "/images/overpoweredExamples/OSR" + (Math.floor(myrng() * 7) + 1) + ".gif"

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
