// pages/RegistrationPage.tsx
import React from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { registrationFormConfig } from "../../config/formConfig";
import Navbar from "../../components/Navbar";

const RegistrationPage: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log("Registration Form Submitted:", data);
  };

  return (
    <div>
      <Navbar />

      <h2>Registration Form</h2>
      <DynamicForm config={registrationFormConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
