var React = require('react');
var Route = require('react-router').Route;
var Router = require('react-router');

var Index = require('./components/Index.jsx');

Router.run((
  <Route name="app" path="/" handler={Index}>
  </Route>
), (Handler) => {
  React.render(<Handler />, document.body);
});
