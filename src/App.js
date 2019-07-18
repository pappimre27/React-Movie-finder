import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Movie from './components/movies/Movie';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import MovieState from './context/movie/MovieState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title="Movie Finder" />
            <div className="user-input">
              <Alert />
              <Switch>
                <Route
                  exact path='/'
                  component={Home}
                />
                <Route exact path='/movie/:id' render={props => (
                  <Movie {...props} />
                )} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MovieState>
  );
}

export default App;
