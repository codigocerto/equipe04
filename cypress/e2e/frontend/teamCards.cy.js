describe('Cards dos membros da equipe', () => {
  beforeEach(()=> {
    cy.visit('http://127.0.0.1:5500/frontend/src/pages/equipe.html')
  })

  it('Verifica se o container dos cartões foi renderizado', () => {
    cy.get('#teamCardContainer').should('exist')
  })

  it('Verifica se todos os 12 cartões estão sendo renderizados', () => {
    cy.get('.member-card').should('have.length', 12)
  })

  it('Verifica se cada card tem imagem e informações dos membros', () => {
    cy.get('.member-card').first().within(() => {
      cy.get('img').should('exist');
      cy.get('.member-card__info__name').should('exist');
      cy.get('.member-card__info__name span').should('not.be.empty');
      cy.get('.member-card__info__socials a').should('have.length', 2); // Verifica a presença dos links sociais
    });
  })
})