///<reference types="cypress"/>

describe('Custom API Handling', function () {

    it('API Mocking ', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    }],


            }).as('bookretriver')
        cy.get('.btn-primary').click()
        cy.wait('@bookretriver').should(({request,response})=>
        {
            
            cy.get('tr').should('have.length',response.body.length+1)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

    })

})