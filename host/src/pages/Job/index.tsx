import React from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { jobApplicationFormConfig } from "../../config/formConfig";
import Navbar from "../../components/Navbar";

const JobApplication = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <h1>Job Application</h1>
      <DynamicForm config={jobApplicationFormConfig} onSubmit={onSubmit} />
    </div>
  );
};

export default JobApplication;
