///<reference types="cypress"/>
describe('My First Test', function()  {
    it('Does not do much!',function ()  {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      // Static Dropdown 
      cy.get('select').select('option1').should('have.value','option1')
      cy.get('select').select('option2').should('have.value','option2')
      cy.get('select').select('option3').should('have.value','option3')
      
  })
})