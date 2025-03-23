import { UrlStatus } from "../config/types";

export const checkRemoteEntryStatus = async (
  urls: string[]
): Promise<UrlStatus[]> => {
  const results = await Promise.all(
    urls.map(async (url): Promise<UrlStatus> => {
      try {
        const response = await fetch(url);
        if (response.status === 200) {
          return { url, status: "success" };
        } else {
          return { url, status: "error" };
        }
      } catch (error) {
        console.warn(`Error fetching ${url}:`, error);
        return { url, status: "error" };
      }
    })
  );
  return results;
};
