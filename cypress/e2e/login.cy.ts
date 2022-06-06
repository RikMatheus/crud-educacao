/// <reference types="cypress" />

describe('Testa funcionalidades relacionadas ao login', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('Testa o login com um usuário existente', () => {
    cy.get("[data-test-id='email']").should('exist').type('user@example.com')
    cy.get("[data-test-id='password']").should('exist').type('password')
    cy.get("button").first().click()

    cy.url().should('include', '/home')
  })

  it('Testa o login com um usuário inexistente', () => {
    cy.get("[data-test-id='email']").should('exist').type('user@example.com')
    cy.get("[data-test-id='password']").should('exist').type('password123')
    cy.get("button").first().click()

    cy.get("[data-test-id='login-error']").should('be.visible')
  })

  it('Testa a funcionalidade de logout', () => {
    cy.get("[data-test-id='email']").should('exist').type('user@example.com')
    cy.get("[data-test-id='password']").should('exist').type('password')
    cy.get("button").first().click()

    cy.url().should('include', '/home')

    cy.get("[data-test-id='logout-button']").should('exist').click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})
