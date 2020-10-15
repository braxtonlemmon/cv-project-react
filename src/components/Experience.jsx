import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import ExperienceFormContainer from './ExperienceFormContainer';

const Wrapper = styled(wrapper)`
`;


function Experience({ experienceData, setExperienceData }) {
  return (
    <Wrapper>
      <h1>Experience</h1>
      <ExperienceFormContainer
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
    </Wrapper>
  )
}

export default Experience;