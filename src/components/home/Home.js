import React from 'react'
// import {
//   Col, Row, Container
// } from 'reactstrap'
import './Home.scss'
// import profileimage from '../photos/profile-image.jpg'

const Home = (props) => {

  return (
    <div>
    <div className='home-intro'>
      <h3 className='home-intro-top'>Hi, my name's</h3>

      <h1 className='home-intro-middle'>Chris</h1>

      <p className='home-intro-bottom'>I'm a software Engineer based out of Denver, CO specializing in building a designing effective, high-quality websites and applications.</p>
    </div>
    <div className='home-projects-page'>
      <div className='home-projects-gallery'>
        <div className='home-projects-gallery-image medium spots'>Spot Locater</div>
        <div className='home-projects-gallery-image large peaks'>Peaks</div>
        <div className='home-projects-gallery-image medium dev-spot'>Dev Spot</div>
        <div className='home-projects-gallery-image small ttt'>Tic Tac Toe</div>
      </div>
    </div>
    <div className='tech'>
      <h2>Technologies</h2>
      <ul class="feature-icons">
				<li class="icon solid fa-laptop">JavaScript</li>
				<li class="icon solid fa-bolt">HTML/CSS</li>
				<li class="icon solid fa-signal">React</li>
				<li class="icon solid fa-cog">Mongoose</li>
				<li class="icon solid fa-map-marker-alt">MongoDB</li>
				<li class="icon solid fa-code">Express</li>
				<li class="icon solid fa-cog">RESTful API's</li>
				<li class="icon solid fa-map-marker-alt">PostgreSQL</li>
				<li class="icon solid fa-code">JQuery</li>
				<li class="icon solid fa-code">Node.js</li>
				<li class="icon solid fa-code">GitHub</li>
				<li class="icon solid fa-code">Grunt</li>
				<li class="icon solid fa-code">Sass</li>
				<li class="icon solid fa-code">Bootstrap</li>
			</ul>
    </div>
  </div>
  )

}

export default Home
