import React from 'react';
import { render } from '@testing-library/react';
// the following line means it's testing the App.js file:
import App from './App';

it('should display the text "my name"', () => {
  const { getByText } = render(<App />);
  expect(getByText('my name')).toBeInTheDocument();
})


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
