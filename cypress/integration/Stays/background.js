const stayPage = require('../../pageObject/stays.json')

Given('the user navigates to stays page', () => {
    
    cy.visit('/Hotels', {failOnStatusCode:false}).wait(3000)
    cy.get(stayPage.moreTravel).click()
    cy.get(stayPage.stays).click()
});
