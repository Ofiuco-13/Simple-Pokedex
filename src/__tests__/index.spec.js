import start from "../pokedex.js";
import "../index.js";

jest.mock("../pokedex.js", () => jest.fn());

test("starts pokedex", () => {
  expect.assertions(1);
  expect(start).toHaveBeenCalledTimes(1);
});
