/// <reference types="Cypress" />

describe("Pokedex", () => {
  let fetchPolyfill;

  before(() => {
    const polifillUrl = "https://unpkg.com/unfetch@4.2.0/dist/unfetch.umd.js";

    cy.request(polifillUrl).then((response) => {
      fetchPolyfill = response.body;
    });

    cy.intercept(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
      "fixture:listing-page-1"
    ).as("obtainFirstPage");

    cy.visit("http://127.0.0.1:8080", {
      onBeforeLoad(contentWindow) {
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
  });

  it("loads a pokemon when selected from the list", () => {
    const typesQuantity = 2;
    cy.intercept(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur",
      "fixture:bulbasaur"
    ).as("obtainBulbasaur");
  });
});
