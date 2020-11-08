import React, { useEffect } from 'react';
import PersonalFormComponent from './PersonalFormComponent';

function PersonalFormContainer({ personalData, setPersonalData, register, errors }) {
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
      register={register}
      errors={errors}
    />
  )
}

export default PersonalFormContainer;
