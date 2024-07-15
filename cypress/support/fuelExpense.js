class Expense {
  visit() {
    let visitFuelExpense =
      "body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-3.d-none.d-lg-block.sidebar-wrapper > nav > a:nth-child(2)";
    cy.get(visitFuelExpense).click();
  }

  fuelExpense(mileage, liters, cost) {
    let addExpenseBtn =
      "body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-fuel-expenses > div > div.panel-page_heading.d-flex.flex-column.flex-lg-row > div > button";
    let addInfo =
      "body > ngb-modal-window > div > div > app-add-expense-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary";
    let addTotalCost = "#addExpenseTotalCost";
    cy.get(addExpenseBtn).click();
    cy.get("#addExpenseMileage").clear().type(mileage);
    cy.get("#addExpenseLiters").type(liters);
    cy.get(addTotalCost).type(cost);
    cy.get(addInfo).click();
  }
}
const expense = new Expense();
export default expense;
