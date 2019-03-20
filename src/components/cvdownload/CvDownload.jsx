import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';

class CvDownload extends Component {
  render() {
    return (
      <div id="download-cv" style={{ background: '#F0F0F0' }}>
        <Grid centered columns={2}>
          <Grid.Column textAlign='center'>
            <Button >Télécharger mon CV en pdf</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default CvDownload;