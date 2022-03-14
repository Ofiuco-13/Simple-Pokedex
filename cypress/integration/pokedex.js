/// <reference types="Cypress" />

describe("Pokedex", () => {
  before(() => {
    cy.visit("http://127.0.0.1:8080");
  });
  it("Does something", () => {});
});
