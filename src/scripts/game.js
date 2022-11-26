"use strict";

let game = null;
let hunter = null;
let naturalist = null;
let farmer = null;
let researcher = null;

let hunterDiv = null;
let naturalistDiv = null;
let farmerDiv = null;
let researcherDiv = null;

let cardContainer = null;

let optionsDiv = null;
let currentDate = null;
let lastReportBtn = null;
let lastReportContent = null;

function reset_game() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].used = false;
    }
}

function start_game() {
    reset_game();

    init_classes();
    init_display_elements();

    game.pick_new_card();
    update_game_display();
    play_round();
}

function init_classes() {
    game = new Game(cards);
    hunter = new Actor(ACTOR_TYPE.HUNTER);
    naturalist = new Actor(ACTOR_TYPE.NATURALIST);
    farmer = new Actor(ACTOR_TYPE.FARMER);
    researcher = new Actor(ACTOR_TYPE.RESEARCHER);
}

/** DISPLAY UPDATE **/

function update_game_display() {
    display_actors();
    display_card();
    display_date();
}

function init_display_elements() {
    hunterDiv = document.getElementById("hunterProgress");
    naturalistDiv = document.getElementById("naturalistProgress");
    farmerDiv = document.getElementById("farmerProgress");
    researcherDiv = document.getElementById("researcherProgress");

    cardContainer = document.getElementById("cardContainer");

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
    hunterDiv.style.height = hunter.get_gauge()+"%";
    naturalistDiv.style.height = naturalist.get_gauge()+"%";
    farmerDiv.style.height = farmer.get_gauge()+"%";
    researcherDiv.style.height = researcher.get_gauge()+"%";
}

function display_card() {
    cardContainer.innerHTML = "";
    const card = create_card(game.get_picked_card().description, game.get_picked_card().desc_choice1, game.get_picked_card().desc_choice2, game.get_picked_card().event);
    cardContainer.appendChild(card);
}

function display_date() {
    currentDate.innerHTML = "Date: " + game.get_date();
}


function display_last_report() {
    lastReportContent.innerHTML = JSON.stringify(game.get_last_report());
    lastReportContent.style.display = "block";
    
    lastReportContent.onclick = function() {
        lastReportContent.style.display = "none";
    }
}

function play_round() {
    // if game date % 10 compute report

    game.generate_report();
    
    if (game.get_picked_card().event === false) {
        const choice1 = document.getElementById("choiceLeft");
        const choice2 = document.getElementById("choiceRight");

        choice1.onclick = function() {
            resolve_choice("choiceLeft");
            if (!game.is_game_over()) {
                game.pick_new_card();
                update_game_display();
                play_round();
            } else {
                end_game();
            }
        }

        choice2.onclick = function() {
            resolve_choice("choiceRight");
            if (!game.is_game_over()) {
                game.pick_new_card();
                update_game_display();
                play_round();
            } else {        
                end_game();
            }
        }
    } else {
        const nextCard = document.getElementById("nextCard");

        nextCard.onclick = function() {
            resolve_choice();
            if (!game.is_game_over()) {
                game.pick_new_card();
                update_game_display();
                play_round();
            } else {
                end_game();
            }
        }
    }
}

function resolve_choice(choice) {
    let pickedCard = game.get_picked_card();

    if (pickedCard.event === false) {
        if (choice === "choiceLeft") {
            update_actors(pickedCard.choice1.hunter, pickedCard.choice1.naturalist, pickedCard.choice1.farmer, pickedCard.choice1.researcher);
            game.update_environment(pickedCard.choice1.vole, pickedCard.choice1.fox, pickedCard.choice1.hare, pickedCard.choice1.hay);
        } else {
            update_actors(pickedCard.choice2.hunter, pickedCard.choice2.naturalist, pickedCard.choice2.farmer, pickedCard.choice2.researcher);
            game.update_environment(pickedCard.choice2.vole, pickedCard.choice2.fox, pickedCard.choice2.hare, pickedCard.choice2.hay);
        }
    } else {
        update_actors(pickedCard.hunter, pickedCard.naturalist, pickedCard.farmer, pickedCard.researcher);
        game.update_environment(pickedCard.vole, pickedCard.fox, pickedCard.hare, pickedCard.hay);
    }
}

function update_actors(hunterDiff, naturalistDiff, farmerDiff, researcherDiff) {
    hunter.update_gauge(hunterDiff);
    naturalist.update_gauge(naturalistDiff);
    farmer.update_gauge(farmerDiff);
    researcher.update_gauge(researcherDiff);
}

function end_game() {
    alert("Game over!");
}
