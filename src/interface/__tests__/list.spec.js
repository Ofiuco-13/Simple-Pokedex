/**
 * @jest-environment jsdom
 */

import { showPokemonList } from "../list.js";
import { loadPokemon } from "../../storage.js";
import page1 from "../../../cypress/fixtures/page1.json";
import fixture from "../../__tests__/pokedex.fixture.js";

test("foo", () => {
  showPokemonList(page1.results);
  document.body.innerHTML = fixture;
  expect(document.querySelector("#list-container").children.length).toBe(20);
  expect(document.querySelector("#list-container").children[0].innerHTML).toBe(
    "bulbasaur"
  );
  expect(document.querySelector("#list-container").children[3].innerHTML).toBe(
    "charmander"
  );
  loadPokemon(page1.results.name);
});
