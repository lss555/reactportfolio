
import './Resume.scss'
import React from 'react';
import pdf from '../photos/resume.pdf'
import SinglePagePDFViewer from "../pdf/single-page"

function Resume() {
  return (
    <div>
      <div>
        <SinglePagePDFViewer className='single-page-resume' pdf={pdf} />
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
  )

}

export default Resume
