import React from 'react';
import App from '../app.js';
import People from '../people.js';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should render a list of star wars char', async () => {
  const people = {
    "Luke Skywalker": "http://swapi.dev/api/people/1/",
    "Darth Vader": "http://swapi.dev/api/people/4/"
  }

  render(<People people={people} />);

  // screen.debug();

  const items = screen.getAllByRole('listitem');

  console.log(items);
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
  expect(items[1]).toHaveTextContent('Darth Vader');
  expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/4/">Darth Vader</a>')
});