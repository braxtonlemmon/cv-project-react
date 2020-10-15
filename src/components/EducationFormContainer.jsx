import React from 'react';
import EducationFormComponent from './EducationFormComponent';

function EducationFormContainer({ educationData, setEducationData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
      [name]: value
    })
  }
  
  return (
    <EducationFormComponent 
      educationData={educationData}
      handleChange={handleChange}
    />
  )
}

export default EducationFormContainer;