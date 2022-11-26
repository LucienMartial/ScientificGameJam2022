"use script";

const EXCL_DIVS = {
    MENU: "menu",
    GAME: "game"
}

let exclusiveDivs = null;

document.addEventListener("DOMContentLoaded", function () {
    exclusiveDivs = document.getElementsByClassName("exclusive");

    set_exclusive_div_visible(EXCL_DIVS.MENU);
    

    /** PLAY GAME **/

    const playGameButton = document.getElementById("startGame");

    playGameButton.onclick = function () {
        start_game();
        set_exclusive_div_visible(EXCL_DIVS.GAME);
    }


    /** MENU **/

    const menuButton = document.getElementById("leaveGame");

    menuButton.onclick = function () {
        set_exclusive_div_visible(EXCL_DIVS.MENU);
    }

    /** DARK MODE **/
    const darkModeButton = document.getElementById("toggleDark");
    const sunIcon = "assets/sun-solid.svg";
    const moonIcon = "assets/moon-solid.svg";
    let darkMode = false;
    darkModeButton.onclick = function () {
        darkModeButton.style.backgroundImage = darkMode ? `url("${sunIcon}")` : `url("${moonIcon}")`;
        darkMode = !darkMode;
        document.body.classList.toggle("dark");
    }

    /** CARDS **/
    const cardContainer = document.getElementById("cardContainer");
    const card1 = createCard( "This is a card", "Left", "Right");

    cardContainer.appendChild(card1);
});

function set_exclusive_div_visible(divToSet) {
    for (let div of exclusiveDivs) {
        if (div.id === divToSet) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}


/** GAME **/

function startGame() {
    console.log("Starting game");
}

function createCard(description,choiceLeft,choiceRight) {
    const card = document.createElement("div");
    card.classList.add("card");


    const cardDesc = document.createElement("p");
    cardDesc.innerText = description;
    card.appendChild(cardDesc);

    const cardImage = document.createElement("div");
    cardImage.classList.add("cardImage");
    card.appendChild(cardImage);

    const cardChoiceLeft = document.createElement("div");
    cardChoiceLeft.classList.add("choice");
    cardChoiceLeft.classList.add("choiceLeft");
    cardChoiceLeft.innerText = choiceLeft;
    card.appendChild(cardChoiceLeft);

    const cardChoiceRight = document.createElement("div");
    cardChoiceRight.classList.add("choice");
    cardChoiceRight.classList.add("choiceRight");
    cardChoiceRight.innerText = choiceRight;
    card.appendChild(cardChoiceRight);

    card.classList.add("hunter");
    return card;
}