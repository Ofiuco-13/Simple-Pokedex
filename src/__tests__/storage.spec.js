import { loadPokemon } from "../storage.js";
import bulbasaur from "../../cypress/fixtures/bulbasaur.json";

beforeEach(() => {
  global.fetch = jest.fn();
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

describe("tests loadPokemon function", () => {
  test("throws error if pokemon is undefined", async () => {
    expect.assertions(2);
    try {
      return await loadPokemon(undefined);
    } catch (error) {
      expect(error.message).toBe("A name is needed to load a pokemon");
      expect(global.fetch).toHaveBeenCalledTimes(0);
    }
  });
  test("if pokemon is null, fetch the original api", async () => {
    try {
      return await localStorageMock.getItem(null);
    } catch (error) {
      global.fetch.mockImplementationOnce(() => {
        new Promise((resolve) => {
          const jsonPromise = new Promise((r) => {
            r({});
          });
          resolve({ json: () => jsonPromise });
        });
      });
      loadPokemon("bulbasur");
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );

      localStorageMock.setItem("bulbasaur", bulbasaur);
    }
  });
});
