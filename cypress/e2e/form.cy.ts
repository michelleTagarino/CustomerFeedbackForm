describe('Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render field form elements', () => {
    cy.get('input[data-cy="name-field"]').type('Michelle');
    cy.get('input[data-cy="email-field"]').type('my@email.com');
    cy.get('textarea[data-cy="comment-field"]').type('This is a feedback comment.');
    // cy.get('select[data-cy="rating-field"]').select('5');
    cy.get('button[data-cy="submit-button"]').click();
  });
});