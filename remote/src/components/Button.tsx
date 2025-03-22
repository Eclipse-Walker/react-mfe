// import { useState } from "react";
import useCount from "../store/Store";

const Button = () => {
  const [count, setCount] = useCount();

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};

export default Button;
