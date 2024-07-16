import garage from "../../support/addCar";

describe("add car and API testing", () => {
  it("create car and verify request", () => {
    const user = Cypress.config("user");
    const loginButtonSelector =
      "ngb-modal-window app-signin-modal button.btn.btn-primary";
    cy.visit("/");
    cy.get(".btn.btn-outline-white").click();
    cy.get("#signinEmail").type(user.email);
    cy.get("#signinPassword").type(user.password);
    cy.get(loginButtonSelector).click();

    cy.intercept("POST", "/api/cars").as("postCar");
    garage.addCar("BMW", "Z3", 50);
    cy.contains("BMW Z3").should("be.visible");
    cy.wait("@postCar")
      .its("request.body")
      .should((body) => {
        expect(body).to.have.property("carBrandId", 2);
        expect(body).to.have.property("carModelId", 10);
        expect(body).to.have.property("mileage", 50);
      });
  });
});
