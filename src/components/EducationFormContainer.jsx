import React from 'react';
import EducationFormComponent from './EducationFormComponent';

function EducationFormContainer({ index, educationData, setEducationData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let dataCopy = [...educationData];
    dataCopy[index] = {...dataCopy[index], [name]: value}
    setEducationData(dataCopy);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let dataCopy = [...educationData];
    dataCopy.splice(index, 1);
    setEducationData(dataCopy);
  }
  
  return (
    <EducationFormComponent 
      educationData={educationData[index]}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  )
}

export default EducationFormContainer;