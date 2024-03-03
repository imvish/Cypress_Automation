///<reference types="cypress"/>
describe('Mail Sent', function () {
    it('should sent Drafted Mail ', function () {
       cy.visit('https://mail.turbify.com/login?reason=USER_LOGOUT')
       cy.get("#login").type('vishal@alohatechnologydev.com')
       cy.get("#password").type('Vishal@7709')
       cy.get('#btnLogin').click()

    })
})