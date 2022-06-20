import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Site'

test('Homepage has an about link', () => {
  render(<Home />);
  const linkElement = screen.getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});
