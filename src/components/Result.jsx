import React from 'react';
import styled from 'styled-components';
import { wrapper, Button, H2 } from './Shared';
import PersonalPretty from './PersonalPretty';
import EducationPretty from './EducationPretty';
import ExperiencePretty from './ExperiencePretty';
const Wrapper = styled(wrapper)`
  margin: 20px 0;
  padding: 15px;
  color: ${props => props.theme.colors.dark};
  h2 {
    color: ${props => props.theme.colors.dark};
  }
`;

function Result({ handleEdit, personalData, educationData, experienceData }) {
  return (
    <Wrapper>
      <H2>{personalData.firstName} {personalData.lastName}</H2>
      <PersonalPretty personalData={personalData} />
      <h3>Education</h3>
      {educationData.map(education => <EducationPretty education={education} />)}
      <h3>Experience</h3>
      {experienceData.map(experience => <ExperiencePretty experience={experience} />)}
      <Button onClick={handleEdit}>Edit</Button>
    </Wrapper>
  )
}

export default Result;