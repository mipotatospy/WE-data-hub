import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

/**
 * Firestore paths used by Screen 3A
 */
const PATHS = {
  topWinesByEnjoyment: ["leaderboards", "global_top_wines_by_enjoyment"],
  topWinesByBalance: ["leaderboards", "global_top_wines_by_balance"],
  descriptorCounts: ["global_overview", "stats", "facets", "descriptors"],
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

export async function getScreen3AData() {
  const [enjoymentSnap, balanceSnap, descriptorsSnap] = await Promise.all([
    getDoc(toDocRef(PATHS.topWinesByEnjoyment)),
    getDoc(toDocRef(PATHS.topWinesByBalance)),
    getDoc(toDocRef(PATHS.descriptorCounts)),
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