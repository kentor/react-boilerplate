require('./polyfills');

const createLogger = require('redux-logger');
const React = require('react');
const Router = require('react-router');
const routes = require('./routes');
const thunk = require('redux-thunk');

const reducer = require('./reducer');
const { applyMiddleware, createStore } = require('redux');
const { Provider } = require('react-redux');

const createStoreWithMiddleware = applyMiddleware(...[
  thunk,
  createLogger(),
])(createStore);
const store = createStoreWithMiddleware(reducer);

Router.run(routes, Handler => {
  React.render(
    <Provider store={store}>
      {() => <Handler />}
    </Provider>,
    document.getElementById('root')
  );
});
