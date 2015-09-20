import React from 'react/addons';

const Root = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  render() {
    return <span>おはようございます。</span>;
  },
});

export default Root;
