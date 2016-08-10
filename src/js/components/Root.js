const React = require('react');

const Root = React.createClass({
  render() {
    return (
      <main className="ph5 pv4 mw8 center">
        <h1 className="fw5 f2 tc ma0">Kenneth Chung</h1>
        <p className="tc mv3">
          Software Engineer specializing in Front End Development
        </p>
        <p className="tc ma0">
          1368 20th Ave. San Francisco, CA 94122
          {' • '}
          <a href="mailto:ken70r@gmail.com">ken70r@gmail.com</a>
          {' • '}
          (415) 690-9363
        </p>
        <p className="tc ma0">
          <a href="https://github.com/kentor">https://github.com/kentor</a>
          {' • '}
          <a href="http://kentor.me">http://kentor.me</a>
        </p>

        <h2 className="f3 mt4 mb3">Work Experience</h2>

        <span className="f4">
          <strong>Rescale, San Francisco, CA</strong>
          {' '}
          <em>Software Engineer (October 2014 — present)</em>
        </span>
        <ul className="pl3">
          <li className="mv2 lh-title">
            Developed consumer facing and i18n supported administrative and
            management web applications with React, Redux, D3, and Immutable.js.
          </li>
          <li className="mv2 lh-title">
            Implemented an HTML5 file uploader with client-side encryption using
            WebCrypto.
          </li>
          <li className="mv2 lh-title">
            Maintain our main platform product which is built on Angular,
            Django, Django Rest Framework.
          </li>
          <li className="mv2 lh-title">
            Implemented a fully responsive marketing site with Tachyons.
          </li>
          <li className="mv2 lh-title">
            Introduced the React ecosystem and modern web development tooling to
            the development team. This includes Browserify, Hot Module
            Reloading, Babel, ESLint, and Gulp.
          </li>
        </ul>

        <span className="f4">
          <strong>Shop It To Me, San Francisco, CA</strong>
          {' '}
          <em>Software Engineer (October 2012 — August 2014)</em>
        </span>
        {' '}
        <ul className="pl3">
          <li className="mv2 lh-title">
            Developed an ambitious, UI rich application for the core Shop It To
            Me shopping service using Ember, Ruby, and Ruby on Rails for both
            the desktop web and mobile web platforms, serving our 4 million+
            members.
          </li>
          <li className="mv2 lh-title">
            Created and maintained the JSON API for Shop It To Me mobile web and
            iOS app using Rails, MySQL, and Sphinx.
          </li>
          <li className="mv2 lh-title">
            Developed the password-less, email based authentication system used
            in our iOS app.
          </li>
          <li className="mv2 lh-title">
            Developed the price drop email alert system and implemented the
            accompanying iOS notifications.
          </li>
          <li className="mv2 lh-title">
            Maintained cross browser compatibility of our website for all major
            browsers, including IE8+.
          </li>
          <li className="mv2 lh-title">
            Discussed good coding practices with colleagues and stressed the
            SOLID principles during code reviews and in my own code.
          </li>
        </ul>

        <h2 className="f3 mt4 mb3">Technical Skills</h2>
        <p className="mv3 lh-title">
          Javascript, ES6, React, Angular, Ember, D3, Ruby, Ruby on Rails,
          Python, Django, Django Rest Framework, PostgreSQL, MySQL
        </p>

        <h2 className="f3 mt4 mb3">Education</h2>
        <p className="mv3">
          Bachelor of Science, Chemistry, University of California, Berkeley
          — GPA: 3.85
        </p>
      </main>
    );
  },
});

module.exports = Root;
