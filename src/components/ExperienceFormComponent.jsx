import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function ExperienceFormComponent({ register, index, remove, workData, errors }) {
  return (
    <Wrapper>
        <Row>
          <label htmlFor={`experience[${index}].company`}>Company</label>
          <input 
            type="text"
            id={`experience[${index}].company`}
            name={`experience[${index}].company`}
            defaultValue={workData.company}
            ref={register({ required: 'Company is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].position`}>Position</label>
          <input 
            type="text"
            id={`experience[${index}].position`}
            name={`experience[${index}].position`}
            defaultValue={workData.position}
            ref={register({ required: 'Position is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].responsibilities`}>Responsibilities</label>
          <textarea
            id={`experience[${index}].responsibilities`}
            name={`experience[${index}].responsibilities`}
            defaultValue={workData.responsibilities}
            ref={register({ required: 'Responsibilities are required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].workStartDate`}>Start Date</label>
          <input 
            type="date"
            id={`experience[${index}].workStartDate`}
            name={`experience[${index}].workStartDate`}
            defaultValue={workData.workStartDate}
            ref={register({ required: 'Start date is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].workEndDate`}>End Date</label>
          <input 
            type="date"
            id={`experience[${index}].workEndDate`}
            name={`experience[${index}].workEndDate`}
            defaultValue={workData.workEndDate}
            ref={register({ required: 'End date is required' })}
          />
        </Row>
        <TrashButton onClick={() => remove(index)} size={25} />
    </Wrapper>
  )
}

export default ExperienceFormComponent;