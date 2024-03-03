///<reference types="cypress"/>

describe('Without Browser Intercept', function () {

    it('API without Browser ', function () {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": "bcd",
            "aisle": "26952",
            "author": "John foe"
        }).then(function(responce)
        {
            expect(responce.body).to.have.property("Msg","successfully added")
            expect(responce.status).to.eq(200)
        })

    })

})