import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 15px 0;
  width: 100%;
`;

const Top = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

function ExperiencePretty({ experience }) {
  return (
    <Wrapper>
      <Top>
        <p>{experience.company}</p>
        <p>
          {
            experience.workStartDate && experience.workEndDate
            ? `${moment(experience.workStartDate).format("MMM YYYY")} - ${moment(experience.workEndDate).format("MMM YYYY")}`
            : ''
          }
        </p>
      </Top>
      <p>{experience.position}</p>
      <p>Responsibilities: {experience.responsibilities}</p>
    </Wrapper>
  )
}

export default ExperiencePretty;