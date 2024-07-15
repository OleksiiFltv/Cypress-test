class Garage {
  visit() {
    cy.visit("/panel/garage");
  }

  addCar(brand, model, mileage) {
    let addCarBtn =
      "body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-garage > div > div.panel-page_heading.d-flex.justify-content-between > button";
    let addBtn =
      "body > ngb-modal-window > div > div > app-add-car-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary";
    cy.get(addCarBtn).click();
    cy.get("#addCarBrand").select(brand);
    cy.get("#addCarModel").select(model);
    cy.get("#addCarMileage").type(mileage);
    cy.get(addBtn).click();
  }
}
const garage = new Garage();

export default garage;
