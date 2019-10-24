import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize'
import Social from '../social/index.js'
import "./style.css"
// import "./Nav.sass"


const Nav = (props) => {

  return (
    <Navbar className="nav-style" brand={<a>Working Title</a>} alignLinks="right">


      <NavItem href="/">
        <Link to="/"
          className={window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"}>
          Home
        </Link>
      </NavItem>

      <NavItem href="/profile">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" 
          ? "nav-link active" 
          : "nav-link"}>
          Profile
        </Link>
      </NavItem>

      <NavItem href="/thisspecificbusiness">
        <Link to="/thisspecificbusiness"
          className={window.location.pathname === "/thisspecificbusiness" 
          ? "nav-link active" 
          : "nav-link"}>
          Bizz
        </Link>
      </NavItem>
      
      <NavItem href="/About">
        <Link to="/About"
        className={window.location.pathname === "/About" 
        ? "nav-link active" 
        : "nav-link"}>
        About
        </Link>
      </NavItem>

      <NavItem href="/">
        <Social loggedIn={props.loggedIn ? "Sign Out" : "Sign In"} />
      </NavItem>

    </Navbar>
  )
}

export default Nav