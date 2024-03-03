///<reference types="cypress"/>

describe('Intercept HTTP', function () {

    it('Intercept HTTP Request', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>
        {

            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=suryawanshi"
            req.continue((res)=>
            {
                expect(res.statusCode).to.equal(403)
            })
        }).as('Dummyurl')
        cy.get('.btn-primary').click()

        cy.wait('@Dummyurl')
    })

})