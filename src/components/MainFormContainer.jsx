import React from 'react';
import { useForm } from 'react-hook-form';
import MainFormComponent from './MainFormComponent';

// I will make this one single form, instead of three separate forms as I have it now
function MainFormContainer({
  isEditing,
  setEditing,
  formData,
  setFormData,
  personalData,
  setPersonalData,
  educationData,
  setEducationData
}) {
  
  const { register, handleSubmit, errors, control } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    setEditing(false)
    // setFormData(data);
    setPersonalData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone
    })
    setEducationData(data.education)

  }

  return (
    <MainFormComponent
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      control={control}
      formData={formData}
      personalData={personalData}
      educationData={educationData}
      setEducationData={setEducationData}
    />
  )
}

export default MainFormContainer;