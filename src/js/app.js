require('./polyfills');
const ReactDOM = require('react-dom');
const router = require('./router');

if (module.hot) {
  module.hot.setUpdateMode('websocket', {
    url: `http://${location.hostname}:3123`,
  });
}

ReactDOM.render(router, document.getElementById('root'));
