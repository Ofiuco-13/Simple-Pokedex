import {
  createTypes,
  createAbilities,
  createStats,
} from "./created-elements.js";

export const showPokemonList = (results) => {
  const $listContainer = document.querySelector("#list-container");
  results.forEach((pokemon) => {
    const $pokemon = document.createElement("div");
    $pokemon.innerHTML = pokemon.name;
    $pokemon.classList = `
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

export const loadPokemon = (pokeName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => res.json())
    .then((res) => {
      showPokemon(res);
    });
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
  createTypes(pokemon.types, $types);

  const $abilities = document.createElement("div");
  $abilities.innerHTML = "Abilities: ";
  createAbilities(pokemon.abilities, $abilities);

  const $height = document.createElement("span");
  $height.innerHTML = `Height: ${height}`;
  const $weight = document.createElement("span");
  $weight.innerHTML = ` Weight: ${weight}`;

  const $stats = document.createElement("div");
  $stats.innerHTML = "Stats:";
  createStats(stats, $stats);

  const $baseExperience = document.createElement("div");
  $baseExperience.innerHTML = `Base experiencie: ${base_experience}`;

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

export const removePreviousPokemons = () => {
  document.querySelector("#list-container").innerHTML = "";
};
