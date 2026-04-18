import ScreenHeader from "../../components/layout/ScreenHeader.jsx";
import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
import WordCloudChart from "../../components/charts/WordCloudChart.jsx";
import DualMetricByScoreChart from "../../components/charts/DualMetricByScoreChart.jsx";

export default function Screen3B({ categoryId, categoryLabel, data }) {
  const descriptorCloud = data?.descriptorCloud ?? [];
  const dualMetricByScore = data?.dualMetricByScore ?? [];

  return (
    <div className="screen-page screen-3b">
      <ScreenHeader
        title={`${categoryLabel} Profile`}
        subtitle="Descriptors and perceived style by enjoyment level"
      />

      <div className="screen-3b-grid">
        <ScreenPanel>
          <WordCloudChart
            title={`${categoryLabel} Descriptor Cloud`}
            words={descriptorCloud}
            maxWords={20}
          />
        </ScreenPanel>

        <ScreenPanel>
          <DualMetricByScoreChart
            title={`${categoryLabel} Structure vs Drinkability`}
            items={dualMetricByScore}
            height={360}
          />
        </ScreenPanel>
      </div>
    </div>
  );
}