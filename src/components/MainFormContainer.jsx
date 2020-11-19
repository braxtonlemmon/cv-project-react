import React from 'react';
import { useForm } from 'react-hook-form';
import MainFormComponent from './MainFormComponent';

// I will make this one single form, instead of three separate forms as I have it now
function MainFormContainer({
  setEditing,
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData
}) {
  
  const { register, handleSubmit, errors, control, setValue, watch, reset } = useForm({
    shouldUnregister: false
  });
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    setEditing(false)
    setPersonalData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone
    })
    setEducationData(data.education)
    setExperienceData(data.experience)
  }

  // const education = watch("education");

  return (
    <MainFormComponent
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      control={control}
      personalData={personalData}
      educationData={educationData}
      experienceData={experienceData}
      setValue={setValue}
      watch={watch}
      reset={reset}
    />
  )
}

export default MainFormContainer;