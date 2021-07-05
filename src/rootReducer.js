import { combineReducers } from 'redux';

import moviesList from './reducer';

const rootReducer = combineReducers({
  moviesList,
});

export default rootReducer;
