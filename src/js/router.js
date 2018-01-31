const React = require('react');
const Root = require('./components/Root');
const { BrowserRouter } = require('react-router-dom');
const { hot } = require('react-hot-loader');

module.exports = hot(module)(() => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
));
