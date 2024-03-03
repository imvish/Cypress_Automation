///<reference types="cypress"/>
import HomePage from "../PageObjects/HomePage" // this will import from pageObjects/HomePage class to here 
import ProductPage from "../PageObjects/ProductPage" // this will import from pageObjects/ProductPage class to here 
import ShopPage from "../PageObjects/ShopPage" // this will import from pageObjects/ShopPage class to here


describe('page object Import class ', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('page object Import class', function () {
        const homePage = new HomePage()
        const productpage = new ProductPage()
        const shoppage = new ShopPage()
        
        cy.visit(Cypress.env('url')+"/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getSubmitButton().click()

        productpage.getShoptlink().click()


        this.data.productname.forEach((element) => { // This will return to the Arrey of the product which you added in the fixture file 

            cy.selectproduct(element)
        });

        productpage.getCheckOutButton().click()
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

        shoppage.getCheckoutButton().click()
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

})