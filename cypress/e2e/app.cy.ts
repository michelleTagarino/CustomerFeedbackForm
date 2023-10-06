describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should navigate to the feedback page', () => {
    // Click the Feedback link in the Navbar
    cy.get('a[href*="feedback"]').click()
 
    // The new url should include "/feedback"
    cy.url().should('include', '/feedback')
 
    // The new page should contain an div with "Latest comments"
    cy.get('div').contains('Latest comments')
  })
});