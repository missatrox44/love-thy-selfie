import { client_url } from "../config";

describe("Test footer links on web", () => {
  it("Redirects user to section of page or page view", () => {
    cy.visit(`${client_url}`);
    cy.url().should("include", "/");

    cy.get("footer").find("a").contains("Events").click({ force: true });
    cy.url().should("include", "/#photoGallery");

    cy.get("footer").find("a").contains("Service Area").click({ force: true });
    cy.url().should("include", "/#serviceArea");

    cy.get("footer").find("a").contains("About").click({ force: true });
    cy.url().should("include", "/#about");

    cy.get("footer").find("a").contains("Reviews").click({ force: true });
    cy.url().should("include", "/#reviews");

    cy.get("footer").find("a").contains("Book Now").click({ force: true });
    cy.url().should("include", "/contact");

    //TODO test Facebook link redirects user
    //TODO test email to open email app
    //TODO test phone number opens facetime or similar voice app
    //TODO test S.B & A.C. redirects to personal portfolios

  
  });
});
