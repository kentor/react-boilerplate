import Editor from './components/Editor';
import Index from './components/Index';
import React from 'react';
import Root from './components/Root';
import { Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Root}>
    <Route name="index" path="/" handler={Index} />
    <Route name="editor" path="editor" handler={Editor} />
  </Route>
);
