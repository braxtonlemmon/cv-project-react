import React from 'react';
import { wrapper, row } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function EducationFormComponent({ educationData, handleChange }) {
  return(
    <Wrapper>
      <form>
        <Row>
          <label htmlFor="school">School Name:</label>
          <input  
            type="text"
            id="school"
            name="school"
            value={educationData.school}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="studyField">Field of Study:</label>
          <input  
            type="text"
            id="studyField"
            name="studyField"
            value={educationData.studyField}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="degree">Degree Title:</label>
          <input  
            type="text"
            id="degree"
            name="degree"
            value={educationData.degree}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="startDate">Start Date:</label>
          <input  
            type="date"
            id="schoolStartDate"
            name="schoolStartDate"
            value={educationData.schoolStartDate}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="endDate">End Date:</label>
          <input  
            type="date"
            id="schoolEndDate"
            name="schoolEndDate"
            value={educationData.schoolEndDate}
            onChange={(e) => handleChange(e)}
          />
        </Row>
      </form>
    </Wrapper>
  )
}

export default EducationFormComponent;