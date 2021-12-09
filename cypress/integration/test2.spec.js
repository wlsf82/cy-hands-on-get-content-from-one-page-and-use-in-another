describe('Dependant', () => {
  beforeEach(() => {
    cy.fixture('url')
      .then(url => cy.visit(url))
  })
  it('finds an element based on a "dynamic" text coming from a fixture', () => {
    cy.fixture('text')
      .then(text => cy.contains(text).should('exist'))
  })
})