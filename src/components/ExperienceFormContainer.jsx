import React from 'react';
import ExperienceFormComponent from './ExperienceFormComponent';

function ExperienceFormContainer({ index, experienceData, setExperienceData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let dataCopy = [...experienceData];
    dataCopy[index] = {...dataCopy[index], [name]: value}
    setExperienceData(dataCopy);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let dataCopy = [...experienceData];
    dataCopy.splice(index, 1);
    setExperienceData(dataCopy);
  }

  return (
    <ExperienceFormComponent
      experienceData={experienceData[index]}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  )
}

export default ExperienceFormContainer;