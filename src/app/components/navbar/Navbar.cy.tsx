import React from 'react'
import Navbar from './Navbar'

describe('<Navbar />', () => {
  it('renders', () => {
    cy.mount(<Navbar />);
  });

  it('should contain "Feedback" nav bar link label', () => {
    cy.mount(<Navbar />);
    cy.get('a').should('contains.text', 'Feedback');
  });
})