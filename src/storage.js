import { showPokemon } from "./interface/list.js";

export const loadPokemon = async (pokeName) => {
  if (pokeName === undefined) {
    throw new Error("A name is needed to load a pokemon");
  }
  let pokemon = loadPokemonFromLS(pokeName);
  if (pokemon === null) {
    pokemon = await loadPokemonFromAPI(pokeName);
    savePokemonOnLS(pokemon);
  }
  showPokemon(pokemon);
};

export const loadPokemonFromLS = (pokeName) => {
  const pokemon = localStorage.getItem(pokeName);
  if (pokemon === null) return null;
  return JSON.parse(pokemon);
};

export const loadPokemonFromAPI = async (pokeName) => {
  if (pokeName === undefined) {
    throw new Error("A name is needed to load a pokemon");
  }
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  return await data.json();
};

export const savePokemonOnLS = (pokemon) => {
  if (pokemon === null || pokemon === undefined) {
    throw new Error("A pokemon is needed to save it in localStorage");
  }
  localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
};
