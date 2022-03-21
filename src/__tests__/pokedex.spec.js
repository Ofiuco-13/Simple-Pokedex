/**
 * @jest-environment jsdom
 */

import fixture from "./pokedex.fixture.js";
import start from "../pokedex.js";
import page1 from "../../cypress/fixtures/page1.json";

global.fetch = jest.fn();
jest.mock("../pokedex.js", () => jest.fn());

test("starts pokedex", () => {
  document.body.innerHTML = fixture;
  global.fetch.mockImplementationOnce(() => {
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(page1);
      });
      resolve({ json: () => jsonPromise });
    });
  });
  start();
  expect.assertions(4);
  expect(document.querySelector("#prev-button").innerHTML).toContain("Prev");
  expect(document.querySelector("#next-button").innerHTML).toContain("Next");
  expect(document.querySelector("#total-pokemon").innerHTML).toContain("1126");
  expect(document.querySelectorAll("#list-container .pokemon")).toHaveLength(
    20
  );
});
