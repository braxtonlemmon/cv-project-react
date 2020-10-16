import React from 'react';
import styled from 'styled-components';
import { wrapper, H2, Block, AddButton } from './Shared';
import EducationFormContainer from './EducationFormContainer';

const Wrapper = styled(wrapper)`
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  background: ${props => props.theme.colors.dark};
  margin: 15px 0;
  padding: 20px;
  width: 80%;
  .block-larger {
    padding-bottom: 30px;
  }
`;


function Education({ educationData, setEducationData }) {
  const handleAdd = () => {
    const blankEducationData = {
      school: '',
      studyField: '',
      degree: '',
      schoolStartDate: '',
      schoolEndDate: ''
    }
    setEducationData(data => [...data, blankEducationData])
  }
  
  return (
    <Wrapper>
      <H2>Education</H2>
      {educationData.map((education, index) => {
        return (
          <Block className="block-larger" key={`education${index}`}>
            <EducationFormContainer
              index={index}
              educationData={educationData}
              setEducationData={setEducationData}
            />
          </Block>)
      })}
      <AddButton size={30} onClick={handleAdd} />
    </Wrapper>
  )
}

export default Education;