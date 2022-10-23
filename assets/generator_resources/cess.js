//get the json file and parse it
fetch('/assets/generator_resources/cess.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        cess = data;
        grabParamsURL();
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

allDistricts = ["Cobblestone", "Cultivist", "Foundry", "Archivist"]
var district1; //First of the two districts
var district2; //Second, can be same as first

function selectRandom(jsonList) {
  result = jsonList[Math.floor(Math.random() * jsonList.length)];
  return result;
}

function buildIntersection(){
  district1 = selectRandom(allDistricts);
  district2 = selectRandom(allDistricts);
  
  let Intersectionobj = {
    issue: selectRandom(cess[district1].Issues.concat(cess[district2].Issues)),
    feature: selectRandom(cess[district1].Features.concat(cess[district2].Features)),
    street1: paveStreet(district1),
    street2: paveStreet(district2),
    shop1: createShop(district1),
    shop2: createShop(district2),
    location1: selectRandom(cess.General.Locations),
    location2: selectRandom(cess.General.Locations)
  }

  return Intersectionobj;
}

function createNPC(dist){

  let NPCobj = {
    Name: selectRandom(cess[dist].NPCNames),
    Job: selectRandom(cess[dist].NPCJobs),
    Quirk: selectRandom(cess[dist].NPCQuirk),
    Appearance: null,
    Mannerism: null,
    Faction: null,
    Disease: null,
    Change: null,
    Boon: null,
    Items: [],
    Spell: null
  }

  if (Math.random() < .15) { //15% chance to belong to a faction
    NPCobj[Faction] = selectRandom(cess[dist].Factions);
  }

  if (Math.random() < .25) { //25% chance to have appearance
    NPCobj[Appearance] = selectRandom(cess.General.NPCAppearances);
  }

  if (Math.random() < .25) { //25% chance to have a mannerism
    NPCobj[Mannerism] = selectRandom(cess.General.NPCMannerisms);
  }

  if (Math.random() < .1) { //10% chance to have a disease
    NPCobj[Disease] = selectRandom(cess.General.Diseases);
  }

  if (Math.random() < .1) { //10% chance to have a change
    NPCobj[Change] = selectRandom(cess[dist].Changes);
  }

  if (Math.random() < .1) { //10% chance to have a boon
    NPCobj[Boon] = selectRandom(cess[dist].Boons);
  }

  //chances up to 3 items
  if (Math.random() < .5) {
    NPCobj[items].concat(selectRandom(cess[dist].Items))
  }
  if (Math.random() < .5) {
    NPCobj[items].concat(selectRandom(cess[dist].Items))
  }
  if (Math.random() < .5) {
    NPCobj[items].concat(selectRandom(cess[dist].Items))
  }

  //Chance to know a Spell
  if (Math.random() < .5) {
    NPCobj[Spell] = (selectRandom(cess.General.Spells));
  }

  return NPCobj;
}

function paveStreet(dist){

  let StreetObj = {
    Name: null,
    Appearance: selectRandom(cess[dist].StreetAppearances),
  }

  if (dist = "Cobblestone"){ //more variety
    StreetObj[Name] = selectRandom(cess[dist].StreetPrefixes) + " " + selectRandom(cess[dist].StreetSuffixes);
  } else { 
    StreetObj[Name] = selectRandom(cess[dist].StreetNames)
  }

  return StreetObj;
}

function createShop(dist){
  let ShopObj = {
    Name: selectRandom(cess[dist].ShopNames),
    Quirk: selectRandom(cess[dist].NPCQuirk),
    NPCs: [createNPC(dist)],
    Inside: null,
    Reputation: null,
    Contraband: [],
    Artifacts: [],
    Items: []
  }

  if (Math.random() < .25) { //25% chance to have an Inside
    ShopObj[Inside] = selectRandom(cess.General.ShopInsides);
  }

  if (Math.random() < .25) { //25% chance to have a Reputation
    ShopObj[Reputation] = selectRandom(cess.General.ShopReputations);
  }

  //Chance for more NPCs
  if (Math.random() < .5) {
    ShopObj[NPCs].concat(createNPC(dist))
  }
  if (Math.random() < .5) {
    ShopObj[NPCs].concat(createNPC(dist))
  }

  //Chance for contraband (no cobblestone contraband)
  if (dist != "Cobblestone"){
    if (Math.random() < .5) {
      ShopObj[Contraband].concat(cess[dist].Contraband)
    }
    if (Math.random() < .5) {
      ShopObj[Contraband].concat(cess[dist].Contraband)
    }
  }

  //Items sold
  for (i=0;i<10;i++){
    if (Math.random() < .5) {
      ShopObj[Items].concat(selectRandom(cess[dist].Items))
    }
  }

  //Chance for artifacts
  if (Math.random() > .5){
    ShopObj[Artifacts].concat(selectRandom(cess[dist].Artifacts))
  }
  if (Math.random() > .5){
    ShopObj[Artifacts].concat(selectRandom(cess[dist].Artifacts))
  }

  return ShopObj;

}

function randEncounter(dist, dist){
  //pull from both district encounters AND general encounters
  enc = selectRandom(cess[dist].Encounters.concat(cess[dist].Encounters, cess.General.Encounters))

  //[0] = name, [1,2,3,4] = mood
  let EncounterObj = {
    Name: enc.shift(), //this removes the first element
    Mood: selectRandom(enc) //then picks a random mood
  }

  return EncounterObj;
}

