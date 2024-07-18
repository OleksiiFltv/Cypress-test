import garage from "../../support/addCar";
import carBrands from "../../support/carBrands";
import carModels from "../../support/carModels";

describe("add car and API testing", () => {
  it("create car and verify request", () => {
    const user = Cypress.config("user");
    const loginButtonSelector =
      "ngb-modal-window app-signin-modal button.btn.btn-primary";
    const carBrand = carBrands.BMW;
    const carModel = carModels.BMW[10];
    const carMileage = 50;

    cy.visit("/");
    cy.get(".btn.btn-outline-white").click();
    cy.get("#signinEmail").type(user.email);
    cy.get("#signinPassword").type(user.password);
    cy.get(loginButtonSelector).click();

    cy.intercept("POST", "/api/cars").as("postCar");
    garage.addCar(carBrand.title, carModel.title, carMileage);
    cy.contains("BMW Z3").should("be.visible");
    cy.wait("@postCar")
      .its("request.body")
      .should((body) => {
        console.log("Request body:", body);
        expect(body).to.have.property("carBrandId", carBrand.id);
        expect(body).to.have.property("carModelId", 10);
        expect(body).to.have.property("mileage", carMileage);
      });
  });
});
