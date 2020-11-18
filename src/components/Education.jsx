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

function Education({ register, control, errors, formData, educationData, setEducationData }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education'
  });

  const handleAdd = () => {
    let dataCopy = [...educationData];
    setEducationData(dataCopy, {
      company: '',
      position: '',
      responsibilities: '',
      workStartDate: '',
      workEndDate: ''
    })
    append({})
  }

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
              defaultData={educationData[index]}
              // schoolData={formData.education[index]}
              schoolData={schoolData}
              educationData={educationData}
            />
          </Block>
        )
      })}
      <AddButton type="button" size={30} onClick={() => handleAdd()} />     
    </EducationSection>
  )
}

export default Education;