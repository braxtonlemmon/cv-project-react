import React from 'react';
import styled from 'styled-components';
import { wrapper, H2, Block, AddButton } from './Shared';
import ExperienceFormContainer from './ExperienceFormContainer';

const Wrapper = styled(wrapper)`
  margin: 15px 0;
  padding: 20px;
  background: ${props => props.theme.colors.dark};
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  width: 80%;
  .block-larger {
    padding-bottom: 30px;
  }
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
      <H2>Experience</H2>
      {experienceData.map((experience, index) => {
        return (
          <Block className="block-larger" key={`experience${index}`}>
            <ExperienceFormContainer
              index={index}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
            />
          </Block>
        )
      })}
      <AddButton size={30} onClick={handleAdd} />
    </Wrapper>
  )
}

export default Experience;