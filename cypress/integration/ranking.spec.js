context('Ranking - The Breakfast Club', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:3001');
  })

  it('Fetch api and render list.', () => {
    cy.get('.ranking__item').should('have.length', 5);
  })

  it('Checking correct order for each farmer.', () => {
    cy.get('.ranking__item').eq(0).contains('Bárbara Evans');
    cy.get('.ranking__item').eq(1).contains('Yudi Tamashiro');
    cy.get('.ranking__item').eq(2).contains('Rita Cadillac');
    cy.get('.ranking__item').eq(3).contains('Gominho');
    cy.get('.ranking__item').eq(4).contains('Andressa Urach');
  })

  it('Testing safe html render in description.', () => {
    cy.get('.ranking__item').eq(2).contains('Cracrete nº1');
  })

  describe('Checking the percent in tooltips.', () => {
    it('Bárbara Evans', () => {
      cy.get('.ranking__item:nth-child(1) .tooltip__column').eq(0).contains('88%');
      cy.get('.ranking__item:nth-child(1) .tooltip__column').eq(1).contains('12%');
    })

    it('Yudi Tamashiro', () => {
      cy.get('.ranking__item:nth-child(2) .tooltip__column').eq(0).contains('80%');
      cy.get('.ranking__item:nth-child(2) .tooltip__column').eq(1).contains('20%');
    })

    it('Rita Cadillac', () => {
      cy.get('.ranking__item:nth-child(3) .tooltip__column').eq(0).contains('74%');
      cy.get('.ranking__item:nth-child(3) .tooltip__column').eq(1).contains('26%');
    })

    it('Gominho', () => {
      cy.get('.ranking__item:nth-child(4) .tooltip__column').eq(0).contains('37%');
      cy.get('.ranking__item:nth-child(4) .tooltip__column').eq(1).contains('63%');
    })

    it('Andressa Urach', () => {
      cy.get('.ranking__item:nth-child(5) .tooltip__column').eq(0).contains('0%');
      cy.get('.ranking__item:nth-child(5) .tooltip__column').eq(1).contains('0%');
    })
  })
})