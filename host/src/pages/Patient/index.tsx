import React from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { patientRegistrationFormConfig } from "../../config/formConfig";
import Navbar from "../../components/Navbar";

const PatientRegistrationPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission, send data to API, etc.
  };

  return (
    <div>
      <Navbar />
      <h1>Patient Registration</h1>
      <DynamicForm config={patientRegistrationFormConfig} onSubmit={onSubmit} />
    </div>
  );
};

export default PatientRegistrationPage;
