import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: '200px',
  padding: '12px',
  margin: '10px 6px 6px 10px',
  background: '#a6a6a6',
  textDecoration: 'none',
  color: 'white'
}

const NavigationBar = () => {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >Fleddit Home</NavLink>
        <NavLink
          to="/posts"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >All Posts</NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >About</NavLink>
      </div>

    )
}

export default NavigationBar

// <nav className="navbar navbar-default navbar-gray">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <Link to='/'>Fleddit </Link>
//     </div>
//     <div>
//       <ul className="nav navbar-nav">
//         <li><Link to='/posts'>All Posts</Link></li>
//         <li><Link to='/about'>About</Link></li>
//       </ul>
//     </div>
//   </div>
// </nav>
