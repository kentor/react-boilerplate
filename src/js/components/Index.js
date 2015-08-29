const React = require('react/addons');

const Index = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  render() {
    return <span>おはようございます。</span>;
  },
});

module.exports = Index;
