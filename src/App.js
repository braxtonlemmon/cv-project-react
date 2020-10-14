import React, { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border: 1px solid red;
`;

const Main = styled.main`

`;

function App() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [education, setEducation] = useState([
    {
      school: '',
      field: '',
      degree: '',
      startDate: '',
      endDate: ''
    }
  ]);

  const [experience, setExperience] = useState([
    {
      company: '',
      position: '',
      responsibilities: [],
      startDate: '',
      endDate: ''
    }
  ])

  return (
    <Wrapper>
      <Reset />
      <Header />
      <Main>
        <Personal 
          personalData={personalData} 
          setPersonalData={setPersonalData}
        />
        <Education />
        <Experience />
      </Main>
    </Wrapper>
  );
}

export default App;
