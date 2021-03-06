import React from 'react';
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react';
// the following line means it's testing the App.js file:
import App from './App';

it ('captures clicks', done => {
  function handleClick() {
    done();
  }
  const { getByText } = render(
    <button onClick={handleClick}>click to see Project 1</button>
  );
  const node = getByText("click to see Project 1");
  fireEvent.click(node);
})

it ('captures clicks', done => {
  function handleClick() {
    done();
  }
  const { getByText } = render(
    <button onClick={handleClick}>click to see Project 1</button>
  );
  const node = getByText("click to see Project 1");
  fireEvent.click(node);
})
afterEach(cleanup);
