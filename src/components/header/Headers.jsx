import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'
import './Headers.scss'

class Headers extends Component {
  render() {
    return (
      <header>
        <nav> 
          <p>
            <a href="#resume" className="link-nav">à propos de moi</a>
            <a href="#skills" className="link-nav">compétences</a>
            <a href="#formation" className="link-nav">expérience & formation</a>
            <a href="#projets" className="link-nav">projets</a>
            <a href="#portfolio" className="link-nav">portfolio</a>
            <a href="#contact" className="link-nav">contact</a>
            <a href="#download-cv" className="link-nav">télécharger mon c.v.</a>
          </p>
        </nav>
        <Grid columns={2} padded='vertically'>
          <Grid.Column>
            <Header className="lisa-ferrier" size='huge'>Lisa Ferrier</Header>
            <Header size="medium" className="subtitle-header">Dév junior front-end
            </Header>
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid>
        <div className="green-divider"  />
      </header>
    );
  }
}

export default Headers;