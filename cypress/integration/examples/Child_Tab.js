///<reference types="cypress"/>
describe('Handling Child Windows', function () {
  it('Should handle child window', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').invoke('removeAttr', 'target').click()

    // whatever the operation you want to perfom on child domain put under function
    //cy.origin will allow to move child domain 

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      // Add more validation on the child domain 
      cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
    })

  })

})