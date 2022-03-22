/**
 * @jest-environment jsdom
 */

import {
  loadPokemon,
  loadPokemonFromAPI,
  loadPokemonFromLS,
  savePokemonOnLS,
} from "../storage.js";
import bulbasaur from "../../cypress/fixtures/bulbasaur.json";
import { showPokemon } from "../interface/list.js";

beforeEach(() => {
  global.fetch = jest.fn();
  JSON.parse = jest.fn();
});

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

test("tests loadPokemon function", async () => {
  expect.assertions(3);
  try {
    return await loadPokemon(undefined);
  } catch (error) {
    expect(error.message).toBe("A name is needed to load a pokemon");
    expect(global.fetch).toHaveBeenCalledTimes(0);
  }
  try {
    return await loadPokemon(null);
  } catch (e) {
    loadPokemonFromLS(null);
    expect(loadPokemonFromLS()).toBeNull();
  }
  try {
    return savePokemonOnLS("bulbasaur");
  } catch (e) {
    showPokemon("bulbasaur");
  }
});

test("tests loadPokemonFromLS function", async () => {
  try {
    return await loadPokemonFromLS("bulbasaur");
  } catch (e) {
    loadPokemonFromLS();
    expect(loadPokemonFromLS()).toReturn(bulbasaur);
  }
});

test("tests loadPokemonFromAPI function", async () => {
  try {
    return await loadPokemonFromAPI(undefined);
  } catch (e) {
    expect(e.message).toBe("A name is needed to load a pokemon");
    expect(global.fetch).toHaveBeenCalledTimes(0);
  }
});

test("tests savePokemonOnLS function", () => {
  expect.assertions(2);
  try {
    return savePokemonOnLS(undefined);
  } catch (error) {
    expect(error.message).toBe(
      "A pokemon is needed to save it in localStorage"
    );
    expect(global.fetch).toHaveBeenCalledTimes(0);
  }
  try {
    return savePokemonOnLS(bulbasaur);
  } catch (e) {
    expect(savePokemonOnLS()).toReturn(
      localStorageMock.setItem("bulbasaur", bulbasaur)
    );
  }
});
