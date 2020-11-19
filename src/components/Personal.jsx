import React, { useEffect } from 'react';
import { Section, H2, Block } from './Shared';
import PersonalFormComponent from './PersonalFormComponent';

function Personal({ register, errors, personalData, setValue }) {
  useEffect(() => {
    setValue("firstName", "Tony")
    setValue("lastName", "Braxton")
    setValue("education[1].school", "okay")
  }, [])
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