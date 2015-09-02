const MembersIndex = require('./components/MembersIndex');
const React = require('react');
const Root = require('./components/Root');
const TodosIndex = require('./components/TodosIndex');
const { DefaultRoute, Route } = require('react-router');

const routes = (
  <Route name="root" path="/" handler={Root}>
    <DefaultRoute name="todos" handler={TodosIndex} />
    <Route name="members" path="members/?" handler={MembersIndex} />
  </Route>
);

module.exports = routes;
