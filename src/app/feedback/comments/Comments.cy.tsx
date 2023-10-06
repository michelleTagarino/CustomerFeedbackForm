import React from 'react';
import Comments from './Comments';
import Comment from '../../../shared/interfaces/comment';

describe('<Comments />', () => {
  const loading = false;
  const comments = [
    {
      name: 'Michelle',
      email: 'michelle@somefakeemail.co',
      rating: '5',
      comment: 'This is a comment.'
    } as Comment,
  ];

  it('renders', () => {
    cy.mount(<Comments comments={comments} loading={loading} />);
  });

  it('should contain the email in the page', () => {
    cy.mount(<Comments comments={comments} loading={loading} />);
    cy.get('h3').should('contains.text', 'michelle@somefakeemail.co');
  });
  
  it('should contain the comment in the page', () => {
    cy.mount(<Comments comments={comments} loading={loading} />);
    cy.get('p').should('contains.text', 'This is a comment.');
  });
});