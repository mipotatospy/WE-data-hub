// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Firebase";

// function ensureNumber(value) {
//   return typeof value === "number" && !Number.isNaN(value) ? value : 0;
// }

// function ensureArray(value) {
//   return Array.isArray(value) ? value : [];
// }

// function sortByEnjoymentDesc(items) {
//   return [...items].sort(
//     (a, b) => ensureNumber(b.enjoymentAvg) - ensureNumber(a.enjoymentAvg)
//   );
// }

// function sortByRecognitionDesc(items) {
//   return [...items].sort((a, b) => {
//     const aRate =
//       ensureNumber(a.totalGuesses) > 0
//         ? ensureNumber(a.correctGuesses) / ensureNumber(a.totalGuesses)
//         : 0;

//     const bRate =
//       ensureNumber(b.totalGuesses) > 0
//         ? ensureNumber(b.correctGuesses) / ensureNumber(b.totalGuesses)
//         : 0;

//     return bRate - aRate;
//   });
// }

// async function readDocument(collectionName, documentId) {
//   const documentRef = doc(db, collectionName, documentId);
//   const snapshot = await getDoc(documentRef);

//   if (!snapshot.exists()) {
//     throw new Error(`Document not found: ${collectionName}/${documentId}`);
//   }

//   return snapshot.data();
// }

// function mapRegionOverviewItem(item, index) {
//   const categories = item.categories || {};

//   return {
//     id: item.region || `region-${index}`,
//     rank: index + 1,
//     region: item.region || "",
//     enjoymentAvg: ensureNumber(item.enjoymentAvg),
//     total:
//       ensureNumber(item.total) ||
//       ensureNumber(item.count) ||
//       ensureNumber(categories.red) +
//         ensureNumber(categories.white) +
//         ensureNumber(categories.rose) +
//         ensureNumber(categories.sparkling) +
//         ensureNumber(categories.special),
//     red: ensureNumber(item.red ?? categories.red),
//     white: ensureNumber(item.white ?? categories.white),
//     rose: ensureNumber(item.rose ?? categories.rose),
//     sparkling: ensureNumber(item.sparkling ?? categories.sparkling),
//     special: ensureNumber(item.special ?? categories.special),
//     count: ensureNumber(item.count),
//   };
// }

// function mapRecognizedWineItem(item, index) {
//   const correctGuesses = ensureNumber(
//     item.correctGuesses ?? item.correctCount ?? item.correct
//   );

//   const wrongGuesses = ensureNumber(
//     item.wrongGuesses ?? item.wrongCount ?? item.wrong
//   );

//   const totalGuesses = ensureNumber(
//     item.totalGuesses ?? item.totalAnswers ?? item.totalTastings ?? item.total
//   );

//   const normalizedTotal =
//     totalGuesses || correctGuesses + wrongGuesses || 0;

//   return {
//     id: item.wineId || `recognized-wine-${index}`,
//     wineId: item.wineId || "",
//     name: item.name || item.wineName || "Unknown Wine",
//     producer: item.producer || "",
//     correctGuesses,
//     wrongGuesses,
//     totalGuesses: normalizedTotal,
//     recognitionRate:
//       normalizedTotal > 0 ? correctGuesses / normalizedTotal : 0,
//   };
// }

// function mapTopRegionItem(item, index) {
//   const categories = item.categories || {};

//   return {
//     id: item.region || `top-region-${index}`,
//     rank: index + 1,
//     region: item.region || "",
//     enjoymentAvg: ensureNumber(item.enjoymentAvg),
//     total:
//       ensureNumber(item.total) ||
//       ensureNumber(item.count) ||
//       ensureNumber(categories.red) +
//         ensureNumber(categories.white) +
//         ensureNumber(categories.rose) +
//         ensureNumber(categories.sparkling) +
//         ensureNumber(categories.special),
//     red: ensureNumber(item.red ?? categories.red),
//     white: ensureNumber(item.white ?? categories.white),
//     rose: ensureNumber(item.rose ?? categories.rose),
//     sparkling: ensureNumber(item.sparkling ?? categories.sparkling),
//     special: ensureNumber(item.special ?? categories.special),
//     wines: ensureArray(item.wines),
//   };
// }

