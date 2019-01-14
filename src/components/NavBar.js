import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" class="navbar-brand">Fleddit</a>
          <div>
            <ul className="nav navbar-nav">
              <li>All Posts</li>
              <li>New Post</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
