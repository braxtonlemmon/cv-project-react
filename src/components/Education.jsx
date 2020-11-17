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

function Education({ register, control, errors, formData }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  return (
    <EducationSection>
      <H2>Education</H2>
      {fields.map(({ id, school, studyField, degree, schoolStartDate, schoolEndDate }, index) => {
        const schoolData = { school, studyField, degree, schoolStartDate, schoolEndDate }
        return(
          <Block className="block-larger" key={id}>
            <EducationFormComponent
              index={index}
              register={register}
              // schoolData={schoolData}
              remove={remove}
              errors={errors}
              schoolData={formData.education[index]}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />     
    </EducationSection>
  )
}

export default Education;