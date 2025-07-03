import React from 'react';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import { patientFormConfig } from '../../config/patientFormConfig';
import Navbar from '../../components/Navbar';
import { FormData } from '../../config/types';

const PatientFormPage: React.FC = () => {
  const handleSubmit = async (data: FormData) => {
    console.log('Patient Form Submitted:', data);
    
    // Here you would typically send the data to your API
    try {
      // await submitPatientData(data);
      alert('Patient registration submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <DynamicForm 
        config={patientFormConfig} 
        onSubmit={handleSubmit}
        submitButtonText="Submit Registration"
        showResetButton={true}
        resetButtonText="Clear Form"
      />
    </div>
  );
};

export default PatientFormPage; 