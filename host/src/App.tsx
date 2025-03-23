// import React, { useEffect, useState } from "react";
// import { checkRemoteEntryStatus } from "./utils/checkRemoteEntryStatus";
// import Home from "./components/Home";

// const urls = [
//   "http://localhost:5501/assets/remoteEntry.js",
//   // "http://localhost:5502/assets/remoteEntry.js",
//   // "http://localhost:5503/assets/remoteEntry.js",
// ];

// Home Component
/* const Home = React.lazy(async () => {
  const { default: useCount } = await import("welcomePage/store");
  return {
    default: () => {
      const [count, setCount] = useCount();
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount((prev: number) => prev + 1)}>
            Increment
          </button>
        </div>
      );
    },
  };
}); */

/* // Workaround for remote module loading
const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runCheck = async () => {
      try {
        const results = await checkRemoteEntryStatus(urls);
        if (results.every((result) => result.status === "success")) {
          setIsReady(true);
        } else {
          setError("Some remote modules failed to load.");
        }
      } catch (err) {
        setError("Failed to check remote modules.");
      }
    };

    runCheck();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading Home...</div>}>
      <Home />
    </React.Suspense>
  );
};

export default App; */

import React, { useEffect, useState } from "react";

const Home = React.lazy(() => import("./components/Home")); // โหลดหน้า Home ปกติ

const App: React.FC = () => {
  const [isRemoteReady, setIsRemoteReady] = useState(false); // เช็คสถานะ remote
  const [error, setError] = useState<string | null>(null); // เก็บ error message

  useEffect(() => {
    const checkRemote = async () => {
      try {
        // ตรวจสอบ Remote Module
        await import("welcomePage/store"); // ลองโหลด Remote Module
        setIsRemoteReady(true); // พร้อมใช้งาน
      } catch (err) {
        console.error("Failed to load remote module:", err);
        setError("Remote module is not available. Please try again later.");
      }
    };

    checkRemote();
  }, []);

  if (error) {
    // แสดง UI แจ้งผู้ใช้เมื่อ Remote Module ไม่พร้อม
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h1 style={styles.errorTitle}>Service Unavailable</h1>
          <p style={styles.errorMessage}>{error}</p>
          <button
            style={styles.retryButton}
            onClick={() => window.location.reload()} // ปุ่มโหลดใหม่
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isRemoteReady) {
    // แสดง Loading UI ระหว่างตรวจสอบ Remote Module
    return (
      <div style={styles.container}>
        <div style={styles.loadingBox}>
          <h1 style={styles.loadingTitle}>Loading...</h1>
          <p style={styles.loadingMessage}>Checking remote modules...</p>
        </div>
      </div>
    );
  }

  return (
    <React.Suspense fallback={<div>Loading Home...</div>}>
      <Home />
    </React.Suspense>
  );
};

export default App;

// Styles
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
};
