import React from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import EducationFormContainer from './EducationFormContainer';



const EducationSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;


function Education({ educationData, setEducationData, register }) {
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
    <EducationSection>
      <H2>Education</H2>
      {educationData.map((education, index) => {
        return (
          <Block className="block-larger" key={`education${index}`}>
            <EducationFormContainer
              index={index}
              educationData={educationData}
              setEducationData={setEducationData}
              register={register}
            />
          </Block>)
      })}
      <AddButton size={30} onClick={handleAdd} />
    </EducationSection>
  )
}

export default Education;