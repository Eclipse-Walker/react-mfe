import React from "react";
import { Route, Routes } from "react-router";
import InitialPage from "./components/InitialPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
    </Routes>
  );
};

export default App;
