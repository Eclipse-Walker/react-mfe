import React, { } from "react";
import useCount from "../store/Store";

const Button: React.FC = () => {
  const [count, setCount] = useCount();

  return (
    <>
      <button
        style={{
          backgroundColor: "white",
          border: "2px solid #000",
          color: "black",
          borderRadius: "10px",
          height: '1.5em',
        }}
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};

export default Button;
