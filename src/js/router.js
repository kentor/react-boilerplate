const React = require('react');
const Root = require('./components/Root');
const { browserHistory, Route, Router } = require('react-router');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Root} />
  </Router>
);
