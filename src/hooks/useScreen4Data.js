import { useEffect, useState } from "react";
import { getScreen4AData, getScreen4BData } from "../services/firestore/screen4Selectors";

export function useScreen4AData() {
  const [screen4AData, setScreen4AData] = useState({
    bubbleItems: [],
    priceTrend: [],
    updatedAt: {
      bubble: null,
      priceOverview: null,
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

        const data = await getScreen4AData();

        if (!isMounted) return;
        setScreen4AData(data);
      } catch (err) {
        console.error("Error loading Screen 4A data:", err);
        if (!isMounted) return;
        setError(err.message || "Failed to load Screen 4A data.");
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
    screen4AData,
    loading,
    error,
  };
}

export function useScreen4BData(categoryId) {
  const [screen4BData, setScreen4BData] = useState({
    descriptorByPrice: [],
    bubbleItems: [],
    updatedAt: {
      descriptorByPrice: null,
      bubble: null,
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

        const data = await getScreen4BData(categoryId);

        if (!isMounted) return;
        setScreen4BData(data);
      } catch (err) {
        console.error("Error loading Screen 4B data:", err);
        if (!isMounted) return;
        setError(err.message || "Failed to load Screen 4B data.");
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
    screen4BData,
    loading,
    error,
  };
}