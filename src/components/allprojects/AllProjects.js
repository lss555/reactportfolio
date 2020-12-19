import React from 'react'
import './AllProjects.scss'
// import { FaBeer } from 'react-icons/fa'
// import { AiFillGithub } from 'react-icons/ai'
        // <AiFillGithub />
// import github from '../photos/github.png'

const AllProjects = (props) => {

  return (
    <div className='all-projects-page'>
      <div className='allprojects-gallery'>
        <div className='allprojects-gallery-image medium spots'>
        <a href='/spot-locater' className='project-link'>Spot Locater</a>
          <div className='logo-div'>
          </div>
        </div>
        <div className='allprojects-gallery-image large peaks'>
        <a href='/peaks' className='project-link'>
        Peaks</a>
        </div>
        <div className='allprojects-gallery-image medium dev-spot'>
        <a href='/devspot' className='project-link'>
        Dev Spot
        </a>
        </div>
        <div className='allprojects-gallery-image small ttt'>
        <a href='/ttt' className='project-link'>
        Tic Tac Toe
        </a>
        </div>
      </div>
    </div>
  )

}

export default AllProjects
