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

function PersonalPretty({ personalData }) {
  return (
    <Wrapper>
      <H2>{personalData.firstName} {personalData.lastName}</H2>
      <p>{personalData.email}</p>
      <p>{personalData.phone}</p>
    </Wrapper>
  )
}

export default PersonalPretty;