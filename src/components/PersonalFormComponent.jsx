import React from 'react';
import { wrapper } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)`

`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PersonalFormComponent({ personalData, handleChange }) {
  return (
    <Wrapper>
      <form>
        <Row>
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text"
            id="firstName"
            name="firstName"
            value={personalData.firstName}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={personalData.email}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="phone">Phone:</label>
          <input 
            type="tel"
            id="phone"
            name="phone"
            value={personalData.phone}
            onChange={(e) => handleChange(e)}
          />
        </Row>
      </form>
    </Wrapper>
  )
}

export default PersonalFormComponent;