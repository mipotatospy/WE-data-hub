import { useEffect, useMemo, useRef, useState } from "react";
import {
  getScreen1AOverview,
  getScreen1BCategoryData,
} from "../services/firestore/screen1Selectors";

function normalizeCategory(category) {
  if (!category) return null;

  const value = String(category)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const categoryMap = {
    reds: "red",
    red: "red",
    "red wine": "red",
    "red wines": "red",

    whites: "white",
    white: "white",
    "white wine": "white",
    "white wines": "white",

    rosés: "rose",
    rosé: "rose",
    roses: "rose",
    rose: "rose",
    "rosé wine": "rose",
    "rosé wines": "rose",
    "rose wine": "rose",
    "rose wines": "rose",

    sparkling: "sparkling",
    "sparkling wine": "sparkling",
    "sparkling wines": "sparkling",

    special: "special",
    "special wine": "special",
    "special wines": "special",
  };

  return categoryMap[value] || null;
}

function createInitialState() {
  return {
    data: null,
    loading: true,
    error: "",
  };
}

// export function useScreen1AData() {
//   const [state, setState] = useState(createInitialState);

//   useEffect(() => {
//     let isActive = true;

//     async function loadData() {
//       try {
//         setState((prev) => ({
//           ...prev,
//           loading: true,
//           error: "",
//         }));

//         const data = await getScreen1AOverview();

//         if (!isActive) return;

//         setState({
//           data,
//           loading: false,
//           error: "",
//         });
//       } catch (error) {
//         console.error("Failed to load Screen 1.A data:", error);

//         if (!isActive) return;

//         setState({
//           data: null,
//           loading: false,
//           error: "Unable to load Screen 1.A data.",
//         });
//       }
//     }

//     loadData();

//     return () => {
//       isActive = false;
//     };
//   }, []);

//   return {
//     screen1AData: state.data,
//     loading: state.loading,
//     error: state.error,
//   };
// }

export function useScreen1AData() {
  const [state, setState] = useState(createInitialState);

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      try {
        setState((prev) => ({
          ...prev,
          loading: true,
          error: "",
        }));

        const data = await getScreen1AOverview();

        if (!isActive) return;

        setState({
          data,
          loading: false,
          error: "",
        });
      } catch (error) {
        console.error("Failed to load Screen 1.A data:", error);

        if (!isActive) return;

        setState({
          data: {
            topRegions: [],  // Ensure empty data is available for charts
          },
          loading: false,
          error: "Unable to load Screen 1.A data.",
        });
      }
    }

    loadData();

    return () => {
      isActive = false;
    };
  }, []);

  return {
    screen1AData: state.data,
    loading: state.loading,
    error: state.error,
  };
}

// export function useScreen1BData(currentCategory) {
//   const normalizedCategory = useMemo(
//     () => normalizeCategory(currentCategory),
//     [currentCategory]
//   );

//   const [state, setState] = useState(createInitialState);
//   const cacheRef = useRef({});

//   useEffect(() => {
//     let isActive = true;

//     async function loadData() {
//       if (!normalizedCategory) {
//         setState({
//           data: null,
//           loading: false,
//           error: `Unsupported category: ${currentCategory || "unknown"}.`,
//         });
//         return;
//       }

//       try {
//         setState((prev) => ({
//           ...prev,
//           loading: true,
//           error: "",
//         }));

//         const data = await getScreen1BCategoryData(normalizedCategory);

//         if (!isActive) return;

//         cacheRef.current[normalizedCategory] = data;

//         setState({
//           data,
//           loading: false,
//           error: "",
//         });
//       } catch (error) {
//         console.error(
//           `Failed to load Screen 1.B data for "${normalizedCategory}":`,
//           error
//         );

//         if (!isActive) return;

//         setState({
//           data: null,
//           loading: false,
//           error: `Unable to load Screen 1.B data for ${currentCategory}.`,
//         });
//       }
//     }

//     loadData();

//     return () => {
//       isActive = false;
//     };
//   }, [normalizedCategory, currentCategory]);

//   return {
//     screen1BData: state.data,
//     categoryKey: normalizedCategory,
//     loading: state.loading,
//     error: state.error,
//   };
// }

export function useScreen1BData(currentCategory) {
  const normalizedCategory = useMemo(
    () => normalizeCategory(currentCategory),
    [currentCategory]
  );

  const [state, setState] = useState(createInitialState);
  const cacheRef = useRef({});

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      if (!normalizedCategory) {
        setState({
          data: null,
          loading: false,
          error: `Unsupported category: ${currentCategory || "unknown"}.`,
        });
        return;
      }

      try {
        setState((prev) => ({
          ...prev,
          loading: true,
          error: "",
        }));

        const data = await getScreen1BCategoryData(normalizedCategory);

        if (!isActive) return;

        cacheRef.current[normalizedCategory] = data;

        setState({
          data,
          loading: false,
          error: "",
        });
      } catch (error) {
        console.error(
          `Failed to load Screen 1.B data for "${normalizedCategory}":`,
          error
        );

        if (!isActive) return;

        setState({
          data: {
            topRecognizedWines: [],
            topLikedRegions: [],
            topLikedWines: [],
          },  // Provide empty data for charts
          loading: false,
          error: `Unable to load Screen 1.B data for ${currentCategory}.`,
        });
      }
    }

    loadData();

    return () => {
      isActive = false;
    };
  }, [normalizedCategory, currentCategory]);

  return {
    screen1BData: state.data,
    categoryKey: normalizedCategory,
    loading: state.loading,
    error: state.error,
  };
}