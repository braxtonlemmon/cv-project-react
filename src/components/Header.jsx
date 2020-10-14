import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid red;
`;

function Header() {
  return (
    <Wrapper>
      CV Builder
    </Wrapper>
  )
}

export default Header;