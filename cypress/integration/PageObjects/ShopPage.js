class Shoppage
{

    getCheckoutButton()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
}
export default Shoppage;