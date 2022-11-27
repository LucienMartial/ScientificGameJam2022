"use strict";

const ACTOR_TYPE = {
    HUNTER: "hunter",
    NATURALIST: "naturalist",
    FARMER: "farmer",
    RESEARCHER: "researcher"
}

const ENVIRONMENT = {
    VOLE: "vole",
    FOX: "fox",
    HARE: "hare",
    HAY: "hay"
}

class Game {
    constructor(cards) {
        this.date = 0;

        this.environment = {};
        this.environment[ENVIRONMENT.VOLE] = 100;
        this.environment[ENVIRONMENT.FOX] = 100;
        this.environment[ENVIRONMENT.HARE] = 100;
        this.environment[ENVIRONMENT.HAY] = 100;

        this.cards = cards;
        this.pickedCard = null;
        this.lastReport = null;
    }

    pick_new_card() {
        if (!this.unused_cards()) {
            this.pickedCard = null;
            return;
        }

        let randomIndex = null;

        do {
            randomIndex = Math.floor(Math.random() * this.cards.length);
        } while (this.cards[randomIndex] === true || this.cards[randomIndex].used === true);

        this.pickedCard = this.cards[randomIndex];
        this.cards[randomIndex].used = true;
        this.date += 5;
    }

    unused_cards() {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].used === false) {
                return true;
            }
        }
        return false;
    }

    update_environment(vole, fox, hare, hay) {
        if (this.environment[ENVIRONMENT.VOLE] + vole < 0) {
            this.environment[ENVIRONMENT.VOLE] = 0;
        } else if (this.environment[ENVIRONMENT.VOLE] + vole > 100) {
            this.environment[ENVIRONMENT.VOLE] = 100;
        } else {
            this.environment[ENVIRONMENT.VOLE] += vole;
        }

        if (this.environment[ENVIRONMENT.FOX] + fox < 0) {
            this.environment[ENVIRONMENT.FOX] = 0;
        } else if (this.environment[ENVIRONMENT.FOX] + fox > 100) {
            this.environment[ENVIRONMENT.FOX] = 100;
        } else {
            this.environment[ENVIRONMENT.FOX] += fox;
        }

        if (this.environment[ENVIRONMENT.HARE] + hare < 0) {
            this.environment[ENVIRONMENT.HARE] = 0;
        } else if (this.environment[ENVIRONMENT.HARE] + hare > 100) {
            this.environment[ENVIRONMENT.HARE] = 100;
        } else {
            this.environment[ENVIRONMENT.HARE] += hare;
        }

        if (this.environment[ENVIRONMENT.HAY] + hay < 0) {
            this.environment[ENVIRONMENT.HAY] = 0;
        } else if (this.environment[ENVIRONMENT.HAY] + hay > 100) {
            this.environment[ENVIRONMENT.HAY] = 100;
        } else {
            this.environment[ENVIRONMENT.HAY] += hay;
        }
    }

    is_game_over(actors) {
        if (!this.unused_cards()) {
            return "No more cards";
        }
        
        if (this.date / 5 >= 24) {
            return "Game over";
        }

        for (let i = 0; i < actors.length; i++) {
            if (actors[i].get_gauge() < 50) {
                return "Les " + actors[i].type + "s ont quitté la table";
            }
        }

        return false;
    }

    generate_report() {
        let report = {
            date: this.date,
            environment: this.environment
        }

        this.lastReport = report;
        return report;
    }

    get_last_report() {
        return this.lastReport;
    }

    get_date() {
        return this.date;
    }

    get_picked_card() {
        return this.pickedCard;
    }
}

class Actor {
    constructor(type) {
        this.type = type;
        this.gauge = 50;
    }

    update_gauge(value) {
        if (this.gauge + value > 100) {
            this.gauge = 100;
        } else if (this.gauge + value < 0) {
            this.gauge = 0;
        } else {
            this.gauge += value;
        }
    }

    get_gauge() {
        return this.gauge;
    }
}
