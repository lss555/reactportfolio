import React from 'react'
import './Contact.scss'

const Contact = (props) => {

  return (
    <div className='contact-profile'>
    <div className='contact-image'></div>
      <section className='contact-social-media'>
        <section className='contact-info-left'>
        <h3 className='contact-name'>Chris Heibel</h3>
        <section className='about-info__linkedin contact-text'>
        <a href='https://www.linkedin.com/in/chrisheibel7/'>LinkedIn</a>
      </section>
      <section className='about-info__github contact-text'>
      <a href='https://github.com/lss555'>GitHub</a>
    </section>
    <section className='contact-text'>
      ChrisHeibeldev@gmail.com
    </section>
    <section className='contact-text'>
      (720) 813-3248
    </section>
    <section className='contact-text'>
      Denver, CO
    </section>
    </section>
    </section>
    </div>
  )

}

export default Contact
