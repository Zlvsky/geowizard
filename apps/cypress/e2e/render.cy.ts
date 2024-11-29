describe('render', () => {
  it('renders the all necessary elements on page', () => {
    cy.visit('/login')

    cy.get('input[name="email"]').should('exist').type('example@email.com')
    cy.get('input[name="password"]').should('exist').type('123123123')
    cy.get('button[type="submit"]').should('exist').click()

    cy.visit('/dashboard')

    cy.getCookie('jwt').should('exist')

    cy.get('h1').should('contain.text', 'Dashboard')

    cy.get('span').contains('Logout').click()

    cy.getCookie('jwt').should('not.exist')

    cy.get('a').should('contain.text', 'Login')
  })
})
