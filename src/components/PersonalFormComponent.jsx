import React from 'react';
import { wrapper, row } from './Shared';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Wrapper = styled(wrapper)`
`;

const Row = styled(row)`
  font-family: 'Gayathri', sans-serif;
`;

function PersonalFormComponent({ personalData, handleChange }) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",

  });
  
  return (
    <Wrapper>
      {/* <form> */}
        <Row>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text"
            id="firstName"
            name="firstName"
            value={personalData.firstName}
            onChange={(e) => handleChange(e)}
            ref={register({
              required: true,
              minLength: 1
            })}
          />
        </Row>
        <Row>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={personalData.email}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={personalData.phone}
            onChange={(e) => handleChange(e)}
          />
        </Row>
      {/* </form> */}
    </Wrapper>
  )
}

export default PersonalFormComponent;