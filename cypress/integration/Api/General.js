///<reference types="cypress"/>

describe('Custom API Handling', function () {

    it('API Handling ', function () {

  cy.visit('https://www.amazon.in/');
  cy.get('#twotabsearchtextbox').type('Vishal')

    })

})