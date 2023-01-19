//setup the pools and vars
//dice are notated: 4-1 for a d4 showing 1. 20-13 for a d20 showing 13
treasurePool = [];
foePool = [];
obstaclePool = [];
//their notation in the table is row,col

enableEffects = false;

maxColSize = 4;

tribute = 0;

function grabParamsURL() {
  //if someone is loading a character code
  if (window.location.search != "") {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tribute')) { //we can't test the pools because if the pools are empty then the param is also empty and breaks things.
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

function toggleCRT() {
  enableEffects = !enableEffects;
  document.getElementById('overCard').classList.toggle('crt');
}
toggleCRT(); //start enabled

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
    animateDice("3,0", size, roll); //animate the newly added die in first column, 4th row
    if (treasurePool.length > maxColSize) {
      tributeDie = treasurePool.splice(maxColSize)[0] //get the last of the list
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else if (size == 6 || size == 12) {
    foePool.unshift(size + "-" + roll);
    animateDice("3,1", size, roll);//animate the newly added die in second column, 4th row
    if (foePool.length > maxColSize) {
      tributeDie = foePool.splice(maxColSize)[0]
      gainTribute(parseInt(tributeDie.split("-")[1])) //remove the die size
    }
  } else {
    obstaclePool.unshift(size + "-" + roll);
    animateDice("3,2", size, roll); //animate the newly added die in third column, 4th row
    if (obstaclePool.length > maxColSize) {
      tributeDie = obstaclePool.splice(maxColSize)[0]
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

    //animation stuff
    if (enableEffects) {
      var duration = 1000;
      const colors = ["lightgreen", "lightred", "lightseagreen", "lightskyblue", "lightcoral", "orange", "darkmagenta", "yellow", "white"];
      let startTimestamp = null;
      var lastProgress = 0;
      var table = document.getElementById("powerBanks");
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        checkProgress = progress;
        if (checkProgress - lastProgress > .1) { //only animate every .1 seconds
          lastProgress = checkProgress;
          for (var r = 0; r < table.rows.length; r++) { //go through each row
            for (var c = 0; c < table.rows[r].cells.length; c++) { //go through each cell
              table.rows[r].cells[c].firstChild.style.color = colors[getRandomInt(0, colors.length)]; //set the color of the button
            }
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
      target.innerHTML = "TOTAL OVERPOWER: <span style=\"color:lightcoral;\">" + Math.floor(progress * (end - start) + start) + "</span>";
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

function animateDice(cellLocation, dieSize, value) {
  if (enableEffects) {
    var start = 0;
    var end = value;
    var duration = 1000;
    var row = cellLocation.split(",")[0]//the row
    var col = cellLocation.split(",")[1]//the col
    const target = document.getElementById("powerBanks").rows[row].cells[col];//make sure this matches the id of the row
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerHTML = "<button class=\"d" + dieSize + " dicierHeavy\">" + Math.floor(progress * (end - start) + start) + "_ON_D" + dieSize + "</button>";
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
  var table = document.getElementById("powerBanks");

  for (var i = 0; i < maxColSize; i++) {
    if (i < treasurePool.length) {
      dieSize = treasurePool[i].split("-")[0];
      dieValue = treasurePool[i].split("-")[1];
      //subtract from 3 to reverse the order
      table.rows[3-i].cells[0].innerHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      table.rows[3-i].cells[0].innerHTML = "<p class=\"dicierDark\">⇡</p>";
    }
  

    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];
      table.rows[3-i].cells[1].innerHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      table.rows[3-i].cells[1].innerHTML = "<p class=\"dicierDark\">⇡</p>";
    }
  

    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];
      table.rows[3-i].cells[2].innerHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>";
    } else {
      table.rows[3-i].cells[2].innerHTML = "<p class=\"dicierDark\">⇡</p>";
    }
  }

  if (tribute >= 10) {
    document.getElementById('rerollButton').innerHTML = "<a onclick=\"rerollDice();return false;\">REROLL FOR 10 OVERPOWER</a>";
    document.getElementById('rerollButton').style.display = "initial";
  } else {
    document.getElementById('rerollButton').style.display = "none";
  }

  document.getElementById('tributeScore').innerHTML = "TOTAL OVERPOWER: <span class=\"dtribute\">" + tribute + "</span>";

  urlString = "?treasure=" + encodeURI(treasurePool.toString()) +
    "&foe=" + encodeURI(foePool.toString()) +
    "&obstacle=" + encodeURI(obstaclePool.toString()) +
    "&overpower=" + tribute;

  window.history.replaceState(null, null, urlString);
  // console.log("Treasure Pool = " + treasurePool.toString());
  // console.log("Foe Pool = " + foePool.toString());
  // console.log("Obstacle Pool = " + obstaclePool.toString());
}

grabParamsURL();
