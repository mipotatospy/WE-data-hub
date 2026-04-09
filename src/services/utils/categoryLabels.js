export const CATEGORY_CONFIG = [
    { id: "red", label: "Red Wines" },
    { id: "white", label: "White Wines" },
    { id: "rose", label: "Rosé Wines" },
    { id: "sparkling", label: "Sparkling Wines" },
    { id: "special", label: "Special Wines" },
  ];
  
  export const CATEGORY_LABELS = CATEGORY_CONFIG.reduce((acc, item) => {
    acc[item.id] = item.label;
    return acc;
  }, {});
  
  export function getCategoryLabel(categoryId) {
    return CATEGORY_LABELS[categoryId] || categoryId || "";
  }