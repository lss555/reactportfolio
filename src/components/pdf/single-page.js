import React, { useState } from "react"
import './single-page.scss'
// import { Document, Page } from "react-pdf"
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const { pdf } = props

  return (
    <section className='resume-display'>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        className='resume-page'
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </section>
  )

}
