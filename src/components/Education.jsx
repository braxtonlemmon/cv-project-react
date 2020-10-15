import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import EducationFormContainer from './EducationFormContainer';
import uniqid from 'uniqid';

const Wrapper = styled(wrapper)`
`;

const EducationBlock = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
      <h1>Education</h1>
      {educationData.map((education, index) => {
        return (
          <EducationBlock key={uniqid()}>
            <p>Education {index+1}</p>
            <EducationFormContainer
              index={index}
              educationData={educationData}
              setEducationData={setEducationData}
            />
          </EducationBlock>)
      }
      )}
      <button onClick={handleAdd}>More</button>
    </Wrapper>
  )
}

export default Education;