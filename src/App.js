import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
import useCommandBar from './useCommandBar'
import './app.css'

function App () {
  useCommandBar();
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
}

export default App;
