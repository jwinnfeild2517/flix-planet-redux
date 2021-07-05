import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'elementz';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { getMovies } from '../actions';

const Filter = ({ getMovies }) => {
  const history = useHistory();
  return (
    <FilterContainer>
      <Button
        rainbow
        gradient
        type="button"
        onClick={() => { getMovies('liamNeeson'); history.push('/'); }}
        effect="float"
      >
        Liam Neeson
      </Button>
      <Button
        rainbow
        gradient
        type="button"
        onClick={() => { getMovies('dramas'); history.push('/'); }}
        effect="float"
      >
        Dramas
      </Button>
      <Button
        rainbow
        gradient
        type="button"
        onClick={() => { getMovies('trending'); history.push('/') }}
        effect="float"
      >
        Trending
      </Button>
    </FilterContainer>
  );
};


const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 30em;
  padding: 10px 0px;
`;
