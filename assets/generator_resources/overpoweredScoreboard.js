
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

        for (let i = 0; i < responseJSON.table.rows.length; i++) { //for each row
          const row = document.createElement("tr");

          console.log("ADVENTURE");

          //ADVENTURE
          advCell = document.createElement("td");
          advHTML = "";
          advHTML = responseJSON.table.rows[i].c[3].v;
          if (responseJSON.table.rows[i].c[4]?.v) {
            advHTML = "<a target=\"_blank\" href=\"" + responseJSON.table.rows[i].c[4].v + "\">" + advHTML + "</a>";
          }
          advCell.innerHTML = advHTML;
          row.appendChild(advCell);

          console.log("HIGH SCORE");

          //HIGH SCORE
          scoreCell = document.createElement("td");
          scoreHTML = "";
          scoreHTML = responseJSON.table.rows[i].c[6].v + " Overpower<br>by ";
          if (responseJSON.table.rows[i].c[2]?.v) {
            scoreHTML = scoreHTML + "<a target=\"_blank\" href=\"" + responseJSON.table.rows[i].c[2].v + "\">" + responseJSON.table.rows[i].c[1].v + "</a>";
          } else {
            scoreHTML = scoreHTML + responseJSON.table.rows[i].c[1].v;
          }
          scoreCell.innerHTML = scoreHTML;
          row.appendChild(scoreCell);

          console.log("BOT NAME");

          //BOT NAME
          botCell = document.createElement("td");
          botHTML = "<a target=\"_blank\" href=\"/overpowered-app?name=" + responseJSON.table.rows[i].c[7].v + "\">" + responseJSON.table.rows[i].c[7].v + "</a>";
          botCell.innerHTML = botHTML;
          row.appendChild(botCell);

          console.log("LINK");

          //Playthrough LINK
          playCell = document.createElement("td");
          if (responseJSON.table.rows[i].c[5]?.v) {
            playHTML = "<a target=\"_blank\" href=\"" + responseJSON.table.rows[i].c[5].v + "\">LINK</a>";
            playCell.innerHTML = playHTML;
          }
          row.appendChild(playCell);

          //finally, append the row to the body
          tblBody.appendChild(row);
        }
        //append the body to the table itself
        tbl.appendChild(tblBody);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });
