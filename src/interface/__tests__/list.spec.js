/**
 * @jest-environment jsdom
 */

import { showPokemonList, showTotalPokemon, showPokemon } from "../list.js";
import page1 from "../../../cypress/fixtures/page1.json";
import bulbasaur from "../../../cypress/fixtures/bulbasaur.json";
import fixture from "../../__tests__/pokedex.fixture.js";

document.body.innerHTML = fixture;

test("tests showPokemonList function", () => {
  showPokemonList(page1.results);
  expect(document.querySelectorAll("#list-container .pokemon").length).toBe(40);
  expect(
    document.querySelectorAll("#list-container .pokemon")[0].innerHTML
  ).toBe("bulbasaur");
  expect(
    document.querySelectorAll("#list-container .pokemon")[3].innerHTML
  ).toBe("charmander");
});

test("tests showTotalPokemon function", () => {
  showTotalPokemon(page1.count);
  expect(document.querySelector("#total-pokemon").innerHTML).toBe("1126");
});

test("tests showPokemon function", () => {
  showPokemon(bulbasaur);
});
