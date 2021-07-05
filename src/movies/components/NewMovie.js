import React from 'react'
import MovieForm from './MovieForm'

const NewMovie = () => {
  return(
    <div>
      <h1 data-testid="page-title">New Movie</h1>
      <MovieForm/>
    </div>
  )
}

export default NewMovie