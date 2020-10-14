import React from 'react';
import styled from 'styled-components';
import { wrapper } from './Shared';
import PersonalFormContainer from './PersonalFormContainer';

const Wrapper = styled(wrapper)`
`;

function Personal({ personalData, setPersonalData }) {
  return (
    <Wrapper>
      <h1>Personal</h1>
      <PersonalFormContainer 
        personalData={personalData}
        setPersonalData={setPersonalData}
      />
    </Wrapper>
  )
}

export default Personal;