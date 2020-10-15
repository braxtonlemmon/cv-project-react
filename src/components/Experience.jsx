import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import ExperienceFormContainer from './ExperienceFormContainer';

const Wrapper = styled(wrapper)`
`;

const ExperienceBlock = styled(wrapper)`
  margin: 15px 0;
`;

function Experience({ experienceData, setExperienceData }) {
  const handleAdd = () => {
    const blankExperienceData = {
      company: '',
      position: '',
      responsibilities: '',
      workStartDate: '',
      workEndDate: ''
    }
    setExperienceData(data => [...data, blankExperienceData]);
  }
  
  return (
    <Wrapper>
      <h1>Experience</h1>
      {experienceData.map((experience, index) => {
        return (
          <ExperienceBlock key={`experience${index}`}>
            <p>Experience {index+1}</p>
            <ExperienceFormContainer
              index={index}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
            />
          </ExperienceBlock>
        )
      })}
      <button onClick={handleAdd}>More</button>
    </Wrapper>
  )
}

export default Experience;