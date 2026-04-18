// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Firebase";
// import { sortPriceBuckets,  sortBubbleItems, PRICE_BUCKET_ORDER} from "../utils/priceBuckets";

// /**
//  * Firestore paths used by Screen 4A
//  */
// const PATHS = {
//   globalBubble: ["leaderboards", "global_bubble_price_vs_enjoyment"],
//   globalPriceOverview: ["price_overview", "global"],
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

// function normalizeBubbleItems(items) {
//     return safeArray(items)
//       .map((item, index) => ({
//         id: item.wineId || item.id || `bubble-${index + 1}`,
//         wineId: item.wineId || null,
//         label: item.label || item.name || item.wineName || `Wine ${index + 1}`,
//         category: item.category || null,
//         priceRange: item.priceRange || null,
//         enjoymentAvg:
//           typeof item.enjoymentAvg === "number"
//             ? item.enjoymentAvg
//             : typeof item.value === "number"
//             ? item.value
//             : 0,
//         tastingsCount:
//           typeof item.tastingsCount === "number" ? item.tastingsCount : 0,
//         raw: item,
//       }))
//       .filter((item) => item.label && item.priceRange);
//   }

// function normalizePriceBuckets(bucketsObj) {
//   const buckets = safeObject(bucketsObj);

//   return Object.entries(buckets).map(([priceRange, bucket]) => ({
//     label: priceRange,
//     priceRange,
//     count: typeof bucket?.count === "number" ? bucket.count : 0,
//     enjoymentAvg:
//       typeof bucket?.enjoymentAvg === "number"
//         ? bucket.enjoymentAvg
//         : typeof bucket?.enjoymentSum === "number" &&
//           typeof bucket?.count === "number" &&
//           bucket.count > 0
//         ? bucket.enjoymentSum / bucket.count
//         : 0,
//     enjoymentSum:
//       typeof bucket?.enjoymentSum === "number" ? bucket.enjoymentSum : 0,
//     raw: bucket,
//   }));
// }

// export async function getScreen4AData() {
//   const [bubbleSnap, priceOverviewSnap] = await Promise.all([
//     getDoc(toDocRef(PATHS.globalBubble)),
//     getDoc(toDocRef(PATHS.globalPriceOverview)),
//   ]);

//   const bubbleData = bubbleSnap.exists() ? bubbleSnap.data() : {};
//   const priceOverviewData = priceOverviewSnap.exists() ? priceOverviewSnap.data() : {};

//   return {
//     bubbleItems: sortBubbleItems(normalizeBubbleItems(bubbleData.items)).slice(0, 10),
//     priceTrend: sortPriceBuckets(normalizePriceBuckets(priceOverviewData.buckets)),
//     updatedAt: {
//       bubble: bubbleData.updatedAt ?? null,
//       priceOverview: priceOverviewData.updatedAt ?? null,
//     },
//   };
// }

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import {
  sortPriceBuckets,
  sortBubbleItems,
  PRICE_BUCKET_ORDER,
} from "../utils/priceBuckets";

/**
 * Firestore paths used by Screen 4A and 4B
 */
