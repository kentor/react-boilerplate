const React = require('react');
const { Link, RouteHandler } = require('react-router');

const MembersIndex = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <Link to="todos">Todos</Link>
          {' '}
          <Link to="members">Members</Link>
        </nav>
        <RouteHandler />
      </div>
    );
  },
});

module.exports = MembersIndex;
