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
  setExperienceData,
  isEditing,
  setEditing
}) {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setEditing(false)
    console.log(data);
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
      register={register}
      errors={errors}
    />
  )
}

export default MainFormContainer;