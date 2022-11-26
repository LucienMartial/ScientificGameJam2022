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

class Game {
    constructor() {
        this.date = 0;
        this.animals = {};
        this.animals[ANIMAL_TYPE.VOLE] = 0;
        this.animals[ANIMAL_TYPE.FOX] = 0;
        this.animals[ANIMAL_TYPE.HARE] = 0;
        this.lastReport = null;
    }
}

class Actor {
    constructor(type) {
        this.type = type;
        this.gauge = 50;
    }
}
