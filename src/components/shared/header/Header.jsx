import React from 'react'
import { Navbar } from '../../shared'
import './Header.css'
import eleLogo from '../../shared/eleLogo.png'

function Header () {

  return (
    <section className='header'>
      <section className='header-top'>
        <section className='header-top__logo'>
        <a href='/' className='header-logo'><img src={eleLogo} alt="Logo" height="120" width="140" /></a>
        </section>
        <section className='header-top__navbar'>
          <section className='header-top__navigation'>
            <Navbar />
          </section>
          <hr className='header-top__seperator' />
        </section>
      </section>
      <section className='header-bottom'>
        <section className='header-bottom__phone'>

        </section>
        <section className='header-bottom__email'>
        Chrisheibeldev@gmail.com
        </section>
      </section>
    </section>
  )

}

export default Header
