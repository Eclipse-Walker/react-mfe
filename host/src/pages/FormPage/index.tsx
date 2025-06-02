// pages/FormPage.tsx
import React from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { formConfig } from "../../config/formConfig";
import Navbar from "../../components/Navbar";

const FormPage: React.FC = () => {
  const handleSubmit = (data: unknown) => {
    console.log("Submitted:", data);
  };

  return (
    <div>
      <Navbar />
      <h2>Complex Dynamic Form</h2>
      <DynamicForm config={formConfig} onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
