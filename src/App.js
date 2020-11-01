import React, { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import GlobalStyle from './themes/globalStyles';
import Theme from './themes/theme';
import { Reset } from 'styled-reset';
import Intro from './components/Intro';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Result from './components/Result';
import Footer from './components/Footer';
import { Button } from './components/Shared';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  const [isEditing, setEditing] = useState(false);
  
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
  // const [personalData, setPersonalData] = useState({
  //   firstName: 'Braxton',
  //   lastName: 'Lemmon',
  //   email: 'braxtonlemmon@gmail.com',
  //   phone: '801-960-0831'
  // })

  // const [educationData, setEducationData] = useState([
  //   {
  //     school: 'Brigham Young University',
  //     studyField: 'Recreational Therapy',
  //     degree: 'Bachelor',
  //     schoolStartDate: '08/01/2007',
  //     schoolEndDate: '08/01/2014'
  //   }
  // ]);
  

  // const [experienceData, setExperienceData] = useState([
  //   {
  //     company: 'Tapif',
  //     position: 'Language Assistant',
  //     responsibilities: 'Teach English',
  //     workStartDate: '10/01/2014',
  //     workEndDate: '05/01/2015'
  //   }
  // ])
  const handleSubmit = () => {
    setEditing(false);
  }

  const handleEdit = () => {
    setEditing(true);
  }

  return (
    <Theme>
      <Wrapper>
        <Reset />
        <GlobalStyle />
        <Header />
        {
          isEditing &&
          <Main>
            <Intro />
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
            <Button onClick={handleSubmit}>Submit</Button>
          </Main>
        }
        {
          !isEditing &&
          <Result 
            handleEdit={handleEdit}
            personalData={personalData}
            educationData={educationData}
            experienceData={experienceData}
          />
        }
        <Footer />
      </Wrapper>
    </Theme>
  );
}

export default App;
