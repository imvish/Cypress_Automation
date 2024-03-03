///<reference types="cypress"/>
describe('My First Test', function () {
  it('Does not do much!', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // Cypress will automatically handle the Popup 
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    // This will capture the popup and then you can get the text present on the popup 
    //window.alert()
    cy.on('window:alert', (str) => {

      expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })
    cy.on('window:confirm', (str) => {

      expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })
  })
})