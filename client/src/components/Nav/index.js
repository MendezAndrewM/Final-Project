import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize'
import "./style.css"


const Nav = () => {

  return (
    <Navbar className="nav-style" brand={<a />} alignLinks="right">

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
      
      <NavItem href="components.html">
        About
        </NavItem>

    </Navbar>
  )
}

export default Nav