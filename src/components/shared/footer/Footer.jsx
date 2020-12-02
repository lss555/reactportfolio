import React from 'react'

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
    ChrisHeibel7@gmail.com
  </section>
  <section>
    +1-719-225-6136
  </section>
  <section>
    Denver, CO
  </section>

      </section>
      <section className='footer-info-center'>

      </section>
      <section className='footer-info-right'>
        <section>
          Home
        </section>
        <section>
          About
        </section>
        <section>
          All Projects
        </section>
        <section>
          Resume
        </section>
        <section>
          Contact
        </section>

      </section>
    </section>
    <hr className='footer-seperator'/>
  </section>
  )
}

export default Footer
