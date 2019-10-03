import React from "react";
import { Navbar, NavItem, Dropdown, Divider, } from 'react-materialize'



const Nav = () => {
    return( <Navbar brand={<a />} alignLinks="right">

    <NavItem href="">
    About
    </NavItem>
    <NavItem href="components.html">
    someplace
    </NavItem>
    <Dropdown trigger={<a />}>
    <a href="/account">
    acount things 1 
    </a>
    <a href="/comments">
    account things 2
    </a>
    <Divider/>
    <a href="/search">
    account things 3
    </a>
    </Dropdown>
    </Navbar>
        )
}

export default Nav