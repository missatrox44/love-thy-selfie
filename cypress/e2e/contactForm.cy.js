import { client_url } from "../config";

describe("Test contact form", () => {
  it("Shows user toast when submit form", () => {
    cy.visit(`${client_url}`);
    cy.url().should("include", "/");

    cy.get("nav").find("a").contains("Contact").click({ force: true });
    cy.url().should("include", "/contact");

    cy.get('input[name="name"]').type("Andrew Cooke");
    cy.get('input[name="name"]').should("have.value", "Andrew Cooke");

    cy.get('input[name="email"]').type("demo@test.com");
    cy.get('input[name="email"]').should("have.value", "demo@test.com");

    cy.get('input[name="phone"]').type("111-867-5309");
    cy.get('input[name="phone"]').should("have.value", "111-867-5309");

    cy.get('input[name="city"]').type("Odessa");
    cy.get('input[name="city"]').should("have.value", "Odessa");

    cy.get('input[type="date"]').type("2044-10-04");
    cy.get('input[type="date"]').should("have.value", "2044-10-04");

    cy.get('textarea[name="message"]').type("This is a test message.");
    cy.get('textarea[name="message"]').should(
      "have.value",
      "This is a test message."
    );

    cy.get("button").contains("SEND").click();

    cy.contains("Success!").should("be.visible");
  });
});
