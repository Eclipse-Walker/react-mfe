// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee", marginRight: "10px" }}>
      <Link style={{ marginRight: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: "10px" }} to="/todo">
        Todo
      </Link>
      <Link style={{ marginRight: "10px" }} to="/form">
        Form
      </Link>
      <Link style={{ marginRight: "10px" }} to="/formpage">
        FormPage
      </Link>
      <Link style={{ marginRight: "10px" }} to="/registration">
        Registration
      </Link>
      <Link style={{ marginRight: "10px" }} to="/patient">
        Patient
      </Link>
    </nav>
  );
};

export default Navbar;
