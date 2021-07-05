/* eslint react/no-did-mount-set-state: 0 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Movie from './Movie';
import { getMovies } from '../../actions';

const MoviesList = ({ getMovies, moviesList, isLoaded }) => {
  useEffect(() => {
    if (!isLoaded) {
      getMovies();
    }
  }, []);

  if (moviesList < 1) return <h1 data-testid="loading">Loading</h1>;
  return (
    <MovieGrid>
      {moviesList.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  );
};

const mapStateToProps = state => ({
  moviesList: state.moviesList.movies,
  isLoaded: state.moviesList.moviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
