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
  </div>
  )

}

export default Home