// function mapTopWineItem(item, index) {
//   return {
//     id: item.wineId || `top-wine-${index}`,
//     rank: index + 1,
//     wineId: item.wineId || "",
//     name: item.name || item.wineName || "Unknown Wine",
//     producer: item.producer || "",
//     vintage: item.vintage || "",
//     region: item.region || "",
//     enjoymentAvg: ensureNumber(item.enjoymentAvg),
//     tastingCount: ensureNumber(
//       item.tastingCount ?? item.count ?? item.totalTastings
//     ),
//   };
// }

// export async function getScreen1AOverview() {
//   const data = await readDocument("global_overview", "regions");

//   const topRegions = sortByEnjoymentDesc(
//     ensureArray(data.topRegions).map(mapRegionOverviewItem)
//   );

//   return {
//     mapRegions: topRegions,
//     topRegions,
//     updatedAt: data.updatedAt || null,
//   };
// }

// export async function getScreen1BCategoryData(categoryId) {
//   if (!categoryId) {
//     throw new Error("getScreen1BCategoryData requires a categoryId.");
//   }

//   const [
//     recognizedWinesData,
//     topRegionsData,
//     topWinesData,
//   ] = await Promise.all([
//     readDocument(
//       "leaderboards",
//       `category_${categoryId}_top_recognized_wines`
//     ),
//     readDocument("leaderboards", `category_${categoryId}_top_regions`),
//     readDocument(
//       "leaderboards",
//       `category_${categoryId}_top_wines_by_enjoyment`
//     ),
//   ]);

//   const topRecognizedWines = sortByRecognitionDesc(
//     ensureArray(recognizedWinesData.items)
//       .map(mapRecognizedWineItem)
//       .slice(0, 5)
//   );

//   const topLikedRegions = sortByEnjoymentDesc(
//     ensureArray(topRegionsData.items)
//       .map(mapTopRegionItem)
//       .slice(0, 3)
//   );

//   const topLikedWines = sortByEnjoymentDesc(
//     ensureArray(topWinesData.items)
//       .map(mapTopWineItem)
//       .slice(0, 10)
//   );

//   return {
//     categoryId,
//     topRecognizedWines,
//     topLikedRegions,
//     topLikedWines,
//     updatedAt:
//       recognizedWinesData.updatedAt ||
//       topRegionsData.updatedAt ||
//       topWinesData.updatedAt ||
//       null,
//   };
// }

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function sortByEnjoymentDesc(items) {
  return [...items].sort(
    (a, b) => ensureNumber(b.enjoymentAvg) - ensureNumber(a.enjoymentAvg)
  );
}

function sortByRecognitionDesc(items) {
  return [...items].sort((a, b) => {
    const aRate =
      ensureNumber(a.totalGuesses) > 0
        ? ensureNumber(a.correctGuesses) / ensureNumber(a.totalGuesses)
        : 0;

    const bRate =
      ensureNumber(b.totalGuesses) > 0
        ? ensureNumber(b.correctGuesses) / ensureNumber(b.totalGuesses)
        : 0;

    return bRate - aRate;
  });
}

async function readDocument(collectionName, documentId) {
  const documentRef = doc(db, collectionName, documentId);
  const snapshot = await getDoc(documentRef);

  if (!snapshot.exists()) {
    throw new Error(`Document not found: ${collectionName}/${documentId}`);
  }

  return snapshot.data();
}

function mapRegionOverviewItem(item, index) {
  const categories = item.categories || {};

  return {
    id: item.region || item.label || `region-${index}`,
    rank: index + 1,
    region: item.region || item.label || "",
    enjoymentAvg: ensureNumber(item.enjoymentAvg ?? item.value),
    total:
      ensureNumber(item.total) ||
      ensureNumber(item.count) ||
      ensureNumber(categories.red) +
        ensureNumber(categories.white) +
        ensureNumber(categories.rose) +
        ensureNumber(categories.sparkling) +
        ensureNumber(categories.special),
    red: ensureNumber(item.red ?? categories.red),
    white: ensureNumber(item.white ?? categories.white),
    rose: ensureNumber(item.rose ?? categories.rose),
    sparkling: ensureNumber(item.sparkling ?? categories.sparkling),
    special: ensureNumber(item.special ?? categories.special),
    count: ensureNumber(item.count),
  };
}

