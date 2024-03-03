///<reference types="cypress"/>

describe('Framework hooks ', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Framework hooks', function () {

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)


        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(4) > .ng-untouched')

        cy.pause() // This will pause the execution and you and play form the cypress log's 
        cy.get('.btn').click()

        cy.get(':nth-child(2) > .nav-link').click()

        //.selectproduct is custome command and created in the Support>Commands.js

        cy.selectproduct('Blackberry')
        // this.data.productname

        this.data.productname.forEach((element) => { // This will return to the Arrey of the product which you added in the fixture file 

            cy.selectproduct(element)
        });
        cy.selectproduct(this.data.productname)


    })

})
