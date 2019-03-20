import React, { Component, Fragment } from 'react';
import './App.scss';
import Headers from './components/header/Headers';
import AboutMe from './components/aboutme/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import CvDownload from './components/cvdownload/CvDownload'
import { Container } from 'semantic-ui-react'
import Projects from './components/projects/Projects';
import Fade from 'react-reveal/Fade';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Fade>
        </Fade>
        <Fade>
          <Headers />
        </Fade>
        <Container>
            <AboutMe />
        
          <Fade>
            <Projects />
          </Fade>
          <Fade>
            <Portfolio />
          </Fade>
          <Fade>
            <Contact />
          </Fade>
          <Fade>
            <CvDownload />
          </Fade>
        </Container>

      </Fragment>
    );
  }
}

export default App;
