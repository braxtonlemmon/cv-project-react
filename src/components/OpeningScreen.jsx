import React from 'react';
import styled from 'styled-components';
import { wrapper, H1, Button } from './Shared';

const Wrapper = styled(wrapper)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  z-index: 100;
`;

const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 90%;
  max-height: 500px;
  max-width: 500px;
  border-radius: 50%;
  background: ${props => props.theme.colors.dark};
  color: white;
  padding: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
  h1 {
    color: white;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 1.1em;
    line-height: 1.3em;
    max-width: 400px;
    margin-bottom: 20px;
  }
  button {
    background: white;
    color: ${props => props.theme.colors.dark};
    &:hover {
      box-shadow: 0 0 10px rgba(0,0,0,0.6);
    }
  }
`;

function OpeningScreen({ setNew }) {
  return (
    <Wrapper>
      <PopUp>
        <H1>Cool Cat CV Generator</H1>
        <p>
          You know what you need? You need a curriculum vitae, or "CV" for short. Just plug your info into this handy CV generator, and you'll be hanging out with the other CV cool cats lickety-split.
        </p>
        <p>
          When you are ready to start, hit Go!
        </p>
        <Button onClick={() => setNew(false)}>Go!</Button>
      </PopUp>
    </Wrapper>
  )
}

export default OpeningScreen;