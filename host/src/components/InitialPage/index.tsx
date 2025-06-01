import React, { useEffect, useState } from "react";
import HostApp from "./HostApp";

const Home = React.lazy(() => import("../Home"));

const InitialPage: React.FC = () => {
  const [isRemoteReady, setIsRemoteReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkRemote = async (): Promise<void> => {
      try {
        await import("welcomePage/store");
        setIsRemoteReady(true);
      } catch (err) {
        console.error("Failed to load remote module:", err);
        setError("Remote module is not available. Please try again later.");
      }
    };

    checkRemote();
  }, []);

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h1 style={styles.errorTitle}>Service Unavailable</h1>
          <p style={styles.errorMessage}>{error}</p>
          <button
            style={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isRemoteReady) {
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
      <HostApp />
    </React.Suspense>
  );
};

export default InitialPage;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: 'Arial", sans-serif',
    backgroundColor: "#f4f4f9",
    margin: 0,
  },
  errorBox: {
    textAlign: "center" as const,
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
    textAlign: "center" as const,
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
