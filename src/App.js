import React, { useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import GlobalStyle from './themes/globalStyles';
import Theme from './themes/theme';
import { Reset } from 'styled-reset';
import Intro from './components/Intro';
import Result from './components/Result';
import Footer from './components/Footer';
import MainFormContainer from './components/MainFormContainer';
import OpeningScreen from './components/OpeningScreen';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

function App() {
  const [isNew, setNew] = useState(true);
  const [isEditing, setEditing] = useState(true);
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

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
          isNew &&
          <OpeningScreen />
        }
        {
          isEditing &&
          <Main>
            <Intro />
            <MainFormContainer 
              personalData={personalData}
              setPersonalData={setPersonalData}
              educationData={educationData}
              setEducationData={setEducationData}
              experienceData={experienceData}
              setExperienceData={setExperienceData}
              isEditing={isEditing}
              setEditing={setEditing}
            />
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
