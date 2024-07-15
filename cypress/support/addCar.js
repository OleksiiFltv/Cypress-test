class Garage {
  visit() {
    cy.visit("/panel/garage");
  }

  addCar(brand, model, mileage) {
    const addCarBtn = "app-garage button";
    const addBtn = "app-add-car-modal button.btn-primary";
    cy.get(addCarBtn).click();
    cy.get("#addCarBrand").select(brand);
    cy.get("#addCarModel").select(model);
    cy.get("#addCarMileage").type(mileage);
    cy.get(addBtn).click();
  }
}
const garage = new Garage();

export default garage;
