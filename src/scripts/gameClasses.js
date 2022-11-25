"use script";

let animalType = ["vole", "boar", "fox", "hare"];

class Animal {
    constructor(animalType, threshold, populationSize) {
        this.animalType = animalType;
        this.threshold = threshold;
        this.populationSize = populationSize;
    }
};

class EcoElement {
    constructor(quality, quantity) {
        this.quality = quality;
        this.quantity = quantity;
    }
};

class Environment {
    constructor(vole, boar, fox, hare, harvest) {
        this.vole = vole;
        this.boar = boar;
        this.fox = fox;
        this.hare = hare;
        this.harvest = harvest; // type : EcoElement
    }
};

class Hunter {
    constructor(opinion, hunt) {
        this.opinion = opinion;
        this.hunt = hunt;
    }
};

class Farmer {
    constructor(opinion) {
        this.opinion = opinion;
    }
};

class Naturalist {
    constructor(opinion) {
        this.opinion = opinion;
    }
};

class Researcher {
    constructor(opinion) {
        this.opinion = opinion;
    }
};

class Card {
    constructor(action, image) {
        this.action = action;
        this.image = image;
    }
};

class Action {
    constructor(description) {
        this.description = description;
    }
    
    execute() {
        console.log(this.description); // TODO : what the action will do
    }
};





