import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar () {

  return (
    <section className='navbar'>
    <Link to='/' className='navbar-item'>Home</Link>
    <Link to='/about' className='navbar-item'>About</Link>
    <Link to='/allprojects' className='navbar-item'>All Projects</Link>
    <Link to='/resume' className='navbar-item'>Resume</Link>
    <Link to='/contact' className='navbar-item'>Contact</Link>
    </section>
  )

}

export default Navbar
