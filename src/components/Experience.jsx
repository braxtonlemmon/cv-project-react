import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Section, H2, Block, AddButton } from './Shared';
import ExperienceFormComponent from './ExperienceFormComponent';
import { useFieldArray } from 'react-hook-form';

const ExperienceSection = styled(Section)`
  .block-larger {
    padding-bottom: 30px;
  }
`;

function Experience({ register, control, errors, experienceData, reset }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience'
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     reset({
  //       experience: experienceData
  //     });
  //   }, 1000);
  // }, [reset])

  return (
    <ExperienceSection>
      <H2>Experience</H2>
      {/* {fields.map(({ id }, index) => {  */}
      {fields.map((item, index) => {
        return(
          <Block className="block-larger" key={item.id}>
            <ExperienceFormComponent
              index={index}
              register={register}
              remove={remove}
              errors={errors}
              experienceData={experienceData}
              item={item}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => append({})} />
    </ExperienceSection>
  )
}

export default Experience;