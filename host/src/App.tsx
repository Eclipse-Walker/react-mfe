import React, { useEffect, useState } from "react";
import { checkRemoteEntryStatus } from "./utils/checkRemoteEntryStatus";
import Home from "./components/Home";

const urls = [
  "http://localhost:5501/assets/remoteEntry.js",
  // "http://localhost:5502/assets/remoteEntry.js",
  // "http://localhost:5503/assets/remoteEntry.js",
];

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

export default App;