const PATHS = {
  globalBubble: ["leaderboards", "global_bubble_price_vs_enjoyment"],
  globalPriceOverview: ["price_overview", "global"],
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

function normalizePriceLabel(priceRange) {
  const value = String(priceRange || "").trim().toLowerCase();

  if (value === "entry level" || value === "entry-level") return "Entry Level";
  if (value === "mid-range" || value === "mid range") return "Mid-Range";
  if (value === "premium") return "Premium";
  if (value === "super premium" || value === "super-premium") return "Super Premium";
  if (value === "luxury") return "Luxury";

  return priceRange;
}

function normalizeBubbleItems(items) {
  return safeArray(items)
    .map((item, index) => ({
      id: item.wineId || item.id || `bubble-${index + 1}`,
      wineId: item.wineId || null,
      label: item.label || item.name || item.wineName || `Wine ${index + 1}`,
      category: item.category || null,
      priceRange: normalizePriceLabel(item.priceRange || null),
      enjoymentAvg:
        typeof item.enjoymentAvg === "number"
          ? item.enjoymentAvg
          : typeof item.value === "number"
          ? item.value
          : 0,
      tastingsCount:
        typeof item.tastingsCount === "number" ? item.tastingsCount : 0,
      raw: item,
    }))
    .filter((item) => item.label && item.priceRange);
}

function normalizePriceBuckets(bucketsObj) {
  const buckets = safeObject(bucketsObj);

  return Object.entries(buckets).map(([priceRange, bucket]) => ({
    label: normalizePriceLabel(priceRange),
    priceRange: normalizePriceLabel(priceRange),
    count: typeof bucket?.count === "number" ? bucket.count : 0,
    value:
      typeof bucket?.enjoymentAvg === "number"
        ? bucket.enjoymentAvg
        : typeof bucket?.enjoymentSum === "number" &&
          typeof bucket?.count === "number" &&
          bucket.count > 0
        ? bucket.enjoymentSum / bucket.count
        : 0,
    enjoymentAvg:
      typeof bucket?.enjoymentAvg === "number"
        ? bucket.enjoymentAvg
        : typeof bucket?.enjoymentSum === "number" &&
          typeof bucket?.count === "number" &&
          bucket.count > 0
        ? bucket.enjoymentSum / bucket.count
        : 0,
    enjoymentSum:
      typeof bucket?.enjoymentSum === "number" ? bucket.enjoymentSum : 0,
    raw: bucket,
  }));
}

function normalizeDescriptorByPriceBuckets(bucketsObj) {
  const buckets = safeObject(bucketsObj);

  const normalized = Object.entries(buckets).map(([priceRange, descriptors]) => {
    const descriptorCounts = safeObject(descriptors);

    const segments = Object.entries(descriptorCounts)
      .map(([label, value]) => ({
        label,
        value: typeof value === "number" ? value : 0,
      }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value)
      .slice(0, 3);

    return {
      label: normalizePriceLabel(priceRange),
      priceRange: normalizePriceLabel(priceRange),
      segments,
      raw: descriptors,
    };
  });

  const byLabel = new Map(normalized.map((item) => [item.priceRange, item]));

  return PRICE_BUCKET_ORDER.map((priceRange) => {
    return (
      byLabel.get(priceRange) || {
        label: priceRange,
        priceRange,
        segments: [],
        raw: {},
      }
    );
  });
}

export async function getScreen4AData() {
  const [bubbleSnap, priceOverviewSnap] = await Promise.all([
    getDoc(toDocRef(PATHS.globalBubble)),
    getDoc(toDocRef(PATHS.globalPriceOverview)),
  ]);

  const bubbleData = bubbleSnap.exists() ? bubbleSnap.data() : {};
  const priceOverviewData = priceOverviewSnap.exists() ? priceOverviewSnap.data() : {};

  return {
    bubbleItems: sortBubbleItems(normalizeBubbleItems(bubbleData.items)).slice(0, 10),
    priceTrend: sortPriceBuckets(normalizePriceBuckets(priceOverviewData.buckets)),
    updatedAt: {
      bubble: bubbleData.updatedAt ?? null,
      priceOverview: priceOverviewData.updatedAt ?? null,
    },
  };
}

export async function getScreen4BData(categoryId) {
  if (!categoryId) {
    return {
      descriptorByPrice: PRICE_BUCKET_ORDER.map((priceRange) => ({
        label: priceRange,
        priceRange,
        segments: [],
      })),
      bubbleItems: [],
      updatedAt: {
        descriptorByPrice: null,
        bubble: null,
      },
    };
  }

  const descriptorPath = [
    "category_overview",
    categoryId,
    "facets",
    "price_descriptor_counts",
  ];

  const bubblePath = [
    "leaderboards",
    `category_${categoryId}_bubble_price_vs_enjoyment`,
  ];

  const [descriptorSnap, bubbleSnap] = await Promise.all([
    getDoc(toDocRef(descriptorPath)),
    getDoc(toDocRef(bubblePath)),
  ]);

  const descriptorData = descriptorSnap.exists() ? descriptorSnap.data() : {};
  const bubbleData = bubbleSnap.exists() ? bubbleSnap.data() : {};

  return {
    descriptorByPrice: normalizeDescriptorByPriceBuckets(descriptorData.buckets),
    bubbleItems: sortBubbleItems(normalizeBubbleItems(bubbleData.items)),
    updatedAt: {
      descriptorByPrice: descriptorData.updatedAt ?? null,
      bubble: bubbleData.updatedAt ?? null,
    },
  };
}