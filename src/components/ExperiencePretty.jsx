import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 15px 0;
  width: 100%;
`;

function ExperiencePretty({ experience }) {
  return (
    <Wrapper>
      <p>{experience.company}</p>
      <p>{experience.workStartDate} - {experience.workEndDate}</p>
      <p>{experience.position}</p>
      <p>{experience.responsibilities}</p>
    </Wrapper>
  )
}

export default ExperiencePretty;