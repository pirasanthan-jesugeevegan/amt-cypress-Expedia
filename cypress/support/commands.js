const stayPage = require('../pageObject/stays.json');

Cypress.Commands.add('Location', (Data) => {
  cy.get(stayPage.where_to_stay).clear().type(Data);
});

Cypress.Commands.add('CheckInOut', () => {
  const twoWeeks = () => {
    let currentTime = new Date(Date.now() + 12096e5);
    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    let twoWeek = `0${month}` + '-' + `0${day}`;
    const paddedTime = twoWeek
      .match(/\d+/g)
      .map((e) => `0${e}`.slice(-2))
      .join('-');
    return year + '-' + paddedTime;
  };

  cy.contains('Check-in').click({ force: true });
  cy.get('.bui-calendar__date--today').click();
  cy.get(`[data-date="${twoWeeks()}"]`).click();
});

Cypress.Commands.add('travellers', (adult, children, childrenAge) => {
  const totalTravellers = Number(adult) + Number(children);

  cy.get(stayPage.guests).click();

  if (adult === '1') {
    cy.get(stayPage.adultMinus).click();
  } else if (adult === '2') {
  } else if (adult === '3') {
    cy.get(stayPage.adultPlus).click();
  } else if (adult === '4') {
    cy.get(stayPage.adultPlus).dblclick();
  } else if (adult === '5') {
    cy.get(stayPage.adultPlus).click();
    cy.get(stayPage.adultPlus).dblclick();
  }

  if (children === '1') {
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === '2') {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === '3') {
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === '4') {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenAge).select(childrenAge);
  } else if (children === '5') {
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).dblclick();
    cy.get(stayPage.childrenPlus).click();
    cy.get(stayPage.childrenAge).select(childrenAge);
  }
});
