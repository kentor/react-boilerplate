const Index = require('./components/Index');
const React = require('react');
const { Route } = require('react-router');

const routes = (
  <Route name="app" path="/" handler={Index} />
);

module.exports = routes;
