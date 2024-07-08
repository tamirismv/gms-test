/// <reference types="cypress"/> 

const { date } = require("joi");


describe('US-012- Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  var email = `bembi${Date.now()}@teste.com`

  it('Deve fazer cadastro de campos obrigatórios', () => {
    cy.preencherCadastro('Bembi', 'Vieira', email, '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
    })

  it('Não deve fazer cadastro com campo nome em branco', () => {
    cy.preencherNomeBranco('Vieira', email, '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', '{"message":"Nome não pode estar vazio"}')
  })

  it('Não deve fazer cadastro com campo sobrenome em branco', () => {
    cy.preencherSobrenomeBranco('Bembi', email, '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', '{"message":"Sobrenome não pode estar vazio"}')
  })

  it('Não deve fazer cadastro com campo email em branco', () => {
    cy.preencherEmailBranco('Bembi', 'Vieira', '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', '{"message":"E-mail não pode estar vazio"}')
  })
    
  it('Deve fazer cadastro com campo telefone em branco', () => {
    cy.preencherTelefoneBranco('Bembi', 'Vieira', email, 'Teste123@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Não deve fazer cadastro com campo senha em branco', () => {
    cy.preencherSenhaBranco('Bembi', 'Vieira', email, '16995263478')
    cy.get('#signup-response').should('contain', '{"message":"Senha não pode estar vazia"}')
  })

  it('Deve fazer cadastro de campos obrigatórios', () => {
    cy.preencherCadastro('Bembi', 'Vieira', email, '16995263478', 'teste123')
    cy.get('#signup-response').should('contain', '{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}')
  })

  it('Não deve fazer cadastro com senha com menos de 8 caracteres', () => {
    cy.preencherCadastro('Bembi', 'Vieira', email, '16995263478', '12A!')
    cy.get('#signup-response').should('contain', '{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}')
  })

  it('Não deve fazer cadastro com email no formato incorreto', () => {
    cy.preencherCadastro('Bembi', 'Vieira', 'bembi@bembi', '16995263478', 'Teste@1234')
    cy.get('#signup-response').should('contain', '{"message":"E-mail deve ser um email válido"}')
  })

  it('Não deve fazer cadastro com nome no formato incorreto', () => {
    cy.preencherCadastro('Bembi8', 'Vieira', email, '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', '{"message":"Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"}')
  })

  it('Não deve fazer cadastro com sobrenome no formato incorreto', () => {
    cy.preencherCadastro('Bembi', 'Vieira8', email, '16995263478', 'Teste123@')
    cy.get('#signup-response').should('contain', '{"message":"Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços"}')
  })
})
