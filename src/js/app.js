require('./polyfills');
require('react-hot-loader/patch');

const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');

const root = document.getElementById('root');

function render() {
  ReactDOM.render(<AppContainer>{require('./router')}</AppContainer>, root);
}

render();

if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}
