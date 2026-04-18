// import { useEffect, useMemo, useState } from "react";

// const INTRO_DURATION = 2000;
// const CATEGORY_DURATION = 2000;
// const TRANSITION_DURATION = 2000;

// const categories = [
//   { id: "red", label: "Red Wines" },
//   { id: "white", label: "White Wines" },
//   { id: "rose", label: "Rosé Wines" },
//   { id: "sparkling", label: "Sparkling Wines" },
//   { id: "special", label: "Special Wines" },
// ];

// const GROUPS = [
//   {
//     id: "group1",
//     title: "Top Liked Regions",
//     backgroundClass: "bg-group-1",
//     leftScreen: "1A",
//     rightScreen: "1B",
//     rotateCategories: true,
//   },
//   {
//     id: "group2",
//     title: "Most Loved Grapes",
//     backgroundClass: "bg-group-2",
//     leftScreen: "2A",
//     rightScreen: "2B",
//     rotateCategories: true,
//   },
//   {
//     id: "group3",
//     title: "Top Ranked Wines",
//     backgroundClass: "bg-group-3",
//     leftScreen: "3A",
//     rightScreen: "3B",
//     rotateCategories: true,
//   },
//   {
//     id: "group4",
//     title: "Price Value Perception",
//     backgroundClass: "bg-group-4",
//     leftScreen: "4A",
//     rightScreen: "4B",
//     rotateCategories: true,
//   },
// ];

// const STORAGE_KEYS = {
//   phase: "datahub_phase",
//   groupIndex: "datahub_groupIndex",
//   categoryIndex: "datahub_categoryIndex",
// };

// export function usePresentationFlow(isRightScreen) {
//   const [phase, setPhase] = useState("intro");
//   const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
//   const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

//   const currentGroup = GROUPS[currentGroupIndex];
//   const currentCategory = categories[currentCategoryIndex] || categories[0];

//   // RIGHT SCREEN: sync from left screen
//   useEffect(() => {
//     if (!isRightScreen) return;

//     const syncFromStorage = () => {
//       const storedPhase = localStorage.getItem(STORAGE_KEYS.phase);
//       const storedGroupIndex = localStorage.getItem(STORAGE_KEYS.groupIndex);
//       const storedCategoryIndex = localStorage.getItem(STORAGE_KEYS.categoryIndex);

//       if (storedPhase) setPhase(storedPhase);
//       if (storedGroupIndex !== null) setCurrentGroupIndex(Number(storedGroupIndex));
//       if (storedCategoryIndex !== null) setCurrentCategoryIndex(Number(storedCategoryIndex));
//     };

//     syncFromStorage();
//     window.addEventListener("storage", syncFromStorage);

//     return () => {
//       window.removeEventListener("storage", syncFromStorage);
//     };
//   }, [isRightScreen]);

//   // LEFT SCREEN: controls the whole looping timeline
//   useEffect(() => {
//     if (isRightScreen) return;

//     const timers = [];

//     const setSharedState = ({ nextPhase, nextGroupIndex, nextCategoryIndex }) => {
//       if (typeof nextPhase !== "undefined") {
//         setPhase(nextPhase);
//         localStorage.setItem(STORAGE_KEYS.phase, nextPhase);
//       }

//       if (typeof nextGroupIndex !== "undefined") {
//         setCurrentGroupIndex(nextGroupIndex);
//         localStorage.setItem(STORAGE_KEYS.groupIndex, String(nextGroupIndex));
//       }

//       if (typeof nextCategoryIndex !== "undefined") {
//         setCurrentCategoryIndex(nextCategoryIndex);
//         localStorage.setItem(STORAGE_KEYS.categoryIndex, String(nextCategoryIndex));
//       }
//     };

//     const resetFlow = () => {
//       setSharedState({
//         nextPhase: "intro",
//         nextGroupIndex: 0,
//         nextCategoryIndex: 0,
//       });
//     };

//     const runFlow = (startAt = 0) => {
//       let cursor = startAt;

//       GROUPS.forEach((group, groupIndex) => {
//         // Intro only for the first group of each loop
//         if (groupIndex === 0) {
//           timers.push(
//             setTimeout(() => {
//               setSharedState({
//                 nextPhase: "intro",
//                 nextGroupIndex: groupIndex,
//                 nextCategoryIndex: 0,
//               });
//             }, cursor)
//           );

