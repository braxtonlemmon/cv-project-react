import React, { useEffect } from 'react';

function Reset({ personalData, educationData, experienceData, reset }) {
  useEffect(() => {
    setTimeout(() => {
      reset({
        firstName: personalData.firstName,
        lastName: personalData.lastName,
        email: personalData.email,
        phone: personalData.phone,
        education: educationData,
        experience: experienceData
      });
    }, 500)
  }, [reset, personalData, educationData, experienceData])

  return (
    <div></div>
  )
}

export default Reset;