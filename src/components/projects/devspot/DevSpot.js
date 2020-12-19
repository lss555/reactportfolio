import React from 'react'
import './DevSpot.scss'
import { AiFillGithub } from 'react-icons/ai'
import { RiLiveLine } from 'react-icons/ri'

const Peaks = (props) => {

  return (
    <div className='devspot-page'>
      <div className='devspot-image'></div>
      <div className='project-content'>
        <p className='project-text'>Social media application for developers with user profiles, posts, and much more! Built with React in the front-end and Express, MongoDB, and Mongoose in the back-end. This project was built with a team of 3 other developers, it showed me the benefits of working with other developers, the benefits of GitHub when working on a team, and lots about React and MongoDB. Feel free to check out the GitHub repository or the live link below.</p>
        <a className='gh-logo-link' href='https://github.com/Team-StuckOverflow/devspot-client'><AiFillGithub className='gh-logo'/></a>
        <a className='live-logo-link' href='https://team-stuckoverflow.github.io/devspot-client'><RiLiveLine className='live-logo'/></a>
      </div>
    </div>
  )

}

export default Peaks
