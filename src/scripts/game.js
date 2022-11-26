"use strict";

function start_game() {
    console.log("Starting game");

    init_classes();
    init_display_elements();
}

let cards = [];
fetch('../data/cards.json').then((response) => response.json()).then((json) => cards = new Map(Object.entries(json)));

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

    console.log(game.cards);
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
    hunterDiv = document.getElementById("hunter");
    naturalistDiv = document.getElementById("naturalist");
    farmerDiv = document.getElementById("farmer");
    researcher = document.getElementById("researcher");

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
    hunterDiv.innerHTML = hunter.gauge;
    naturalistDiv.innerHTML = naturalist.gauge;
    farmerDiv.innerHTML = farmer.gauge;
    researcherDiv.innerHTML = researcher.gauge;
}

function display_event() {
    eventsDiv.innerHTML = "";
}

function display_actions() {
    // pick random card
}

function display_date() {
    currentDate.innerHTML = "Date: " + nature.date;
}


function display_last_report() {
    lastReportContent.innerHTML = game.get_last_report();
    lastReportContent.style.display = "block";
    
    lastReportContent.onclick = function() {
        lastReportContent.style.display = "none";
    }
}

function play_game() {
    let card = null;

    for (let i = 0; i < 10; i++) {
        card = game.pick_new_card();
        update_game_display();
    }

    console.log(game.get_report());
}





