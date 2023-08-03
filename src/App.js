import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './app.css'

import { init } from 'commandbar';
init('81136260');

const App = ({ children }) => {
  useEffect(() => {
    const loggedInUserId = '12345'; // example
    window.CommandBar.boot(loggedInUserId).then(() => {
      <Router>
         <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    });

    return () => {
      window.CommandBar.shutdown();
    }
  }, []);
}

export default App;
