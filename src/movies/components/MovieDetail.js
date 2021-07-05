/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
export const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieDetail = ({ moviesList, match }) => {
  // eslint-disable-next-line eqeqeq
  const movie = moviesList.find(movie => movie.id == match.params.id);
  if(!movie) return <h1>Movie Not Found</h1>;
  return (
    <MovieWrapper data-testid="backdrop" backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={`${movie.id}`}>
          <Poster data-testid="poster "src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1 data-testid="movie-title">{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
};

const mapStateToProps = state => ({
  moviesList: state.moviesList.movies,
});

export default connect(mapStateToProps)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
