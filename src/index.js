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
  } = pokemon;

  const $pokeDetails = document.querySelector("#pokemon");
  const $pokeId = document.createElement("span");
  $pokeId.innerHTML = id;

  const $pokeImg = document.createElement("img");
  $pokeImg.setAttribute("src", `${front_default}`);

  $pokeDetails.append($pokeId, $pokeImg);
};

start();
