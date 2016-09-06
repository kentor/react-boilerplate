const Icon = require('./Icon');
const React = require('react');

const Root = React.createClass({
  render() {
    return (
      <main
        className="relative dark-gray"
        style={{ height: '11in', width: '8.5in' }}
      >
        <div className="bg-dark-gray white pv3 ph4 f6 lh-solid flex justify-between">
          <div>
            {/*
            <Icon icon="email" size="1em" />
            */}
            <a href="mailto:ken70r@gmail.com" className="no-underline">
              ken70r@gmail.com
            </a>
          </div>
          <div>
            {/*
            <Icon icon="location" size="1em" />
            */}
            <span>San Francisco, CA</span>
          </div>
          <div>
            {/*
            <Icon icon="phone" size="1em" />
            */}
            <span>415-690-9363</span>
          </div>
          <div>
            {/*
            <Icon icon="site" size="1em" />
            */}
            <a href="https://kentor.me" className="no-underline">
              kentor.me
            </a>
          </div>
          <div>
            {/*
            <Icon icon="github" size="1em" />
            */}
            <a href="https://github.com/kentor" className="no-underline">
              github.com/kentor
            </a>
          </div>
        </div>

        <section className="pa4">
          <h1 className="fw6 f-2 ma0 relative">
            Kenneth Chung
          </h1>
          <p className="mt1 mb3">
            Software Engineer specializing in Frontend Development
          </p>

          <h2 className="f3 mt4 mb3 fw5">
            <span className="dib">Work Experience</span>
          </h2>

          <span className="f4">
            <span className="fw6">Rescale, San Francisco, CA</span>
            {' '}
            Lead Frontend Engineer (October 2014 — present)
          </span>
          <ul className="pl3 lh-title">
            <li className="mv2">
              Introduced the React ecosystem and modern web development tooling
              to the development team. This includes Babel, Browserify, ESLint,
              Gulp, Hot Module Reloading, and NPM.
            </li>
            <li className="mv2">
              Developed i18n supported administrative and management
              applications for our enterprise users and software partners using
              Django, React, Redux, and Immutable.js.
            </li>
            <li className="mv2">
              Maintain the frontend of our main PaaS product which is built on
              Angular, Django, Django Rest Framework.
            </li>
            <li className="mv2">
              Implemented the S3/Azure HTML5 file uploader with client-side
              encryption using WebCrypto.
            </li>
            <li className="mv2">
              Implemented a fully responsive marketing site with the Tachyons
              CSS library.
            </li>
          </ul>

          <span className="f4">
            <span className="fw6">
              Shop It To Me, San Francisco, CA</span>
            {' '}
            Software Engineer (October 2012 — August 2014)
          </span>
          {' '}
          <ul className="pl3 lh-title">
            <li className="mv2">
              Developed SPAs for the core Shop It To Me shopping service using
              Ember, Ruby, and Ruby on Rails for both the desktop web and mobile
              web platforms.
            </li>
            <li className="mv2">
              Created and maintained the JSON API using Rails, MySQL, and
              Sphinx.
            </li>
            <li className="mv2">
              Developed the password-less, email based authentication system
              used in our iOS app.
            </li>
            <li className="mv2">
              Developed the price drop email alert system and implemented the
              accompanying iOS notifications.
            </li>
            <li className="mv2">
              Maintained cross browser compatibility for all major browsers,
              including IE8+.
            </li>
          </ul>

          <h2 className="f3 mt4 mb3 fw5">
            <span className="dib">Open Source</span>
          </h2>
          <ul className="pl3 lh-title">
            <li className="mv2 lh-title">
              <a href="https://github.com/kentor/react-click-outside">
                react-click-outside
              </a>:
              {' '}
              A higher order component for providing click outside detection.
            </li>
            <li className="mv2 lh-title">
              <a href="https://github.com/kentor/kentor.me">
                kentor.me
              </a>:
              {' '}
              My website and blog, statically generated using React and Node.js
              APIs with live reloading.
            </li>
          </ul>

          <h2 className="f3 mt4 mb3 fw5">
            <span className="dib">Technical Skills</span>
          </h2>
          <p className="mv3 lh-title">
            Javascript, ES6, React, Angular, Ember, HTML, CSS, Ruby, Ruby on
            Rails, Python, Django, SQL
          </p>

          <h2 className="f3 mt4 mb3 fw5">
            <span className="dib">Education</span>
          </h2>
          <p className="mv3">
            Bachelor of Science, Chemistry, University of California, Berkeley
            — GPA: 3.85
          </p>
          <p>
            Selected coursework: Data Structures and Algorithms (CS 61B) — A+
          </p>
        </section>
      </main>
    );
  },
});

module.exports = Root;
