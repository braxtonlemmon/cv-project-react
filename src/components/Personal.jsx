import React from 'react';
import styled from 'styled-components';
import { wrapper, H1, Block } from './Shared';
import PersonalFormContainer from './PersonalFormContainer';

const Wrapper = styled(wrapper)`
  margin: 15px 0;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  width: 80%;
`;

function Personal({ personalData, setPersonalData }) {
  return (
    <Wrapper>
      <H1>Personal Info</H1>
      <Block>
        <PersonalFormContainer 
          personalData={personalData}
          setPersonalData={setPersonalData}
          />
      </Block>
    </Wrapper>
  )
}

export default Personal;