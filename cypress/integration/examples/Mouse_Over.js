///<reference types="cypress"/>
describe('Mouse hover', function () {
  it('Mouse hover', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // this will used to show the popup 

    //cy.get('.mouse-hover-content').invoke('show')

    // For forcefully click on the element which is hide {force:true} 

    cy.contains('Top').click({ force: true })
    cy.url().should('include', 'top')


  })

})