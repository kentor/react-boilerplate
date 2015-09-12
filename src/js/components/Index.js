import React from 'react/addons';

const Index = React.createClass({
  mixins: [
    React.addons.PureRenderMixin,
  ],

  render() {
    return <span>おはようございます。</span>;
  },
});

export default Index;
