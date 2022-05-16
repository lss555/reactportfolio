import React from 'react'
import { NavbarContainer, NavbarItem, MobileIcon } from './Navbar.styles.jsx'
import { FaBars } from 'react-icons/fa'


function Navbar ({ toggle }) {

  return (
    <NavbarContainer>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
        <NavbarItem to='/'>Home</NavbarItem >
        <NavbarItem  to='/about'>About</NavbarItem>
        <NavbarItem  to='/allprojects'>All Projects</NavbarItem >
        <NavbarItem  to='/resume'>Resume</NavbarItem >
        <NavbarItem  to='/contact'>Contact</NavbarItem >
    </NavbarContainer>
  )
}

// display: ${hamburgerOpen ? 'inline' : 'none'};

export default Navbar;
