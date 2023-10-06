import React from 'react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('renders', () => {
    cy.mount(<Navbar />);
  });

  it('should contain "Write a review" nav bar link label', () => {
    cy.mount(<Navbar />);
    cy.get('a').should('contains.text', 'Write a review');
  });

  it('should contain "Feedback" nav bar link label', () => {
    cy.mount(<Navbar />);
    cy.get('a').should('contains.text', 'Feedback');
  });
})