/// <reference types="cypress"/> 


describe('US-001- Funcionalidade: Busca de filmes com palavra válida', () => {
  it('Deve fazer busca de filmes', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Jurassic Park')
    cy.get('#search-button').click()
       
  })
})

describe('US-001- Funcionalidade: Busca de filmes com palavra inválida', () => {
  it('Não deve encontrar filmes correspondentes no catálogo', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('4537dfghui')
    cy.get('#search-button').click()
    cy.contains('#results-section > p','Filme não encontrado.').should('be.visible')
       
  })
})

describe('US-001- Funcionalidade: Limpeza da busca de filmes', () => {
  it('Deve fazer limpeza no campo de pesquisa de filmes', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Jurassic Park')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()
       
  })
})

describe('US-001- Funcionalidade: Busca de filmes com nome em branco', () => {
  it('Não deve realizar busca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-button').click()
       
  })
})

