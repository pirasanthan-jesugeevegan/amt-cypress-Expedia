const stayPage = require('../../pageObject/stays.json')
const implementation = (elementKey, condition) => {

    const element = stayPage[elementKey];
    cy.get(element).should(condition);
};

Given('the field {string} is visible', (elementKey) => {
    implementation(elementKey, 'be.visible');
});

Given('the user navigates to {string}', (url) => {
    cy
        .visit({url, failOnStatusCode:false})
       .wait(3000)
});