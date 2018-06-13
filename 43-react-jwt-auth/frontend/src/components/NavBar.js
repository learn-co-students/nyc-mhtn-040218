import React from 'react';
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter'

const NavBar = (props) => {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>
      {
        Adapter.loggedIn() ?
          <React.Fragment>
            <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>
            <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
          </React.Fragment>
        :
          <p>Logout</p>
      }
      <NavLink activeClassName="selected" exact to="/snacks">Snacks</NavLink>
      <NavLink activeClassName="selected" exact to="/my-snacks">My Snacks</NavLink>
    </header>
  )
}

export default NavBar;
