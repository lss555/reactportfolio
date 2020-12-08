import React from 'react'
import './Contact.scss'

const Contact = (props) => {

  return (
    <div className='contact-profile'>
    <div className='contact-image'></div>
      <section className='contact-social-media'>
        <section className='contact-info-left'>
        <h3 className='contact-name'>Chris Heibel</h3>
        <section className='about-info__linkedin'>
        <a href='https://www.linkedin.com/in/chrisheibel7/'>LinkedIn</a>
      </section>
      <section className='about-info__github'>
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
    </section>
    </div>
  )

}

export default Contact
