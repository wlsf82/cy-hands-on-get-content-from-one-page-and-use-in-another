/**
 * What would happen if this file happen to be executed before its dependency?
 * Or, if its dependency fails?
 *
 * There are three things that come to my mind. It could:
 *
 * - fail due to not having a URL to visit yet defined
 * - run based on outdated data (e.g., a fixture file created a while ago, most probably with outdated data)
 * - or, with luck, run based on updated data
 *
 * The point is, this test depends on another, and this, on its own, is considered a bad practice.
 */
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