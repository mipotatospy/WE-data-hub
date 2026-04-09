import FullScreenMessage from "../../components/layout/FullScreenMessage.jsx";
import ScreenHeader from "../../components/layout/ScreenHeader.jsx";
import PieMiniChart from "../../components/charts/PieMiniChart.jsx";
import StackedVerticalBarChart from "../../components/charts/StackedVerticalBarChart.jsx";
import { useScreen2AData } from "../../hooks/useScreen2Data.js";

function Screen2A() {
  const { screen2AData, loading, error } = useScreen2AData();

  if (loading) {
    return <FullScreenMessage text="Loading Screen 2A..." />;
  }

  if (error) {
    return <FullScreenMessage text={error} />;
  }

  if (
    !screen2AData ||
    !screen2AData.stackedBars?.length ||
    !screen2AData.grapePies?.length
  ) {
    return <FullScreenMessage text="No grape data available." />;
  }

  return (
    <div className="screen2a">
      <h1>

        Most Recognised Grapes
      </h1>

      <div className="screen2a-top">
        <div className="screen2a-section-title">
          Correct vs wrong grape guesses
        </div>

        <StackedVerticalBarChart data={screen2AData.stackedBars} height={550} />
      </div>

      <div className="screen2a-bottom">
        <div className="screen2a-section-title">
          Correct guess percentage by grape
        </div>

        <div className="screen2a-pies">
          {screen2AData.grapePies.map((grape) => {
            const correctPct = Math.round((grape.correctGuessRate ?? 0) * 100);

            return (
              <div key={grape.grapeId} className="screen2a-pie-card">
                <PieMiniChart
                  correct={grape.correctGuessCount}
                  wrong={grape.wrongGuessCount}
                  size={130}
                />

                <div className="screen2a-pie-label">{grape.label}</div>
                <div className="screen2a-pie-percentage">{correctPct}% correct</div>
                <div className="screen2a-pie-stats">
                  {grape.correctGuessCount} / {grape.guessCount}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Screen2A;