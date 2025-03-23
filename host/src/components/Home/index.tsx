import React from "react";

const Welcome = React.lazy(() => import("welcomePage/Welcome"));
const Button = React.lazy(() => import("welcomePage/Button"));
import useCount from "welcomePage/store";

const Home = () => {
  const [count, setCount] = useCount();
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          height: "100vh",
          width: "100vw",
          color: "black",
        }}
      >
        <h1>Host:Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Welcome />
        <Button />
      </div>
    </>
  );
};

export default Home;
