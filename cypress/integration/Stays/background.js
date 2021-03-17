const stayPage = require('../../pageObject/stays.json');

Given('the user navigates to home page', () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.reload();
  cy.visit('/');
  cy.get(stayPage.stays)
    .should('be.visible')
    .and('have.class', 'bui-tab__link--selected');
});
