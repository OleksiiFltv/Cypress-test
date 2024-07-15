import garage from "../../support/addCar";
import expense from "../../support/fuelExpense";

describe("Add car and fuel expenses", () => {
  beforeEach(() => {
    const user = Cypress.config("user");
    const loginButtonSelector =
      "ngb-modal-window app-signin-modal button.btn.btn-primary";

    cy.visit("/");
    cy.get(".btn.btn-outline-white").click();
    cy.get("#signinEmail").type(user.email);
    cy.get("#signinPassword").type(user.password);
    cy.get(loginButtonSelector).click();
  });

  it("add car", () => {
    garage.addCar("Ford", "Focus", 100);
    cy.contains("Ford Focus").should("be.visible");
  });

  it("fill expense", () => {
    expense.visit();
    expense.fillExpense(120, 10, 20);
    cy.contains("120").should("be.visible");
    cy.contains("10L").should("be.visible");
    cy.contains("20.00 USD").should("be.visible");
  });
});
