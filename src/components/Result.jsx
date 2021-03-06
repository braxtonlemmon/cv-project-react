import React, { useRef } from 'react';
import styled from 'styled-components';
import { wrapper, Button } from './Shared';
import PersonalPretty from './PersonalPretty';
import EducationPretty from './EducationPretty';
import ExperiencePretty from './ExperiencePretty';
import { useReactToPrint } from 'react-to-print';

const Wrapper = styled(wrapper)`
  margin: 20px 0;
  padding: 15px;
  height: 100%;
  justify-content: flex-start;
  color: ${props => props.theme.colors.dark};
  h2 {
    color: ${props => props.theme.colors.dark};
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.3em;
  }
  width: 95%;
  max-width: 800px;
`;

const Box = styled(wrapper)`
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  margin: 20px 0;
  padding: 18px;
  width: 95%;
`;

const Section = styled(wrapper)`
  border-bottom: ${props => props.noBorder ? 'none' : `1px solid ${props.theme.colors.dark}`};
  width: 100%;
  padding: 15px 0;
`

const Printable = styled(wrapper)`
  width: 90%;
  margin: 20px auto;
`;

const Buttons = styled.div`
  display: flex;
  button {
    margin: 0 15px;
  }
`;

function Result({ handleEdit, personalData, educationData, experienceData, formData }) {
  // PRINTING
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  
  return (
    <Wrapper>
      <Box>
        <Section>
          <PersonalPretty personalData={personalData} />
        </Section>
        <Section>
          <h3>Education</h3>
          {educationData.map((education, index) => <EducationPretty education={education} key={`educationPretty-${index}`} />)}
        </Section>
        <Section noBorder>
          <h3>Experience</h3>
          {experienceData.map((experience, index) => <ExperiencePretty experience={experience} key={`experiencePretty-${index}`} />)}
        </Section>
      </Box>
      <div style={{ display: "none"}}>
        <Printable ref={componentRef}>
          <Section>
            <PersonalPretty personalData={personalData} />
          </Section>
          <Section>
            <h3>Education</h3>
            {educationData.map((education, index) => <EducationPretty education={education} key={`educationPretty-${index}`} />)}
          </Section>
          <Section noBorder>
            <h3>Experience</h3>
            {experienceData.map((experience, index) => <ExperiencePretty experience={experience} key={`experiencePretty-${index}`} />)}
          </Section>
        </Printable>
      </div>
      <Buttons>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handlePrint}>Print</Button>
      </Buttons>
    </Wrapper>
  )
}

export default Result;