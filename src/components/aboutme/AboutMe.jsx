import React, { Fragment } from 'react';
import Resume from './resume/Resume';
import Formation from './formation/Formation';
import Skills from './skills/Skills';

const AboutMe = () => {
  return (
    <Fragment>
      <Resume />
      <Formation />
      <Skills />
    </Fragment>
  );
};

export default AboutMe;