import React, { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import GlobalStyle from './themes/globalStyles';
import Theme from './themes/theme';
import { Reset } from 'styled-reset';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import { Button } from './components/Shared';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
    <Theme>
      <Wrapper>
        <Reset />
        <GlobalStyle />
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
          <Button>Submit</Button>
        </Main>
      </Wrapper>
    </Theme>
  );
}

export default App;
