class ProductPage {

    getCheckOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getShoptlink()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
    
}

export default ProductPage;    // this will make the class availabe to all other files in your framework.