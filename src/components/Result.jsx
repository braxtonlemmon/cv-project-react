import React from 'react';
import styled from 'styled-components';
import { wrapper, Button, H2 } from './Shared';
import PersonalPretty from './PersonalPretty';
import EducationPretty from './EducationPretty';
import ExperiencePretty from './ExperiencePretty';
const Wrapper = styled(wrapper)`
  margin: 20px 0;
  padding: 15px;
  height: 100%;
  justify-content: flex-start;
  color: ${props => props.theme.colors.dark};
  h2 {
    color: ${props => props.theme.colors.dark};
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.3em;
  }
  width: 95%;
  max-width: 800px;
`;

const Box = styled(wrapper)`
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  margin: 20px 0;
  padding: 18px;
  width: 95%;
`;


function Result({ handleEdit, personalData, educationData, experienceData, formData }) {
  console.log(formData)
  
  return (
    <Wrapper>
      <Box>
        <PersonalPretty personalData={personalData} />
        <h3>Education</h3>
        {educationData.map(education => <EducationPretty education={education} />)}
        <h3>Experience</h3>
        {experienceData.map(experience => <ExperiencePretty experience={experience} />)}
      </Box>
      <Button onClick={handleEdit}>Edit</Button>
    </Wrapper>
  )
}

export default Result;