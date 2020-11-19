import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import EducationFormComponent from './EducationFormComponent';
import { useFieldArray } from 'react-hook-form';

const EducationSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;

function Education({ register, control, errors, educationData, setValue, watch, reset }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  useEffect(() => {
    setTimeout(() => {
      reset({
        education: educationData
      });
    }, 500)
  }, [reset])

  return (
    <EducationSection>
      <H2>Education</H2>
      {/* {fields.map(({ id, school }, index) => { */}
      {fields.map((item, index) => {  
        return(
          <Block className="block-larger" key={item.id}>
            <EducationFormComponent
              index={index}
              register={register}
              remove={remove}
              errors={errors}
              educationData={educationData}
              item={item}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />     
    </EducationSection>
  )
}

export default Education;