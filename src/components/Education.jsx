import React from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import EducationFormComponent from './EducationFormComponent';
import { useFieldArray } from 'react-hook-form';

const EducationSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;

function Education({ register, control, errors, educationData }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  return (
    <EducationSection>
      <H2>Education</H2>
      {fields.map(({ id }, index) => {
        return(
          <Block className="block-larger" key={id}>
            <EducationFormComponent
              index={index}
              register={register}
              remove={remove}
              errors={errors}
              educationData={educationData}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />     
    </EducationSection>
  )
}

export default Education;