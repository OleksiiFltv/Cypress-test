class Expense {
  visit() {
    let visitFuelExpense = ".sidebar-wrapper nav a:nth-child(2)";
    cy.get(visitFuelExpense).click();
  }

  fillExpense(mileage, liters, cost) {
    let addExpenseBtn = "app-fuel-expenses .panel-page_heading > div > button";
    let addInfo =
      "app-add-expense-modal .modal-footer > button.btn.btn-primary";
    cy.get(addExpenseBtn).click();
    cy.get("#addExpenseMileage").clear().type(mileage);
    cy.get("#addExpenseLiters").type(liters);
    cy.get("#addExpenseTotalCost").type(cost);
    cy.get(addInfo).click();
  }
}
const expense = new Expense();
export default expense;
