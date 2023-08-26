//Pull submissions from the netlify api

apiKey = 'Cmx2eHF-SNrY6e8XTKVdngnG270E47A8dxwuEKTRxCo';

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Cmx2eHF-SNrY6e8XTKVdngnG270E47A8dxwuEKTRxCo");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("https://api.netlify.com/api/v1/forms/64ea1aeb14b8ae0008cbab33/submissions");

fetch(myRequest, myInit).then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    response.text().then(function (data) {
      console.log(data);
      responseJSON = JSON.parse(data);

      //Split the json into two arrays: Monthly Challenge and Everything Else
      monthlyJSON = [];
      otherJSON = [];
      for (let i = 0; i < responseJSON.length; i++) { //for each row
        if (responseJSON[i].data.botName.toLowerCase().startsWith("aug23")) {
          monthlyJSON.push(responseJSON[i].data);
        } else {
          otherJSON.push(responseJSON[i].data);
        }
      }

        //sort JSONs
        sortedMonthly = monthlyJSON.sort(sortByScore);
        sortedOther = otherJSON.sort(sortByAdventure);

        console.log(sortedOther);
        console.log(sortedMonthly);


    });
});




  //       //Build out the table from JSON data
  //       const tbl = document.getElementById('overpowered-table');
  //       const tblBody = document.createElement("tbody");

  //       //AUG23 Blank Row
  //       blankRow = document.createElement("tr");
  //       blankCell = document.createElement("td");
  //       blankCell.colSpan = "4";
  //       blankCell.innerHTML = "<h3>AUG23 High Scores</h3>"
  //       blankRow.appendChild(blankCell);
  //       tblBody.appendChild(blankRow);

  //       //Header Row
  //       tableHead = document.createElement("tr");
  //       headCell1 = document.createElement("th");
  //       headCell1.innerHTML = "ADVENTURE";
  //       tableHead.appendChild(headCell1);
  //       headCell2 = document.createElement("th");
  //       headCell2.innerHTML = "HIGH SCORE";
  //       tableHead.appendChild(headCell2);
  //       headCell3 = document.createElement("th");
  //       headCell3.innerHTML = "BOT NAME";
  //       tableHead.appendChild(headCell3);
  //       headCell4 = document.createElement("th");
  //       headCell4.innerHTML = "LINK";
  //       tableHead.appendChild(headCell4);
  //       tblBody.appendChild(tableHead);

  //       for (let i = 0; i < sortedMonthly.length; i++) {
  //         newRow = jsonToTable(sortedMonthly[i]);
  //         tblBody.appendChild(newRow);
  //       }

  //       //Other Blank Row
  //       blankRow = document.createElement("tr");
  //       blankCell = document.createElement("td");
  //       blankCell.colSpan = "4";
  //       blankCell.innerHTML = "<h3>Other High Scores</h3>"
  //       blankRow.appendChild(blankCell);
  //       tblBody.appendChild(blankRow);

  //       //Header Row
  //       tableHead = document.createElement("tr");
  //       headCell1 = document.createElement("th");
  //       headCell1.innerHTML = "ADVENTURE";
  //       tableHead.appendChild(headCell1);
  //       headCell2 = document.createElement("th");
  //       headCell2.innerHTML = "HIGH SCORE";
  //       tableHead.appendChild(headCell2);
  //       headCell3 = document.createElement("th");
  //       headCell3.innerHTML = "BOT NAME";
  //       tableHead.appendChild(headCell3);
  //       headCell4 = document.createElement("th");
  //       headCell4.innerHTML = "LINK";
  //       tableHead.appendChild(headCell4);
  //       tblBody.appendChild(tableHead);

  //       for (let i = 0; i < sortedOther.length; i++) {
  //         newRow = jsonToTable(sortedOther[i]);
  //         tblBody.appendChild(newRow);
  //       }


  //       //append the body to the table itself
  //       tbl.appendChild(tblBody);
  //     });
  //   }
  // )
  // .catch(function (err) {
  //   console.log('Fetch Error :-S', err);
  // });

function sortByScore(a, b) {
  if (a.finalScore > b.finalScore) {
    return -1;
  }
  if (a.finalScore < b.finalScore) {
    return 1;
  }
  return 0;
}

function sortByAdventure(a, b) {
  if (a.overpoweredAdventure < b.overpoweredAdventure || 
    a.finalScore > b.finalScore) { //sort by adventure FIRST and then score
    return -1;
  }
  if (a.overpoweredAdventure > b.overpoweredAdventure || a.finalScore < b.finalScore) { //sort by adventure FIRST and then score
    return 1;
  }
  return 0;
}

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

//Functions for revealing and closing the submission form modal
const modal = document.querySelector(".overpoweredModal");
const overlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector("#overpoweredShowForm");
const closeModalBtn = document.querySelector(".modal-close");

const openModal = function () {
  modal.classList.remove("modal-hidden");
  overlay.classList.remove("modal-hidden");
  modal.scrollIntoView();
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("modal-hidden");
  overlay.classList.add("modal-hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//also close modal on ESCAPE key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("modal-hidden")) {
    closeModal();
  }
});