import React from 'react';
import styled from 'styled-components';
import { wrapper, Button } from './Shared';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const Wrapper = styled(wrapper)`
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function MainFormComponent({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  onSubmit,
  handleSubmit,
  register,
  errors,
  control
}) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Personal 
          personalData={personalData}
          setPersonalData={setPersonalData}
          register={register}
          errors={errors}
        />
        <Education
          register={register}
          control={control}
          errors={errors}
        />
        <Experience
          experienceData={experienceData}
          setExperienceData={setExperienceData}
          register={register}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>  
  )
}

export default MainFormComponent;