//           cursor += INTRO_DURATION;
//         }

//         // Content
//         timers.push(
//           setTimeout(() => {
//             setSharedState({
//               nextPhase: "content",
//               nextGroupIndex: groupIndex,
//               nextCategoryIndex: 0,
//             });
//           }, cursor)
//         );

//         // Category rotation
//         if (group.rotateCategories) {
//           categories.forEach((_, categoryIndex) => {
//             timers.push(
//               setTimeout(() => {
//                 setSharedState({
//                   nextGroupIndex: groupIndex,
//                   nextCategoryIndex: categoryIndex,
//                 });
//               }, cursor + categoryIndex * CATEGORY_DURATION)
//             );
//           });

//           cursor += categories.length * CATEGORY_DURATION;
//         }

//         // Transition between groups
//         if (groupIndex < GROUPS.length - 1) {
//           timers.push(
//             setTimeout(() => {
//               setSharedState({
//                 nextPhase: "transition",
//                 nextGroupIndex: groupIndex + 1,
//                 nextCategoryIndex: 0,
//               });
//             }, cursor)
//           );

//           cursor += TRANSITION_DURATION;
//         }
//       });

//       // LOOP BACK TO START
//       timers.push(
//         setTimeout(() => {
//           resetFlow();
//           runFlow(0);
//         }, cursor)
//       );
//     };

//     resetFlow();
//     runFlow(0);

//     return () => {
//       timers.forEach(clearTimeout);
//     };
//   }, [isRightScreen]);

//   return useMemo(
//     () => ({
//       phase,
//       currentGroup,
//       currentGroupIndex,
//       currentGroupTitle: currentGroup?.title ?? "",
//       currentCategory,
//       currentCategoryId: currentCategory?.id ?? "red",
//       currentCategoryLabel: currentCategory?.label ?? "Red Wines",
//       currentCategoryIndex,
//       totalCategories: categories.length,
//       backgroundClass: currentGroup?.backgroundClass ?? "",
//       currentLeftScreen: currentGroup?.leftScreen ?? null,
//       currentRightScreen: currentGroup?.rightScreen ?? null,
//     }),
//     [phase, currentGroup, currentGroupIndex, currentCategory, currentCategoryIndex]
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { requestPresentationRefresh } from "../services/requestPresentationRefresh";

const INTRO_DURATION = 2000;
const CATEGORY_DURATION = 2000;
const TRANSITION_DURATION = 2000;

const categories = [
  { id: "red", label: "Red Wines" },
  { id: "white", label: "White Wines" },
  { id: "rose", label: "Rosé Wines" },
  { id: "sparkling", label: "Sparkling Wines" },
  { id: "special", label: "Special Wines" },
];

const GROUPS = [
  {
    id: "group1",
    title: "Top Liked Regions",
    backgroundClass: "bg-group-1",
    leftScreen: "1A",
    rightScreen: "1B",
    rotateCategories: true,
  },
  {
    id: "group2",
    title: "Most Loved Grapes",
    backgroundClass: "bg-group-2",
    leftScreen: "2A",
    rightScreen: "2B",
    rotateCategories: true,
  },
  {
    id: "group3",
    title: "Top Ranked Wines",
    backgroundClass: "bg-group-3",
    leftScreen: "3A",
    rightScreen: "3B",
    rotateCategories: true,
  },
  {
    id: "group4",
    title: "Price Value Perception",
    backgroundClass: "bg-group-4",
    leftScreen: "4A",
    rightScreen: "4B",
    rotateCategories: true,
  },
];

const STORAGE_KEYS = {
  phase: "datahub_phase",
  groupIndex: "datahub_groupIndex",
  categoryIndex: "datahub_categoryIndex",
};

