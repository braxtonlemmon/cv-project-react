import React, { useEffect } from 'react';
import PersonalFormComponent from './PersonalFormComponent';

function PersonalFormContainer({ personalData, setPersonalData, register }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // validatePersonal();
    setPersonalData({
      ...personalData,
      [name]: value 
    })
  }

  // const validateField = (field) => {
  //   field.length > 0 ? setCanSubmit(true) : setCanSubmit(false);
  // }
  
  // const validatePersonal = () => {
  //   validateField(personalData.firstName);
  //   validateField(personalData.lastName);
  //   validateField(personalData.email);
  //   validateField(personalData.phone);
  // }

  // useEffect(() => {
  //   validatePersonal();
  // }, [canSubmit])
  
  return (
    <PersonalFormComponent
      personalData={personalData}
      handleChange={handleChange}
      register={register}
    />
  )
}

export default PersonalFormContainer;
