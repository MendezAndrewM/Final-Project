import React from "react";
import { Navbar, NavItem} from 'react-materialize'
import "./style.css"


const Nav = () => {

    return(
        <Navbar brand={<a />} alignLinks="right">
        <NavItem href="">
        Login/ log out
        </NavItem>
        <NavItem href="components.html">
        Profile
        </NavItem>
        <NavItem href="components.html">
        About 
        </NavItem>
        
        </Navbar>
 )
}

export default Nav