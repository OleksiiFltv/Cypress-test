describe("Registration", () => {
  const user = {
    url: "https://guest:welcome2qauto@qauto.forstudy.space",
    email: "a.filatov1@yopmail.com",
    name: "Alexey",
    secondName: "Filatov",
    pass: "Aaa!1234",
  };

  beforeEach(() => {
    cy.visit(user.url);
    cy.get(".hero-descriptor_btn").click();
  });

  it("Registration title, error in empty fields and border color", () => {
    cy.contains("Registration").should("be.visible");
    cy.get("#signupName").click();
    cy.get("#signupLastName").click();
    cy.get("#signupName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Name required");
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    cy.get("#signupEmail").click();
    cy.get("#signupLastName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Last name required");
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    cy.get("#signupPassword").click();
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email required");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    cy.get("#signupRepeatPassword").click();
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Password required");
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Re-enter password required");
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Name field", () => {
    // имя из пробелов
    cy.get("#signupName").type("    ");
    cy.get("#signupLastName").click(); // клик на другое поле для проверки валидации
    cy.get("#signupName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Name is invalid");
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя из 1 буквы
    cy.get("#signupName").clear().type("S");
    cy.get("#signupLastName").click(); // клик на другое поле для проверки валидации
    cy.get("#signupName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Name has to be from 2 to 20 characters long");
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя из 21 буквы
    cy.get("#signupName").clear().type("Polyentolyekmongtainh");
    cy.get("#signupLastName").click(); // клик на другое поле для проверки валидации
    cy.get("#signupName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Name has to be from 2 to 20 characters long");
    cy.get("#signupName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя с пробелами
    let nameWithSpaces = "   Alex   ".trim();
    cy.get("#signupName").clear().type(nameWithSpaces);
    cy.get("#signupLastName").click(); // клик на другое поле для проверки валидации
    cy.get("#signupName")
      .parent()
      .find(".invalid-feedback")
      .should("not.exist");
  });
  it("Last name field", () => {
    // имя из пробелов
    cy.get("#signupLastName").type("    ");
    cy.get("#signupEmail").click(); // клик на другое поле для проверки валидации
    cy.get("#signupLastName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Last name is invalid");
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя из 1 буквы
    cy.get("#signupLastName").clear().type("S");
    cy.get("#signupEmail").click(); // клик на другое поле для проверки валидации
    cy.get("#signupLastName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Last name has to be from 2 to 20 characters long");
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя из 21 буквы
    cy.get("#signupLastName").clear().type("Polyentolyekmongtainh");
    cy.get("#signupEmail").click(); // клик на другое поле для проверки валидации
    cy.get("#signupLastName")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Last name has to be from 2 to 20 characters long");
    cy.get("#signupLastName").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // имя с пробелами
    let lastNameWithSpaces = "   Alex   ".trim();
    cy.get("#signupLastName").clear().type(lastNameWithSpaces);
    cy.get("#signupEmail").click(); // клик на другое поле для проверки валидации
    cy.get("#signupLastName")
      .parent()
      .find(".invalid-feedback")
      .should("not.exist");
  });

  it("email", () => {
    // valid mail
    cy.get("#signupEmail").type(user.email);
    cy.get("#signupPassword").click();
    cy.get("#signupEmail").should("not.contain", "Email is incorrect");

    // без @
    cy.get("#signupEmail").clear().type("invalidMailgmail.com");
    cy.get("#signupPassword").click();
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // без .com
    cy.get("#signupEmail").clear().type("alex@gmail");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // 2 @
    cy.get("#signupEmail").clear().type("alex@@gmail.com");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // две точки
    cy.get("#signupEmail").clear().type("alex@gmail..com");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // not english letters
    cy.get("#signupEmail").clear().type("alex@gmail.ком");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // без @gmail.com
    cy.get("#signupEmail").clear().type("alex");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // просто @gmail.com
    cy.get("#signupEmail").clear().type("@gmail.com");
    cy.get("#signupEmail")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Email is incorrect");
    cy.get("#signupEmail").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("password", () => {
    // 8 symbols, one integer, one capital, and one small letter
    cy.get("#signupPassword").type("Aaa!1234");
    cy.get("#signupPassword").should(
      "not.contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    // 15 symbols, one integer, one capital, and one small letter
    cy.get("#signupPassword").type("Aaa!12345678909");
    cy.get("#signupPassword").should(
      "not.contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    // 8 symbols, one integer, one capital, and one small letter
    cy.get("#signupPassword").type("Aaa12345");
    cy.get("#signupPassword").should(
      "not.contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    // one integer
    cy.get("#signupPassword").clear().type("1");
    cy.get("#signupEmail").click();
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // 16 symbols
    cy.get("#signupPassword").clear().type("Aaa!123456789085");
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without capital letter
    cy.get("#signupPassword").clear().type("aaa!1234");
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without small letter
    cy.get("#signupPassword").clear().type("AAA!1234");
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without one integer
    cy.get("#signupPassword").clear().type("Aaaaaaaa");
    cy.get("#signupPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Re-enter password", () => {
    // matching
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").type("Aaa!1234");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword").should(
      "not.contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    // 15 symbols, one integer, one capital, and one small letter
    cy.get("#signupPassword").clear().type("Aaa!12345678909");
    cy.get("#signupRepeatPassword").clear().type("Aaa!12345678909");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword").should(
      "not.contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
    // Re-enter password 1 symbol
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("A");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );

    // Re-enter password 7 symbols
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("Aaa!123");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // Re-enter password 9 symbols
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("Aaa!12345");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Passwords do not match");
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // Re-enter password 14 symbols
    cy.get("#signupPassword").clear().type("Aaa!12345678909");
    cy.get("#signupRepeatPassword").clear().type("Aaa!1234567890");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Passwords do not match");
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // Re-enter password 16 symbols
    cy.get("#signupPassword").clear().type("Aaa!12345678909");
    cy.get("#signupRepeatPassword").clear().type("Aaa!123456789091");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without small letter
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("AAA!1234");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without capital letter
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("aaa!1234");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
    // without integer
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("Aaaaaaaa");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should(
        "contain",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      );
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );

    // Passwords do not match
    cy.get("#signupPassword").clear().type("Aaa!1234");
    cy.get("#signupRepeatPassword").clear().type("Aaa!1235");
    cy.get("#signupPassword").click();
    cy.get("#signupRepeatPassword")
      .parent()
      .find(".invalid-feedback")
      .should("contain", "Passwords do not match");
    cy.get("#signupRepeatPassword").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("register button", () => {
    let register =
      "body > ngb-modal-window > div > div > app-signup-modal > div.modal-footer > button";
    // invalid name
    cy.get("#signupName").type("A");
    cy.get("#signupLastName").type(user.secondName);
    cy.get("#signupEmail").type(user.email);
    cy.get("#signupPassword").type(user.pass);
    cy.get("#signupRepeatPassword").type(user.pass);
    cy.get(register).should("be.disabled");
    // invalid second name
    cy.get("#signupName").clear().type(user.name);
    cy.get("#signupLastName").clear().type("U");
    cy.get("#signupEmail").clear().type(user.email);
    cy.get("#signupPassword").clear().type(user.pass);
    cy.get("#signupRepeatPassword").clear().type(user.pass);
    cy.get(register).should("be.disabled");
    // invalid email
    cy.get("#signupName").clear().type(user.name);
    cy.get("#signupLastName").clear().type(user.secondName);
    cy.get("#signupEmail").clear().type("email@gmail");
    cy.get("#signupPassword").clear().type(user.pass);
    cy.get("#signupRepeatPassword").clear().type(user.pass);
    cy.get(register).should("be.disabled");
    // invalid password
    cy.get("#signupName").clear().type(user.name);
    cy.get("#signupLastName").clear().type(user.secondName);
    cy.get("#signupEmail").clear().type(user.email);
    cy.get("#signupPassword").clear().type("A");
    cy.get("#signupRepeatPassword").clear().type(user.pass);
    cy.get(register).should("be.disabled");
    // invalid password
    cy.get("#signupName").clear().type(user.name);
    cy.get("#signupLastName").clear().type(user.secondName);
    cy.get("#signupEmail").clear().type(user.email);
    cy.get("#signupPassword").clear().type(user.pass);
    cy.get("#signupRepeatPassword").clear().type("A");
    cy.get(register).should("be.disabled");
    // valid user
    // cy.get("#signupName").clear().type(user.name);
    // cy.get("#signupLastName").clear().type(user.secondName);
    // cy.get("#signupEmail").clear().type(user.email);
    // cy.get("#signupPassword").clear().type(user.pass);
    // cy.get("#signupRepeatPassword").clear().type(user.pass);
    // cy.get(register).should("not.be.disabled").click();
  });

  Cypress.Commands.add("login", () => {
    let login =
      "body > ngb-modal-window > div > div > app-signin-modal > div.modal-footer.d-flex.justify-content-between > button.btn.btn-primary";
    cy.visit(user.url);
    cy.get(".btn.btn-outline-white").click();
    cy.get("#signinEmail").type(user.email);
    cy.get("#signinPassword").type(user.pass, { sensitive: true });
    cy.get(login).click();
  });

  Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false;
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: "type",
        message: "*".repeat(text.length),
      });
    }

    return originalFn(element, text, options);
  });

  it("should log in with the newly registered user", () => {
    cy.login(user.email, user.pass);
    cy.contains("Garage").should("be.visible");
  });
});
