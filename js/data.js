// Dades globals
export const magic = ["fire", "ice", "lightning", "wind"];
export const weapons = ["crossbow", "sword", "hatchet", "shield"];

// JSON
export const gem = [
  { name: "esmerald", fire: 2, ice: 2 },
  { name: "ruby", fire: 2, ice: 1 },
  { name: "diamond", fire: 2, wind: 2 },
  { name: "sapphire", lightning: 2, wind: 2 },
];

let witcher = {
  name: "witcher",
  fullName: "The Witcher el mago de los magos",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],
  calculateIncrementMagic: function(gem) {
    return this.crossbow + this.magic.fire;
  },
  calculateAttack: function() {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function() {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  }
}

let vampire = {
  name: "vampire",
  fullName: "Vampire la chupa sangre",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],
  calculateIncrementMagic: function(gem) {
    return this.crossbow + this.magic.fire;
  },
  calculateAttack: function() {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function() {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  }
}

let aragon = {
  name: "aragon",
  fullName: "aragon un dios",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],
  calculateIncrementMagic: function(gem) {
    return this.crossbow + this.magic.fire;
  },
  calculateAttack: function() {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function() {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  }
}

let sirocu = {
  name: "sirocu",
  fullName: "Bicho muy feo",
  skills: {
    attack: 4,
    defense: 3,
    speed: 5
  },
  aMagic: [],
  aWeapons: [],
  aGem: [],
  calculateIncrementMagic: function(gem) {
    return this.crossbow + this.magic.fire;
  },
  calculateAttack: function() {
    let pointsItems = this.aWeapons.length + this.aMagic.length;
    return this.skills.attack + pointsItems;
  },
  calculateDefense: function() {
    let pointsItems = 0;
    let found = this.aWeapons.find(e => e == 'shield');
    if (found) pointsItems++;
    return this.skills.defense + pointsItems;
  }
}
export const characters = [witcher, vampire, aragon, sirocu];

// Objeto del estado actual
//export let stateHero = characters[0];