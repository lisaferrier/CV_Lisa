import React, { Fragment } from 'react';
import Resume from './resume/Resume';
import Formation from './formation/Formation';
import Skills from './skills/Skills';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <Fragment>
      <Fade>
        <Resume />
      </Fade>
      <Fade>
        <Skills />
      </Fade>
      <Fade>
        <Formation />
      </Fade>
    </Fragment>
  );
};

export default AboutMe;