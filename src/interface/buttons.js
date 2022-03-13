import { removePreviousPokemons } from "./list.js";
import { start } from "../pokedex.js";

export const showButtons = (res) => {
  const $prevButton = document.querySelector("#prev-button");
  const $nextButton = document.querySelector("#next-button");

  $prevButton.href = res.previous;
  $nextButton.href = res.next;

  if ($prevButton.href === "http://127.0.0.1:5500/null") {
    $prevButton.classList = "hidden";
  } else {
    $prevButton.classList.remove("hidden");
  }
};

document.addEventListener("click", (e) => {
  if (e.target.matches("#buttons a")) {
    e.preventDefault();
    removePreviousPokemons();
    start(e.target.getAttribute("href"));
  }
});
