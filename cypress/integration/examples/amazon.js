///<reference types="cypress"/>
describe('Handling Child Windows', function () {
    it('Should handle child window', function () {
  
      cy.visit('https://www.amazon.in/')
      cy.get('#twotabsearchtextbox').type('Vishal')
  
    })
  
  })