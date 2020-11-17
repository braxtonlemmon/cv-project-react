import React from 'react';
import { wrapper, row, Error } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)`
`;

const Row = styled(row)`
  font-family: 'Gayathri', sans-serif;
`;

function PersonalFormComponent({ register, errors, formData, personalData }) {
  return (
    <Wrapper>
        <Row>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={personalData.firstName}
            ref={register({ required: 'First name is required.' })}
          />
        </Row>
        {errors.firstName && <Error>↑ First name is required!</Error>}
        <Row>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={personalData.lastName}
            ref={register({ required: 'Last name is required.' })}
          />
        </Row>
        {errors.lastName && <Error>↑ Last name is required!</Error>}
        <Row>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            defaultValue={personalData.email}
            ref={register({ required: 'Email is required.' })}
          />
        </Row>
        {errors.email && <Error>↑ Email is required!</Error>}
        <Row>
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            defaultValue={personalData.phone}
            ref={register({ required: 'Phone number is required.' })}
          />
        </Row>
        {errors.phone && <Error>↑ Phone number is required!</Error>}
    </Wrapper>
  )
}

export default PersonalFormComponent;