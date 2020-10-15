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

  const [educationData, setEducationData] = useState([
    {
      school: '',
      studyField: '',
      degree: '',
      schoolStartDate: '',
      schoolEndDate: ''
    }
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      company: '',
      position: '',
      responsibilities: '',
      workStartDate: '',
      workEndDate: ''
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
        <Education 
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <Experience 
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
      </Main>
    </Wrapper>
  );
}

export default App;
