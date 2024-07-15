describe("sign up", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto2.forstudy.space");
  });

  it("check all buttons in header", () => {
    cy.get(".hero-descriptor_btn").should("be.visible");
  });

  it("check all buttons in fotter", () => {
    cy.get(".contacts_socials")
      .find("a:nth-child(1) > span")
      .should("be.visible");
    cy.get(".contacts_socials")
      .find("a:nth-child(2) > span")
      .should("be.visible");
    cy.get(".contacts_socials")
      .find("a:nth-child(3) > span")
      .should("be.visible");
    cy.get(".contacts_socials")
      .find("a:nth-child(4) > span")
      .should("be.visible");
    cy.get(".contacts_socials")
      .find("a:nth-child(5) > span")
      .should("be.visible");
    cy.get(".col-md-6")
      .find(".contacts_link.display-4")
      .contains("ithillel.ua");
    cy.get(".col-md-6")
      .find(".contacts_link.h4")
      .contains("support@ithillel.ua");
  });
});
