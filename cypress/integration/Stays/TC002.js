const { should } = require('chai');
const stayPage = require('../../pageObject/stays.json');

Given('the user is on stay page', () => {
  cy.title().should('eq', 'Hotels | Book Cheap Hotels with Expedia');
});

When('the user enters', (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.Location(element.Location);
    cy.CheckInOut(element.CheckIn);
    cy.travellers('2', '1', '6');
    cy.contains('Search').click;
  });
});

Given('the user clicks on Search button', () => {
  cy.get(stayPage.search_hotel).click();
});

Given('{string} should be shown', (expected) => {
  cy.get(stayPage.ConfirmLocation).should('be.visible').contains(expected);
  cy.get('#onetrust-accept-btn-handler').click();
});

const implementation = (elementKey, value) => {
  const element = stayPage[elementKey];
  cy.get(element).contains(value);
};

Given('the field {string} contains {string}', (field, value) => {
  implementation(field, value);
});
