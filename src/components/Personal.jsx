import React from 'react';
import { Section, H2, Block } from './Shared';
import PersonalFormContainer from './PersonalFormContainer';

function Personal({ personalData, setPersonalData }) {
  return (
    <Section>
      <H2>Personal Info</H2>
      <Block>
        <PersonalFormContainer 
          personalData={personalData}
          setPersonalData={setPersonalData}
          />
      </Block>
    </Section>
  )
}

export default Personal;