"use strict";

function start_game() {
    console.log("Starting game");

    init_classes();
    init_display_elements();

    play_game();
}

let game = null;
let hunter = null;
let naturalist = null;
let farmer = null;
let researcher = null;

function init_classes() {
    game = new Game(cards);
    hunter = new Actor(ACTOR_TYPE.HUNTER);
    naturalist = new Actor(ACTOR_TYPE.NATURALIST);
    farmer = new Actor(ACTOR_TYPE.FARMER);
    researcher = new Actor(ACTOR_TYPE.RESEARCHER);
    console.log(cards);
}

/** DISPLAY UPDATE **/

function update_game_display() {
    display_actors();
    display_event();
    display_actions();
    display_date();
}

let hunterDiv = null;
let naturalistDiv = null;
let farmerDiv = null;
let researcherDiv = null;

let eventsDiv = null;

let actionsDiv = null;

let optionsDiv = null;
let currentDate = null;
let lastReportBtn = null;
let lastReportContent = null;

function init_display_elements() {
    hunterDiv = document.getElementById("hunterProgress");
    naturalistDiv = document.getElementById("naturalistProgress");
    farmerDiv = document.getElementById("farmerProgress");
    researcherDiv = document.getElementById("researcherProgress");

    eventsDiv = document.getElementById("events");

    actionsDiv = document.getElementById("actions");

    optionsDiv = document.getElementById("options");
    currentDate = document.getElementById("currentDate");
    lastReportBtn = document.getElementById("lastReport");
    lastReportContent = document.getElementById("lastReportContent");

    lastReportBtn.onclick = function() {
        lastReportContent.style.display = "block";
        display_last_report();
    }
}

function display_actors() {
    hunterDiv.innerHTML = hunter.get_gauge();
    naturalistDiv.innerHTML = naturalist.get_gauge();
    farmerDiv.innerHTML = farmer.get_gauge();
    researcherDiv.innerHTML = researcher.get_gauge();
}

function display_event() {
    eventsDiv.innerHTML = "";
}

function display_actions() {
    // pick random card
}

function display_date() {
    currentDate.innerHTML = "Date: " + game.get_date();
}


function display_last_report() {
    lastReportContent.innerHTML = game.get_last_report();
    lastReportContent.style.display = "block";
    
    lastReportContent.onclick = function() {
        lastReportContent.style.display = "none";
    }
}

function play_game() {
    const choice1 = document.getElementById("choiceLeft");
    const choice2 = document.getElementById("choiceRight");

    choice1.onclick = function() {
        resolve_choice("choice1");
    }

    choice2.onclick = function() {
        resolve_choice("choice2");
    }

    game.pick_new_card();
    update_game_display();
}

function resolve_choice(choice) {
    let pickedCard = game.get_picked_card();

    if (choice === "choice1") {
        update_actors(pickedCard.choice1.hunter, pickedCard.choice1.naturalist, pickedCard.choice1.farmer, pickedCard.choice1.researcher);
        game.update_environment(pickedCard.choice1.vole, pickedCard.choice1.fox, pickedCard.choice1.hare, pickedCard.choice1.hay);
    } else {
        update_actors(pickedCard.choice2.hunter, pickedCard.choice2.naturalist, pickedCard.choice2.farmer, pickedCard.choice2.researcher);
        game.update_environment(pickedCard.choice2.vole, pickedCard.choice2.fox, pickedCard.choice2.hare, pickedCard.choice2.hay);
    }

    if (game.is_game_over()) {
        // game over
    } else {
        game.pick_new_card();
        update_game_display();
        if (game.get_date() % 10 === 0) {
            game.generate_report();
        }
    }
}

function update_actors(hunterDiff, naturalistDiff, farmerDiff, researcherDiff) {
    hunter.update_gauge(hunterDiff);
    naturalist.update_gauge(naturalistDiff);
    farmer.update_gauge(farmerDiff);
    researcher.update_gauge(researcherDiff);
}
