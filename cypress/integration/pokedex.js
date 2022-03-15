/// <reference types="Cypress" />

describe("Pokedex", () => {
  before(() => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20", {
      fixture: "page1.json",
    }).as("obtainFirstPage");

    cy.visit("http://127.0.0.1:8080");
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
    cy.intercept("https://pokeapi.co/api/v2/pokemon/bulbasaur", {
      fixture: "bulbasaur.json",
    }).as("bulbasaur");
    cy.contains("bulbasaur").click();
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
