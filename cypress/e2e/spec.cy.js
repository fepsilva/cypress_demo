describe('Testes de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('teste@testecypress.com')
    cy.get('[data-testid="senha"]').type('xxxxx')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="cadastrarUsuarios"]').click()  })

    it('Login com Falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('teste@testecypress.com')
    cy.get('[data-testid="senha"]').type('xxxx')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos') })
})