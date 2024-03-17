var tombdata = {};
var alarmDieSize = 4;

//get the json file and parse it
fetch('/assets/generator_resources/tombthousand.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        tombdata = data;
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });


function generateEncounter() {
  grammar = tracery.createGrammar(tombdata);
  grammar.addModifiers(baseEngModifiers);

  document.getElementById("TombEncounterCard").innerText = grammar.flatten("#OverloadedEncounters#");
}