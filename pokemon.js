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
}

class Grass_Pokemon extends Pokemon {
  constructor(pokeName, health, attackDmg, sound, move) {
    super(pokeName, health, attackDmg, sound, move);
    this.type = `grass`;
    this.strong_against = `water`;
    this.weak_against = `fire`;
  }
}

module.exports = { Pokemon, Grass_Pokemon };
