import React from 'react';
import { Section, H2, Block } from './Shared';
import PersonalFormContainer from './PersonalFormContainer';

function Personal({ personalData, setPersonalData, register, errors }) {
  return (
    <Section>
      <H2>Personal Info</H2>
      <Block>
        <PersonalFormContainer 
          personalData={personalData}
          setPersonalData={setPersonalData}
          register={register}
          errors={errors}
          />
      </Block>
    </Section>
  )
}

export default Personal;