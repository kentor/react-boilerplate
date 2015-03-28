var Immutable = require('immutable');
var React = require('react');

var Index = React.createClass({
  render() {
    return <h1>{Immutable.Range(0, 10)}</h1>;
  },
});

module.exports = Index;
