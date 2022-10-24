//get the json file and parse it
fetch('/assets/generator_resources/cess.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        cess = data;
        generateIntersection();
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

allDistricts = ["Cobblestone", "Cultivist", "Foundry", "Archivist"]
var district1; //First of the two districts
var district2; //Second, can be same as first

function selectRandom(jsonList) {
  result = jsonList[Math.floor(Math.random() * jsonList.length)];
  return result;
}

function generateIntersection() {

  intersectionJSON = buildIntersection();

  //Streets
  document.getElementById("street1").innerHTML = "<h3><span style=\"color:purple;\">" + intersectionJSON.Street1.Name + "</span></h3><p>" + intersectionJSON.Street1.Appearance + "</p>";
  document.getElementById("street2").innerHTML = "<h3><span style=\"color:orange;\">" + intersectionJSON.Street2.Name + "</span></h3><p>" + intersectionJSON.Street2.Appearance + "</p>";

  //Set the map
  document.getElementById("mapIMG").innerHTML = "<img src=\"/images/CessMaps/" + (Math.floor(Math.random() * 6) + 1) + ".png\">";

  //describe block
  document.getElementById("blockDetails").innerText = "This block is currently suffering from " + intersectionJSON.Issue[0] + ". " + intersectionJSON.Issue[1];

  //Blue Shop
  document.getElementById("blueBlock").innerHTML = intersectionJSON.Shop1;

  //Green Shop
  document.getElementById("greenBlock").innerHTML = intersectionJSON.Shop2;

  //Red Block
  document.getElementById("redBlock").innerHTML =
    "<h3>" + intersectionJSON.Location1[0] + "</h3>" +
    "<p>" + intersectionJSON.Location1[1] + "</p>";
  //Yellow Block
  document.getElementById("yellowBlock").innerHTML =
    "<h3>" + intersectionJSON.Location2[0] + "</h3>" +
    "<p>" + intersectionJSON.Location2[1] + "</p>";
}

function generateNPC() {
  var npc;
  if (Math.random() < .5) { //pick between two districts
    npc = createNPC(district1);
  } else {
    npc = createNPC(district2);
  }

  npcHTML = "<h3>" + npc.Name + "</h3><p>A talented " + npc.Job + ". ";

  if (npc.Appearance != "") {
    npcHTML = npcHTML + "They look " + npc.Appearance + ". ";
  }

  if (npc.Mannerism != "") {
    npcHTML = npcHTML + "They are " + npc.Mannerism + ". ";
  }

  npcHTML = npcHTML + npc.Quirk;

  if (npc.Faction != "") {
    npcHTML = npcHTML + "They are part of " + npc.Faction + ". ";
  }

  npcHTML = npcHTML + "</p><p>";

  if (npc.Mod != "") {
    npcHTML = npcHTML + "<p>" + npc.Mod + "</p>";
  }

  if (npc.Spell != "") {
    npcHTML = npcHTML + "<p>They know the following spell, and may be willing to teach it: " + npc.Spell + "</p>";
  }

  if (npc.Items.length > 0) {
    itemText = "<p><strong>Inventory:</strong><ul>";
    for (item in npc.Items) {
      itemText = itemText + "<li>" + npc.Items[item] + "</li>";
    }
    itemText = itemText + "</ul></p>";
    npcHTML = npcHTML + itemText;
  }

  document.getElementById("randBtn").innerHTML = npcHTML;
}

function buildIntersection() {
  district1 = selectRandom(allDistricts);
  district2 = selectRandom(allDistricts);

  console.log("Dis1: " + district1 + " Dis2: " + district2);

  let Intersectionobj = {
    "Issue": selectRandom(cess[district1].Issues.concat(cess[district2].Issues)),
    "Feature": selectRandom(cess[district1].Features.concat(cess[district2].Features)),
    "Street1": paveStreet(district1),
    "Street2": paveStreet(district2),
    "Shop1": createShop(district1),
    "Shop2": createShop(district2),
    "Location1": selectRandom(cess.General.Locations),
    "Location2": selectRandom(cess.General.Locations)
  }

  return Intersectionobj;
}

function createNPC(dist) {

  let NPCobj = {
    "Name": selectRandom(cess[dist].NPCNames),
    "Job": selectRandom(cess[dist].NPCJobs),
    "Quirk": selectRandom(cess[dist].NPCQuirks),
    "Appearance": "",
    "Mannerism": "",
    "Faction": "",
    "Mod": "",
    "Items": [],
    "Spell": ""
  }

  if (Math.random() < .15) { //15% chance to belong to a faction
    NPCobj["Faction"] = selectRandom(cess[dist].Factions);
  }

  if (Math.random() < .25) { //25% chance to have appearance
    NPCobj["Appearance"] = selectRandom(cess.General.NPCAppearances);
  }

  if (Math.random() < .25) { //25% chance to have a mannerism
    NPCobj["Mannerism"] = selectRandom(cess.General.NPCMannerisms);
  }

  //Chance to have a boon, bane, or disease
  randMod = Math.random();
  if (randMod < .2) {
    disease = selectRandom(cess.General.Diseases);
    NPCobj["Mod"] = "They are infected with " + disease[0] + ": " + disease[1];
  } else if (randMod < .4) {
    NPCobj["Mod"] = "The city has changed them, granting " + selectRandom(cess[dist].Changes);
  } else if (randMod < .6) {
    NPCobj["Mod"] = "The city has changed them, granting " + selectRandom(cess[dist].Boons);
  }

  //chances up to 3 items
  if (Math.random() < .5) {
    NPCobj["Items"].push(selectRandom(cess[dist].Items))
  }
  if (Math.random() < .5) {
    NPCobj["Items"].push(selectRandom(cess[dist].Items))
  }
  if (Math.random() < .5) {
    NPCobj["Items"].push(selectRandom(cess[dist].Items))
  }
  if (dist != "Cobblestone") {
    if (Math.random() < .5) {
      NPCobj["Items"].push("(Contraband) " + selectRandom(cess[dist].Contraband))
    }
  }

  //Chance to know a Spell
  if (Math.random() < .5) {
    NPCobj["Spell"] = (selectRandom(cess.General.Spells));
  }

  return NPCobj;
}

function paveStreet(dist) {

  let StreetObj = {
    "Name": null,
    "Appearance": selectRandom(cess[dist].StreetAppearances)
  }

  if (dist == "Cobblestone") { //more variety
    StreetObj["Name"] = selectRandom(cess[dist].StreetPrefixes) + " " + selectRandom(cess[dist].StreetSuffixes);
  } else {
    StreetObj["Name"] = selectRandom(cess[dist].StreetNames);
  }

  return StreetObj;
}

function createShop(dist) {
  let ShopObj = {
    "Name": selectRandom(cess[dist].ShopNames),
    "Quirk": selectRandom(cess[dist].ShopQuirks),
    "Keep": createNPC(dist),
    "Contraband": [],
    "Artifacts": [],
    "Reputation": "",
    "Items": []
  }

  //Chance for contraband (no cobblestone contraband)
  if (dist != "Cobblestone") {
    if (Math.random() < .75) {
      ShopObj["Contraband"].push(cess[dist].Contraband)
    }
  }

  //Items sold
  for (let i = 0; i < 10; i++) {
    if (Math.random() < .5) {
      ShopObj["Items"].push(selectRandom(cess[dist].Items))
    }
  }

  //Chance for artifact
  if (Math.random() < .75) {
    ShopObj["Artifacts"].push(selectRandom(cess[dist].Artifacts))
  }

  //Chance for reputation
  if (Math.random() > .5) {
    ShopObj["Reputation"].concat(selectRandom(cess.General.ShopReputations))
  }

  //To String
  ShopHTML = "<h3>" + ShopObj.Name + "</h3>" + "<p>" + ShopObj.Quirk;
  if (ShopObj.Reputation != "") {
    ShopHTML = ShopHTML + ShopObj.Reputation;
  }
  ShopHTML = ShopHTML + "</p>";

  ShopHTML = ShopHTML + "<p><strong>Shopkeep</strong>: " + ShopObj.Keep.Name + ". " + ShopObj.Keep.Quirk + "</p>";

  itemText = "<p><strong>Inventory</strong>:<ul>";
  for (item in ShopObj.Items) {
    itemText = itemText + "<li>" + ShopObj.Items[item] + "</li>";
  }
  for (cont in ShopObj.Contraband) {
    itemText = itemText + "<li><strong>Contraband: </strong>" + ShopObj.Contraband[cont][0] + ". " + ShopObj.Contraband[cont][1] + "</li>";
  }
  for (arts in ShopObj.Artifacts) {
    itemText = itemText + "<li><strong>Artifact: </strong>" + ShopObj.Artifacts[arts][0] + ". " + ShopObj.Artifacts[arts][1] + "</li>";
  }
  itemText = itemText + "</ul></p>";

  ShopHTML = ShopHTML + itemText;

  return ShopHTML;
}

function randEncounter() {
  //pull from both district encounters AND general encounters
  //first element is the name, second element randomly picks the mood.
  enc = selectRandom(cess[district1].Encounters.concat(cess[district2].Encounters, cess.General.Encounters))
  document.getElementById("randBtn").innerHTML = "<p><strong>" + enc.shift() + "</strong></p><p>Mood: " + selectRandom(enc) + "</p>";
}