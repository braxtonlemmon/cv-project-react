import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function ExperienceFormComponent({ experienceData, handleChange, handleDelete, index, register }) {
  return (
    <Wrapper>
      {/* <form> */}
        <Row>
          <label htmlFor={`company-${index}`}>Company</label>
          <input 
            type="text"
            id={`company-${index}`}
            name={`company-${index}`}
            defaultValue={experienceData.company}
            ref={register({
              required: 'Company is required',
              minLength: 1
            })}
            // value={experienceData.company}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`position-${index}`}>Position</label>
          <input 
            type="text"
            id={`position-${index}`}
            name={`position-${index}`}
            defaultValue={experienceData.position}
            ref={register({
              required: 'Position is required',
              minLength: 1
            })}
            // value={experienceData.position}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`responsibilities-${index}`}>Responsibilities</label>
          <textarea
            id={`responsibilities-${index}`}
            name={`responsibilities-${index}`}
            defaultValue={experienceData.responsibilities}
            ref={register({
              required: 'Responsibilities are required',
              minLength: 1
            })}
            // value={experienceData.responsibilities}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`workStartDate-${index}`}>Start Date</label>
          <input 
            type="date"
            id={`workStartDate-${index}`}
            name={`workStartDate-${index}`}
            defaultValue={experienceData.workStartDate}
            ref={register({
              required: 'Start date is required',
            })}
            // value={experienceData.workStartDate}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`workEndDate-${index}`}>End Date</label>
          <input 
            type="date"
            id={`workEndDate-${index}`}
            name={`workEndDate-${index}`}
            defaultValue={experienceData.workEndDate}
            ref={register({
              required: 'End date is required',
            })}
            // value={experienceData.workEndDate}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <TrashButton onClick={(e) => handleDelete(e)} size={25} />
      {/* </form> */}
    </Wrapper>
  )
}

export default ExperienceFormComponent;