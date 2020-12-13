import React from 'react'
// import {
//   Col, Row, Container
// } from 'reactstrap'
import './Home.scss'
// import profileimage from '../photos/profile-image.jpg'
import js from '../photos/js.png'
import py from '../photos/py.png'
import html from '../photos/html.png'
import react from '../photos/react.png'
import bootstrap from '../photos/bootstrap.png'
import css from '../photos/css.png'
import github from '../photos/github.png'
import grunt from '../photos/grunt.png'
import jquery from '../photos/jquery.png'
import mongodb from '../photos/mongodb.png'
import postgresql from '../photos/postgresql.png'
import node from '../photos/node.png'
import restful from '../photos/restful-api.png'
import sass from '../photos/sass.png'
import express from '../photos/express.png'
import mongoose from '../photos/mongoose.png'

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
      <div className='header-tech'>
        <h2>Skills</h2>
      </div>
      <div className='tech-container'>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={html} alt=''/>
            </div>
            <h3>HTML5</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={py} alt=''/>
            </div>
            <h3>Python</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={js} alt=''/>
            </div>
            <h3>Javascript</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={react} alt=''/>
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={postgresql} alt=''/>
            </div>
            <h3>PostgreSQL</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={css} alt=''/>
            </div>
            <h3>CSS</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={mongodb} alt=''/>
            </div>
            <h3>MongoDB</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={restful} alt=''/>
            </div>
            <h3>RESTful API's</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={jquery} alt=''/>
            </div>
            <h3>JQuery</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={node} alt=''/>
            </div>
            <h3>Node.js</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={github} alt=''/>
            </div>
            <h3>GitHub</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={sass} alt=''/>
            </div>
            <h3>SASS</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={grunt} alt=''/>
            </div>
            <h3>Grunt</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={bootstrap} alt=''/>
            </div>
            <h3>Bootstrap</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={express} alt=''/>
            </div>
            <h3>Express</h3>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title'>
            <div className='img'>
              <img className='skill-icon' src={mongoose} alt=''/>
            </div>
            <h3>Mongoose</h3>
          </div>
        </div>
      </div>

    </div>
  </div>
  )

}

export default Home
