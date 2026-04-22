import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
import InsightText from "../../components/layout/InsightText.jsx";

import StackedVerticalBarChart from "../../components/charts/StackedVerticalBarChart.jsx";
import BubbleChart from "../../components/charts/BubbleChart.jsx";

import { useScreen4BData } from "../../hooks/useScreen4Data";

import ScreenHeader from "../../components/layout/ScreenHeader.jsx";

function mapDescriptorByPriceForChart(items = []) {
  return items.map((item) => ({
    label: item.label,
    segments: item.segments,
  }));
}

export default function Screen4B({ categoryId, categoryLabel }) {
  const { screen4BData, loading, error } = useScreen4BData(categoryId);

  const descriptorByPrice = mapDescriptorByPriceForChart(
    screen4BData?.descriptorByPrice ?? []
  );

  const bubbleItems = screen4BData?.bubbleItems ?? [];

  if (loading) {
    return (
      <div className="screen-page screen4b-page">
        <div className="screen-message">Loading {categoryLabel}...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="screen-page screen4b-page">
        <div className="screen-message error-message">{error}</div>
      </div>
    );
  }

  function formatCategoryTitle(category) {
    if (!category) return "Category";
  
    const map = {
      red: "Red Wines",
      white: "White Wines",
      rose: "Rosé Wines",
      sparkling: "Sparkling Wines",
      special: "Special Wines",
    };
  
    return map[category] || category;
  }

  return (
    
    <div className="screen screen4b-page">
      <div className="screen-1b__header">
        <div>
          <h1 className="screen-1b__title">{formatCategoryTitle(categoryLabel)}</h1>
        </div>
      </div>

      <div className="screen__layout">
        <div className="screen__section screen-4b__descriptor-by-price">
            <h2>Descriptors by Price Range</h2>
            <h3>Top descriptors associated with each perceived price tier</h3>
            <StackedVerticalBarChart data={descriptorByPrice} />
            <InsightText>
              Each bar shows the three most used descriptors within that price range.
            </InsightText>
        </div>

        <div className="screen__section screen-4b__descriptor-by-price">
            <h2>{categoryLabel} Price vs Enjoyment</h2>
            <h3>Most popular wines in this category</h3>
            <BubbleChart items={bubbleItems} />
            <InsightText>
              Bubble size reflects how many participants tasted each wine.
            </InsightText>
        </div>
      </div>
    </div>
  );
}