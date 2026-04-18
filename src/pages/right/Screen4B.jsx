import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
import InsightText from "../../components/layout/InsightText.jsx";

import StackedVerticalBarChart from "../../components/charts/StackedVerticalBarChart.jsx";
import BubbleChart from "../../components/charts/BubbleChart.jsx";

import { useScreen4BData } from "../../hooks/useScreen4Data";

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

  return (
    
    <div className="screen-page screen4b-page">
      <div className="screen4b-top">
        <ScreenPanel>
          <h2>Descriptors by Price Range</h2>
          <h3>Top descriptors associated with each perceived price tier</h3>
          <StackedVerticalBarChart data={descriptorByPrice} />
          <InsightText>
            Each bar shows the three most used descriptors within that price range.
          </InsightText>
        </ScreenPanel>
      </div>

      <div className="screen4b-bottom">
        <ScreenPanel>
          <h2>{categoryLabel} Price vs Enjoyment</h2>
          <h3>Most popular wines in this category</h3>
          <BubbleChart items={bubbleItems} />
          <InsightText>
            Bubble size reflects how many participants tasted each wine.
          </InsightText>
        </ScreenPanel>
      </div>
    </div>
  );
}