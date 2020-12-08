import React from 'react'
import './AllProjects.scss'
// import peaks from '../photos/peaks.png'

const AllProjects = (props) => {

  return (
    <div className='all-projects-page'>
      <div className='allprojects-gallery'>
        <div className='allprojects-gallery-image medium spots'>Spot Locater</div>
        <div className='allprojects-gallery-image large peaks'>Peaks</div>
        <div className='allprojects-gallery-image medium dev-spot'>Dev Spot</div>
        <div className='allprojects-gallery-image small ttt'>Tic Tac Toe</div>
      </div>
    </div>
  )

}

export default AllProjects
