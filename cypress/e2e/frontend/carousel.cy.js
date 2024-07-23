describe('Carousel de Depoimentos', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/frontend/index.html')
  })

  it('Verifica se o carousel está sendo renderizado', () => {
    cy.get('.js-testimonials-slider').should('exist');
    cy.get('.swiper-slide').should('have.length.greaterThan', 0);
  })

  it('Verifica se a navegação do carousel está correta', () => {
    cy.get('.swiper-slide').first().should('be.visible');
    cy.wait(8000)
    cy.get('.swiper-slide').first().should('not.be.visible');
  })

  it('Verifica se o carousel está responsivo', () => {
    cy.viewport('iphone-6')
    cy.get('.swiper').should('have.class', 'swiper-vertical');
    cy.viewport('macbook-15')
    cy.get('.swiper').should('have.class', 'swiper-horizontal');
  })

})