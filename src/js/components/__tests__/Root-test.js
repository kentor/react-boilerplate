const React = require('react');
const Root = require('../Root');
const { shallow } = require('enzyme');

describe('Root', () => {
  it('renders', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
});
