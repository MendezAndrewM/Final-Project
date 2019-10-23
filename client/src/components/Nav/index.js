import React from "react";

import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize'
import Social from '../social/index.js'
import "./style.css"
// import "./Nav.sass"


const Nav = () => {

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

      <NavItem>
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
      
      <NavItem href="/about">
      <Link to="/about"
          className={window.location.pathname === "/about" 
          ? "nav-link active" 
          : "nav-link"}>
          About
        </Link>
        </NavItem>

         <NavItem href="/google.js">
           <Link>
        <Social />
           </Link>
        </NavItem>

    </Navbar>
  )
}

export default Nav