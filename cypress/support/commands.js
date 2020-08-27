const stayPage = require("../pageObject/stays.json");

Cypress.Commands.add("Location", (Data) => {
  if (Data) {
    cy.get(stayPage.destination).click();
    cy.get(stayPage.destinationSearch).type(Data);
    cy.contains(Data).click();
  } else {
    //do nothing
  }
});

Cypress.Commands.add("CheckIn", (Data) => {
  cy.get(stayPage.departureDate).click();
  cy.get(stayPage.leftArrow).dblclick();
  cy.get(stayPage.dateContainter).should("have.attr", "data-day", Data).click();
  cy.get(stayPage.DataPickerDoneButton).click();
});

Cypress.Commands.add("CheckOut", (Data) => {
  cy.get(stayPage.arrivalDate).click();
  cy.get(stayPage.arrivalDataContainer)
    .should("have.attr", "data-day", Data)
    .click();
  cy.get(stayPage.DataPickerDoneButton).click();
});

Cypress.Commands.add("travellers", (adult, children, childrenAge) => {
  const totalTravellers = Number(adult) + Number(children);

  cy.get(stayPage.travellers).click();

  if (adult === "1") {
    cy.get(stayPage.adultMinus).click();
  } else if (adult === "2") {
  } else if (adult === "3") {
    cy.get(stayPage.adultPlus).click();
  } else if (adult === "4") {
    cy.get(stayPage.adultPlus).dblclick();
  } else if (adult === "5") {
    cy.get(stayPage.adultPlus).click();
    cy.get(stayPage.adultPlus).dblclick();
  }

  if (children === "1") {
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === "2") {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === "3") {
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === "4") {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === "5") {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenAge).select(childrenAge);
  }

  cy.get(stayPage.totalTravellers).contains(
    "1 room, " + totalTravellers + " travellers"
  );
  cy.contains("Done").click();
});
