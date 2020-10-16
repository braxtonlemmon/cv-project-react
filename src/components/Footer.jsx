import React from 'react';
import styled from 'styled-components';
import { RiCopyrightLine } from 'react-icons/ri';

const Wrapper = styled.footer`
  color: ${props => props.theme.colors.darker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.mid};
  padding: 15px 0;
  #copyright {
    color: ${props => props.theme.colors.darker};
    margin-right: 2px;
  }
  a {
    color: ${props => props.theme.colors.darker};
  }
  div {
    margin-bottom: 10px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div><RiCopyrightLine id="copyright" size={18} />2020 Cool-Cat-CV</div>
      <div>Designed and developed by <a href="https://www.braxtonlemmon.com" target="_blank" rel="noopener noreferrer">Braxton Lemmon.</a></div>
    </Wrapper>
  )
}

export default Footer;