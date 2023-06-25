---
date: 2023-01-02
layout: project
title: Overpowered Solo Roleplaying
caption: $3.20 Rulebook
screenshot:
  src: /images/Overpowered/banner.png
image: /images/Overpowered/banner.png
hide_description: true
permalink: overpowered
featured: false
redirect_from:
  - "/overpowered-solo-roleplaying"
---

Guide a brave explorer bot through your favorite tabletop roleplaying games. Overpowered is a solo game compatible with any adventure that uses math.

Inspired by video game speedruns, arcade scoreboards, and strategy board games, Overpowered offers an entirely new way to enjoy ttrpg adventures.

See the High Scores below for examples of play.

<div class="shopping-buttons">
<a target="_blank" href="https://technicalgrimoire.itch.io/overpowered-solo-roleplaying" class="btn btn-primary itchBTN">Digital: $3.20<br>at Itch.io</a>
<a target="_blank" href="https://www.drivethrurpg.com/product/421856/Overpowered-Solo-Roleplaying" class="btn btn-primary dtrpgBTN">Digital: $3.20<br>at DriveThruRPG</a>
</div>

## Launch Dice App

<form class="form-inline" target="_blank" action="/overpowered-app" method="get" >
  <div class="form-group">
    Bot Name: 
  </div>
  <div class="form-group col-6 mx-sm-3">
      <input style="width: inherit;" type="text" name="name" class="form-control" id="botName" placeholder="Leave blank for a random Bot name">
  </div>
  <button type="submit" class="btn btn-primary">Launch</button>
</form>

_Bots with the same name will roll the same dice. Re-use a name from the Scoreboard below and try to beat their High Score!_

## [Click Here to Submit Your High Score](https://docs.google.com/forms/d/e/1FAIpQLSdEXARUVTmTKCAVsnur_qb3Wj-nu7fMiXfNMBGnhINsNBbrBw/viewform?usp=sf_link)

<table class="overpowered-scores" id="overpowered-table">
    <thead>
        <tr>
            <th>ADVENTURE</th>
            <th>HIGH SCORE</th>
            <th>BOT NAME</th>
            <th>LINK</th>
        </tr>
    </thead>
</table>

> App built with the incredible [Dicier font](https://speakthesky.itch.io/typeface-dicier) by [Speak the Sky](https://speakthesky.com/) and uses the [CRT effect](http://aleclownes.com/2017/02/01/crt-display.html) from Alec Lownes. Cute robots from [Mounir Tohami](https://mounirtohami.itch.io/26-animated-pixelart-robots). Rules and Dice App protected [under CC-By](https://creativecommons.org/licenses/by/4.0/). You may reuse them with attribution.

<script>
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

</script>
