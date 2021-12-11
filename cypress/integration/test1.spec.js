describe('Dependency', () => {
  beforeEach(() => {
    /**
     * Here, we're using a static fixture as the intercept's response.
     * However, that is just to make a point.
     * Let's supose the response comes from the real API, which would
     * make the result dynamic. That is, at different times the request
     * would return different data.
     */
    cy.intercept('GET', '**/search?query=**', { fixture: 'stories' })
      .as('getStories')
    cy.visit('https://hackernews-seven.vercel.app/')
    cy.wait('@getStories')
  })

  it('gets "dynamic" info, and saves into files', () => {
    /**
     * This is not really a test. There are no assertions on it.
     * It is just getting same data from the first rendered anchor element,
     * and saving them into text files, for later usage (by another test).
     */
    cy.get('a')
      .first()
      .then($anchor => {
        cy.writeFile('cypress/fixtures/text.txt', $anchor[0].innerText)
        cy.writeFile('cypress/fixtures/url.txt', $anchor[0].href)
      })
  })
})
