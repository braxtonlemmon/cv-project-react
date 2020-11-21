import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;
const Row = styled(row)``;

function ExperienceFormComponent({ register, index, remove, item }) {
  const { company, position, responsibilities, workStartDate, workEndDate } = item;
  return (
    <Wrapper>
        <Row>
          <label htmlFor={`experience[${index}].company`}>Company</label>
          <input 
            type="text"
            id={`experience[${index}].company`}
            name={`experience[${index}].company`}
            defaultValue={company ? company : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].position`}>Position</label>
          <input 
            type="text"
            id={`experience[${index}].position`}
            name={`experience[${index}].position`}
            defaultValue={position ? position : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].responsibilities`}>Responsibilities</label>
          <textarea
            id={`experience[${index}].responsibilities`}
            name={`experience[${index}].responsibilities`}
            defaultValue={responsibilities ? responsibilities : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].workStartDate`}>Start Date</label>
          <input 
            type="date"
            id={`experience[${index}].workStartDate`}
            name={`experience[${index}].workStartDate`}
            defaultValue={workStartDate ? workStartDate : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`experience[${index}].workEndDate`}>End Date</label>
          <input 
            type="date"
            id={`experience[${index}].workEndDate`}
            name={`experience[${index}].workEndDate`}
            defaultValue={workEndDate ? workEndDate : ''}
            ref={register()}
          />
        </Row>
        <TrashButton onClick={() => remove(index)} size={25} />
    </Wrapper>
  )
}

export default ExperienceFormComponent;