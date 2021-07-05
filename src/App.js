/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// loads and save our redux state tree to our local storage
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './rootReducer';
import './App.css';
import MoviesList from './movies/components/MoviesList';
import MovieDetail from './movies/components/MovieDetail';
import Filter from './movies/Filter';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            {/* <img src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="App-logo" alt="logo" /> */}
            <h1 className="App-logo">Jenner Flix</h1>
          </Link>
        </header>
        <Filter/>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
