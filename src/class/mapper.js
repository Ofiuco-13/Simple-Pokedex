import Pokemon from "./pokemon.js";

const mapPokemon = (pokeData) => {
  const {
    id,
    sprites: { front_default },
    weight,
    height,
    base_experience,
    stats,
    abilities,
    types,
  } = pokeData;

  return new Pokemon(
    id,
    front_default,
    weight,
    height,
    base_experience,
    stats.map((key) => key.base_stat && key.stat.name),
    abilities.map((key) => key.ability.name),
    types.map((key) => key.type.name)
  );
};

export default mapPokemon;
