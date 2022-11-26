"use strict";



function start_game() {
    console.log("Starting game");

    init_display_elements();


}

let game = null;
let actors = [];


function init_classes() {
    game = new Game();
    actors.push(new Hunter());
    actors.push(new Naturalist());
    actors.push(new Farmer());
    actors.push(new Researcher());
}

/** DISPLAY UPDATE **/

function update_game_display() {
    actor_gauge_display_update();
    event_display_update();
    action_display_update();
    display_date();
    display_last_report();
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

}

function display_action() {

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
