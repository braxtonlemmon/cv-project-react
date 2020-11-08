import React from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import ExperienceFormContainer from './ExperienceFormContainer';

const ExperienceSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;

function Experience({ experienceData, setExperienceData, register }) {
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
    <ExperienceSection>
      <H2>Experience</H2>
      {experienceData.map((experience, index) => {
        return (
          <Block className="block-larger" key={`experience${index}`}>
            <ExperienceFormContainer
              index={index}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
              register={register}
            />
          </Block>
        )
      })}
      <AddButton size={30} onClick={handleAdd} />
    </ExperienceSection>
  )
}

export default Experience;