import React, {useState} from 'react'

const MovieForm = (props) => {
  const [formValue, setformValue] = useState('')

  return(
    <form data-testid="movie-form" onSubmit={ () => props.submitForm(formValue) }>
      <label htmlFor="text">
        Text
        <input
          type="text"
          id="text"
          onChange={(e) => setformValue(e.target.value)}>
        </input>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default MovieForm