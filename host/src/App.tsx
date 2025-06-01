import React from "react";
import { Route, Routes } from "react-router";
import { Form } from "./pages/Form/index.tsx";
import TodoPage from "./pages/Todo/index.tsx";
import Home from "./pages/Home/index.tsx";
import FormPage from "./pages/FormPage/index.tsx";
import RegistrationPage from "./pages/Registration/index.tsx";
import PatientRegistrationPage from "./pages/Patient/index.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/formpage" element={<FormPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/patient" element={<PatientRegistrationPage />} />
    </Routes>
  );
};

export default App;
