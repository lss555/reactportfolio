import React from 'react'
import './About.scss'
// import ReactRoundedImage from "react-rounded-image"
// import Image from 'react-bootstrap/Image'
// import profileimage from '../photos/profile-image.jpg'

const About = (props) => {

  return (
    <div className='about'>
      <div className='about-profile'>
      <div className='profile-image'></div>
        <section className='about-social-media'>
          <section className='about-info-left'>
          <h3 className='profile-name'>Chris Heibel</h3>
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
      <div className='about-text'>
        <h3>About Me</h3>
        <p>I'm a full stack engineer with a passion to find creative solutions and develop top tier applications. I thrive under pressure and have worked in many different fields from ski lodges to security and demolition. Through those experiences I realized I wanted to make a career that I would be passionate about. I had coded here and there and always enjoyed it and the freedom it gives you to build whatever you want with a little bit of work and creativity. If you're interested feel free to check out my projects <a href='/allprojects'>here</a>. Need a great developer on your team? Need something built? Contact me on social media or email me <a href='/contact'>here</a>.</p>
      </div>
    </div>
  )

}

export default About
