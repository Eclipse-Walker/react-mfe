import React, { useEffect, useState } from "react";
import { styles } from "./index.module";
import HostApp from "./HostApp";

const Home = React.lazy(() => import("../../pages/Home"));

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

  const HomePage: React.FC = () => {
    return (
      <>
        <Home />
        <HostApp />
      </>
    );
  };

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
      <HomePage />
    </React.Suspense>
  );
};

export default InitialPage;
