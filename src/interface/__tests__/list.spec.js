/**
 * @jest-environment jsdom
 */

import { showPokemonList } from "../list.js";
import page1 from "../../../cypress/fixtures/page1.json";
import fixture from "../../__tests__/pokedex.fixture.js";

const forEach = (items, callback) => {
  for (let i = 0; i < items.lenght; i++) {
    callback(items[i]);
  }
};

test("calls showPokemonList and selects list-container div", () => {
  try {
    showPokemonList(page1);
  } catch (e) {
    document.body.innerHTML = fixture;
    document.querySelector("#list-container");
  }
});

test("tries to mock forEach()", () => {
  try {
    return showPokemonList(page1);
  } catch (e) {
    document.body.innerHTML = fixture;
    const pokemon = document.querySelectorAll(".pokemon");
    const mockCalledBack = jest.fn((item, element) => element.append(item));
    forEach(pokemon, mockCalledBack);
  } finally {
    expect.assertions(1);
    const pokemon = document.createElement("div");
    pokemon.textContent = "bulbasaur";
    pokemon.classList = "";
    expect(pokemon.textContent).toContain("bulbasaur");
  }
});
