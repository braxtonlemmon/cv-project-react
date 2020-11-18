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
  onSubmit,
  handleSubmit,
  register,
  errors,
  control,
  personalData,
  educationData,
  experienceData,
}) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Personal 
          register={register}
          errors={errors}
          personalData={personalData}
        />
        <Education
          register={register}
          control={control}
          errors={errors}
          educationData={educationData}
        />
        <Experience
          register={register}
          control={control}
          errors={errors}
          experienceData={experienceData}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>  
  )
}

export default MainFormComponent;