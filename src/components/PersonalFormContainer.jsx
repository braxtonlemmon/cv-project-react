import React from 'react';
import PersonalFormComponent from './PersonalFormComponent';

function PersonalFormContainer({ personalData, setPersonalData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value 
    })
  }
  
  return (
    <PersonalFormComponent
      personalData={personalData}
      handleChange={handleChange}
    />
  )
}

export default PersonalFormContainer;
