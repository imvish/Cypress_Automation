///<reference types="cypress"/>
describe('My First Test', function()  {
    it('Does not do much!',function ()  {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      // Dynamic Dropdown
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) =>{
      if($el.text()==='India')
      {
        $el.trigger("click")
      }
      })
      // Put assessrtion to check value is selected correctly or not 
      cy.get('#autocomplete').should('have.value','India')
  })
})