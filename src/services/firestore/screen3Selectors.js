// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Firebase";

// /**
//  * Firestore paths used by Screen 3A
//  */
// const PATHS = {
//   topWinesByEnjoyment: ["leaderboards", "global_top_wines_by_enjoyment"],
//   topWinesByBalance: ["leaderboards", "global_top_wines_by_balance"],
//   descriptorCounts: ["global_overview", "stats", "facets", "descriptors"],
// };

// function toDocRef(pathArray) {
//   return doc(db, ...pathArray);
// }

// function safeArray(value) {
//   return Array.isArray(value) ? value : [];
// }

// function safeObject(value) {
//   return value && typeof value === "object" && !Array.isArray(value) ? value : {};
// }

// /**
//  * Generic leaderboard item mapper.
//  * Expected each item to contain at least a label/name and a metric value.
//  */
// function normalizeLeaderboardItems(items, metricKeys = []) {
//   return safeArray(items)
//     .map((item, index) => {
//       const label =
//         item.name ||
//         item.wineName ||
//         item.label ||
//         item.title ||
//         `Item ${index + 1}`;

//       let value = null;
//       for (const key of metricKeys) {
//         if (typeof item[key] === "number") {
//           value = item[key];
//           break;
//         }
//       }

//       if (value === null && typeof item.value === "number") value = item.value;
//       if (value === null && typeof item.avg === "number") value = item.avg;
//       if (value === null && typeof item.score === "number") value = item.score;

//       return {
//         id: item.wineId || item.id || label,
//         label,
//         value: typeof value === "number" ? value : 0,
//         tastingsCount: item.tastingsCount ?? item.count ?? null,
//         raw: item,
//       };
//     })
//     .filter((item) => item.label);
// }

// function normalizeWordCloudCounts(countsObj) {
//   const counts = safeObject(countsObj);

//   return Object.entries(counts)
//     .map(([text, value]) => ({
//       text,
//       value: typeof value === "number" ? value : 0,
//     }))
//     .filter((item) => item.text && item.value > 0)
//     .sort((a, b) => b.value - a.value);
// }

// export async function getScreen3AData() {
//   const [enjoymentSnap, balanceSnap, descriptorsSnap] = await Promise.all([
//     getDoc(toDocRef(PATHS.topWinesByEnjoyment)),
//     getDoc(toDocRef(PATHS.topWinesByBalance)),
//     getDoc(toDocRef(PATHS.descriptorCounts)),
//   ]);

//   const enjoymentData = enjoymentSnap.exists() ? enjoymentSnap.data() : {};
//   const balanceData = balanceSnap.exists() ? balanceSnap.data() : {};
//   const descriptorsData = descriptorsSnap.exists() ? descriptorsSnap.data() : {};

//   return {
//     topLikedWines: normalizeLeaderboardItems(
//       enjoymentData.items,
//       ["enjoymentAvg", "enjoyment", "avgEnjoyment", "metricValue"]
//     ).slice(0, 10),

//     topBalancedWines: normalizeLeaderboardItems(
//       balanceData.items,
//       ["balanceAvg", "balance", "avgBalance", "metricValue"]
//     ).slice(0, 3),

//     descriptorCloud: normalizeWordCloudCounts(descriptorsData.counts),

//     updatedAt: {
//       enjoyment: enjoymentData.updatedAt ?? null,
//       balance: balanceData.updatedAt ?? null,
//       descriptors: descriptorsData.updatedAt ?? null,
//     },
//   };
// }

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

/**
 * Firestore paths used by Screen 3A and Screen 3B
 */
const PATHS = {
  topWinesByEnjoyment: ["leaderboards", "global_top_wines_by_enjoyment"],
  topWinesByBalance: ["leaderboards", "global_top_wines_by_balance"],
  globalDescriptorCounts: ["global_overview", "stats", "facets", "descriptors"],
};

