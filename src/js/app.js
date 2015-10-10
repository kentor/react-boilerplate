import './polyfills';
import ReactDOM from 'react-dom';
import router from './router';

if (module.hot) {
  module.hot.setUpdateMode('websocket', {
    url: `http://${location.hostname}:3123`,
  });
}

ReactDOM.render(router, document.getElementById('root'));
