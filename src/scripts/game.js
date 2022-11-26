"use strict";

function start_game() {
    console.log("Starting game");

    init_display_elements();


}

let game = null;


function init_classes() {
    game = new Game();
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
}

function display_event() {
    eventsDiv.innerHTML = game.currentEvent.description;
}

function display_actions() {

}

function display_date() {
    currentDate.innerHTML = "Date: " + game.date;
}


function display_last_report() {
    lastReportContent.innerHTML = game.lastReport;
    lastReportContent.style.display = "block";
    
    lastReportContent.onclick = function() {
        lastReportContent.style.display = "none";
    }
}
