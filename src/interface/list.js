import {
  createTypes,
  createAbilities,
  createStats,
} from "./created-elements.js";
import { loadPokemon } from "../storage.js";

export const showPokemonList = (results) => {
  const $listContainer = document.querySelector("#list-container");
  results.forEach((pokemon) => {
    const $pokemon = document.createElement("div");
    $pokemon.innerHTML = pokemon.name;
    $pokemon.classList = `
    pokemon
    p-6 
    mt-2 
    border 
    border-gray-300
    rounded-lg 
    bg-white 
    cursor-pointer
    `;
    $pokemon.addEventListener("click", () => {
      loadPokemon(pokemon.name);
    });
    $listContainer.appendChild($pokemon);
  });
};

export const showTotalPokemon = (count) => {
  document.querySelector("#total-pokemon").innerHTML = count;
};

export const showPokemon = (pokemon) => {
  const {
    id,
    sprites: { front_default },
    height,
    weight,
    stats,
    base_experience,
  } = pokemon;

  const $pokeDetails = document.querySelector("#pokemon");
  const $pokeId = document.createElement("span");
  $pokeId.innerHTML = id;

  const $pokeImg = document.createElement("img");
  $pokeImg.setAttribute("src", `${front_default}`);

  const $types = document.createElement("div");

  const $abilities = document.createElement("div");
  $abilities.innerHTML = "Abilities: ";

  const $height = document.createElement("span");
  $height.innerHTML = `Height: ${height}`;
  const $weight = document.createElement("span");
  $weight.innerHTML = ` Weight: ${weight}`;

  const $stats = document.createElement("div");
  $stats.innerHTML = "Stats:";

  const $baseExperience = document.createElement("div");
  $baseExperience.innerHTML = `Base experiencie: ${base_experience}`;

  createTypes(pokemon.types, $types);
  createAbilities(pokemon.abilities, $abilities);
  createStats(stats, $stats);
  removePokemonDetails();

  $pokeDetails.append(
    $pokeId,
    $pokeImg,
    $types,
    $abilities,
    $height,
    $weight,
    $stats,
    $baseExperience
  );
};

export const removePokemonDetails = () => {
  document.querySelector("#pokemon").innerHTML = "";
};
