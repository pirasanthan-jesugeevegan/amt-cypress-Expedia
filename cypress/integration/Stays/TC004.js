const stayPage = require("../../pageObject/stays.json");

Given("the user selects {string} starts", (start) => {
  if (start === "1") {
    cy.get(stayPage.star1).click();
  } else if (start === "2") {
    cy.get(stayPage.star2).click();
  } else if (start === "3") {
    cy.get(stayPage.star3).click();
  } else if (start === "4") {
    cy.get(stayPage.star4).click();
  } else if (start === "5") {
    cy.get(stayPage.star5).click();
  }
});

Given("the user selects the first deal", () => {
  cy.get("li").first().click();
});
