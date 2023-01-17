//setup the pools and vars
//dice are notated: 4-1 for a d4 showing 1. 20-13 for a d20 showing 13
treasurePool = [];
foePool = [];
obstaclePool = [];

maxTreasure = 4;
maxFoes = 4;
maxObstacles = 4;

tribute = 0;

crtEnabled = 1;

function grabParamsURL(){
  //if someone is loading a character code
  if (window.location.search != ""){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tribute')){ //we can't test the pools because if the pools are empty then the param is also empty and breaks things.
      //populate the generator with the saved info
      if (urlParams.get('treasure')){
        treasurePool = decodeURI(urlParams.get('treasure')).split(",");//split it up into an array
      }
      if (urlParams.get('foe')){
        foePool = decodeURI(urlParams.get('foe')).split(",");//split it up into an array
      }
      if (urlParams.get('obstacle')){
        obstaclePool = decodeURI(urlParams.get('obstacle')).split(",");//split it up into an array
      }
      tribute = parseInt(decodeURI(urlParams.get('tribute')));
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
  }
}

function toggleCRT(){
  crtEnabled = !crtEnabled;
  document.getElementById('tributeScore').classList.toggle('crt');
  renderPools();
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
    if (treasurePool.length > maxTreasure) {
      tributeDie = treasurePool.splice(maxTreasure)[0] //get the last of the list
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    animateDice("foeCore", size, roll);    
    if (foePool.length > maxFoes) {
      tributeDie = foePool.splice(maxFoes)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    animateDice("obstacleCore", size, roll);      
    if (obstaclePool.length > maxObstacles) {
      tributeDie = obstaclePool.splice(maxObstacles)[0]
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
  }
  renderPools(); 
}

function finishAnimation(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function gainTribute(amount) {
  var start = tribute;
  var end = tribute + amount;
  tribute = amount + tribute; //actually set the new tribute
  var duration = 1000;
  const target = document.getElementById("tributeScore");
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    target.innerHTML = "OVERPOWERED CORES<br>BECOME TRIBUTE: <span style=\"color:lightcoral;\">" + Math.floor(progress * (end - start) + start) + "</span>";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
  finishAnimation(1200).then(() => renderPools());
}

function animateDice(dieCore, dieSize, value){
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
    target.innerHTML = targetHTML + "<button onclick=\"spendObstacle(" + 0 + ")\" class=\"d" + dieSize + (crtEnabled ? " crt " : " ") +"dicierHeavy\">" + Math.floor(progress * (end - start) + start) + "_ON_D" + dieSize + "</button>\n";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
  finishAnimation(1200).then(() => renderPools());
}

//render the pools & tribute score
function renderPools() {

  treasureHTML = "";
  for (var i = 0; i < maxTreasure; i++) {
    if (i < treasurePool.length) {
      dieSize = treasurePool[i].split("-")[0];
      dieValue = treasurePool[i].split("-")[1];
      if (crtEnabled) {
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + treasureHTML;
      } else {
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + treasureHTML;
      }
    } else {
      if (crtEnabled) {
        treasureHTML = "<button style=\"width:100%;\" class=\"crt dicierDark\"><p>⇡</p></button>\n" + treasureHTML;
      } else {
        treasureHTML = "<button style=\"width:100%;\" class=\"dicierDark\"><p>⇡</p></button>\n" + treasureHTML;
      }
    }
  }

  foeHTML = "";
  for (var i = 0; i < maxFoes; i++) {
    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];
      if (crtEnabled) {
        foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + foeHTML;
      } else {
        foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + foeHTML;
      }
    } else {
      if (crtEnabled) {
        foeHTML = "<button style=\"width:100%;\" class=\"crt dicierDark\"><p>⇡</p></button>\n" + foeHTML;
      } else {
        foeHTML = "<button style=\"width:100%;\" class=\"dicierDark\"><p>⇡</p></button>\n" + foeHTML;
      }    }
  }

  obstacleHTML = "";
  for (var i = 0; i < maxObstacles; i++) {
    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];
      if (crtEnabled) {
        obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + obstacleHTML;
      } else {
        obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\"><p>" + dieValue + "_ON_D" + dieSize + "</p></button>\n" + obstacleHTML;
      }
    } else {
      if (crtEnabled) {
        obstacleHTML = "<button style=\"width:100%;\" class=\"crt dicierDark\"><p>⇡</p></button>\n" + obstacleHTML;
      } else {
        obstacleHTML = "<button style=\"width:100%;\" class=\"dicierDark\"><p>⇡</p></button>\n" + obstacleHTML;
      }    }
  }

  //Needs to be altered for the CRT effect
  gainDice1HTML = "";
  gainDice2HTML = "";

  if (crtEnabled) {
    gainDice1HTML = "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(4)\" class=\"crt dicierHeavy\"><p>ANY_ON_D4</p></button>" +
      "<p>HANDFUL</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(6)\" class=\"crt dicierHeavy\"><p>ANY_ON_D6</p></button>" +
      "<p>WEAK</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(8)\" class=\"crt dicierHeavy\"><p>ANY_ON_D8</p></button>" +
      "<p>OBSTACLE</p>" +
      "</div>";
  } else {
    gainDice1HTML =  "<div class=\"dwhite col-4\">" +
    "<button onclick=\"gainDie(4)\" class=\"dicierHeavy\"><p>ANY_ON_D4</p></button>" +
    "<p>HANDFUL</p>" +
    "</div>" +
    "<div class=\"dwhite col-4\">" +
    "<button onclick=\"gainDie(6)\" class=\"dicierHeavy\"><p>ANY_ON_D6</p></button>" +
    "<p>WEAK</p>" +
    "</div>" +
    "<div class=\"dwhite col-4\">" +
    "<button onclick=\"gainDie(8)\" class=\"dicierHeavy\"><p>ANY_ON_D8</p></button>" +
    "<p>OBSTACLE</p>" +
    "</div>";
  }

  if (crtEnabled) {
    gainDice2HTML = "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(20)\" class=\"crt dicierHeavy\"><p>ANY_ON_D20</p></button>" +
      "<p>MAGIC</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(12)\" class=\"crt dicierHeavy\"><p>ANY_ON_D12</p></button>" +
      "<p>STRONG</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(10)\" class=\"crt dicierHeavy\"><p>ANY_ON_D10</p></button>" +
      "<p>AREA</p>" +
      "</div>";
  } else {
    gainDice2HTML = "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(20)\" class=\"dicierHeavy\"><p>ANY_ON_D20</p></button>" +
      "<p>MAGIC</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(12)\" class=\"dicierHeavy\"><p>ANY_ON_D12</p></button>" +
      "<p>STRONG</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(10)\" class=\"dicierHeavy\"><p>ANY_ON_D10</p></button>" +
      "<p>AREA</p>" +
      "</div>";
  }

  rerollHTML = "<div class=\"col-4\"><button onclick=\"rerollDice()\"class=\"";
  if (crtEnabled) {
    rerollHTML = rerollHTML + " crt ";
  }
  if (tribute >= 10) {
    rerollHTML = rerollHTML + "dicierHeavy dtribute\"><p>ANY_FLIP</p></button>\n<p>REROLL<br>(Costs 10 Tribute)</p></div>";
  } else {
    rerollHTML = rerollHTML + "dicierDark\"><p>ANY_FLIP</p></button>\n<p>REROLL<br>Costs 10 Tribute</p></div>";
  }
  rerollHTML = rerollHTML + "<div class=\"col-4\"><button onclick=\"toggleCRT()\" class=\"d4 ";
  if (crtEnabled) {
    rerollHTML = rerollHTML + " crt ";
  }
  rerollHTML = rerollHTML + "dicierHeavy\"><p>TALISMAN</p></button>\n<p>TOGGLE<br>CRT EFFECT</p></div><div class=\"col-4\"><button class=\"dReroll ";
  if (crtEnabled) {
    rerollHTML = rerollHTML + " crt ";
  }
  rerollHTML = rerollHTML + "dicierDark\"><p>STARS</p></button>\n<p>Bookmark to save session.</p></div>";
 
  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('gainDice1').innerHTML = gainDice1HTML;
  document.getElementById('gainDice2').innerHTML = gainDice2HTML;

  document.getElementById('rerollPool').innerHTML = rerollHTML;

  document.getElementById('tributeScore').innerHTML = "OVERPOWERED CORES<br>BECOME TRIBUTE: <span class=\"dtribute\">" + tribute + "</span>";
  
  urlString = "?treasure="+ encodeURI(treasurePool.toString())+
  "&foe="+ encodeURI(foePool.toString())+
  "&obstacle="+ encodeURI(obstaclePool.toString())+
  "&tribute="+ tribute;

  window.history.replaceState(null, null, urlString);
  // console.log("Treasure Pool = " + treasurePool.toString());
  // console.log("Foe Pool = " + foePool.toString());
  // console.log("Obstacle Pool = " + obstaclePool.toString());
}

grabParamsURL();
