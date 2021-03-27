//get the json file and parse it
fetch('/assets/generator_resources/troika.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        troika = data;
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var seedCode = "abc123";
var mode = "chaos";
var tr_CHARname = "";
var tr_allColors = [ "Crimson","Purple","Gold", "Lime", "Teal", "Honeydew", "Coral", "Silver", "Fuchsia", "Orange",   "Olive", "Green", "Blue", "Yellow", "Maroon", "Navy", "Indigo", "Tomato",  "Tan",  "Brown"];
var tr_degrees = 0;
var tr_background;
var tr_card = document.getElementById('troikacardsides');

function grabParamsURL() {
  //if someone is loading a character code
  if (window.location.search != "") {
    console.log(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('code') && urlParams.get('mode')) {
      //populate the generator with the saved info
      tr_generate(urlParams.get('mode'), urlParams.get('code'));
    } else {
      console.log("invalid code, using new code");
    }
  } else {
    console.log("no params, using new code");
  }
}

function tr_generate(mode, oldSeed) {

  //create a new code if we don't have one
  if (!oldSeed){
    seedCode = (Math.random()*1e32).toString(36);
  } else {
    seedCode = oldSeed;
  }
  myrng = new Math.seedrandom(seedCode);

  skill = Math.floor(myrng() * 3) + 4;
  stamina = Math.floor(myrng() * 6) + Math.floor(myrng() * 6) + 14;
  luck = Math.floor(myrng() * 6) + 7;

  if (mode == "core"){
    tr_background = troika.Backgrounds[Math.floor(myrng() * 36)];
  } else {
    tr_background = troika.Backgrounds[Math.floor(myrng() * troika.Backgrounds.length)];
  }

  tr_CHARname = tr_background.Name;
  document.getElementById("bgName").innerHTML = tr_CHARname;
  document.getElementById("bgSrc").innerHTML = tr_background.Source + " Consider supporting this creator!";

  provisions = ["2d6 Silver Pence", "Knife (DMG 2, 2, 2, 2, 4, 8, 10)", "Lantern & flask of oil", "Rucksack", "6 Provisions"];
  descrip = "<h3 class=\"tightSpacing\">Description</h3>" + tr_background.Text + "<hr class=\"tightSpacing\">";
  skilltxt = "<h3 class=\"tightSpacing\">Advanced Skills & Spells</h3><ul>";
  for (s in tr_background.Skills) {
    skilltxt = skilltxt + "<li>" + tr_background.Skills[s] + "</li>";
  }

  descrip = descrip + skilltxt + "</ul>";

  if (tr_background.Special != "") {
    descrip = descrip + "<h3 class=\"tightSpacing\">Special</h3><p>" + tr_background.Special + "</p>";
  }

  document.getElementById("descr").innerHTML = descrip;

  poss = tr_background.Possessions;
  provisions = poss.concat(provisions);

  startingItems = "<h2 class=\"tightSpacing\">Stamina: " + stamina + "</h2>" +
    "<h2 class=\"tightSpacing\">Luck: " + luck + "</h2>" +
    "<h2 class=\"tightSpacing\">Skill: " + skill + "</h2><hr class=\"tightSpacing\">";

  startingItems = startingItems + "<h3 class=\"tightSpacing\">Possessions</h3><p>Each item takes up one slot unless otherwise specified.</p><ul>";
  for (p in provisions) {
    startingItems = startingItems + "<li>" + provisions[p] + "</li>"
  }
  startingItems = startingItems + "</ul>";

  document.getElementById("poss").innerHTML = startingItems;
  document.getElementById("charCard").style = "";
  document.getElementById("turnCard").style = "display:none";

  //set the url to match the current code
  document.title = tr_CHARname; 
  window.history.replaceState(null, null, "?mode="+mode+"&code="+seedCode);
  document.getElementById("saveCharacter").innerHTML = "<i>Bookmark this page to save your character, or <a href=\"" + window.location.href + "\"> copy this link</a>.</i>";
}

function tr_showTracker() {
  document.getElementById("turnCard").style = "";
  document.getElementById("charCard").style = "display:none";
}

function tr_newRound() {

  if (document.getElementById("newRoundbtn").innerText == "Start Round") {
    //hide spinners, change buttons, etc
    document.getElementById("newRoundbtn").innerText = "New Round";
    document.getElementById("nextTurnbtn").style = "";
    document.getElementById("spinners").style = "display:none;";
    document.getElementById("turnInfo").style = "margin:20px;";
    allTokens = [];
    turnNumber = 0;
    roundEnd = true;
    turnText = "";
    document.getElementById("turnList").innerHTML = turnText;
    tr_flipCard("New Round");
  } else {
    document.getElementById("newRoundbtn").innerText = "Start Round";
    document.getElementById("nextTurnbtn").style = "display:none;";
    document.getElementById("spinners").style = "text-align:center;";
    document.getElementById("turnInfo").style = "display:none;";
    tr_flipCard("New Round");
  }

  var numPCs = document.getElementById("turnPC").value;
  if (numPCs > 20){
    numPCs = 20;
  }
  var numHenchmen = document.getElementById("turnHench").value;
  var numEnemy = document.getElementById("turnEnemy").value;
  roundEnd = false;

  allTokens = [];

  var showColors = [];

  for (var i = 0; i < numPCs; i++) {
    showColors.push(tr_allColors[i]);
    /*Add twice for each player*/
    allTokens.push(tr_allColors[i]);
    allTokens.push(tr_allColors[i]);
  }

  for (var i = 0; i < numHenchmen; i++) {
    allTokens.push("Henchmen");
  }

  for (var i = 0; i < numEnemy; i++) {
    allTokens.push("Enemy");
  }

  allTokens.push("End Round");

  colorText = "<h3 class=\"tightSpacing\">Assign Each Player a Color:</h3><p>" + showColors.join(", ") + "</p>";

  document.getElementById("tokenList").innerHTML = colorText;
  tr_countTokens();
}

function tr_nextTurn() {
  if (!roundEnd) {
    var grabToken = allTokens.splice(Math.floor(myrng() * allTokens.length), 1)[0];
    tr_flipCard(grabToken);

    tr_countTokens();

    if (grabToken == "End Round") {
      roundEnd = true;
    }
  }
}

function tr_flipCard(token) {
  var currentToken = token;
  turnText = document.getElementById("turnList").innerHTML;
  var bgImage, cardTxt, bgColor;
  turnNumber = turnNumber + 1;

  if (turnNumber > 10) {
    document.getElementById("turnList").style = "margin: unset;columns:2;"
  } else {
    document.getElementById("turnList").style = "margin: unset;"
  }

  switch (currentToken) {
    case ("Enemy"):
      //flip a full 360
      tr_degrees = tr_degrees + 180;
      bgImage = "url('/images/troika_enemy.png')";
      cardTxt = "Any<br>Enemy";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Enemy" +
        "</p>" + turnText;
      break;

    case ("Henchmen"):
            //flip a full 360
      tr_degrees = tr_degrees + 180;
      bgImage = "url('/images/troika_henchling.png')";
      cardTxt = "Henchling";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Henchling" +
        "</p>" + turnText;
      break;

    case ("New Round"):
            //flip just flip 180
      turnNumber = 0;
      bgImage = "url('/images/troika_end_of_round.png')";
      cardTxt = "New<br>Round";
      bgColor = "white";
      turnText = "<p style=\"margin: unset;\"><strong>0. New Round</strong></p>";
      break;

    case ("End Round"):
      //flip just flip 180
      tr_degrees = tr_degrees + 180;
      bgImage = "url('/images/troika_end_of_round.png')";
      cardTxt = "End of<br>Round";
      bgColor = "white";
      turnText = "<p style=\"margin: unset;\"><strong>" + turnNumber + ". End Round" + "</strong></p>" + turnText;
      break;

    default:
      tr_degrees = tr_degrees + 180;
      bgImage = "url('/images/troika_characters.png')";
      cardTxt = currentToken + "<br>Player";
      bgColor = currentToken;
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". " + currentToken + " Player" + "</p>" + turnText;
  }

  tr_card.style.webkitTransform = "rotateY(" + tr_degrees + "deg)";

  tr_degrees = tr_degrees + 180;
  document.getElementById("turnList").innerHTML = turnText;

  //wait for tr_card to finish spinning before you spin it back
  tr_card.ontransitionend = function(){
    document.getElementById('troikacardback').style.backgroundColor = bgColor;
    document.getElementById('troikacardback').style.backgroundImage = bgImage;
    document.getElementById('troikacardback').style.backgroundSize = "contain";
    document.getElementById("backText").innerHTML = cardTxt;
    tr_card.style.webkitTransform = "rotateY(" + tr_degrees + "deg)";
  }
}

function tr_countTokens() {

  var countPCs = 0;
  var countHenchmen = 0;
  var countEnemies = 0;
  var countEnd = 0;

  for (i in allTokens) {

    switch (allTokens[i]) {
      case ("Enemy"):
        countEnemies++;
        break;
      case ("Henchmen"):
        countHenchmen++;
        break;
      case ("End Round"):
        countEnd++;
        break;
      default:
        countPCs++;
    }
  }

  tokenText = colorText + "<h3 class=\"tightSpacing\">Cards Remaining:</h3><p><ul>";

  if (countPCs > 0) {
    tokenText = tokenText + "<li>" + (countPCs) + " Player cards</li>";
  }
  if (countHenchmen > 0) {
    tokenText = tokenText + "<li>" + (countHenchmen) + " Henchmen cards</li>";
  }
  if (countEnemies > 0) {
    tokenText = tokenText + "<li>" + (countEnemies) + " Enemy cards</li>";
  }
  if (countEnd > 0) {
    tokenText = tokenText + "<li>" + (countEnd) + " End Round cards</li>";
  }
  document.getElementById("tokenList").innerHTML = tokenText + "</ul>";
}

