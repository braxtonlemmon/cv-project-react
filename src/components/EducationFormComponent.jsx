import React from 'react';
import { wrapper, row, TrashButton } from './Shared';
import styled from 'styled-components';

const Wrapper = styled(wrapper)`
`;

const Row = styled(row)``;

const Form = styled.form`
  /* position: relative; */
`;

function EducationFormComponent({ educationData, handleChange, handleDelete, register, index }) {
  return(
    <Wrapper>
      {/* <Form> */}
        <Row>
          <label htmlFor={`school-${index}`}>School Name</label>
          <input  
            type="text"
            id={`school-${index}`}
            name={`school-${index}`}
            defaultValue={educationData.school}
            // value={educationData.school}
            // onChange={(e) => handleChange(e)}
            ref={register({
              required: 'School is required.',
              minLength: 1
            })}
          />
        </Row>
        <Row>
          <label htmlFor={`studyField-${index}`}>Field of Study</label>
          <input  
            type="text"
            id={`studyField-${index}`}
            name={`studyField-${index}`}
            defaultValue={educationData.studyField}
            ref={register({
              required: 'Study field is required.',
              minLength: 1
            })}
            // value={educationData.studyField}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`degree-${index}`}>Degree Title</label>
          <input  
            type="text"
            id={`degree-${index}`}
            name={`degree-${index}`}
            defaultValue={educationData.degree}
            ref={register({
              required: 'Degree field is required',
              minLength: 1
            })}
            // value={educationData.degree}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`schoolStartDate-${index}`}>Start Date</label>
          <input  
            type="date"
            id={`schoolStartDate-${index}`}
            name={`schoolStartDate-${index}`}
            defaultValue={educationData.schoolStartDate}
            ref={register({
              required: 'Start date is required'
            })}
            // value={educationData.schoolStartDate}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <Row>
          <label htmlFor={`schoolEndDate-${index}`}>End Date</label>
          <input  
            type="date"
            id={`schoolEndDate-${index}`}
            name={`schoolEndDate-${index}`}
            defaultValue={educationData.schoolEndDate}
            ref={register({
              required: 'End date is required'
            })}
            // value={educationData.schoolEndDate}
            // onChange={(e) => handleChange(e)}
          />
        </Row>
        <TrashButton onClick={(e) => handleDelete(e)} size={25} />
      {/* </Form> */}
    </Wrapper>
  )
}

export default EducationFormComponent;