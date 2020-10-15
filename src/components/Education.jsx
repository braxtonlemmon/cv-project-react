import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import EducationFormContainer from './EducationFormContainer';

const Wrapper = styled(wrapper)`
`;

function Education({ educationData, setEducationData }) {
  return (
    <Wrapper>
      <h1>Education</h1>
      <EducationFormContainer
        educationData={educationData}
        setEducationData={setEducationData}
      />
    </Wrapper>
  )
}

export default Education;