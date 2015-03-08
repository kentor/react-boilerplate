var Index = require('./components/Index.jsx');
var React = require('react');
var Route = require('react-router').Route;

var routes = (
  <Route name="app" path="/" handler={Index}>
  </Route>
);

module.exports = routes;
