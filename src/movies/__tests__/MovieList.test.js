import React from 'react'
import {render, cleanup, fireEvent, waitForElement} from 'react-testing-library'
import {MemoryRouter} from 'react-router-dom'
import MoviesList from '../MoviesList'

afterEach( () => {
  cleanup();
  console.error.mockClear();
  console.warn.mockClear(); // if a mock function has been called, clear it for the next test
})

console.error = jest.fn();
console.warn = jest.fn();

global.fetch = require('jest-fetch-mock')


const Movies = {
  success: true,
  results: [
    {
      id: '73',
      title: 'level rules',
      poster_path: 'kshdks.jpg'
    },
    {
      id: '73',
      title: 'level rules',
      poster_path: 'kshdks.jpg'
    },
  ]
}

const movie = Movies.results[0]

test(' <MoviesList />', async () => {

  // make sure mock data match json resposne expected in the component
  fetch.mockResponse(JSON.stringify(Movies))

  const {debug, getByTestId, queryByTestId, getAllByTestId} = render(
    <MemoryRouter>
      <MoviesList/>
    </MemoryRouter>
  )

  expect(getByTestId('loading')).toBeTruthy()
  await waitForElement(() => getByTestId('movie-link'))
  expect(queryByTestId('loading')).toBeFalsy()
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
  expect(getAllByTestId('movie-link').length).toBe(Movies.results.length)

  // debug()

})

