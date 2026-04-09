import { useEffect, useState } from "react";
import {
  getScreen2AData,
  getScreen2BData,
} from "../services/firestore/screen2Selectors.js";

export function useScreen2AData() {
  const [screen2AData, setScreen2AData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        setLoading(true);
        setError("");

        const data = await getScreen2AData();

        if (!cancelled) {
          setScreen2AData(data);
        }
      } catch (err) {
        console.error("Error loading Screen 2A data:", err);

        if (!cancelled) {
          setError("Failed to load Screen 2A data.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    screen2AData,
    loading,
    error,
  };
}

export function useScreen2BData(categoryId) {
  const [screen2BData, setScreen2BData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        console.log("[useScreen2BData] categoryId:", categoryId);

        setLoading(true);
        setError("");

        const data = await getScreen2BData(categoryId);

        if (!cancelled) {
          setScreen2BData(data);
        }
      } catch (err) {
        console.error("Error loading Screen 2B data:", err);

        if (!cancelled) {
          setError("Failed to load Screen 2B data.");
          setScreen2BData({
            categoryId,
            topLikedWines: [],
            topBalanceWines: [],
            descriptorCloud: [],
            updatedAt: null,
          });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  return {
    screen2BData,
    loading,
    error,
  };
}