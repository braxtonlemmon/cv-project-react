import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
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
  
  const { register, handleSubmit, errors, control } = useForm();
  
  // const {
  //   fields: educationFields,
  //   append: educationAppend,
  //   remove: educationRemove
  // } = useFieldArray({ control, name: "education" });
  
  // const {
  //   fields: experienceFields,
  //   append: experienceAppend,
  //   remove: experienceRemove
  // } = useFieldArray({ control, name: "experience" })

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
      control={control}
    />
  )
}

export default MainFormContainer;