export function usePresentationFlow(isRightScreen) {
  const [phase, setPhase] = useState("intro");
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const currentGroup = GROUPS[currentGroupIndex];
  const currentCategory = categories[currentCategoryIndex] || categories[0];

  useEffect(() => {
    if (!isRightScreen) return;

    const syncFromStorage = () => {
      const storedPhase = localStorage.getItem(STORAGE_KEYS.phase);
      const storedGroupIndex = localStorage.getItem(STORAGE_KEYS.groupIndex);
      const storedCategoryIndex = localStorage.getItem(STORAGE_KEYS.categoryIndex);

      if (storedPhase) setPhase(storedPhase);
      if (storedGroupIndex !== null) setCurrentGroupIndex(Number(storedGroupIndex));
      if (storedCategoryIndex !== null) setCurrentCategoryIndex(Number(storedCategoryIndex));
    };

    syncFromStorage();
    window.addEventListener("storage", syncFromStorage);

    return () => {
      window.removeEventListener("storage", syncFromStorage);
    };
  }, [isRightScreen]);

  useEffect(() => {
    if (isRightScreen) return;

    const timers = [];

    const setSharedState = ({ nextPhase, nextGroupIndex, nextCategoryIndex }) => {
      if (typeof nextPhase !== "undefined") {
        setPhase(nextPhase);
        localStorage.setItem(STORAGE_KEYS.phase, nextPhase);
      }

      if (typeof nextGroupIndex !== "undefined") {
        setCurrentGroupIndex(nextGroupIndex);
        localStorage.setItem(STORAGE_KEYS.groupIndex, String(nextGroupIndex));
      }

      if (typeof nextCategoryIndex !== "undefined") {
        setCurrentCategoryIndex(nextCategoryIndex);
        localStorage.setItem(STORAGE_KEYS.categoryIndex, String(nextCategoryIndex));
      }
    };

    const resetFlow = () => {
      setSharedState({
        nextPhase: "intro",
        nextGroupIndex: 0,
        nextCategoryIndex: 0,
      });
    };

    const runFlow = (startAt = 0) => {
      let cursor = startAt;

      GROUPS.forEach((group, groupIndex) => {
        if (groupIndex === 0) {
          timers.push(
            setTimeout(() => {
              setSharedState({
                nextPhase: "intro",
                nextGroupIndex: groupIndex,
                nextCategoryIndex: 0,
              });
            }, cursor)
          );

          cursor += INTRO_DURATION;
        }

        timers.push(
          setTimeout(() => {
            setSharedState({
              nextPhase: "content",
              nextGroupIndex: groupIndex,
              nextCategoryIndex: 0,
            });
          }, cursor)
        );

        if (group.rotateCategories) {
          categories.forEach((_, categoryIndex) => {
            timers.push(
              setTimeout(() => {
                setSharedState({
                  nextGroupIndex: groupIndex,
                  nextCategoryIndex: categoryIndex,
                });
              }, cursor + categoryIndex * CATEGORY_DURATION)
            );
          });

          cursor += categories.length * CATEGORY_DURATION;
        }

        if (groupIndex < GROUPS.length - 1) {
          timers.push(
            setTimeout(() => {
              setSharedState({
                nextPhase: "transition",
                nextGroupIndex: groupIndex + 1,
                nextCategoryIndex: 0,
              });
            }, cursor)
          );

          cursor += TRANSITION_DURATION;
        }
      });

      timers.push(
        setTimeout(async () => {
          try {
            const result = await requestPresentationRefresh();
            console.log("Presentation refresh result:", result);
          } catch (error) {
            console.error("Presentation refresh failed:", error);
          }

          resetFlow();
          runFlow(0);
        }, cursor)
      );
    };

    resetFlow();
    runFlow(0);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isRightScreen]);

  return useMemo(
    () => ({
      phase,
      currentGroup,
      currentGroupIndex,
      currentGroupTitle: currentGroup?.title ?? "",
      currentCategory,
      currentCategoryId: currentCategory?.id ?? "red",
      currentCategoryLabel: currentCategory?.label ?? "Red Wines",
      currentCategoryIndex,
      totalCategories: categories.length,
      backgroundClass: currentGroup?.backgroundClass ?? "",
      currentLeftScreen: currentGroup?.leftScreen ?? null,
      currentRightScreen: currentGroup?.rightScreen ?? null,
    }),
    [phase, currentGroup, currentGroupIndex, currentCategory, currentCategoryIndex]
  );
}