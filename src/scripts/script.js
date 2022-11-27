"use strict";

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

function create_card(description, choiceLeft, choiceRight, event) {
    const card = document.createElement("div");
    card.classList.add("card");


    const cardDesc = document.createElement("p");
    cardDesc.innerText = description;

    card.appendChild(cardDesc);

    const cardImage = document.createElement("div");
    cardImage.classList.add("cardImage");
    card.appendChild(cardImage);

    if (!event) {
        const cardChoiceLeft = document.createElement("div");
        cardChoiceLeft.classList.add("choice");
        cardChoiceLeft.id = "choiceLeft";
        cardChoiceLeft.innerText = choiceLeft;
        card.appendChild(cardChoiceLeft);

        const cardChoiceRight = document.createElement("div");
        cardChoiceRight.classList.add("choice");
        cardChoiceRight.id = "choiceRight";
        cardChoiceRight.innerText = choiceRight;
        card.appendChild(cardChoiceRight);
    } else {
        const cardNext = document.createElement("div");
        cardNext.classList.add("choice");
        cardNext.classList.add("choice");
        cardNext.id = "nextCard";
        cardNext.innerText = "D'accord";
        card.classList.add("event");
        card.appendChild(cardNext);
    }

    card.classList.add("hunter");
    return card;
}
