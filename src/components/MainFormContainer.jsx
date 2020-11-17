import React from 'react';
import { useForm } from 'react-hook-form';
import MainFormComponent from './MainFormComponent';

// I will make this one single form, instead of three separate forms as I have it now
function MainFormContainer({
  isEditing,
  setEditing,
  formData,
  setFormData
}) {
  
  const { register, handleSubmit, errors, control } = useForm();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    setEditing(false)
    console.log(data);
    setFormData(data);
  }

  return (
    <MainFormComponent
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      control={control}
      formData={formData}
    />
  )
}

export default MainFormContainer;