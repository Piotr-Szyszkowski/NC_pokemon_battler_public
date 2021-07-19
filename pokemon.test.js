const { expect } = require("@jest/globals");
const {
  Pokemon,
  Grass_Pokemon,
  Water_Pokemon,
  Fire_Pokemon,
} = require("./pokemon");

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
  it(`should be possible to create grass pokemon`, () => {
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
  it("should be possible to create water pokemon", () => {
    const squirtle = new Water_Pokemon(
      `Squirtle`,
      44,
      48,
      `Squirtle, squirtle!!`,
      `Torrent`
    );
    expect(squirtle).toBeInstanceOf(Pokemon);
    expect(squirtle).toBeInstanceOf(Water_Pokemon);
    expect(squirtle).toMatchObject({
      type: `water`,
      strong_against: `fire`,
      weak_against: `grass`,
    });
  });
  it("should be possible to create fire pokemon", () => {
    const charmander = new Fire_Pokemon(
      `Charmander`,
      39,
      52,
      `Chaaar!!`,
      `Blaze`
    );
    expect(charmander).toBeInstanceOf(Pokemon);
    expect(charmander).toBeInstanceOf(Fire_Pokemon);
    expect(charmander).toMatchObject({
      type: `fire`,
      strong_against: `grass`,
      weak_against: `water`,
    });
  });
  it(`every pokemon should have a talk method available, which returns its sound`, () => {
    const watchog = new Pokemon(`Watchog`, 60, 85, `Watch out!!`, `Illuminate`);
    const bulbasaur = new Grass_Pokemon(
      `Bulbasaur`,
      45,
      49,
      `Bulbaa!!`,
      `Overgrow`
    );

    const squirtle = new Water_Pokemon(
      `Squirtle`,
      44,
      48,
      `Squirtle, squirtle!!`,
      `Torrent`
    );
    const charmander = new Fire_Pokemon(
      `Charmander`,
      39,
      52,
      `Chaaar!!`,
      `Blaze`
    );
    expect(watchog.talk()).toBe(`Watch out!!`);
    expect(bulbasaur.talk()).toBe(`Bulbaa!!`);
    expect(squirtle.talk()).toBe(`Squirtle, squirtle!!`);
    expect(charmander.talk()).toBe(`Chaaar!!`);
  });
  it(`every pokemon should have a useYourMoves method available, which returns its
      favourite move`, () => {
    const watchog = new Pokemon(`Watchog`, 60, 85, `Watch out!!`, `Illuminate`);
    const bulbasaur = new Grass_Pokemon(
      `Bulbasaur`,
      45,
      49,
      `Bulbaa!!`,
      `Overgrow`
    );

    const squirtle = new Water_Pokemon(
      `Squirtle`,
      44,
      48,
      `Squirtle, squirtle!!`,
      `Torrent`
    );
    const charmander = new Fire_Pokemon(
      `Charmander`,
      39,
      52,
      `Chaaar!!`,
      `Blaze`
    );
    expect(watchog.useYourMoves()).toBe(`Illuminate`);
    expect(bulbasaur.useYourMoves()).toBe(`Overgrow`);
    expect(squirtle.useYourMoves()).toBe(`Torrent`);
    expect(charmander.useYourMoves()).toBe(`Blaze`);
  });
});
