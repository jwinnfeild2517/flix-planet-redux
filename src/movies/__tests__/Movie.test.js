import React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import Movie, {POSTER_PATH} from '../Movie';
import { MemoryRouter } from 'react-router-dom';

afterEach( () => {
  cleanup();
  console.error.mockClear();
  console.warn.mockClear(); // if a mock function has been called, clear it for the next test
})

console.error = jest.fn();
console.warn = jest.fn()

test(' <Movie />', () => {
  const {} = render(
  <Movie />
  )
  expect(console.error).toHaveBeenCalled()
})

// mock data to passed into the movie component
const movie =  {
  id: 'movie-1',
  title: 'Baby day',
  poster_path: 'poster.jpg'
}

test(' <Movie /> with props', () => {
  const {getByTestId} = render(
    <MemoryRouter>
       <Movie movie={movie} />
    </MemoryRouter>
  )


  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
  expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`)
})
