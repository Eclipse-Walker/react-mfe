import React from "react";
import { Route, Routes } from "react-router";
import { Form } from "./pages/form.tsx";
import TodoPage from "./components/Todo/index.tsx";
import Home from "./components/Home/index.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default App;
