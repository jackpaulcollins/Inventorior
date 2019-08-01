import React from 'react'

class Nav extends React.Component {
  render () {
    return (
      <div className='nav-bar'>
        <div><h2>Inventorior</h2></div>
        <div className='nav-bar-links'>
          <p>Signin</p>
          <p>Signout</p>
        </div>
      </div>
    )
  }
};

export default Nav;