function mapRecognizedWineItem(item, index) {
  const correctGuesses = ensureNumber(
    item.correctGuesses ?? item.correctCount ?? item.correct
  );

  const wrongGuesses = ensureNumber(
    item.wrongGuesses ?? item.wrongCount ?? item.wrong
  );

  const totalGuesses = ensureNumber(
    item.totalGuesses ?? item.totalAnswers ?? item.totalTastings ?? item.total
  );

  const normalizedTotal = totalGuesses || correctGuesses + wrongGuesses || 0;

  return {
    id: item.wineId || `recognized-wine-${index}`,
    wineId: item.wineId || "",
    name: item.name || item.wineName || item.label || "Unknown Wine",
    producer: item.producer || "",
    correctGuesses,
    wrongGuesses,
    totalGuesses: normalizedTotal,
    recognitionRate: normalizedTotal > 0 ? correctGuesses / normalizedTotal : 0,
  };
}

function mapTopRegionItem(item, index) {
  const categories = item.categories || {};

  return {
    id: item.region || item.label || `top-region-${index}`,
    rank: index + 1,
    region: item.region || item.label || "",
    enjoymentAvg: ensureNumber(item.enjoymentAvg ?? item.value),
    total:
      ensureNumber(item.total) ||
      ensureNumber(item.count) ||
      ensureNumber(categories.red) +
        ensureNumber(categories.white) +
        ensureNumber(categories.rose) +
        ensureNumber(categories.sparkling) +
        ensureNumber(categories.special),
    red: ensureNumber(item.red ?? categories.red),
    white: ensureNumber(item.white ?? categories.white),
    rose: ensureNumber(item.rose ?? categories.rose),
    sparkling: ensureNumber(item.sparkling ?? categories.sparkling),
    special: ensureNumber(item.special ?? categories.special),
    wines: ensureArray(item.wines),
  };
}

function mapTopWineItem(item, index) {
  return {
    id: item.wineId || `top-wine-${index}`,
    rank: index + 1,
    wineId: item.wineId || "",
    name: item.name || item.wineName || item.label || "Unknown Wine",
    producer: item.producer || "",
    vintage: item.vintage || "",
    region: item.region || "",
    enjoymentAvg: ensureNumber(item.enjoymentAvg ?? item.value),
    tastingCount: ensureNumber(
      item.tastingCount ??
        item.tastingsCount ??
        item.count ??
        item.totalTastings
    ),
  };
}

export async function getScreen1AOverview() {
  const data = await readDocument("global_overview", "regions");

  const topRegions = sortByEnjoymentDesc(
    ensureArray(data.topRegions).map(mapRegionOverviewItem)
  );

  return {
    mapRegions: topRegions,
    topRegions,
    updatedAt: data.updatedAt || null,
  };
}

export async function getScreen1BCategoryData(categoryId) {
  if (!categoryId) {
    throw new Error("getScreen1BCategoryData requires a categoryId.");
  }

  const [recognizedWinesData, topRegionsData, topWinesData] = await Promise.all(
    [
      readDocument("leaderboards", `category_${categoryId}_top_recognized_wines`),
      readDocument("leaderboards", `category_${categoryId}_top_regions`),
      readDocument(
        "leaderboards",
        `category_${categoryId}_top_wines_by_enjoyment`
      ),
    ]
  );

  const topRecognizedWines = sortByRecognitionDesc(
    ensureArray(recognizedWinesData.items).map(mapRecognizedWineItem)
  ).slice(0, 5);

  const topLikedRegions = sortByEnjoymentDesc(
    ensureArray(topRegionsData.items).map(mapTopRegionItem)
  ).slice(0, 3);

  const topLikedWines = sortByEnjoymentDesc(
    ensureArray(topWinesData.items).map(mapTopWineItem)
  ).slice(0, 4);

  return {
    categoryId,
    topRecognizedWines,
    topLikedRegions,
    topLikedWines,
    updatedAt:
      recognizedWinesData.updatedAt ||
      topRegionsData.updatedAt ||
      topWinesData.updatedAt ||
      null,
  };
}