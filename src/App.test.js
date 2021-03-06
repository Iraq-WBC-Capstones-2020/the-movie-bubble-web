import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app title link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/the movie bubble/i);
  expect(textElement).toBeInTheDocument();
});
