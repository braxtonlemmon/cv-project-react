import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function ExperienceFormComponent({ experienceData, handleChange, handleDelete }) {
  return (
    <Wrapper>
      {/* <form> */}
        <Row>
          <label htmlFor="company">Company</label>
          <input 
            type="text"
            id="company"
            name="company"
            value={experienceData.company}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="position">Position</label>
          <input 
            type="text"
            id="position"
            name="position"
            value={experienceData.position}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="responsibilities">Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={experienceData.responsibilities}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="workStartDate">Start Date</label>
          <input 
            type="date"
            id="workStartDate"
            name="workStartDate"
            value={experienceData.workStartDate}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor="workEndDate">End Date</label>
          <input 
            type="date"
            id="workEndDate"
            name="workEndDate"
            value={experienceData.workEndDate}
            onChange={(e) => handleChange(e)}
          />
        </Row>
        <TrashButton onClick={(e) => handleDelete(e)} size={25} />
      {/* </form> */}
    </Wrapper>
  )
}

export default ExperienceFormComponent;