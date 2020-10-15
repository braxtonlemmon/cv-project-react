import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import EducationFormContainer from './EducationFormContainer';

const Wrapper = styled(wrapper)`
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
        <>
          <p>Education {index+1}</p>
          <EducationFormContainer
            index={index}
            educationData={educationData}
            setEducationData={setEducationData}
          />
        </>)
      }
      )}
      <button onClick={handleAdd}>More</button>
    </Wrapper>
  )
  
}

export default Education;