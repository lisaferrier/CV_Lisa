import React, { Component } from 'react';
import { Header, Image, Grid, Popup, Container, Icon } from 'semantic-ui-react';
import Moi from '../../pictures/moi.jpg';
import css from '../../pictures/css.png';
import './Resume.scss';

class Resume extends Component {
  render() {
    return (
      <div id="resume" >
        <Header as='h2' icon textAlign='center'>
          <Header.Content className="title-part">
            À propos de moi
          </Header.Content>
        </Header>
        <Grid >
          <Grid.Column computer={4} mobile={16} >
            <Image src={Moi} circular style={{ border: '10px solid greenyellow' }} />
          </Grid.Column>
          <Grid.Column computer={12} mobile={16}>
            <Container text>
              <p>
                Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
            </p>
            </Container>
          </Grid.Column>
        </Grid>
        <div className="triangle" style={{ height: '3em', width: '10vw' }}></div>

        <p>
          <Icon className="birthday-icon" name='birthday cake' />
          22 mai 1998
          </p>
        <p>
          <Popup
            content='Add users to your feed'
          />
          <Popup trigger={<p style={{ fontWeight: 'bold' }}>2ième place du hackathon de la 5ième édition de la Spartan Week </p>}>
            <Popup.Content>
              <img src={css} />
            </Popup.Content>
          </Popup>
        </p>
      </div>
    );
  }
}

export default Resume;