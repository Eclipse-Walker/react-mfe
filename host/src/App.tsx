import React from "react";
import { Route, Routes } from "react-router";
import { Form } from "./pages/Form/index.tsx";
import TodoPage from "./pages/Todo/index.tsx";
import Home from "./pages/Home/index.tsx";

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
