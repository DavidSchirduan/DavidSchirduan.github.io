//setup the pools and vars
//dice are notated: 4-1 for a d4 showing 1. 20-13 for a d20 showing 13
treasurePool = [];
foePool = [];
obstaclePool = [];

enableEffects = false;

maxTreasure = 4;
maxFoes = 4;
maxObstacles = 4;

tribute = 0;

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
  enableEffects = !enableEffects;
  document.getElementById('tributeScore').classList.toggle('crt');
  document.getElementById('treasureCore').classList.toggle('crt');
  document.getElementById('foeCore').classList.toggle('crt');
  document.getElementById('obstacleCore').classList.toggle('crt');
  document.getElementById('handfulGain').classList.toggle('crt');
  document.getElementById('weakGain').classList.toggle('crt');
  document.getElementById('obstacleGain').classList.toggle('crt');
  document.getElementById('magicGain').classList.toggle('crt');
  document.getElementById('strongGain').classList.toggle('crt');
  document.getElementById('areaGain').classList.toggle('crt');
  document.getElementById('rerollButton').classList.toggle('crt');
  //document.getElementById('bookmarkButton').classList.toggle('crt');
  document.getElementById('crtButton').classList.toggle('crt');
  //document.getElementById('scanner').classList.toggle('crt');
  //document.getElementById('sampler').classList.toggle('crt');
  //document.getElementById('explorer').classList.toggle('crt');
}
//toggleCRT(); //start enabled

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

    if (enableEffects) {

      var duration = 1000;
      const tchildren = document.getElementById("treasureCore").children;//make sure this matches the id of the row
      const fchildren = document.getElementById("foeCore").children;//make sure this matches the id of the row
      const ochildren = document.getElementById("obstacleCore").children;//make sure this matches the id of the row
      const colors = ["lightgree", "lightred", "lightseagreen", "lightskyblue", "lightcoral", "orange", "darkmagenta", "yellow", "white"];
      let startTimestamp = null;
      var lastProgress = 0;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        console.log(progress);
        checkProgress = progress;
        if (checkProgress-lastProgress> .1 ){ //only animate every .1 seconds
          lastProgress = checkProgress;
          for (var i=0;i<tchildren.length;i++){
            tchildren[i].style.color = colors[getRandomInt(0,colors.length)];
          }
          for (var i=0;i<fchildren.length;i++){
            fchildren[i].style.color = colors[getRandomInt(0,colors.length)];
          }
          for (var i=0;i<ochildren.length;i++){
            ochildren[i].style.color = colors[getRandomInt(0,colors.length)];
          }
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

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
    renderPools
  }
}

//render the pools & tribute score
function renderPools() {

  treasureHTML = "";
  for (var i = 0; i < maxTreasure; i++) {
    if (i < treasurePool.length) {
      dieSize = treasurePool[i].split("-")[0];
      dieValue = treasurePool[i].split("-")[1];
        treasureHTML = "<button onclick=\"spendTreasure(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + treasureHTML;
    } else {
      treasureHTML = "<button class=\"dicierDark\">⇡⇡⇡</button>\n" + treasureHTML;
    }
  }

  foeHTML = "";
  for (var i = 0; i < maxFoes; i++) {
    if (i < foePool.length) {
      dieSize = foePool[i].split("-")[0];
      dieValue = foePool[i].split("-")[1];
      foeHTML = "<button onclick=\"spendFoe(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + foeHTML;
    } else {
      foeHTML = "<button class=\"dicierDark\">⇡⇡⇡</button>\n" + foeHTML;
  }
}

  obstacleHTML = "";
  for (var i = 0; i < maxObstacles; i++) {
    if (i < obstaclePool.length) {
      dieSize = obstaclePool[i].split("-")[0];
      dieValue = obstaclePool[i].split("-")[1];
      obstacleHTML = "<button onclick=\"spendObstacle(" + i + ")\" class=\"d" + dieSize + " dicierHeavy\">" + dieValue + "_ON_D" + dieSize + "</button>\n" + obstacleHTML;
    } else {
      obstacleHTML = "<button class=\"dicierDark\">⇡⇡⇡</button>\n" + obstacleHTML;
    }
  }

  if (tribute >= 10) {
    document.getElementById('rerollButton').innerHTML = "<a onclick=\"rerollDice();return false;\">REROLL FOR 10 OVERPOWER</a>";
    document.getElementById('rerollButton').style.display="initial";
  } else {
    document.getElementById('rerollButton').style.display="none";
  }
 
  document.getElementById('treasureCore').innerHTML = treasureHTML;
  document.getElementById('foeCore').innerHTML = foeHTML;
  document.getElementById('obstacleCore').innerHTML = obstacleHTML;

  document.getElementById('tributeScore').innerHTML = "TOTAL OVERPOWER: <span class=\"dtribute\">" + tribute + "</span>";
  
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
