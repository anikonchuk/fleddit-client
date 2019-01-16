import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <nav className="navbar navbar-default navbar-gray">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/'>Fleddit </Link>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li><Link to='/posts'>All Posts</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default NavigationBar
