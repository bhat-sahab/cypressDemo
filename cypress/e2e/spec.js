/// <reference types="cypress" />

import home from "../pages/home.js"
import login from "../pages/login.js"

describe('Automation Round Demo Test Script', () => {

  it('Standard User: Case 1', () => {
    // Login
    login.login('standard_user', 'secret_sauce')

    // Print name, price and url to console
    home.elements.itemContainer().each((item)=>{
      cy.log('Name:', item.find('.inventory_item_name').text(), 'Price:', item.find('.inventory_item_price').text(), 'URL:', item.find('img').attr('src'))
    })

    home.logout()
  })

  it('Standard User: Case 2', () => {
    // Login
    login.login('standard_user', 'secret_sauce')

    // Select Low High Filter
    home.elements.filterItemloHi()

    // Print name, price and url to console
    home.elements.itemContainer().each((item)=>{
      cy.log('Name:', item.find('.inventory_item_name').text(), 'Price:', item.find('.inventory_item_price').text(), 'URL:', item.find('img').attr('src'))
    })

    home.logout()
  })

  it('Locked Out User: Case 1', () => {
    // Login
        cy.visit('/')
        login.elements.username().type('locked_out_user')
        login.elements.password().type('secret_sauce')
        login.elements.loginBtn().click()
        login.elements.error().should('contain', 'Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('not.contain', '/inventory.html')
  })

  it('Problem User: Case 1', () => {
    // Login
    login.login('problem_user', 'secret_sauce')

    let links = []
    // Print name, price and url to console
    home.elements.itemContainer().each((item)=>{
      let name = item.find('.inventory_item_name').text()
      let price = item.find('.inventory_item_price').text()
      let link =  item.find('img').attr('src')
      if (links.includes(link)) {
        cy.log('Same url:', link)
      } else {
        cy.log('Name:', name, 'Price:', price, 'URL:', link)
        links.push(link)
      }
    })

    home.logout()
  })

  it('Performance glitch User: Case 1', () => {
    // Login
    login.login('performance_glitch_user', 'secret_sauce')

    // Print name, price and url to console
    home.elements.itemContainer().each((item)=>{
      cy.log('Name:', item.find('.inventory_item_name').text(), 'Price:', item.find('.inventory_item_price').text(), 'URL:', item.find('img').attr('src'))
    })

    home.logout()
  })

  it('Performance glitch User: Case 2', () => {
    // Login
    login.login('performance_glitch_user', 'secret_sauce')

    // Select Low High Filter
    home.elements.filterItemloHi()

    // Print name, price and url to console
    home.elements.itemContainer().each((item)=>{
      cy.log('Name:', item.find('.inventory_item_name').text(), 'Price:', item.find('.inventory_item_price').text(), 'URL:', item.find('img').attr('src'))
    })

    home.logout()
  })
})