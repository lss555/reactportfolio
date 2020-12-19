import React from 'react'
import './TTT.scss'
import { AiFillGithub } from 'react-icons/ai'
import { RiLiveLine } from 'react-icons/ri'

const Peaks = (props) => {

  return (
    <div className='ttt-page'>
      <div className='ttt-image'></div>
      <div className='project-content'>
        <p className='project-text'>This is one of my early projects, it's an application that plays games of tic tac toe via a game api with token authentication for users. Made with JavaScript, HTML, and CSS. Feel free to check out the GitHub repository or the live link below.</p>
        <a className='gh-logo-link' href='https://github.com/lss555/Tictactoe-client'><AiFillGithub className='gh-logo'/></a>
        <a className='live-logo-link' href='https://lss555.github.io/Tictactoe-client'><RiLiveLine className='live-logo'/></a>
      </div>
    </div>
  )

}

export default Peaks
