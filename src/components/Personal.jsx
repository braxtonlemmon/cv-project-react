import React from 'react';
import { Section, H2, Block } from './Shared';
import PersonalFormComponent from './PersonalFormComponent';

function Personal({ register, errors, personalData }) {
  return (
    <Section>
      <H2>Personal Info</H2>
      <Block>
        <PersonalFormComponent
          register={register}
          errors={errors}
          personalData={personalData}
        />
      </Block>
    </Section>
  )
}

export default Personal;