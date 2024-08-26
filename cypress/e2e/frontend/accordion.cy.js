describe('Componente Accordion', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/frontend/')
  })

  it('Verifica se o accordion foi renderizado', () => {
    cy.get('#custom-accordion').should('exist')
  })

  it('Verifica se os itens do accordion foram renderizados', () => {
    cy.get('#firstItem').should('exist')
    cy.get('#secondItem').should('exist')
    cy.get('#thirdItem').should('exist')
    cy.get('#fourthItem').should('exist')
    cy.get('#fifthItem').should('exist')
  })

  it('Clica no item 1 e verifica se o conteúdo dele tá sendo exibido e se o ícone foi modificado', () => {
    cy.get('#firstItem').click()
    cy.get('#contentfirstItem').should('be.visible')
    cy.get('#iconfirstItem').should('have.class', 'bi-chevron-up')
  })

  it('Verifica se apenas um item está com seu conteúdo sendo exibido por vez', () => {
    cy.get('#firstItem').click()
    cy.get('#contentfirstItem').should('be.visible')
    cy.get('#secondItem').click()
    cy.get('#contentfirstItem').should('not.be.visible')
    cy.get('#contentsecondItem').should('be.visible')
  })

})