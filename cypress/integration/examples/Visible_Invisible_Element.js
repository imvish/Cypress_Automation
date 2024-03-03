///<reference types="cypress"/>
describe('My First Test', function()  {
    it('Does not do much!',function ()  {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      //visible and invisible element on web page 

      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // For Radio Button
      cy.get('[value="radio2"]').check().should('be.checked')

  })
})