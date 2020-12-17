import React from 'react'
import './Peaks.scss'
import { AiFillGithub } from 'react-icons/ai'
import { RiLiveLine } from 'react-icons/ri'

const Peaks = (props) => {

  return (
    <div className='peaks-page'>
      <div className='peaks-image'></div>
      <div className='project-content'>
        <p className='project-text'>A full stack application to store and log peaks you've summited. Made so users can view others peaks and descriptions of there experiences with the summit. Made with Javscript, JQuery, HTML/CSS in the front-end and Express, Mongoose and MongoDB for the back-end. Feel free to check out the GitHub repository or the live link below.</p>
        <a className='gh-logo-link' href='https://github.com/lss555/peaks-client'><AiFillGithub className='gh-logo'/></a>
        <a className='live-logo-link' href='https://lss555.github.io/Peaks-Client'><RiLiveLine className='live-logo'/></a>
      </div>
    </div>
  )

}

export default Peaks
