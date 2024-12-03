// cypress/integration/1_ProjectDetails.test.tsx

describe('Wizard simulation', () => {
  before(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Creates project succesfully', () => {
    // 1. Test that the ProjectDetails form is displayed
    cy.get('input[name="name"]').should('be.visible')
    cy.get('.ql-editor').should('be.visible')
    cy.get('.datepicker').should('be.visible')

    // 2. Test that the form can be filled out and submitted
    cy.get('input[name="name"]').type('Test Project')
    cy.get('.ql-editor').type('This is a test project description.')

    cy.get('button[type="submit"]').click()

    // 3. Test that the second step of the wizard is displayed
    cy.contains('button', 'Select file').should('be.visible')

    // 4. Simulate file upload
    cy.fixture('tuchola.geojson', 'base64').then((fileContent) => {
      cy.get('[data-cy=drag-and-drop]').upload(fileContent, 'tuchola.geojson')
    })

    // 5. Verify that the file is uploaded and processed correctly

    cy.get('[data-cy=file-placeholder]').should('contain', 'tuchola')

    // 6. proceed to the next step

    cy.get('button[type="submit"]').click()

    // 7. Test that the third step of the wizard is displayed

    cy.get('h1').should('contain', 'Check if everything is correct')

    // 8. Trigger first submit

    cy.get('button[type="submit"]').click()

    // 9. Check if error message is displayed

    cy.get('.toaster').should('contain', 'An error occurred while sending the data.')

    // 10. Trigger second submit

    cy.wait(3000)

    cy.get('button[type="submit"]').click()

    // 11. Check if success message is displayed

    cy.get('h1').should('contain', 'Success')

    // 12. Check if redirect is working

    cy.url().should('include', '/project')
  })
})
