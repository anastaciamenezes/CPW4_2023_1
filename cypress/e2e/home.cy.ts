describe('Home Page Spec', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should increment color correctly', () => {
    const color = 255
    const inputButton = cy.get('[data-cy="increment-button"]')
    for (let i = 0; i < color; i++) {
      inputButton.click()
    }
    cy.get('[data-cy="color-value"]').should('have.css', color)
  })
  it('should reset counter correctly', () => {
    const color = 10
    const incrementButton = cy.get('[data-cy="increment-button"]')
    for (let i = 0; i < color; i++) {
      incrementButton.click()
    }

    cy.get('[data-cy="reset-button"]').click()
    cy.get('[data-cy="color-value"]').should('have.css', 0)
  })
})