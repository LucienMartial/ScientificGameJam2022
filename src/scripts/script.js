"use script";

const EXCL_DIVS = {
    MENU: "menuDiv",
    GAME: "gameDiv"
}

let exclusiveDivs = null;

document.addEventListener("DOMContentLoaded", function(_e) {
    console.error(e);
    
    exclusiveDivs = document.getElementsByClassName("exclusive");

    set_exclusive_div_visible(EXCL_DIVS.MENU);

    
    /** PLAY GAME **/

    const playGameButton = document.getElementById("startGame");

    playGameButton.onclick = function() {
        startGame();
        set_exclusive_div_visible(EXCL_DIVS.GAME);
    }


    /** MENU **/

    const menuButton = document.getElementById("leaveGame");

    menuButton.onclick = function() {
        set_exclusive_div_visible(EXCL_DIVS.MENU);
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

function startGame() {
    console.log("Starting game");
}
