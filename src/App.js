import React, { Component, Fragment } from 'react';
import './App.scss';
import Headers from './components/header/Headers';
import AboutMe from './components/aboutme/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import CvDownload from './components/cvdownload/CvDownload';
import { Container, Grid, Icon } from 'semantic-ui-react';
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
        </Container>
        <Container className="container-bottom" style={{ background: 'black', color: 'white', widht: '100vw' }}>
          <Fade>
            <Contact />
          </Fade>
          <Fade>
            <CvDownload />
          </Fade>
          <Grid>
            <Grid.Column className="column-git" floated='right' mobile={16} computer={6} textAlign='right' style={{ background: 'black', color: 'white' }}>
              <a href="https://github.com/lisaferrier/CV_Lisa">
                <Icon className="github-icon" name='github large' style={{ fontSize: '2em' }} />
                Voir le repo du site
              </a>
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default App;
