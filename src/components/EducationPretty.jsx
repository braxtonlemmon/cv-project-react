import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 15px 0;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.dark};
`;

const Top = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

function EducationPretty({ education }) {
  return (
    <Wrapper>
      <Top>
        <p>{education.school}</p>
        <p>{moment(education.schoolStartDate).format("MMM YYYY")} - {moment(education.schoolEndDate).format("MMM YYYY")}</p>
      </Top>
      <p>{education.studyField} - {education.degree}</p>
    </Wrapper>
  )
}

export default EducationPretty;