/// <reference types="cypress"/> 


describe('US-012- Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi121@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','Cadastro realizado com sucesso!').should('be.visible')


  })
})

describe('US-012- Funcionalidade: Cadastro com nome em branco', () => {
  it('Não deve fazer cadastro com campo nome em branco', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi897@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Nome não pode estar vazio"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com sobrenome em branco', () => {
  it('Não deve fazer cadastro com campo sobrenome em branco', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-email').type('bembi@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Sobrenome não pode estar vazio"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com email em branco', () => {
  it('Não deve fazer cadastro com campo email em branco', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"E-mail não pode estar vazio"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com telefone em branco', () => {
  it('Deve fazer cadastro com campo telefone em branco', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@email.com')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','Cadastro realizado com sucesso!').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com senha em branco', () => {
  it('Não deve fazer cadastro com campo senha em branco', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Senha não pode estar vazia"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com senha fraca', () => {
  it('Não deve fazer cadastro com utilização de senha fraca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('12345678')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com senha com menos de 8 caracteres', () => {
  it('Não deve fazer cadastro com senha com menos de 8 caracteres', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@email.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('12A!')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com formato incorreto de email', () => {
  it('Não deve fazer cadastro com email no formato incorreto', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@bembi')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"E-mail deve ser um email válido"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com nome em formato inválido', () => {
  it('Não deve fazer cadastro com nome no formato incorreto', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi8')
    cy.get('#signup-lastname').type('Vieira')
    cy.get('#signup-email').type('bembi@bembi.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"}').should('be.visible')

  })
})

describe('US-012- Funcionalidade: Cadastro de membros com sobrenome em formato inválido', () => {
  it('Não deve fazer cadastro com sobrenome no formato incorreto', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bembi')
    cy.get('#signup-lastname').type('Vieira8')
    cy.get('#signup-email').type('bembi@bembi.com')
    cy.get('#signup-phone').type('983256359')
    cy.get('#signup-password').type('Teste@1234')
    cy.get('#signup-button').click()
    cy.contains('#signup-response','{"message":"Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços"}').should('be.visible')

  })
})
