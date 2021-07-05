import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import NewMovie from '../NewMovie'

afterEach(cleanup)

test('<NewMovie', () => {
  const { debug, getByTestId, container, getByText } = render(<NewMovie/>)
  expect(getByTestId('page-title').textContent).toBe('New Movie')
  // expect the movie form to exist
  expect(getByTestId('movie-form')).toBeTruthy()
  // creates a snapshot of the dom
  expect(container.firstChild).toMatchSnapshot()
  // debug()

})


