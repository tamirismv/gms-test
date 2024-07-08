/// <reference types="cypress"/> 


describe('US-001- Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Deve fazer busca de filmes', () => {  
    cy.get('#search-input').type('Jurassic Park')
    cy.get('#search-button').click()
  })
  it('Não deve encontrar filmes correspondentes no catálogo', () => {
    cy.get('#search-input').type('4537dfghui')
    cy.get('#search-button').click()  
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')  
  })
  it('Deve fazer limpeza no campo de pesquisa de filmes', () => {
    cy.get('#search-input').type('Jurassic Park')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()  
  })
  it('Não deve realizar busca', () => {
    cy.get('#search-button').click()
       
  })
  
})