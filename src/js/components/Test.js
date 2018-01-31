const createReactClass = require('create-react-class');
const React = require('react');
const { hot } = require('react-hot-loader');

const Test = createReactClass({
  render() {
    return <div>Test</div>;
  },
});

module.exports = hot(module)(Test);
