import React from 'react';
import styled, { keyframes } from 'styled-components';
import { wrapper } from './Shared';
import { FaCat } from 'react-icons/fa';

const Wrapper = styled(wrapper)`
  margin: 15px 0;
  font-size: 1.2em;
  width: 80%;
  max-width: 800px;
  text-align: center;
  color: ${props => props.theme.colors.dark};
  line-height: 1.3em;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-10deg); }
  20% { transform: rotate(0deg); }
  30% { transform: rotate(-20deg); }
  40% { transform: rotate(0deg); }
  50% { transform: rotate(-30deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-40deg); }
  80% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

const Cat = styled(FaCat)`
  margin: 20px 0 35px 0;
  animation: ${rotate} 3s ease infinite;
`;

function Intro() {
  return (
    <Wrapper>
      <Cat size={90} />
      <p>Fields marked with * are required.</p>
      {/* <p>You know what you need? You need a curriculum vitae, or "CV" for short. Just plug your info into this handy CV generator, and you'll be hanging out with the other CV cool cats lickety-split.</p> */}
    </Wrapper>
  )
}

export default Intro;