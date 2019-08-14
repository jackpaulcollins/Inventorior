import React from 'react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <div><h2><Link to={'/'}>Inventorior</Link></h2></div>
        <div className='nav-bar-links'>
          <p>Signin</p>
          <p>Signout</p>
        </div>
      </div>
    )
  }
};

export default Nav;