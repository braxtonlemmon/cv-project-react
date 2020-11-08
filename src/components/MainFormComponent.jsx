import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const Wrapper = styled(wrapper)`

`;

function MainFormComponent({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  onSubmit,
  handleSubmit
}) {

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Personal 
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <Education
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <Experience
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
        <button type="submit">Submit</button>
      </form>
    </Wrapper>  
  )
}

export default MainFormComponent;