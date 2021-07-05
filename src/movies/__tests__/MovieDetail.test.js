import React from 'react'
import {render, cleanup, fireEvent, waitForElement} from 'react-testing-library'
import MovieDetail, {POSTER_PATH, BACKDROP_PATH} from '../MovieDetail'

afterEach( () => {
  cleanup();
  console.error.mockClear();
  console.warn.mockClear(); // if a mock function has been called, clear it for the next test
})

console.error = jest.fn();
console.warn = jest.fn()

global.fetch = require('jest-fetch-mock')

const match = {
  params: {
    id: '10',
  }
}

const movie = {
  id: '73',
  title: 'level rules',
  release_date: '12/2/4',
  overview: 'movie was great',
  poster_path: 'poster.jpg',
  backdrop_path: 'backdrop.jpg'

}

test(' <MovieDetail />', async () => {

  // make sure mock data match json resposne expected in the component
  fetch.mockResponse(JSON.stringify(movie))

  const {debug, getByTestId} = render(<MovieDetail match={match}/>)

  await waitForElement(() => getByTestId('movie-title'))

  expect(getByTestId('movie-title').textContent).toBe(movie.title)

  expect(getByTestId('poster').src).toBe(`${POSTER_PATH}${movie.poster_path}`)

  // expect(getByTestId('backdrop').backdrop).toBe(`${BACKDROP_PATH}${movie.backdrop_path}`)

  // debug()
})

