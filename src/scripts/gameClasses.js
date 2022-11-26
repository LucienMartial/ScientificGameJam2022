"use script";

const ACTOR_TYPE = {
    HUNTER: "hunter",
    NATURALIST: "naturalist",
    FARMER: "farmer",
    RESEARCHER: "researcher"
}

const ANIMAL_TYPE = {
    VOLE: "vole",
    FOX: "fox",
    HARE: "hare"
}

const ENVIRONMENT = {
    HARVEST: "harvest"
}

class Game {
    constructor(cards) {
        this.date = 0;
        this.animals = {};
        this.animals[ANIMAL_TYPE.VOLE] = 0;
        this.animals[ANIMAL_TYPE.FOX] = 0;
        this.animals[ANIMAL_TYPE.HARE] = 0;
        this.environment = {};
        this.environment[ENVIRONMENT.HARVEST] = 0;
        this.cards = cards;
        this.pickedCard = null;
        this.lastReport = null;
    }

    pick_new_card() {
        let randomIndex = Math.floor(Math.random() * this.cards.length);

        while (this.cards[randomIndex].used === true) {
            randomIndex = Math.floor(Math.random() * this.cards.length);
        }

        this.pickedCard = this.cards[randomIndex];
        this.cards[randomIndex].used = true;
        this.date++;
    }

    get_report() {
        let report = {
            date: this.date,
            animals: this.animals,
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
}

class Actor {
    constructor(type) {
        this.type = type;
        this.gauge = 50;
    }

    update_gauge(value) {
        this.gauge += value;
    }
}
