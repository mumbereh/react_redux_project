import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './components/HomePage';

test('renders HomePage', () => {
  const { getByText } = render(<HomePage />);
  const HomePageText = getByText(/Foreign Currency/i);
  expect(HomePageText).toBeInTheDocument();
});
