import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
import BubbleChart from "../../components/charts/BubbleChart.jsx";
import LineChart from "../../components/charts/LineChart.jsx";
import InsightText from "../../components/layout/InsightText.jsx";

import { useScreen4AData } from "../../hooks/useScreen4Data";

export default function Screen4A() {
  const { screen4AData, loading, error } = useScreen4AData();

  const { bubbleItems, priceTrend } = screen4AData;

  if (loading) {
    return (
      <div className="screen-page screen4a-page">
        <div className="screen-message">Loading screen 4A...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="screen-page screen4a-page">
        <div className="screen-message error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="screen-page screen4a-page">
      <div className="screen4a-top">
        <ScreenPanel>
          <h2>Price vs Enjoyment</h2>
          <h3>Top wines positioned by perceived price range</h3>
          <BubbleChart items={bubbleItems} />
          <InsightText>
            Bubble size reflects how many participants tasted each wine.
          </InsightText>
        </ScreenPanel>
      </div>

      <div className="screen4a-bottom">
        <ScreenPanel>
          <h2>Enjoyment by Price Perception</h2>
          <h3>Average enjoyment across price ranges</h3>
          <LineChart items={priceTrend} />
          <InsightText>
            This trend highlights how perceived value relates to audience enjoyment.
          </InsightText>
        </ScreenPanel>
      </div>
    </div>
  );
}