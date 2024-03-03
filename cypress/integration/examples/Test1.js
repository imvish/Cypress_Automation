///<reference types="cypress"/>

describe('My First Test', function()  {
    it('Does not do much!',function ()  {
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
     cy.get('.search-keyword').type('ca');
     cy.wait(2000)
     cy.get('.product:visible').should('have.length',4)
     // parent to child find the locator
     cy.get('.products').as('productLocator')
     cy.get('@productLocator').find('.product ').should('have.length',4)
     //cy.get(':nth-child(3) > .product-action > button').click()//this is the path we get using cypress locator selector 
     cy.get('@productLocator').find('.product ').eq('1').contains('ADD TO CART').click().then(function()
     {
     console.log('sf')
     })
     // this path is proper parent to child and then product and the click on the button 
     console.log('Vishal') // this will print into the inspect console of the browser
     
     cy.get('@productLocator').find('.product ').each(($el, index, $list) => {
    const texttVeg=$el.find('h4.product-name').text()
    if(texttVeg.includes('Cashews'))
    {
    cy.wrap($el).find('button').click()
    }
    })
    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')
    //this is to print in logs
    cy.get('.brand').then(function(logoelement) // here we resolved the promis manully by using then ()
    {
     cy.log(logoelement.text())
    })
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    //cy.log(logo.text())
    })
  })