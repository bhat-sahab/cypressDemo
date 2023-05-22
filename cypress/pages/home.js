class home {
    elements = {
        hamburgerMenuBtn : () => cy.get('#react-burger-menu-btn'),
        itemContainer : () => cy.get('.inventory_item'),
        filters : () => cy.get('[data-test="product_sort_container"]'),
        filterItemAZ: () => cy.get('select').select('az'),
        filterItemZA: () => cy.get('select').select('za'),
        filterItemloHi: () => cy.get('select').select('lohi'),
        filterItemHiLo: () => cy.get('select').select('hilo'),

    }

    hamburgerMenu = {
        allItem : () => cy.get('#inventory_sidebar_link'),
        about : () => cy.get('#about_sidebar_link'),
        logout : () => cy.get('#logout_sidebar_link'),
        resetAppState : () => cy.get('#reset_sidebar_link')
    }

    logout () {
        this.elements.hamburgerMenuBtn().click()
        this.hamburgerMenu.logout().click()
        cy.url().should('equal', "https://www.saucedemo.com/")
    }
}

module.exports = new home();