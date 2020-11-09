import React from 'react';
import EducationFormComponent from './EducationFormComponent';

function EducationFormContainer({ index, educationData, setEducationData, register }) {
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
  console.log(index);

  return (
    <EducationFormComponent 
      handleChange={handleChange}
      handleDelete={handleDelete}
      register={register}
      index={index}
    />
  )
}

export default EducationFormContainer;