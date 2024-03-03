///<reference types="cypress"/>
import 'cypress-iframe'


describe('My First Test', function()  {
    it('Does not do much!',function ()  {

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.frameLoaded('#courses-iframe')

      cy.iframe().find("a[href*='mentorship']").eq(0).click()
      cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
      
      
  })
})