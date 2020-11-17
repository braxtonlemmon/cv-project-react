import React from 'react';
import styled from 'styled-components';
import { H2 } from './Shared';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.dark};
  p {
    margin-bottom: 10px;
  }
`;

function PersonalPretty({ formData }) {
  return (
    <Wrapper>
      <H2>{formData.firstName} {formData.lastName}</H2>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
    </Wrapper>
  )
}

export default PersonalPretty;