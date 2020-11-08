import React from 'react';
import { useForm } from 'react-hook-form';
import MainFormComponent from './MainFormComponent';

// I will make this one single form, instead of three separate forms as I have it now
function MainFormContainer({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData
}) {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log('hey');
  }

  return (
    <MainFormComponent
      personalData={personalData}
      setPersonalData={setPersonalData}
      educationData={educationData}
      setEducationData={setEducationData}
      experienceData={experienceData}
      setExperienceData={setExperienceData}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default MainFormContainer;