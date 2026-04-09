import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
import ScreenHeader from "../../components/layout/ScreenHeader.jsx";
import InsightText from "../../components/layout/InsightText.jsx";

import HorizontalBarChart from "../../components/charts/HorizontalBarChart.jsx";
import VerticalBarChart from "../../components/charts/VerticalBarChart.jsx";
import WordCloudChart from "../../components/charts/WordCloudChart.jsx";

import { useScreen3AData } from "../../hooks/useScreen3Data";

export default function Screen3A() {
  const { screen3AData, loading, error } = useScreen3AData();

  const { topLikedWines, topBalancedWines, descriptorCloud } = screen3AData;

  if (loading) {
    return (
      <div className="screen-page screen3a-page">
        <div className="screen-message">Loading screen 3A...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="screen-page screen3a-page">
        <div className="screen-message error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="screen-page screen3a-page">
      <div className="screen3a-top">
        <ScreenPanel>
          <ScreenHeader
            title="Top 10 Most Liked Wines"
            subtitle="Ranked by average enjoyment"
          />
          <HorizontalBarChart
            data={topLikedWines}
            valueKey="value"
            labelKey="label"
          />
        </ScreenPanel>
      </div>

      <div className="screen3a-bottom">
        <ScreenPanel>
          <ScreenHeader
            title="Highest Balance"
            subtitle="Top 3 wines by average balance"
          />
          <VerticalBarChart
            data={topBalancedWines}
            valueKey="value"
            labelKey="label"
          />
          <InsightText>
            The wines with the strongest perceived balance stand out across all
            tastings.
          </InsightText>
        </ScreenPanel>

        <ScreenPanel>
          <ScreenHeader
            title="Descriptors"
            subtitle="Most frequent words used during tasting"
          />
          <WordCloudChart data={descriptorCloud} textKey="text" valueKey="value" />
        </ScreenPanel>
      </div>
    </div>
  );
}