import React from 'react';
import styled from 'styled-components';
import { H1 } from './Shared';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.colors.mid};
  color: ${props => props.theme.colors.dark};
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 50;
`;

function Header() {
  return (
    <Wrapper>
      <H1>CV Builder</H1>
    </Wrapper>
  )
}

export default Header;