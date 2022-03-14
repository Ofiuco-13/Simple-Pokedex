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

  it("verifies if the prev button is hidden when in first page", () => {
    cy.get("#prev-button").should("have.class", "hidden");
  });

  it("show total pokemon in header", () => {
    cy.get("#total-pokemon").should("have.text", "1126");
  });

  it("loads pokemon list", () => {
    const pokemonsPerPage = 20;
    cy.get(".pokemon").should("have.length", pokemonsPerPage);
  });

  it("loads a pokemon when selected from the list", () => {
    cy.intercept("https://pokeapi.co/api/v2/pokemon/bulbasaur").as(
      "obtainBulbasaur"
    );
    cy.fixture("bulbasaur");
    cy.get(".pokemon").eq(0).click();
    cy.get(".pokemon").eq(1).click();
  });

  it("changes to the next page", () => {
    cy.get("#next-button").click();
  });

  it("shows the prev button", () => {
    cy.get("#prev-button").should("be.visible");
  });

  it("loads selected pokemons", () => {
    cy.get(".pokemon").eq(19).click();
    cy.get(".pokemon").eq(9).click();
    cy.get(".pokemon").eq(17).click();
  });

  it("goes back to the first page", () => {
    cy.get("#prev-button").click();
    cy.get(".pokemon").eq(5).click();
  });
});
