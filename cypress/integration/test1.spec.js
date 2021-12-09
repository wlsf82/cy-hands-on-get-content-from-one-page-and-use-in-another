describe('Dependency', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/search?query=**', { fixture: 'stories' })
      .as('getStories')
    cy.visit('https://hackernews-seven.vercel.app/')
    cy.wait('@getStories')
  })

  it('gets "dynamic" info, and saves into files', () => {
    cy.get('a')
      .first()
      .then($anchor => {
        cy.writeFile('cypress/fixtures/text.txt', $anchor[0].innerText)
        cy.writeFile('cypress/fixtures/url.txt', $anchor[0].href)
      })
  })
})
