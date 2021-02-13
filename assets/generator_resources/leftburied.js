//get the json file and parse it
fetch('/assets/generator_resources/leftburied.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        blb = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

var blb_CHARname = "Test";

function blb_generate() {
  blb_CHARname = blb.LeftBuried.Names[Math.floor(Math.random() * blb.LeftBuried.Names.length)];
  var name = blb_CHARname;
  document.getElementById("charName").innerHTML = "Name: " + name;

  var stats = blb.LeftBuried.Stats[Math.floor(Math.random() * blb.LeftBuried.Stats.length)];
  document.getElementById("charBR").innerHTML = "+" + stats[0] + " Brawn";
  document.getElementById("charWIT").innerHTML = "+" + stats[1] + " Wit";
  document.getElementById("charWILL").innerHTML = "+" + stats[2] + " Will";

  var vigour = parseInt(stats[0], 10) + 6;
  var grip = parseInt(stats[2], 10) + 4;
  document.getElementById("charGRI").innerHTML = "Grip: " + grip;
  document.getElementById("charVIG").innerHTML = "Vigour: " + vigour;

  var career = blb.LeftBuried.Careers[Math.floor(Math.random() * blb.LeftBuried.Careers.length)];
  document.getElementById("charCareer").innerHTML = "You used to be " + career + ", but it didn't pan out...";

  var archs = Object.keys(blb.LeftBuried.Archetypes);
  var archetype = archs[Math.floor(Math.random() * archs.length)];
  var advs = blb.LeftBuried.Archetypes[archetype];
  var advancement = advs[Math.floor(Math.random() * advs.length)];
  console.log(advancement);
  var advancementText = blb.LeftBuried.Advancements[advancement];
  document.getElementById("charARCH").innerHTML = archetype;
  document.getElementById("archText").innerHTML = "<strong>" + advancement + ":</strong><br>" + advancementText;


  var weapon1 = "weapon";
  var weapon2 = "weapon";

  switch (true) {
    case (stats[0] > stats[1] && stats[0] > stats[2]):
      weapontype = "Brawn";
      equip1type = "Brawn";
      equip2type = "Brawn";      
      break;
    case (stats[1] > stats[0] && stats[1] > stats[2]):
      weapontype = "Wit";
      equip1type = "Wit";
      equip2type = "Wit";
      break;
    case (stats[2] > stats[1] && stats[2] > stats[0]):
      weapontype = "Will";
      equip1type = "Will";
      equip2type = "Will";
      break;
  }


  while (weapon1 == weapon2) {
    weapon1 = blb.LeftBuried.Weapons[weapontype][Math.floor(Math.random() * blb.LeftBuried.Weapons[weapontype].length)];
    weapon2 = blb.LeftBuried.Weapons[weapontype][Math.floor(Math.random() * blb.LeftBuried.Weapons[weapontype].length)];
  }

  var equip1 = blb.LeftBuried.Equipment[equip1type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip1type].length)];
  var equip2 = blb.LeftBuried.Equipment[equip2type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip2type].length)];
  var equip3type = Object.keys(blb.LeftBuried.Equipment)[Math.floor(Math.random() * Object.keys(blb.LeftBuried.Equipment).length)];
  var equip3 = blb.LeftBuried.Equipment[equip3type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip3type].length)];

  document.getElementById("charItems").innerHTML = "<ul>" +
    "<li>50 Ft Rope</li><li>3 Torches</li><li>Backpack</li><li>Bedroll</li><li>A week of Rations</li><li>Basic armour  (Increases attacker's target score by 1)</li>" +
    "<li>" + equip1 + "</li>" +
    "<li>" + equip2 + "</li>" +
    "<li>" + equip3 + "</li>" + 
        "<li>" + weapon1 + "</li>" +
          "<li>" + weapon2 + "</li></ul>";


  document.getElementById("leftburiedCard").style = "display:block";
}

function blb_saveCharacterIMG() {
  document.getElementById("downloadBTN").style = "display:none;";
  imageName = blb_CHARname;
  window.scrollTo(window.pageXOffset, 0);
  var container = document.getElementById("leftburiedCard");
  useWidth = container.offsetWidth;
  useHeight = container.offsetHeight;
  html2canvas(container, {
    allowTaint: true,
    width: useWidth,
    height: useHeight,
    scale: 2,
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "blb-" + imageName.replace(/ /g, "-") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.target = '_blank';
    link.click();
  });
  document.getElementById("downloadBTN").style = "display:initial;";
}