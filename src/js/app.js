import './polyfills';

if (module.hot) {
  module.hot.setUpdateMode('websocket', {
    url: `http://${location.hostname}:3123`,
  });
}

import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Handler => {
  React.render(<Handler />, document.getElementById('root'));
});
