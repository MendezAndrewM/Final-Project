import React from "react";
import { Navbar, NavItem, Dropdown, Divider} from 'react-materialize'
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
        <Dropdown trigger={<a />}>
        <a href="#">
        one
        </a>
        <a href="#">
        two
        </a>
        <Divider/>
        <a href="#">
        three
        </a>
        </Dropdown>
        </Navbar>
 )
}

export default Nav