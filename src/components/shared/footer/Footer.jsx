import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer () {

  return(
  <section className='footer'>
    <hr className='footer-seperator'/>
    <section className='footer-social-media'>
      <section className='footer-info-left'>
      <section className='footer-info__linkedin'>
      <a href='https://www.linkedin.com/in/chrisheibel7/'>LinkedIn</a>
    </section>
    <section className='footer-info__github'>
    <a href='https://github.com/lss555'>GitHub</a>
  </section>
  <section>
    ChrisHeibeldev@gmail.com
  </section>
  <section>
    (720) 813-3248
  </section>
  <section>
    Denver, CO
  </section>

      </section>
      <section className='footer-info-center'>

      </section>
      <section className='footer-info-right'>
        <section>
          <Link to='/' className='navbar-item'>Home</Link>
        </section>
        <section>
          <Link to='/about' className='navbar-item'>About</Link>
        </section>
        <section>
          <Link to='/allprojects' className='navbar-item'>All Projects</Link>
        </section>
        <section>
          <Link to='/resume' className='navbar-item'>Resume</Link>
        </section>
        <section>
          <Link to='/contact' className='navbar-item'>Contact</Link>
        </section>

      </section>
    </section>
    <hr className='footer-seperator'/>
  </section>
  )
}

export default Footer
