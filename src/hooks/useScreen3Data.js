import { useEffect, useState } from "react";
import { getScreen3AData, getScreen3BData } from "../services/firestore/screen3Selectors";

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

export function useScreen3BData(categoryId) {
  const [screen3BData, setScreen3BData] = useState({
    descriptorCloud: [],
    dualMetricByScore: [],
    updatedAt: {
      descriptors: null,
      dualMetric: null,
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

        const data = await getScreen3BData(categoryId);

        if (!isMounted) return;
        setScreen3BData(data);
      } catch (err) {
        console.error("Error loading Screen 3B data:", err);
        if (!isMounted) return;
        setError(err.message || "Failed to load Screen 3B data.");
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
  }, [categoryId]);

  return {
    screen3BData,
    loading,
    error,
  };
}