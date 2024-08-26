describe('Cards de carreira', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/frontend/')
  })
  it('Verifica se o container de carreiras foi renderizado', () => {
    cy.get('.carreiras__container__cardlist').should('exist')
  })

  it('Verifica se todos os cartões estão sendo renderizados', () => {
    cy.get('#carrerModal').should('exist')
  })
  it('Verifica se botão saber mais existe', () => {
    cy.get('.card--tablet__btn').should('exist')
    })
    it('Verifica se modal existe', () => {
      cy.get('.modal-content').should('exist')
    
    
    })
   })
