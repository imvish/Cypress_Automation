///<reference types="cypress"/>
describe('My First Test', function()  {
    it('Does not do much!',function ()  {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type('ca');
      cy.wait(2000)
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product ').each(($el, index, $list) => {
      const texttVeg=$el.find('h4.product-name').text()
      if(texttVeg.includes('Cashews'))
      {
      cy.wrap($el).find('button').click()
      }
      })
      cy.get('.tada').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
      cy.get('.chkAgree').click()
      cy.get('button').click()
  })
})