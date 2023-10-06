describe('Latest comments', () => {
  beforeEach(() => {
    cy.visit('/feedback')
  });

  it('should render', () => {
    // The page should contain a div with "Latest comments"
    cy.get('h2').contains('Latest comments');
  });
});