//setup the pools and vars
//dice are notated: 4-1 for a d4 showing 1. 20-13 for a d20 showing 13
treasurePool = [];
foePool = [];
obstaclePool = [];

maxTreasure = 4;
maxFoes = 4;
maxObstacles = 4;

rerolls = 3;
maxrerolls = 3;

tribute = 0;

crtEnabled = 1;

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
  if (rerolls > 0) {
    rerolls = rerolls - 1;

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
        gainDie(dieSize);
      }
    }

    if (oldFoePool.length > 0) {
      for (var i = 0; i < oldFoePool.length; i++) {
        die = oldFoePool[i];
        dieSize = die.split("-")[0];
        gainDie(dieSize);
      }
    }

    if (oldObstaclePool.length > 0) {
      for (var i = 0; i < oldObstaclePool.length; i++) {
        die = oldObstaclePool[i];
        dieSize = die.split("-")[0];
        gainDie(dieSize);
      }
    }
  } 
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
    target.innerHTML = targetHTML + "<button onclick=\"spendObstacle(" + 0 + ")\" class=\"d" + dieSize + " crt dicierHeavy\">" + Math.floor(progress * (end - start) + start) + "_ON_D" + dieSize + "</button>\n";
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
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + treasureHTML;
      } else {
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + treasureHTML;
      }
    } else {
      if (crtEnabled) {
        treasureHTML = "<button class=\"crt dicierDark\">⬆</button>\n" + treasureHTML;
      } else {
        treasureHTML = "<button class=\"dicierDark\">⬆</button>\n" + treasureHTML;
      }
    }
  }

  foeHTML = "";
  for (var i = 0; i < maxFoes; i++) {
    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];
      if (crtEnabled) {
        foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + foeHTML;
      } else {
        foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + foeHTML;
      }
    } else {
      if (crtEnabled) {
        foeHTML = "<button class=\"crt dicierDark\">⬆</button>\n" + foeHTML;
      } else {
        foeHTML = "<button class=\"dicierDark\">⬆</button>\n" + foeHTML;
      }
    }
  }

  obstacleHTML = "";
  for (var i = 0; i < maxObstacles; i++) {
    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];
      if (crtEnabled) {
        obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " crt dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
      } else {
        obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
      }
    } else {
      if (crtEnabled) {
        obstacleHTML = "<button class=\"crt dicierDark\">⬆</button>\n" + obstacleHTML;
      } else {
        obstacleHTML = "<button class=\"dicierDark\">⬆</button>\n" + obstacleHTML;
      }
    }
  }

  //Needs to be altered for the CRT effect
  gainDice1HTML = "";
  gainDice2HTML = "";

  if (crtEnabled) {
    gainDice1HTML = "<div class=\"crt col-12\"><h3>GAIN NEW DICE</h3></div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(4)\" class=\"crt dicierHeavy\">ANY_ON_D4</button>" +
      "<p>HANDFUL</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(6)\" class=\"crt dicierHeavy\">ANY_ON_D6</button>" +
      "<p>WEAK</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(8)\" class=\"crt dicierHeavy\">ANY_ON_D8</button>" +
      "<p>OBSTACLE</p>" +
      "</div>";
  } else {
    gainDice1HTML = "<div class=\"col-12\"><h3>GAIN NEW DICE</h3></div>" +
      "<div class=\"dwhite col-4\">" +      
      "<button onclick=\"gainDie(4)\" class=\"dicierHeavy\">ANY_ON_D4</button>" +
      "<p>HANDFUL</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(6)\" class=\"dicierHeavy\">ANY_ON_D6</button>" +
      "<p>WEAK</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(8)\" class=\"dicierHeavy\">ANY_ON_D8</button>" +
      "<p>OBSTACLE</p>" +
      "</div>";
  }

  if (crtEnabled) {
    gainDice2HTML = "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(20)\" class=\"crt dicierHeavy\">ANY_ON_D20</button>" +
      "<p>MAGIC</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(12)\" class=\"crt dicierHeavy\">ANY_ON_D12</button>" +
      "<p>STRONG</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(10)\" class=\"crt dicierHeavy\">ANY_ON_D10</button>" +
      "<p>AREA</p>" +
      "</div>";
  } else {
    gainDice2HTML = "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(20)\" class=\"dicierHeavy\">ANY_ON_D20</button>" +
      "<p>MAGIC</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(12)\" class=\"dicierHeavy\">ANY_ON_D12</button>" +
      "<p>STRONG</p>" +
      "</div>" +
      "<div class=\"dwhite col-4\">" +
      "<button onclick=\"gainDie(10)\" class=\"dicierHeavy\">ANY_ON_D10</button>" +
      "<p>AREA</p>" +
      "</div>";
  }

  rerollHTML = "";
  for (var i = 0; i < rerolls; i++) {
    if (crtEnabled) {
    rerollHTML = rerollHTML + "<div class=\"col-4\">" +
      "<button onclick=\"rerollDice()\" class=\"dReroll crt dicierHeavy\">ANY_FLIP</button>\n<p>REROLL</p></div>";
    } else {
      rerollHTML = rerollHTML + "<div class=\"col-4\">" +
      "<button onclick=\"rerollDice()\" class=\"dReroll dicierHeavy\">ANY_FLIP</button>\n<p>REROLL</p></div>";
    }
  }
  rerollHTML = rerollHTML + "<div class=\"col-12\"><a style=\"color:lightgreen;cursor:pointer;\" onclick=\"toggleCRT()\">TOGGLE CRT</a></div>";
 

  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('gainDice1').innerHTML = gainDice1HTML;
  document.getElementById('gainDice2').innerHTML = gainDice2HTML;

  document.getElementById('rerollPool').innerHTML = rerollHTML;

  document.getElementById('tributeScore').innerHTML = "OVERPOWERED CORES<br>BECOME TRIBUTE: <span style=\"color:lightgoldenrodyellow;\">" + tribute + "</span>";
  
  console.log("Treasure Pool = " + treasurePool.toString());
  console.log("Foe Pool = " + foePool.toString());
  console.log("Obstacle Pool = " + obstaclePool.toString());
}

//Start the game!
gainDie(4);
gainDie(6);
gainDie(8);
gainDie(10);
gainDie(12);
gainDie(20);
