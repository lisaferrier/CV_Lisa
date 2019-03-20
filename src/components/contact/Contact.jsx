import React, { Component } from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div style={{ backgroundColor: 'greenyellow', width: '10vw', height: '0.5em', margin: '5vh -60px' }} />
        <Header as='h2' icon textAlign='center'>
          <Header.Content>contactez-moi</Header.Content>
        </Header>
        <Grid divided>
          <Grid.Row >
            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <p className="phone-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="phone-icon" name='phone square large' />
                  Téléphone : 06 43 54 52 28
              </p>
                <p className="email-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="email-icon" name='mail square large' />
                  Mail : <a className="hover-link" style={{ color: 'inherit' }} href="mailto:lisaferrier@outlok.com">lisaferrier@outlook.com</a>
                </p>
              </div>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <p className="adress-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="adress-icon" name='map marker alternate large' />
                  Adresse : <a className="hover-link" style={{ color: 'inherit' }} href="https://goo.gl/maps/tcQ9BGKVfe42">1 rue Brueys, Aix-en-Provence</a>
                </p>
                <p className="linkedin-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="linkedin-icon" name='linkedin square large' />
                  LinkedIn : <a className="hover-link" style={{ color: 'inherit' }} href="https://www.linkedin.com/in/ferrierlisa/">Lisa Ferrier</a>
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;