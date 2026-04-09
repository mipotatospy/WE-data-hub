export const categoryColors = {
    "Red Wines": "#7B1E2B",
    "White Wines": "#E7D9A8",
    "Rosé Wines": "#E8A6B5",
    "Sparkling Wines": "#D8C88D",
    "Special Wines": "#5E3C6C",
  };
  
  export function getCategoryColor(category) {
    return categoryColors[category] || "#1F1F1F";
  }