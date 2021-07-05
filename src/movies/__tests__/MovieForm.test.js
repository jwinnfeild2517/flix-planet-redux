import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import MovieForm from '../MovieForm'

afterEach(cleanup)

const onSubmit = jest.fn()

test('<MovieForm />', () => {
  const { debug, getByTestId, container, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit}/>)
  // expect the movie form to exist
  expect(getByTestId('movie-form')).toBeTruthy()

  // getByLabelText('Text').value = 'hello'

  // fireEvent.change(getByLabelText('Text'));

  fireEvent.change(getByLabelText("Text"), {
    target: {value: 'hello'}
  })


  //
  fireEvent.click(getByText('Submit'))

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith('hello')
  // debug()

})
