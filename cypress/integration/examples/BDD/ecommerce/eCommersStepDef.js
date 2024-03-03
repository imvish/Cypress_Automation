/// <reference types="Cypress" />
import ProductPage from "../../../PageObjects/ProductPage";
import HomePage from "../../../PageObjects/HomePage";
import Shoppage from "../../../PageObjects/ShopPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";




const homePage = new HomePage()
const productpage = new ProductPage()
const shoppage = new Shoppage()
let name

//Given I open Ecommerce page
Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")

})

//When I add items to cart 
When('I add items to cart', function () {
    productpage.getShoptlink().click()


    this.data.productname.forEach((element) => {

        cy.selectproduct(element)
    })

    productpage.getCheckOutButton().click()

})

//And validate the total prices
When('validate the total prices', () => {
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const Amount = $el.text()
        var res = Amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {
        cy.log(sum)

    })
    cy.get('h3 strong').then(function (element) {
        const Amount = element.text()
        var res = Amount.split(" ")
        var Total = res[1].trim()
        expect(Number(Total)).to.equal(sum)
    })

})
//Then Select the country submit and verify thankyou  
Then('Select the country submit and verify thankyou', ()=> {
    Shoppage.getCheckoutButton().click()
    cy.get('#country').type('India')
    cy.wait(7000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click()
    cy.get('input[type="submit"]').click()
    // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-')
    cy.get('.alert').then(function (element) {
        const Actualtest = element.text()
        expect(Actualtest.includes("Success")).to.be.true
    })
})

//When I fill the form details
When('I fill the form details', function (dataTable) {
    //[ Bob, Male ]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})
//Then validate the form behaviour
Then('validate the form behaviour', function () {
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getTwoWayDataBinding().should('have.value', name)
})
//And Select the shop page
Then('Select the shop page', () => {
    homePage.getSubmitButton().click()
})
