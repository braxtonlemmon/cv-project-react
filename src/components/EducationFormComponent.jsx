import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Row = styled(row)``;

function EducationFormComponent({ register, index, remove, schoolData }) {
  return(
    <wrapper>
        <Row>
          <label htmlFor={`education[${index}].school`}>School Name</label>
          <input  
            type="text"
            id={`education[${index}].school`}
            name={`education[${index}].school`}
            defaultValue={schoolData.school}
            ref={register({ required: 'School is required.' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].studyField`}>Field of Study</label>
          <input  
            type="text"
            id={`education[${index}].studyField`}
            name={`education[${index}].studyField`}
            defaultValue={schoolData.studyField}
            ref={register({ required: 'Study field is required.' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].degree`}>Degree Title</label>
          <input  
            type="text"
            id={`education[${index}].degree`}
            name={`education[${index}].degree`}
            defaultValue={schoolData.degree}
            ref={register({ required: 'Degree field is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolStartDate`}>Start Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolStartDate`}
            name={`education[${index}].schoolStartDate`}
            defaultValue={schoolData.schoolStartDate}
            ref={register({ required: 'Start date is required' })}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolEndDate`}>End Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolEndDate`}
            name={`education[${index}].schoolEndDate`}
            defaultValue={schoolData.schoolEndDate}
            ref={register({ required: 'End date is required' })}
          />
        </Row>
        <TrashButton onClick={(e) => remove(index)} size={25} />
    </wrapper>
  )
}

export default EducationFormComponent;