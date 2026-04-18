export const PRICE_BUCKET_ORDER = [
    "Entry Level",
    "Mid-Range",
    "Premium",
    "Super Premium",
    "Luxury",
  ];
  
  export function sortPriceBuckets(items = []) {
    return [...items].sort(
      (a, b) =>
        PRICE_BUCKET_ORDER.indexOf(a.priceRange) - PRICE_BUCKET_ORDER.indexOf(b.priceRange)
    );
  }
  export function sortBubbleItems(items = []) {
    return [...items].sort((a, b) => {
      const priceDiff =
        PRICE_BUCKET_ORDER.indexOf(a.priceRange) -
        PRICE_BUCKET_ORDER.indexOf(b.priceRange);
  
      if (priceDiff !== 0) return priceDiff;
      return (b.enjoymentAvg || 0) - (a.enjoymentAvg || 0);
    });
  }