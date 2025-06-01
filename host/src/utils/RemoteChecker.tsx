import React, { useEffect, useState } from "react";
import Home from "../pages/Home";

type UrlStatus = {
  url: string;
  status: "success" | "error" | "loading";
};

const RemoteChecker: React.FC = () => {
  const [urls, setUrls] = useState<UrlStatus[]>([
    { url: "http://localhost:5501/assets/remoteEntry.js", status: "loading" },
    // { url: "http://localhost:5502/assets/remoteEntry.js", status: "loading" },
    // { url: "http://localhost:5503/assets/remoteEntry.js", status: "loading" },
  ]);

  const checkUrls = async () => {
    const updatedStatuses = await Promise.all(
      urls.map(async (urlObj): Promise<UrlStatus> => {
        try {
          const response = await fetch(urlObj.url);
          if (response.status === 200) {
            return { ...urlObj, status: "success" };
          } else {
            return { ...urlObj, status: "error" };
          }
        } catch (error) {
          console.warn(`Error fetching ${urlObj.url}:`, error);
          return { ...urlObj, status: "error" };
        }
      })
    );

    setUrls(updatedStatuses);
  };

  useEffect(() => {
    checkUrls();
  }, []);

  return (
    <div>
      <h1>Remote Modules Status</h1>
      <ul>
        {urls.map((urlObj, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            <strong>{urlObj.url}</strong>:{" "}
            {urlObj.status === "loading" && <span>Checking...</span>}
            {urlObj.status === "success" && (
              <span style={{ color: "green" }}>Available</span>
            )}
            {urlObj.status === "error" && (
              <span style={{ color: "red" }}>Error</span>
            )}
          </li>
        ))}
        {urls.every((urlObj) => urlObj.status === "success") && (
          <div>
            <p>
              All remote modules are available. You can now use them in your
              application.
            </p>
            <Home />
          </div>
        )}
        {urls.some((urlObj) => urlObj.status === "error") && (
          <div>
            <p>
              Some remote modules are not available. You can't use them in your
              application.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default RemoteChecker;
