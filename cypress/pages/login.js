class login {
    elements = {
        username: () => cy.get('#user-name'), 
        password: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        error: () => cy.get('[data-test="error"]')
    }

    login(user, pass) {
        cy.visit('/')
        this.elements.username().type(user)
        this.elements.password().type(pass)
        this.elements.loginBtn().click()
        cy.url().should('contain', '/inventory.html')
    }
}

module.exports = new login();