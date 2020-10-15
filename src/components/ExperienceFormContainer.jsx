import React from 'react';
import ExperienceFormComponent from './ExperienceFormComponent';

function ExperienceFormContainer({ experienceData, setExperienceData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData({
      ...experienceData,
      [name]: value
    })
  }

  return (
    <ExperienceFormComponent
      experienceData={experienceData}
      handleChange={handleChange}
    />
  )
}

export default ExperienceFormContainer;