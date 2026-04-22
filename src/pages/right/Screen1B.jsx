// function Screen1B({ leaderboard }) {
//     return (
//       <div className="screen-content">
//         <h2>Screen 1.B — comparison chart</h2>
  
//         {leaderboard?.items?.length ? (
//           <ul>
//             {leaderboard.items.map((item) => (
//               <li key={item.wineId}>
//                 {item.label}: {item.value}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No enjoyment leaderboard data yet.</p>
//         )}
//       </div>
//     );
//   }
  
//   export default Screen1B;

import PieMiniChart from "../../components/charts/PieMiniChart.jsx";
import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
import HorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
// import { getCategoryColor } from "../../services/utils/categoryColors";

function formatPercent(value) {
  return `${Math.round((value || 0) * 100)}%`;
}

function formatScore(value) {
  return typeof value === "number" ? value.toFixed(2) : "0.00";
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

function buildLikedWinesChartData(items = []) {
  return items.map((item) => ({
    label: item.name || "Unknown Wine",
    value: item.enjoymentAvg || 0,
    tastingCount: item.tastingCount || 0,
    region: item.region || "",
  }));
}

function Screen1B({ category, data }) {
  const topRecognizedWines = data?.topRecognizedWines || [];
  const topLikedRegions = data?.topLikedRegions || [];
  const topLikedWines = data?.topLikedWines || [];
  // const backgroundColor = getCategoryColor(currentCategory);

  const likedWinesChartData = buildLikedWinesChartData(topLikedWines);

  return (
    <div className="screen-content screen" >
      <div className="screen-1b__header">
        <div>
          <h1 className="screen-1b__title">{formatCategoryTitle(category)}</h1>
        </div>
      </div>

      <div className="screen__layout">
        <section className="screen__section screen-1b__section--recognized">
          <div className="screen-1b__section-header">
            <h2>Top 5 Recognized Wines</h2>
          </div>

          {topRecognizedWines.length ? (
            <div className="screen-1b__recognized-grid">
              {topRecognizedWines.map((item, index) => (
                <article key={item.id} className="screen-1b__recognized-card">
                  <div className="screen-1b__recognized-rank">#{index + 1}</div>
                  <div className="screen-1b__content">
                    <PieMiniChart
                      correct={item.correctGuesses}
                      wrong={item.wrongGuesses}
                      size={110}
                    />

                    <div className="screen-1b__recognized-meta">
                      <h3>{item.name}</h3>
                      {item.producer ? (
                        <p className="screen-1b__subtle">{item.producer}</p>
                      ) : null}
                      <p>
                        Recognition: <strong>{formatPercent(item.recognitionRate)}</strong>
                      </p>
                      <p className="screen-1b__subtle">
                        {item.correctGuesses} correct / {item.totalGuesses} total
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>No recognized wines data yet.</p>
          )}
        </section>

        <section className="screen__section screen-1b__section--regions">
          <div className="screen-1b__section-header">
            <h2>Top 3 Liked Regions</h2>
          </div>

          <div className="screen-1b__content-centered">

            <div className="screen-1b__content">
              {topLikedRegions.length ? (
                <>
                  <StackedHorizontalBarChart items={topLikedRegions} height={290} />

                  <div className="screen-1b__region-summary">
                    {topLikedRegions.map((item, index) => (
                      <div key={item.id} className="screen-1b__region-pill">
                        <strong>
                          #{index + 1} {item.region}
                        </strong>
                        <span>Avg. enjoyment {formatScore(item.enjoymentAvg)}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No region data yet.</p>
              )}
            </div>
          </div>
        </section>

        <section className="screen__section screen-1b__section--wines">
          <div className="screen-1b__section-header">
            <h2>Top 4 Liked Wines</h2>
          </div>

          {likedWinesChartData.length ? (
            <>
              <HorizontalBarChart
                items={likedWinesChartData}
                height={420}
                datasetLabel="Enjoyment"
                valueKey="value"
                labelKey="label"
                barColor="#C084FC"
              />

              <div className="screen-1b__wine-summary">
                {topLikedWines.slice(0, 5).map((item, index) => (
                  <div key={item.id} className="screen-1b__wine-summary-row">
                    <span>
                      #{index + 1} {item.name}
                    </span>
                    <span>
                      {formatScore(item.enjoymentAvg)} · {item.tastingCount} tastings
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>No top liked wines data yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default Screen1B;