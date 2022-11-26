"use script";

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
        this.environment[ENVIRONMENT.VOLE] = 0;
        this.environment[ENVIRONMENT.FOX] = 0;
        this.environment[ENVIRONMENT.HARE] = 0;
        this.environment[ENVIRONMENT.HAY] = 0;

        this.cards = cards;
        this.pickedCard = null;
        this.lastReport = null;
    }

    pick_new_card() {
        let randomIndex = null;

        do {
            randomIndex = Math.floor(Math.random() * this.cards.length);
        } while (this.cards[randomIndex] === true);

        this.pickedCard = this.cards[randomIndex];
        this.cards[randomIndex].used = true;
        this.date++;
    }

    unused_cards() {
        console.log(this.cards);
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].used === false) {
                return true;
            }
        }
        return false;
    }

    update_environment(vole, fox, hare, hay) {
        this.environment[ENVIRONMENT.VOLE] += vole;
        this.environment[ENVIRONMENT.FOX] += fox;
        this.environment[ENVIRONMENT.HARE] += hare;
        this.environment[ENVIRONMENT.HAY] += hay;
    }

    is_game_over() {
        return !this.unused_cards() || this.gauge <= 0 || this.gauge >= 100 || this.date >= 30;
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
        this.gauge += value;
    }

    get_gauge() {
        return this.gauge;
    }
}
