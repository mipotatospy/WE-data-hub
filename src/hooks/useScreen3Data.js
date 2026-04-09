import { useEffect, useState } from "react";
import { getScreen3AData } from "../services/firestore/screen3Selectors";

export function useScreen3AData() {
  const [screen3AData, setScreen3AData] = useState({
    topLikedWines: [],
    topBalancedWines: [],
    descriptorCloud: [],
    updatedAt: {
      enjoyment: null,
      balance: null,
      descriptors: null,
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const data = await getScreen3AData();

        if (!isMounted) return;
        setScreen3AData(data);
      } catch (err) {
        console.error("Error loading Screen 3A data:", err);
        if (!isMounted) return;
        setError(err.message || "Failed to load Screen 3A data.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    screen3AData,
    loading,
    error,
  };
}