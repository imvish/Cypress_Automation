///<reference types="cypress"/>
//const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv';

let productName
//const neatCSV= require('neat-csv')
describe('JWT Sessions', function () {
    it('is logged in though local storage ', async function () {
        cy.LoginAPI().then(function () {
            cy.visit('https://www.rahulshettyacademy.com/client',
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })
        cy.get(".card-body b").eq(1).then(function (el) {
            productName = el.text();
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".ta-results button").each(($el, index, $list) => {
            if ($el.text() === " India") {
                cy.pause()
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(3000)
        cy.get('.order-summary button').contains("Excel").click();

        const FilePath= (Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_Vishal.xlsx")
        cy.task('excelToJsonConverter',FilePath).then(function(result)
        {
            cy.log(result.data[1].A)
            expect(productName).to.equal(result.data[1].B);
        })
        cy.readFile(FilePath).then(function(text)
        {
            expect(text).to.include(productName)
        })

        
       // console.log(result);


    })
})