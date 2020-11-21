import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)``;

const Row = styled(row)``;

function EducationFormComponent({ register, index, remove, item }) {  
  const { school, studyField, degree, schoolStartDate, schoolEndDate } = item;
  return(
    <Wrapper>
        <Row>
          <label htmlFor={`education[${index}].school`}>School Name</label>
          <input  
            type="text"
            id={`education[${index}].school`}
            name={`education[${index}].school`}
            defaultValue={school ? school : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].studyField`}>Field of Study</label>
          <input  
            type="text"
            id={`education[${index}].studyField`}
            name={`education[${index}].studyField`}
            defaultValue={studyField ? studyField : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].degree`}>Degree Title</label>
          <input  
            type="text"
            id={`education[${index}].degree`}
            name={`education[${index}].degree`}
            defaultValue={degree ? degree : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolStartDate`}>Start Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolStartDate`}
            name={`education[${index}].schoolStartDate`}
            defaultValue={schoolStartDate ? schoolStartDate : ''}
            ref={register()}
          />
        </Row>
        <Row>
          <label htmlFor={`education[${index}].schoolEndDate`}>End Date</label>
          <input  
            type="date"
            id={`education[${index}].schoolEndDate`}
            name={`education[${index}].schoolEndDate`}
            defaultValue={schoolEndDate ? schoolEndDate : ''}
            ref={register()}
          />
        </Row>
        <TrashButton onClick={() => remove(index)} size={25} />
    </Wrapper>
  )
}

export default EducationFormComponent;