import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

/* =========================
   Screen 2A helpers
========================= */

function sortByGuessCountDesc(items) {
  return [...items].sort((a, b) => (b.guessCount || 0) - (a.guessCount || 0));
}

function mapLeaderboardItems(items = []) {
  return items.map((item) => ({
    grapeId: item.grapeId,
    label: item.label,
    guessCount: item.guessCount ?? 0,
    correctGuessCount: item.correctGuessCount ?? 0,
    wrongGuessCount: item.wrongGuessCount ?? 0,
    correctGuessRate:
      item.correctGuessRate ??
      ((item.guessCount || 0) > 0
        ? (item.correctGuessCount || 0) / item.guessCount
        : 0),
  }));
}

function mapGrapeOverviewDocs(docs) {
  return docs.map((snap) => {
    const data = snap.data();

    return {
      grapeId: snap.id,
      label: data.grape,
      guessCount: data.guessCount ?? 0,
      correctGuessCount: data.correctGuessCount ?? 0,
      wrongGuessCount: data.wrongGuessCount ?? 0,
      correctGuessRate:
        data.correctGuessRate ??
        ((data.guessCount || 0) > 0
          ? (data.correctGuessCount || 0) / data.guessCount
          : 0),
    };
  });
}

export async function getScreen2AData() {
  const leaderboardRef = doc(db, "leaderboards", "global_top_grapes_by_recognition");
  const leaderboardSnap = await getDoc(leaderboardRef);

  let grapes = [];

  if (leaderboardSnap.exists()) {
    const leaderboardData = leaderboardSnap.data();
    grapes = mapLeaderboardItems(leaderboardData.items || []);
  } else {
    const grapeOverviewRef = collection(db, "grape_overview");
    const grapeOverviewSnap = await getDocs(grapeOverviewRef);

    grapes = sortByGuessCountDesc(mapGrapeOverviewDocs(grapeOverviewSnap.docs)).slice(0, 5);
  }

  return {
    stackedBars: grapes.map((grape) => ({
      label: grape.label,
      correct: grape.correctGuessCount,
      wrong: grape.wrongGuessCount,
      total: grape.guessCount,
    })),
    grapePies: grapes,
  };
}

/* =========================
   Screen 2B helpers
========================= */

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function sortByValueDesc(items) {
  return [...items].sort((a, b) => (b.value || 0) - (a.value || 0));
}

function mapWineLeaderboardItems(items = [], limit) {
  return sortByValueDesc(
    ensureArray(items).map((item, index) => ({
      wineId: item?.wineId ?? null,
      label: item?.label || `Wine ${index + 1}`,
      value: ensureNumber(item?.value),
      tastingsCount: ensureNumber(item?.tastingsCount),
    }))
  )
    .filter((item) => item.value > 0)
    .slice(0, limit);
}

function mapDescriptorCounts(counts) {
  if (!counts) return [];

  if (Array.isArray(counts)) {
    return counts
      .map((item, index) => ({
        text:
          item?.text ||
          item?.label ||
          item?.descriptor ||
          `Descriptor ${index + 1}`,
        value:
          ensureNumber(item?.value) ||
          ensureNumber(item?.count) ||
          ensureNumber(item?.weight),
      }))
      .filter((item) => item.text && item.value > 0)
      .sort((a, b) => b.value - a.value);
  }

  if (typeof counts === "object") {
    return Object.entries(counts)
      .map(([text, value]) => ({
        text,
        value: ensureNumber(value),
      }))
      .filter((item) => item.text && item.value > 0)
      .sort((a, b) => b.value - a.value);
  }

  return [];
}

export async function getScreen2BData(categoryId) {
  if (!categoryId) {
    console.log("[getScreen2BData] missing categoryId");
    return {
      categoryId: null,
      topLikedWines: [],
      topBalanceWines: [],
      descriptorCloud: [],
      updatedAt: null,
    };
  }

  const enjoymentDocId = `category_${categoryId}_top_wines_by_enjoyment`;
  const balanceDocId = `category_${categoryId}_top_wines_by_balance`;

  console.log("[getScreen2BData] categoryId:", categoryId);
  console.log("[getScreen2BData] enjoymentDocId:", enjoymentDocId);
  console.log("[getScreen2BData] balanceDocId:", balanceDocId);

  const topEnjoymentRef = doc(db, "leaderboards", enjoymentDocId);
  const topBalanceRef = doc(db, "leaderboards", balanceDocId);
  const descriptorsRef = doc(
    db,
    "category_overview",
    categoryId,
    "facets",
    "descriptors"
  );

  const [topEnjoymentSnap, topBalanceSnap, descriptorsSnap] = await Promise.all([
    getDoc(topEnjoymentRef),
    getDoc(topBalanceRef),
    getDoc(descriptorsRef),
  ]);

  console.log("[getScreen2BData] enjoyment exists:", topEnjoymentSnap.exists());
  console.log("[getScreen2BData] balance exists:", topBalanceSnap.exists());
  console.log("[getScreen2BData] descriptors exists:", descriptorsSnap.exists());

  const topEnjoymentData = topEnjoymentSnap.exists() ? topEnjoymentSnap.data() : {};
  const topBalanceData = topBalanceSnap.exists() ? topBalanceSnap.data() : {};
  const descriptorsData = descriptorsSnap.exists() ? descriptorsSnap.data() : {};

  console.log("[getScreen2BData] enjoyment data:", topEnjoymentData);
  console.log("[getScreen2BData] balance data:", topBalanceData);
  console.log("[getScreen2BData] descriptors data:", descriptorsData);

  const result = {
    categoryId,
    topLikedWines: mapWineLeaderboardItems(topEnjoymentData.items || [], 10),
    topBalanceWines: mapWineLeaderboardItems(topBalanceData.items || [], 3),
    descriptorCloud: mapDescriptorCounts(descriptorsData.counts),
    updatedAt:
      topEnjoymentData.updatedAt ||
      topBalanceData.updatedAt ||
      descriptorsData.updatedAt ||
      null,
  };

  console.log("[getScreen2BData] mapped result:", result);

  return result;
}