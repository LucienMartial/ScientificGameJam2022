"use script";

const EXCL_DIVS = {
    MENU: "menu",
    GAME: "game"
}

let exclusiveDivs = null;

document.addEventListener("DOMContentLoaded", function() {
    exclusiveDivs = document.getElementsByClassName("exclusive");

    set_exclusive_div_visible(EXCL_DIVS.MENU);

    
    /** PLAY GAME **/

    const playGameButton = document.getElementById("startGame");

    playGameButton.onclick = function() {
        start_game();
        set_exclusive_div_visible(EXCL_DIVS.GAME);
    }


    /** MENU **/

    const menuButton = document.getElementById("leaveGame");

    menuButton.onclick = function() {
        set_exclusive_div_visible(EXCL_DIVS.MENU);
    }

    /** DARK MODE **/
    const darkModeButton = document.getElementById("toggleDark");
    const sunIcon = "assets/sun-solid.svg";
    const moonIcon = "assets/moon-solid.svg";
    let darkMode = false;
    darkModeButton.onclick = function() {
        darkModeButton.style.backgroundImage = darkMode ? `url("${sunIcon}")` : `url("${moonIcon}")`;
        darkMode = !darkMode;
        document.body.classList.toggle("dark");
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