import React from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import ExperienceFormComponent from './ExperienceFormComponent';
import { useFieldArray } from 'react-hook-form';

const ExperienceSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;

function Experience({ register, control, errors, experienceData }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience'
  });

  return (
    <ExperienceSection>
      <H2>Experience</H2>
      {fields.map(({ id }, index) => { 
        return(
          <Block className="block-larger" key={id}>
            <ExperienceFormComponent
              index={index}
              register={register}
              remove={remove}
              errors={errors}
              experienceData={experienceData}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />
    </ExperienceSection>
  )
}

export default Experience;