describe('Main page', () => {
  it('Should open main page and find `Main Page` text there', () => {
    cy.visit('http://localhost:3000/main')
      .get('h1')
      .contains('Main Page');
  });
});
