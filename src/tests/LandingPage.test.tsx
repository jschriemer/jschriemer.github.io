import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

test('landing page has an the scroll down svg', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});
