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
let leaveGameBtn = null;
let lastReportContent = null;

let is_game_started = false;

function reset_game() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].used = false;
    }
}

function start_game() {
    is_game_started = true;

    // récupérer image de h1
    var body = document.body;
    body.style.backgroundImage = "url('assets/image_background_2.png')";
    reset_game();
    const gameContext = document.getElementById("gameContext");
    gameContext.style.display = "block";

    gameContext.onclick = function () {
        gameContext.style.display = "none";
    }

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
    display_options();
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

    optionsDiv = document.createElement("div");
    optionsDiv.id = "options";
    currentDate = document.createElement("p");
    currentDate.id = "currentDate";
    optionsDiv.appendChild(currentDate);
    lastReportBtn = document.createElement("button");
    lastReportBtn.id = "lastReport";
    lastReportBtn.innerText = "Dernier rapport";
    optionsDiv.appendChild(lastReportBtn);
    leaveGameBtn = document.createElement("button");
    leaveGameBtn.id = "leaveGame";
    leaveGameBtn.innerText = "Quitter partie";
    optionsDiv.appendChild(leaveGameBtn);
    lastReportContent = document.getElementById("lastReportContent");

    document.getElementsByTagName("header")[0].appendChild(optionsDiv);

    lastReportBtn.onclick = function () {
        document.documentElement.style.setProperty("--report-display-transition-duration", "0.3s");
        lastReportContent.classList.toggle("active");
        display_last_report(false, "");
    }

    leaveGameBtn.onclick = function () {
        document.body.style.backgroundImage = "url('assets/background_meadow_adobe_express.svg')";
        document.body.style.backgroundSize = "100%";
        optionsDiv.remove();
        set_exclusive_div_visible(EXCL_DIVS.MENU);
    }
}

function display_options() {
    if (is_game_started == true) {
        optionsDiv.style.display = "inline-block";
    } else {
        optionsDiv.style.display = "none";
    }
}

function display_actors() {
    hunterDiv.style.height = hunter.get_gauge() + "%";
    naturalistDiv.style.height = naturalist.get_gauge() + "%";
    farmerDiv.style.height = farmer.get_gauge() + "%";
    researcherDiv.style.height = researcher.get_gauge() + "%";
}

function display_card() {
    cardContainer.innerHTML = "";
    const card = create_card(game.get_picked_card().description, game.get_picked_card().desc_choice1, game.get_picked_card().desc_choice2, game.get_picked_card().event);
    cardContainer.appendChild(card);
}

function display_date() {
    let currDate = game.get_date();
    let month = currDate % 12;
    let year = Math.floor(currDate / 12);

    if (month === 0) {
        currentDate.innerHTML = "Année " + year;
    } else if (year === 0) {
        currentDate.innerHTML = "Mois " + month;
    } else {
        currentDate.innerHTML = "Année " + year + " - Mois " + month;
    }
}


function display_last_report(endGame, message) {
    const report = game.get_last_report();
    if (report === null) {
        lastReportContent.innerHTML = "Aucun rapport n'a encore été effectué.";
    } else {

        lastReportContent.innerHTML = "";
        const date = document.createElement("p");
        date.classList.add("reportDate");

        let repMonth = report.date % 12;
        let repYear = Math.floor(report.date / 12);

        if (repMonth === 0) {
            date.innerText = "Année " + repYear;
        } else if (repYear === 0) {
            date.innerText = "Mois " + repMonth;
        } else {
            date.innerText = "Année " + repYear + " - Mois " + repMonth;
        }
        
        lastReportContent.appendChild(date);

        lastReportContent.appendChild(document.createElement("br"));

        const vole = document.createElement("p");
        vole.innerHTML = "Population de campagnol: " + report.environment["vole"];
        lastReportContent.appendChild(vole);

        const fox = document.createElement("p");
        fox.innerHTML = "Population de renard: " + report.environment["fox"];
        lastReportContent.appendChild(fox);

        const hare = document.createElement("p");
        hare.innerHTML = "Population de lièvre: " + report.environment["hare"];
        lastReportContent.appendChild(hare);

        const hay = document.createElement("p");
        hay.innerHTML = "Quantité de foin: " + report.environment["hay"];
        lastReportContent.appendChild(hay);
    }

    lastReportContent.onclick = function () {
        lastReportContent.classList.remove("active");
        if (endGame) {
            end_game(message);
        }
    }
}

function play_round() {
    if ((game.get_date() / 5) % 3 === 0 && game.get_date() !== 0) {
        pop_up("Un nouveau rapport est disponible !");
        game.generate_report();
    }

    if (game.get_picked_card().event === false) {
        const choice1 = document.getElementById("choiceLeft");
        const choice2 = document.getElementById("choiceRight");

        choice1.onclick = function () {
            resolve_choice("choiceLeft");
            process_click_on_card("left");
        }

        choice2.onclick = function () {
            resolve_choice("choiceRight");
            process_click_on_card("right");
        }
    } else {
        const nextCard = document.getElementById("nextCard");

        nextCard.onclick = function () {
            resolve_choice();
            process_click_on_card("center");
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
        update_actors(pickedCard.effect.hunter, pickedCard.effect.naturalist, pickedCard.effect.farmer, pickedCard.effect.researcher);
        game.update_environment(pickedCard.effect.vole, pickedCard.effect.fox, pickedCard.effect.hare, pickedCard.effect.hay);
    }
}

function update_actors(hunterDiff, naturalistDiff, farmerDiff, researcherDiff) {
    hunter.update_gauge(hunterDiff);
    naturalist.update_gauge(naturalistDiff);
    farmer.update_gauge(farmerDiff);
    researcher.update_gauge(researcherDiff);
}

function process_click_on_card(side) {
    if(side === "left") {
        cardContainer.classList.add("clickedLeft");
    }else if(side === "right") {
        cardContainer.classList.add("clickedRight");
    }else {
        cardContainer.classList.add("clickedCenter");
    }
    setTimeout(function () {
        document.documentElement.style.setProperty("--card-move-transition-duration", "0s");
        cardContainer.classList.remove("clickedLeft");
        cardContainer.classList.remove("clickedRight");
        cardContainer.classList.remove("clickedCenter");
        cardContainer.classList.add("startTransition");

        if (!game.is_game_over([hunter, naturalist, farmer, researcher])) {
            game.pick_new_card();
            update_game_display();
            play_round();
        } else {
            end_game(game.is_game_over([hunter, naturalist, farmer, researcher]));
        }
        setTimeout(function () {
            document.documentElement.style.setProperty("--card-move-transition-duration", "0.3s");
            cardContainer.classList.remove("startTransition");

        },300);
    }, 300);
}

function end_game() {
    alert("Game over!");
    set_exclusive_div_visible(EXCL_DIVS.MENU);
    display_last_report(endGame, message);
}

function pop_up(text) {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = text + " %TEST% MODIFIER LE STYLE DES POPUPS %TEST%";

    popup.onclick = function () {
        popup.remove();
    }

    document.body.appendChild(popup);
}