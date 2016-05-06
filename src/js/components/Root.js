import React from 'react';

const posts = [
  {
    name: 'Creating diagrams with React, SVG, and CSS-Layout',
    date: '2015-01-23',
  },
  {
    name: 'Testing React and Flux applications with Karma and Webpack',
    date: '2015-01-23',
  },
  {
    name: 'Dealing with interdependent states in React',
    date: '2015-01-23',
  },
  {
    name: 'Generating pastel colors for css',
    date: '2015-01-23',
  },
  {
    name: 'XHR authentication over SSL from a non SSL origin using CORS',
    date: '2015-01-23',
  },
  {
    name: 'Clipping backgrounds using css masks',
    date: '2015-01-23',
  },
  {
    name: 'Showing local images in Gmail',
    date: '2015-01-23',
  },
  {
    name: 'Detecting clicks outside an element the right way',
    date: '2015-01-23',
  },
];

const Root = React.createClass({
  render() {
    return (
      <main>
        {posts.map((post, i) => (
          <p key={i}>
            {post.name}<br />
            {post.date}
          </p>
        ))}
      </main>
    );
  },
});

export default Root;
