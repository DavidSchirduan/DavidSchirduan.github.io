function grabParamsURL(){
  //if someone is loading a character code
  if (window.location.search != ""){
    console.log("Seed:" + window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('name')){
      //populate the generator with the saved info
      tl_generate(decodeURI(urlParams.get('name')));
    } else {
      console.log("invalid code, using new code");
    }
  } else {
    console.log("no params, using new code");
  }
}

//setup the pools and vars
d4s = [];
maxd4 = 4;

d6s = [];
maxd6 = 4;

d8s = [];
maxd8 = 4;

d10s = [];
maxd10 = 4;

d12s = [];
maxd12 = 4;

d20s = [];
maxd20 = 4;

rerolls = 3;
maxrerolls = 3;

tribute = 0;

// Gaining dice for the pool
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function gainD4(){
  d4s.unshift(getRandomArbitrary(1,4))
  if (d4s.length > maxd4) {
    tribute = tribute + d4s.splice(maxd4)[0]
  }
renderPools()
}

function gainD6(){
    d6s.unshift(getRandomArbitrary(1,6))
    if (d6s.length > maxd6) {
      tribute = tribute + d6s.splice(maxd6)[0]
    }
  renderPools()
}

function gainD8(){
  d8s.unshift(getRandomArbitrary(1,8))
  if (d8s.length > maxd8) {
    tribute = tribute + d8s.splice(maxd8)[0]
  }
renderPools()
}

function gainD10(){
  d10s.unshift(getRandomArbitrary(1,10))
  if (d10s.length > maxd10) {
    tribute = tribute + d10s.splice(maxd10)[0]
  }
renderPools()
}

function gainD12(){
  d12s.unshift(getRandomArbitrary(1,12))
  if (d12s.length > maxd12) {
    tribute = tribute + d12s.splice(maxd12)[0]
  }
renderPools()
}

function gainD20(){
  d20s.unshift(getRandomArbitrary(1,20))
  if (d20s.length > maxd20) {
    tribute = tribute + d20s.splice(maxd20)[0]
  }
renderPools()
}

//Spend Dice by clicking
function spendD4(index){
  d4s.splice(index, 1);
  renderPools();
}

function spendD6(index){
  d6s.splice(index, 1);
  renderPools();
}

function spendD8(index){
  d8s.splice(index, 1);
  renderPools();
}

function spendD10(index){
  d10s.splice(index, 1);
  renderPools();
}

function spendD12(index){
  d12s.splice(index, 1);
  renderPools();
}

function spendD20(index){
  d20s.splice(index, 1);
  renderPools();
}

//Reroll all dice
function rerollDice(){
  if (rerolls > 0){
  rerolls = rerolls - 1;

  oldD4s = d4s;
  oldD6s = d6s;
  oldD8s = d8s;
  oldD10s = d10s;
  oldD12s = d12s;
  oldD20s = d20s;

  d4s = [];
  d6s = [];
  d8s = [];
  d10s = [];
  d12s = [];
  d20s = [];

  oldD4s.forEach(gainD4);
  oldD6s.forEach(gainD6);
  oldD8s.forEach(gainD8);
  oldD10s.forEach(gainD10);
  oldD12s.forEach(gainD12);
  oldD20s.forEach(gainD20);

  renderPools();
  }
}

//render the pools & tribute score
function renderPools(){

  d4HTML = "";
  for (i=0; i<maxd4; i++){
    if (i < d4s.length){
      d4HTML = "<button onclick=\"spendD4("+i+")\" class=\"dicierHeavy\">"+d4s[i]+"_ON_D4</button>\n" + d4HTML;
    } else {
      d4HTML = "<button class=\"dicierDark\">0_ON_D4</button>\n" + d4HTML;
    }
  }
  d4HTML = "<div class=\"d4 col-2\">" + d4HTML + "</div>";

  d6HTML = "";
  for (i=0; i<maxd6; i++){
    if (i < d6s.length){
      d6HTML = "<button onclick=\"spendD6("+i+")\" class=\"dicierHeavy\">"+d6s[i]+"_ON_D6</button>\n" + d6HTML;
    } else {
      d6HTML = "<button class=\"dicierDark\">0_ON_D6</button>\n" + d6HTML;
    }
  }
  d6HTML = "<div class=\"d6 col-2\">" + d6HTML + "</div>";

  d8HTML = "";
  for (i=0; i<maxd8; i++){
    if (i < d8s.length){
      d8HTML = "<button onclick=\"spendD8("+i+")\" class=\"dicierHeavy\">"+d8s[i]+"_ON_D8</button>\n" + d8HTML;
    } else {
      d8HTML = "<button class=\"dicierDark\">0_ON_D8</button>\n" + d8HTML;
    }
  }
  d8HTML = "<div class=\"d8 col-2\">" + d8HTML + "</div>";

  d10HTML = "";
  for (i=0; i<maxd10; i++){
    if (i < d10s.length){
      d10HTML = "<button onclick=\"spendD10("+i+")\" class=\"dicierHeavy\">"+d10s[i]+"_ON_D10</button>\n" + d10HTML;
    } else {
      d10HTML = "<button class=\"dicierDark\">0_ON_D10</button>\n" + d10HTML;
    }
  }
  d10HTML = "<div class=\"d10 col-2\">" + d10HTML + "</div>";

  d12HTML = "";
  for (i=0; i<maxd12; i++){
    if (i < d12s.length){
      d12HTML = "<button onclick=\"spendD12("+i+")\" class=\"dicierHeavy\">"+d12s[i]+"_ON_D12</button>\n" + d12HTML;
    } else {
      d12HTML = "<button class=\"dicierDark\">0_ON_D12</button>\n" + d12HTML;
    }
  }
  d12HTML = "<div class=\"d12 col-2\">" + d12HTML + "</div>";

  d20HTML = "";
  for (i=0; i<maxd20; i++){
    if (i < d20s.length){
      d20HTML = "<button onclick=\"spendD20("+i+")\" class=\"dicierHeavy\">"+d20s[i]+"_ON_D20</button>\n" + d20HTML;
    } else {
      d20HTML = "<button class=\"dicierDark\">0_ON_D20</button>\n" + d20HTML;
    }
  }
  d20HTML = "<div class=\"d20 col-2\">" + d20HTML + "</div>";

  rerollHTML = "REROLLS: ";
  if (rerolls > 0){
    for (i=0;i<rerolls;i++){
      rerollHTML = rerollHTML + " [X]";
   }
  } else {
    rerollHTML = "NO REROLLS REMAINING";
  }

  console.log(d4s.toString());
  document.getElementById('overpool').innerHTML = d4HTML+d6HTML+d8HTML+d10HTML+d12HTML+d20HTML;
  document.getElementById('rerollButton').innerHTML = rerollHTML;
  document.getElementById('tributeButton').innerHTML = "<span style=\"color:red;\">END GAME</span><br>TRIBUTE: "+ tribute;
}

//Start the game!
gainD4();
gainD6();
gainD8();
gainD10();
gainD12();
gainD20();