import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'
import './Skills.scss';
import responsive from '../../pictures/responsive.svg';
import adobe from '../../pictures/adobe.svg';

class Skills extends Component {
  render() {
    return (
      <div id="skills" >
        <div style={{ backgroundColor: 'greenyellow', width: '10vw', height: '0.5em', margin: '5vh -60px' }} />
        <Header as='h2' icon textAlign='center'>
          <Header.Content>mes compétences</Header.Content>
        </Header>
        <Grid columns='three'>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <span className="front-title" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>front-end & wireframe</span>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <span className="environ-title" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>environnement de travail</span>
            </Grid.Column>
            <Grid.Column textAlign='center'>Random</Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid divided columns='three'>
          <Grid.Row>
            <Grid.Column textAlign='center' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <div className="icon-skills">
                <Icon className="skills-icon" name='css3 large' style={{ fontSize: '3em' }} />
                <p className="text-skills">css3</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='less large' style={{ fontSize: '3em' }} />
                <p className="text-skills">less</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='sass large' style={{ fontSize: '3em' }} />
                <p className="text-skills">sass</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='react large' style={{ fontSize: '3em' }} />
                <p className="text-skills">react.js</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='html5 large' style={{ fontSize: '3em' }} />
                <p className="text-skills">html5</p>
              </div>

              <div className="icon-skills">
                <img alt='logo-adobe' src={adobe} style={{ width: '2.4em' }} />
                <p className="text-skills">adobe XD</p>
              </div>
              <div className="icon-skills">
                <img alt='responsive-logo' src={responsive} style={{ width: '2.4em' }} />
                <p className="text-skills">responsive design</p>
              </div>
            </Grid.Column>

            <Grid.Column textAlign='center' style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div className="icon-skills">
                <Icon className="skills-icon" name='linux large' style={{ fontSize: '3em' }} />
                <p className="text-skills">ubuntu
              </p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='github large' style={{ fontSize: '3em' }} />
                <p className="text-skills">github</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='trello large' style={{ fontSize: '3em' }} />
                <p className="text-skills">trello</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='file code large' style={{ fontSize: '3em' }} />
                <p className="text-skills">vscode</p>
              </div>
              <div className="icon-skills">
                <Icon className="skills-icon" name='redo large' style={{ fontSize: '3em' }} />
                <p className="text-skills">scrum & agile</p>
              </div>
            </Grid.Column>
            <Grid.Column textAlign='center' style={{ display: 'flex', justifyContent: 'space-around' }}>
              Anglais : bonne compréhension
              Espagnol : niveau scolaire
              Librairies React.js utilisés : react semantic ui, ant.design, reactstrap, react router dom, material ui
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Skills;