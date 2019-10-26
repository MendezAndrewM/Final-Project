import React from "react";

import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize'
import Social from '../social/index.js'
import "./style.css"
// import "./Nav.sass"


const Nav = (props) => {

  return (
    <Navbar className="nav-style" brand={<a>WhadjaPay</a>} alignLinks="right">


      <NavItem href="/">
        <Link to="/"
          className={window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"}>
          Home
        </Link>
      </NavItem>
{/* future feature */}
      {/* <NavItem>
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" 
          ? "nav-link active" 
          : "nav-link"}>
          Profile
        </Link>
      </NavItem> */}
{/* future feature */}
{/* idk if we still need */}
      {/* <NavItem href="/thisspecificbusiness">
        <Link to="/thisspecificbusiness"
          className={window.location.pathname === "/thisspecificbusiness" 
          ? "nav-link active" 
          : "nav-link"}>
          Bizz
        </Link>
      </NavItem> */}
      {/* idk if we still need */}
      <NavItem href="/About">
        <Link to="/About"
        className={window.location.pathname === "/About" 
        ? "nav-link active" 
        : "nav-link"}>
        About
        </Link>
      </NavItem>

      <NavItem href="/google.js">
        <Social loggedIn={props.loggedIn ? "Sign Out" : "Sign In"} />
      </NavItem>

    </Navbar>
  )
}

export default Nav