require('./polyfills');

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('./router');

const root = document.getElementById('root');

ReactDOM.render(<Router />, root);
