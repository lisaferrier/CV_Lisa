import React, { Component } from 'react';
import { Card, Header, Grid } from 'semantic-ui-react';
import cineasta from '../pictures/cineasta.gif';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div id="projets">
        <div style={{ backgroundColor: 'greenyellow', width: '10vw', height: '0.5em', margin: '5vh -60px' }} />
        <Header as='h2' icon textAlign='center'>
          <Header.Content>Projets</Header.Content>
        </Header>
        <Grid columns='two'>
          <Grid.Row >

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='http://terroirbioetnaturel.com/'>
                <Card.Content>
                  <Card.Header textAlign='center'>Importateur Excel </Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, Less, Redux, GitHub</Card.Meta>
                  <img src={cineasta} style={{ widht: '100%' }} alt='preview-excel' />
                  <Card.Description>Objectif : réaliser un importateur de données Excel, un outil qui servira en interne chez Smart Sailors. Login utilisateur, checks permissions, upload Excel, verification des données pour chaques onglets
                    </Card.Description>
                  <Card.Meta>
                    Durée 3 mois, équipe : duo
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='http://terroirbioetnaturel.com/'>
                <Card.Content>
                  <Card.Header textAlign='center'>Terroir Bio et Naturel</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, SCSS, Node.js / mySQL, GitHub</Card.Meta>
                  <img src={cineasta} style={{ widht: '100%' }} alt='preview-terroirbioetnaturel' />
                  <Card.Description>Objectif : réaliser un site web responsive avec un back-office pour une cliente</Card.Description>
                  <Card.Meta>Durée : 3 mois / équipe : 4 personnes</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='https://writerdays.herokuapp.com/'>
                <Card.Content>
                  <Card.Header textAlign='center'>Writer Days (mobile)</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, CSS, GitHub, Heroku</Card.Meta>
                  <img src={cineasta} style={{ widht: '100%' }} alt='preview-writerdays' />
                  <Card.Description>Site mobile réalisé durant le hackathon (3 jours) de la 5ième édition de la Spartan Week visant à mettre en relation les street-artistes et les particuliers, 2ième place remporté !</Card.Description>
                  <Card.Meta>Durée : 72h (hackathon) / équipe : duo</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='github.com'>
                <Card.Content>
                  <Card.Header textAlign='center'>Cineasta</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, CSS, GitHub, Heroku</Card.Meta>
                  <img src={cineasta} style={{ widht: '100%' }} alt='preview-cineasta' />
                  <Card.Description>Site mobile réalisé durant le hackathon (3 jours) de la 5ième édition de la Spartan Week visant à mettre en relation les street-artistes et les particuliers, 2ième place remporté !</Card.Description>
                  <Card.Meta>Durée : 1 mois / équipe : 4 personnes</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Projects;