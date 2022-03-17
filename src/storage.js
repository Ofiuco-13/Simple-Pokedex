import { showPokemon } from "./interface/list.js";

export const loadPokemon = async (pokeName) => {
  if (pokeName === undefined || pokeName === null) {
    throw new Error("A name is needed to load a pokemon");
  }

  let pokemon = loadPokemonFromLS(pokeName);

  if (pokemon === null) {
    pokemon = await loadPokemonFromAPI(pokeName);
    savePokemonOnLS(pokemon);
  }
  showPokemon(pokemon);
};

const loadPokemonFromLS = (pokeName) => {
  const pokemon = localStorage.getItem(pokeName);
  if (pokemon === null) return null;
  return JSON.parse(pokemon);
};

const loadPokemonFromAPI = async (pokeName) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  return await data.json();
};

const savePokemonOnLS = (pokemon) => {
  if (pokemon === null || pokemon === undefined) {
    throw new Error("A pokemon is needed to save it in localStorage");
  }
  localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
};
