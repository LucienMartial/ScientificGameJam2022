"use strict";



function start_game() {
    console.log("Starting game");

    init_display_elements();


}




/** DISPLAY UPDATE **/

let hunterDiv = null;
let naturalistDiv = null;
let farmerDiv = null;
let researcherDiv = null;

let eventsDiv = null;

let actionsDiv = null;

let optionsDiv = null;
let currentDate = null;
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
    lastReportContent = document.getElementById("lastReportContent");
}

function actor_gauge_display_update() {
    for (let actor of actors) {
        actor.gauge_display_update();
    }
}

function event_display_update() {
    eventsDiv.innerHTML = "";
    for (let event of events) {
        eventsDiv.appendChild(event.display());
    }
}

function action_display_update() {
    actionsDiv.innerHTML = "";
    for (let action of actions) {
        actionsDiv.appendChild(action.display());
    }
}

function display_last_report() {
    lastReportContent.innerHTML = game.lastReport;
}

function display_date() {
    currentDate.innerHTML = "Date: " + game.date;
}
