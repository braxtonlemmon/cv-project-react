import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Reset />
      <Header />
    </Wrapper>
  );
}

export default App;
