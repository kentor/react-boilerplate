var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

Router.run(routes, Handler => {
  React.render(<Handler />, document.body);
});
