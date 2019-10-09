import React from "react";
import { Navbar, NavItem, Row, Col} from 'react-materialize'
import "./style.css"


const Nav = () => {

    return(
     <Navbar brand={<a />} alignLinks="right">
     <NavItem href="">
     Getting started
     </NavItem>
     <NavItem href="components.html">
     Components
     </NavItem>
     </Navbar>
 )
}

export default Nav