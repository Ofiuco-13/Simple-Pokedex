import { showTotalPokemon, showPokemonList } from "./interface/list.js";
import { showButtons } from "./interface/buttons.js";

const start = (api) => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      showTotalPokemon(res.count);
      showPokemonList(res.results);
      showButtons(res);
    });
};

document.addEventListener("click", (e) => {
  if (e.target.matches("#buttons a")) {
    e.preventDefault();
    removePreviousPokemons();
    start(e.target.getAttribute("href"));
  }
});

const removePreviousPokemons = () => {
  document.querySelector("#list-container").innerHTML = "";
};

export default start;
