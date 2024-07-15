import garage from "../../support/addCar";
import expense from "../../support/fuelExpense";

describe("Add car and fuel expenses", () => {
  beforeEach(() => {
    const baseUrl = Cypress.config("baseUrl");
    const user = Cypress.config("user");
    const loginButtonSelector =
      "body > ngb-modal-window > div > div > app-signin-modal > div.modal-footer.d-flex.justify-content-between > button.btn.btn-primary";

    cy.visit(baseUrl);
    cy.get(".btn.btn-outline-white").click();
    cy.get("#signinEmail").type(user.email);
    cy.get("#signinPassword").type(user.password);
    cy.get(loginButtonSelector).click();
  });

  it("login and add car", () => {
    garage.addCar("Ford", "Focus", 100);
    cy.contains("Ford Focus").should("be.visible");
  });

  it("login and add fuel expenses", () => {
    expense.visit();
    expense.fuelExpense(120, 10, 20);
    cy.contains("120").should("be.visible");
    cy.contains("10L").should("be.visible");
    cy.contains("20.00 USD").should("be.visible");
  });
});
