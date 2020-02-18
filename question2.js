const gamesURL = "https://api.rawg.io/api/games";


// (GameList => {
//     return GameList.json()
// })

// (programingPhase => {
//     createGames(json);
// })

// (gamesError => {
//     console.log("There is no spoon!");
// })


function gamesURLS(response) {
    return response.json();
}

function programingPhase(json) {
    createGames(json);
}

function gamesError(error) {
    console.log(error)
}

fetch(gamesURL)
    .then(gamesURLS)
    .then(programingPhase)
    .catch(gamesError);

    
function createGames(json) {
    
     const gamesHTML = json.results;

     const gamesContainer = document.querySelector(".results")

     
    let html = "";

    for(let i = 0; i < gamesHTML.length; i++) {
        html += `<div class="game">
                    <h2>${gamesHTML[i].name}</h2>
                    <img src="${gamesHTML[i].background_image}" alt="${gamesHTML[i].name}"
                </div>`;

    }

gamesContainer.innerHTML = html;
}

