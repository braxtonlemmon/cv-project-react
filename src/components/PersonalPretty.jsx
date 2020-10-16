import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.dark};
`;

function PersonalPretty({ personalData }) {
  return (
    <Wrapper>
      <p>{personalData.email}</p>
      <p>{personalData.phone}</p>
    </Wrapper>
  )
}

export default PersonalPretty;