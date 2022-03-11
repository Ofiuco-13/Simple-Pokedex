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
      console.log(pokemon.url);
    });
    $listContainer.appendChild($pokemon);
  });
};

start();
