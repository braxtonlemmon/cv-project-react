import React from 'react';
import { wrapper, row } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function EducationFormComponent({ educationData, handleChange, handleDelete }) {
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
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      </form>
      <p>Id: {educationData.id}</p>
      <p>School: {educationData.school}</p>
      <p>Field: {educationData.studyField}</p>
      <p>Degree: {educationData.degree}</p>
      <p>Start: {educationData.schoolStartDate}</p>
      <p>End: {educationData.schoolEndDate}</p>
    </Wrapper>
  )
}

export default EducationFormComponent;