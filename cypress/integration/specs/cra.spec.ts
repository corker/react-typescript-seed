describe('CRA', () => {
  beforeEach(() => {
    // usually we recommend setting baseUrl in cypress.json
    // but for simplicity of this example we just use it here
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000');
  });

  it('shows learn link', function() {
    cy.get('.App-link')
      .should('be.visible')
      .and('have.text', 'Learn React');
  });

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
});
