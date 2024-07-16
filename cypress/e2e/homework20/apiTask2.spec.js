describe("api testing", () => {
  let urlBase = `https://jsonplaceholder.typicode.com/`;

  it("get post by id", () => {
    cy.request("GET", `${urlBase}/posts/1`).its("status").should("equal", 200);
    cy.request("GET", `${urlBase}/posts/1`)
      .its("body")
      .should("include.keys", ["userId", "id", "title", "body"]);
  });

  it("get posts list", () => {
    cy.request("GET", `${urlBase}/posts`).its("status").should("equal", 200);
    cy.request("GET", `${urlBase}/posts`)
      .its("body")
      .should("have.length", 100);
  });

  it("create new post", () => {
    const newPost = {
      title: "It is a new post",
      body: "learning API testing on Cypress",
      userId: 47,
    };
    cy.request({
      url: `${urlBase}/posts`,
      method: "POST",
      body: newPost,
    }).as("methodPost");
    cy.get("@methodPost").should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newPost);
    });
  });

  it("update post by id", () => {
    const id = 1;
    const updatePost = {
      title: "I want to include my own title",
      body: "rock your body, move your body",
      userId: 55,
    };
    cy.request({
      url: `${urlBase}/posts/${id}`,
      method: "PUT",
      body: updatePost,
    }).as("updatePost");
    cy.get("@updatePost").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatePost);
    });
  });

  it("delete post by id", () => {
    const id = 1;
    cy.request({
      url: `${urlBase}/posts/${id}`,
      method: "DELETE",
    }).as("deletePost");
    cy.get("@deletePost").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
