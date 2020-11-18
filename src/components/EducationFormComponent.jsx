import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;

const Row = styled(row)``;

function EducationFormComponent({ register, index, remove, educationData }) {  
  return(
    <Wrapper>
        <Row>
          <label htmlFor={`education[${index}].school`}>School Name</label>
          <input  
            type="text"
            id={`education[${index}].school`}
            name={`education[${index}].school`}
            defaultValue={educationData[index] ? educationData[index].school : ''}
            ref={register({ required: 'School is required.' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].studyField`}>Field of Study</label>
          <input  
            type="text"
            id={`education[${index}].studyField`}
            name={`education[${index}].studyField`}
            defaultValue={educationData[index] ? educationData[index].studyField : ''}
            ref={register({ required: 'Study field is required.' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].degree`}>Degree Title</label>
          <input  
            type="text"
            id={`education[${index}].degree`}
            name={`education[${index}].degree`}
            defaultValue={educationData[index] ? educationData[index].degree : ''}
            ref={register({ required: 'Degree field is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolStartDate`}>Start Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolStartDate`}
            name={`education[${index}].schoolStartDate`}
            defaultValue={educationData[index] ? educationData[index].schoolStartDate : ''}
            ref={register({ required: 'Start date is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolEndDate`}>End Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolEndDate`}
            name={`education[${index}].schoolEndDate`}
            defaultValue={educationData[index] ? educationData[index].schoolEndDate : ''}
            ref={register({ required: 'End date is required' })}
          />
        </Row>
        <TrashButton onClick={() => remove(index)} size={25} />
    </Wrapper>
  )
}

export default EducationFormComponent;