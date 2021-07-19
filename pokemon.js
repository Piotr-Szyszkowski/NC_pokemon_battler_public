class Pokemon {
  constructor(pokeName, health, attackDmg, sound, move) {
    this.name = pokeName;
    this.health = health;
    this.attackDmg = attackDmg;
    this.sound = sound;
    this.move = move;
    this.type = `normal`;
    this.strong_against = null;
    this.weak_against = null;
  }
  talk = function () {
    return this.sound;
  };
  useYourMoves = function () {
    return this.move;
  };
}

class Grass_Pokemon extends Pokemon {
  constructor(pokeName, health, attackDmg, sound, move) {
    super(pokeName, health, attackDmg, sound, move);
    this.type = `grass`;
    this.strong_against = `water`;
    this.weak_against = `fire`;
  }
}

class Water_Pokemon extends Pokemon {
  constructor(pokeName, health, attackDmg, sound, move) {
    super(pokeName, health, attackDmg, sound, move);
    this.type = `water`;
    this.strong_against = `fire`;
    this.weak_against = `grass`;
  }
}

class Fire_Pokemon extends Pokemon {
  constructor(pokeName, health, attackDmg, sound, move) {
    super(pokeName, health, attackDmg, sound, move);
    this.type = `fire`;
    this.strong_against = `grass`;
    this.weak_against = `water`;
  }
}

module.exports = { Pokemon, Grass_Pokemon, Water_Pokemon, Fire_Pokemon };
