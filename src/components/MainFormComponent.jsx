import React from 'react';
import styled from 'styled-components';
import { wrapper, Button } from './Shared';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Reset from './Reset';

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
  reset
}) {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Personal 
          register={register}
          errors={errors}
        />
        <Education
          register={register}
          control={control}
          errors={errors}
        />
        <Experience
          register={register}
          control={control}
          errors={errors}
        />
        <Reset 
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
          reset={reset}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>  
  )
}

export default MainFormComponent;