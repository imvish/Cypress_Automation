///<reference types="cypress"/>
describe('My First Test', function()  {
    it('Does not do much!',function ()  {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      // check the checkbox with assertion and compare with value text
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') 
      // Uncheck the checkbox with assessrtion
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked') 
      // Select multiple option of the checkbox 
      cy.get('input[type="checkbox"]').check(['option3','option2'])
      
  })
})