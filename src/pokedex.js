import { showTotalPokemon, showPokemonList } from "./interface/list.js";
import { showButtons } from "./interface/buttons.js";

const pokeApi = "https://pokeapi.co/api/v2/pokemon";
export const start = (api) => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      showTotalPokemon(res.count);
      showPokemonList(res.results);
      showButtons(res);
    });
};

start(pokeApi);
