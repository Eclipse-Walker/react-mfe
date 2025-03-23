import React from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";

const Welcome = React.lazy(() => import("welcomePage/Welcome"));
const Button = React.lazy(() => import("welcomePage/Button"));
// import useCount from "welcomePage/store";

const Home = React.lazy(async () => {
  const { default: useCount } = await import("welcomePage/store");
  return {
    default: () => {
      const [count, setCount] = useCount();
      return (
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
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
        </>
      );
    },
  };
});

export default Home;
