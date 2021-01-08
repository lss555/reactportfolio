
import './Resume.scss'
import React from 'react';
import pdf from '../photos/resume.pdf'
import resume from '../photos/resume-1.png'
// import SinglePagePDFViewer from "../pdf/single-page"
// <SinglePagePDFViewer className='single-page-resume' pdf={pdf} />
function Resume() {
  return (
    <div>
      <div className='btn-and-resume'>
        <div className='resume-div'>
          <img className='resume-img' src={resume} alt='' />
        </div>
          <div className="center">
            <div className="download-btn btn-1">
            <a href='./resume.pdf' download="Chris-Heibel-resume" className='download-link'>
              <div  className="top">
                 Download
              </div>
            </a>
            <a href={pdf} download="Chris-Heibel-resume" className='download-link'>
                <div className="bottom">
                  PDF
                </div>
                </a>
              </div>
            </div>
        </div>
    </div>
  )

}

export default Resume
