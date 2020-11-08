import React from 'react';
import { wrapper, row, Error } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)`
`;

const Row = styled(row)`
  font-family: 'Gayathri', sans-serif;
`;

function PersonalFormComponent({ personalData, handleChange, register, errors }) {
 
  return (
    <Wrapper>
        <Row>
          <label htmlFor="firstName">First Name</label>
          {/* <input 
            type="text"
            id="firstName"
            name="firstName"
            value={personalData.firstName}
            onChange={(e) => handleChange(e)}
            ref={register({
              required: 'First name is required.',
              minLength: 1
            })}
          /> */}
          <input 
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={"Brax"}
            // value={personalData.firstName}
            // onChange={(e) => handleChange(e)}
            ref={register({
              required: 'First name is required.',
              minLength: 1
            })}
          />

        </Row>
        {errors.firstName && <Error>↑ First name is required!</Error>}
        <Row>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => handleChange(e)}
            ref={register({
              required: 'Last name is required.',
              minLength: 1
            })}
          />
        </Row>
        {errors.lastName && <Error>↑ Last name is required!</Error>}
        <Row>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={personalData.email}
            onChange={(e) => handleChange(e)}
            ref={register({
              required: 'Email is required.',
              minLength: 1
            })}
          />
        </Row>
        {errors.email && <Error>↑ Email is required!</Error>}
        <Row>
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={personalData.phone}
            onChange={(e) => handleChange(e)}
            ref={register({
              required: 'Phone number is required.',
              minLength: 1
            })}
          />
        </Row>
        {errors.phone && <Error>↑ Phone number is required!</Error>}
    </Wrapper>
  )
}

export default PersonalFormComponent;