import { client_url } from "../config";

describe("Test navbar links on web", () => {
  it("Redirects user to section of page or page view", () => {
    cy.visit(`${client_url}`);
    cy.url().should("include", "/");

    cy.get("nav").find("a").contains("About").click({ force: true });
    cy.url().should("include", "/#about");

    cy.get("nav").find("a").contains("Reviews").click({ force: true });
    cy.url().should("include", "/#reviews");

    cy.get("nav").find("a").contains("Contact").click({ force: true });
    cy.url().should("include", "/contact");
  });
});
