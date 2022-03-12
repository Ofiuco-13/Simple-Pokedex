const start = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((res) => {
      showTotalPokemon(res.count);
      showPokemonList(res.results);
    });
};

const showTotalPokemon = (count) => {
  document.querySelector("#total-pokemon").innerHTML = count;
};

const showPokemonList = (results) => {
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

const loadPokemon = (pokeName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => res.json())
    .then((res) => {
      showPokemon(res);
    });
};

const showPokemon = (pokemon) => {
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

  removePreviousPokemon();

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

const createTypes = (types, div) => {
  types.forEach((key) => {
    const $typeSpan = document.createElement("span");
    $typeSpan.innerHTML = key.type.name;
    $typeSpan.classList = "mr-2";
    div.append($typeSpan);
  });
};

const createAbilities = (abilities, div) => {
  abilities.forEach((key) => {
    const $abilitySpan = document.createElement("span");
    $abilitySpan.innerHTML = key.ability.name;
    $abilitySpan.classList = "mr-2";
    div.append($abilitySpan);
  });
};

const createStats = (stats, div) => {
  stats.forEach((key) => {
    const $statDiv = document.createElement("div");
    $statDiv.innerHTML = `${key.base_stat}: ${key.stat.name}`;
    div.append($statDiv);
  });
};

const removePreviousPokemon = () => {
  document.querySelector("#pokemon").innerHTML = "";
};

start();
