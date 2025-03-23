/* import React from "react";
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
 */

/*
// Fallback
import React, { useEffect, useState, Suspense } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";

const Welcome = React.lazy(() => import("welcomePage/Welcome"));
const Button = React.lazy(() => import("welcomePage/Button"));

let useCount: any; // Fallback สำหรับ Hook
const loadRemoteUseCount = async () => {
  try {
    const module = await import("welcomePage/store");
    useCount = module.default;
    console.log("Remote module 'useCount' loaded successfully");
  } catch (error) {
    console.error("Failed to load remote module 'useCount'", error);
    // Fallback Function
    useCount = () => {
      const [count, setCount] = React.useState(0);
      return [count, setCount] as const;
    };
  }
};

// Component Home
const Home: React.FC = () => {
  const [count, setCount] = useCount(); // เรียก Hook (ใช้ Fallback หาก remote โหลดไม่ได้)

  return (
    <Suspense fallback={<div>Loading components...</div>}>
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
    </Suspense>
  );
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRemoteModules = async () => {
      try {
        await loadRemoteUseCount();
        setIsLoaded(true); // Remote พร้อมใช้งาน
      } catch (err) {
        console.error("Error loading remote modules:", err);
        setError("Failed to load remote modules.");
      }
    };

    loadRemoteModules();
  }, []);

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h1 style={styles.errorTitle}>Error</h1>
          <p style={styles.errorMessage}>{error}</p>
          <button
            style={styles.retryButton}
            onClick={() => window.location.reload()} // ให้ลองโหลดใหม่
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingBox}>
          <h1 style={styles.loadingTitle}>Loading...</h1>
          <p style={styles.loadingMessage}>
            Checking remote entries. Please wait...
          </p>
        </div>
      </div>
    );
  }

  return <Home />;
};

export default App;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: '"Arial", sans-serif',
    backgroundColor: "#f4f4f9",
    margin: 0,
  },
  errorBox: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffe9e9",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  },
  errorTitle: {
    color: "#ff4d4f",
    fontSize: "24px",
    marginBottom: "10px",
  },
  errorMessage: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "20px",
  },
  retryButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  loadingBox: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#e3f2fd",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  },
  loadingTitle: {
    color: "#1976d2",
    fontSize: "24px",
    marginBottom: "10px",
  },
  loadingMessage: {
    color: "#333",
    fontSize: "16px",
  },
}; */

import React from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";

const Welcome = React.lazy(() => import("welcomePage/Welcome"));
const Button = React.lazy(() => import("welcomePage/Button"));
import useCount from "welcomePage/store";

const Home: React.FC = () => {
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
};

export default Home;
