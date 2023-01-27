describe("Kittens App E2E", () => {
  it("should open the application in the browser", () => {
    cy.visit("http://localhost:3000");
  });
  it("should select and display Leo kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Leo").click();
  });
  it("should select and display Jasmine kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Jasmine").click();
  });
  it("should select and display Martha kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("MARTHA").click();
  });
  it("should select and display Toby kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Toby").click();
  });
  it("should select and display Vienna kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Vienna").click();
  });
  it("should select and display Joey kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Joey").click();
  });
  it("should select and display Mary kitten", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Mary").click();
  });
});
