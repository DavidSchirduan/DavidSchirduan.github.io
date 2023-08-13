
//get the json file and parse it 
fetch('https://docs.google.com/spreadsheets/d/1uwQ7oMT0iNbTsIxKXU7_7ufZijF1L6jbDpr6qdX60Ew/gviz/tq?tqx=out:json&sheet=Responses1&header=1')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.text().then(function (data) {

        // break the textblock into an array of lines
        var lines = data.split('\n');
        // remove one line, starting at the first position
        lines.splice(0, 1);
        // join the array back into a single string
        var dataText = lines.join('\n');

        responseJSON = JSON.parse(
          dataText.replace(/(^google\.visualization\.Query\.setResponse\(|\);$)/g, '')
        );

        console.log(responseJSON);

        //Build out the table from JSON data
        const tbl = document.getElementById('overpowered-table');
        const tblBody = document.createElement("tbody");

        //First have the current Monthly Challenge, sorted by score
        //empty row in the middle. no border, or all black or something
        //Then show all the other scores.

        for (let i = 0; i < responseJSON.table.rows.length; i++) { //for each row
          newRow = jsonToTable(responseJSON.table.rows[i]);
          tblBody.appendChild(newRow);
        }

        //append the body to the table itself
        tbl.appendChild(tblBody);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

function jsonToTable(jsonRow) {
  /** GOOGLE SHEET COLs 
   * 0 - timestamp
   * 1 - name
   * 2 - name link
   * 3 - adventure
   * 4 - adventure Link
   * 5 - playthrough link
   * 6 - score
   * 7 - bot name
   * 8 - email (DISABLED)
   **/

  const tableRow = document.createElement("tr");

  //ADVENTURE
  advCell = document.createElement("td");
  advHTML = "";
  advHTML = jsonRow.c[3].v;
  if (jsonRow.c[4]?.v) {
    advHTML = "<a target=\"_blank\" href=\"" + jsonRow.c[4].v + "\">" + advHTML + "</a>";
  }
  advCell.innerHTML = advHTML;
  tableRow.appendChild(advCell);

  //HIGH SCORE
  scoreCell = document.createElement("td");
  scoreHTML = "";
  scoreHTML = jsonRow.c[6].v + " by ";
  if (jsonRow.c[2]?.v) {
    scoreHTML = scoreHTML + "<a target=\"_blank\" href=\"" + jsonRow.c[2].v + "\">" + jsonRow.c[1].v + "</a>";
  } else {
    scoreHTML = scoreHTML + jsonRow.c[1].v;
  }
  scoreCell.innerHTML = scoreHTML;
  tableRow.appendChild(scoreCell);

  //BOT NAME
  botCell = document.createElement("td");
  botHTML = "<a target=\"_blank\" href=\"/overpowered-app?name=" + jsonRow.c[7].v + "\">" + jsonRow.c[7].v + "</a>";
  botCell.innerHTML = botHTML;
  tableRow.appendChild(botCell);

  //Playthrough LINK
  playCell = document.createElement("td");
  if (jsonRow.c[5]?.v) {
    playHTML = "<a target=\"_blank\" href=\"" + jsonRow.c[5].v + "\">Playthrough Link</a>";
    playCell.innerHTML = playHTML;
  }
  tableRow.appendChild(playCell);

  return tableRow;

}