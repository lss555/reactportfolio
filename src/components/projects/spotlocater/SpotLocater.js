import React from 'react'
import './SpotLocater.scss'
import { AiFillGithub } from 'react-icons/ai'
import { RiLiveLine } from 'react-icons/ri'
        // <AiFillGithub />
// import github from '../photos/github.png'

const SpotLocater = (props) => {

  return (
    <div className='spot-page'>
      <div className='spot-image'></div>
      <div className='project-content'>
        <p className='project-text'>This project was made to be a guide to new locations where you can ski, mountain bike, or just all around get out and enjoy yourself. Complete with descriptions, locations, and more that all can be made and edited by the user. Made with React.js in the front-end and Django and python for the back-end. Feel free to check out the GitHub repository or the live link below.</p>
        <a className='gh-logo-link' href='https://github.com/lss555/street-spots-client'><AiFillGithub className='gh-logo'/></a>
        <a className='live-logo-link' href='https://lss555.github.io/street-spots-client'><RiLiveLine className='live-logo'/></a>
      </div>
    </div>
  )

}

export default SpotLocater;
