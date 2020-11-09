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

function Experience({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience'
  });

  return (
    <ExperienceSection>
      <H2>Experience</H2>
      {fields.map(({ id, company, position, responsibilities, workStartDate, workEndDate }, index) => { 
        const workData = { company, position, responsibilities, workStartDate, workEndDate }
        return(
          <Block className="block-larger" key={id}>
            <ExperienceFormComponent
              index={index}
              register={register}
              workData={workData}
              remove={remove}
              errors={errors}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />
    </ExperienceSection>
  )
}

export default Experience;