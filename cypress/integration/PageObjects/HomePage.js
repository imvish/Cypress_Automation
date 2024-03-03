class HomePage {

    getEditBox() {
        return cy.get(':nth-child(1) > .form-control')
    }
    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getGender() {
        return cy.get('select')
    }
    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getSubmitButton() {
        return cy.get('.btn')
    }


}

export default HomePage;    // this will make the class availabe to all other files in your framework.