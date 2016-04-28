import React from 'react';
import Root from './components/Root';
import Slides from './components/Slides';
import { hashHistory, IndexRedirect, Route, Router } from 'react-router';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <IndexRedirect to="/1" />
      <Route path=":page" component={Slides} />
    </Route>
  </Router>
);
