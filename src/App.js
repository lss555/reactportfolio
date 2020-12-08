import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Header, Footer, PageTitle } from './components/shared'
import Home from './components/home'
import AllProjects from './components/allprojects'
import About from './components/about'
import Resume from './components/resume'
// import PDFViewer from './components/pdfviewer'

import './App.css'

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path='/'>
        <PageTitle />
        <Home />
        </Route>
        <Route exact path='/about'>
          <PageTitle />
          <About />
        </Route>
        <Route exact path='/allprojects'>
          <PageTitle title='All Projects' />
          <AllProjects />
        </Route>
        <Route exact path='/resume'>
          <PageTitle title='Resume' />
          <Resume />
        </Route>
        <Route exact path='/contact'>
          <PageTitle title='Contact' />
        </Route>
      </Switch>
    <Footer />
    </div>
  )
}

export default App;