function toDocRef(pathArray) {
  return doc(db, ...pathArray);
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function safeObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

/**
 * Generic leaderboard item mapper.
 * Expected each item to contain at least a label/name and a metric value.
 */
function normalizeLeaderboardItems(items, metricKeys = []) {
  return safeArray(items)
    .map((item, index) => {
      const label =
        item.name ||
        item.wineName ||
        item.label ||
        item.title ||
        `Item ${index + 1}`;

      let value = null;
      for (const key of metricKeys) {
        if (typeof item[key] === "number") {
          value = item[key];
          break;
        }
      }

      if (value === null && typeof item.value === "number") value = item.value;
      if (value === null && typeof item.avg === "number") value = item.avg;
      if (value === null && typeof item.score === "number") value = item.score;

      return {
        id: item.wineId || item.id || label,
        label,
        value: typeof value === "number" ? value : 0,
        tastingsCount: item.tastingsCount ?? item.count ?? null,
        raw: item,
      };
    })
    .filter((item) => item.label);
}

function normalizeWordCloudCounts(countsObj) {
  const counts = safeObject(countsObj);

  return Object.entries(counts)
    .map(([text, value]) => ({
      text,
      value: typeof value === "number" ? value : 0,
    }))
    .filter((item) => item.text && item.value > 0)
    .sort((a, b) => b.value - a.value);
}

// function normalizeDualMetricBuckets(bucketsObj) {
//   const buckets = safeObject(bucketsObj);

//   return Object.entries(buckets)
//     .map(([scoreKey, bucket]) => {
//       const score = Number(scoreKey);
//       const count = typeof bucket?.count === "number" ? bucket.count : 0;
//       const structureSum =
//         typeof bucket?.structureSum === "number" ? bucket.structureSum : 0;
//       const drinkabilitySum =
//         typeof bucket?.drinkabilitySum === "number" ? bucket.drinkabilitySum : 0;

//       return {
//         score,
//         label: String(scoreKey),
//         count,
//         structureAvg: count > 0 ? structureSum / count : 0,
//         drinkabilityAvg: count > 0 ? drinkabilitySum / count : 0,
//         raw: bucket,
//       };
//     })
//     .filter((item) => Number.isFinite(item.score))
//     .sort((a, b) => a.score - b.score);
// }

export async function getScreen3AData() {
  const [enjoymentSnap, balanceSnap, descriptorsSnap] = await Promise.all([
    getDoc(toDocRef(PATHS.topWinesByEnjoyment)),
    getDoc(toDocRef(PATHS.topWinesByBalance)),
    getDoc(toDocRef(PATHS.globalDescriptorCounts)),
  ]);

  const enjoymentData = enjoymentSnap.exists() ? enjoymentSnap.data() : {};
  const balanceData = balanceSnap.exists() ? balanceSnap.data() : {};
  const descriptorsData = descriptorsSnap.exists() ? descriptorsSnap.data() : {};

  return {
    topLikedWines: normalizeLeaderboardItems(
      enjoymentData.items,
      ["enjoymentAvg", "enjoyment", "avgEnjoyment", "metricValue"]
    ).slice(0, 10),

    topBalancedWines: normalizeLeaderboardItems(
      balanceData.items,
      ["balanceAvg", "balance", "avgBalance", "metricValue"]
    ).slice(0, 3),

    descriptorCloud: normalizeWordCloudCounts(descriptorsData.counts),

    updatedAt: {
      enjoyment: enjoymentData.updatedAt ?? null,
      balance: balanceData.updatedAt ?? null,
      descriptors: descriptorsData.updatedAt ?? null,
    },
  };
}

function normalizeDualMetricBuckets(bucketsObj) {
  const buckets = safeObject(bucketsObj);

  return Object.entries(buckets)
    .map(([scoreKey, bucket]) => {
      const score = Number(scoreKey);
      const count = typeof bucket?.count === "number" ? bucket.count : 0;
      const structureSum =
        typeof bucket?.structureSum === "number" ? bucket.structureSum : 0;
      const drinkabilitySum =
        typeof bucket?.drinkabilitySum === "number" ? bucket.drinkabilitySum : 0;

      return {
        score,
        label: String(scoreKey),
        count,
        structureAvg: count > 0 ? structureSum / count : 0,
        drinkabilityAvg: count > 0 ? drinkabilitySum / count : 0,
        raw: bucket,
      };
    })
    .filter((item) => Number.isFinite(item.score))
    .sort((a, b) => a.score - b.score);
}

export async function getScreen3BData(categoryId) {
  if (!categoryId) {
    return {
      descriptorCloud: [],
      dualMetricByScore: [],
      updatedAt: {
        descriptors: null,
        dualMetric: null,
      },
    };
  }

  const descriptorPath = [
    "category_overview",
    categoryId,
    "facets",
    "descriptors",
  ];

  const dualMetricPath = [
    "category_overview",
    categoryId,
    "facets",
    "enjoyment_structure_drinkability",
  ];

  const [descriptorsSnap, dualMetricSnap] = await Promise.all([
    getDoc(toDocRef(descriptorPath)),
    getDoc(toDocRef(dualMetricPath)),
  ]);

  const descriptorsData = descriptorsSnap.exists() ? descriptorsSnap.data() : {};
  const dualMetricData = dualMetricSnap.exists() ? dualMetricSnap.data() : {};

  return {
    descriptorCloud: normalizeWordCloudCounts(descriptorsData.counts),
    dualMetricByScore: normalizeDualMetricBuckets(dualMetricData.buckets),
    updatedAt: {
      descriptors: descriptorsData.updatedAt ?? null,
      dualMetric: dualMetricData.updatedAt ?? null,
    },
  };
}