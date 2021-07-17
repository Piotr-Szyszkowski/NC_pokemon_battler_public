const { expect } = require("@jest/globals");
const { Pokemon, Grass_Pokemon } = require("./pokemon");

describe(`Class Pokemon`, () => {
  it(`should should have a name, hit points (health), attack damage, the sound that it makes,
      and one move. (e.g. 'bite')`, () => {
    const watchog = new Pokemon(`Watchog`, 60, 85, `Watch out!!`, `Illuminate`);
    expect(watchog).toBeInstanceOf(Pokemon);
    // const {name, health, attackDmg, sound, move} = watchog;
    expect(watchog).toMatchObject({
      name: `Watchog`,
      health: 60,
      attackDmg: 85,
      sound: `Watch out!!`,
      move: `Illuminate`,
    });
  });
  it(`Each pokemon should have a type property which deafults to normal. Normal pokemon have 
      no strengths or weaknesses.`, () => {
    const watchog = new Pokemon(`Watchog`, 60, 85, `Watch out!!`, `Illuminate`);
    expect(watchog).toMatchObject({
      type: `normal`,
      strong_against: null,
      weak_against: null,
    });
  });
  it(`should be possible to create grass pokemon, water pokemon and fire pokemon`, () => {
    const bulbasaur = new Grass_Pokemon(
      `Bulbasaur`,
      45,
      49,
      `Bulbaa!!`,
      `Overgrow`
    );
    expect(bulbasaur).toBeInstanceOf(Pokemon);
    expect(bulbasaur).toBeInstanceOf(Grass_Pokemon);
    expect(bulbasaur).toMatchObject({
      type: `grass`,
      strong_against: `water`,
      weak_against: `fire`,
    });
  });
});
