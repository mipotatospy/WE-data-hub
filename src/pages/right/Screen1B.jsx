// import PieMiniChart from "../../components/charts/PieMiniChart.jsx";
// import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
// import HorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
// // import { getCategoryColor } from "../../services/utils/categoryColors";

// function formatPercent(value) {
//   return `${Math.round((value || 0) * 100)}%`;
// }

// function formatScore(value) {
//   return typeof value === "number" ? value.toFixed(2) : "0.00";
// }

// function formatCategoryTitle(category) {
//   if (!category) return "Category";

//   const map = {
//     red: "Red Wines",
//     white: "White Wines",
//     rose: "Rosé Wines",
//     sparkling: "Sparkling Wines",
//     special: "Special Wines",
//   };

//   return map[category] || category;
// }

// function buildLikedWinesChartData(items = []) {
//   return items.map((item) => ({
//     label: item.name || "Unknown Wine",
//     value: item.enjoymentAvg || 0,
//     tastingCount: item.tastingCount || 0,
//     region: item.region || "",
//   }));
// }

// function Screen1B({ category, data }) {
//   const topRecognizedWines = data?.topRecognizedWines || [];
  
//   const topLikedRegions = data?.topLikedRegions || [];
//   if (!topLikedRegions || topLikedRegions.length === 0) {
//     return <p>No region data available for this category.</p>;
//   }
//   const topLikedWines = data?.topLikedWines || [];
//   // const backgroundColor = getCategoryColor(currentCategory);

//   const likedWinesChartData = buildLikedWinesChartData(topLikedWines);
//   console.log("Data passed to StackedHorizontalBarChart:", topLikedRegions);


//   return (
//     <div className="screen-content screen" >
//       <div className="screen-1b__header">
//         <div>
//           <h1 className="screen-1b__title">{formatCategoryTitle(category)}</h1>
//         </div>
//       </div>

//       <div className="screen__layout">
//         <section className="screen__section screen-1b__section--recognized">
//           <div className="screen-1b__section-header">
//             <h2>Top 5 Recognized Wines</h2>
//           </div>

//           {topRecognizedWines.length ? (
//             <div className="screen-1b__recognized-grid">
//               {topRecognizedWines.map((item, index) => (
//                 <article key={item.id} className="screen-1b__recognized-card">
//                   <div className="screen-1b__recognized-rank">#{index + 1}</div>
//                   <div className="screen-1b__content">
//                     <PieMiniChart
//                       correct={item.correctGuesses}
//                       wrong={item.wrongGuesses}
//                       size={110}
//                     />

//                     <div className="screen-1b__recognized-meta">
//                       <h3>{item.name}</h3>
//                       {item.producer ? (
//                         <p className="screen-1b__subtle">{item.producer}</p>
//                       ) : null}
//                       <p>
//                         Recognition: <strong>{formatPercent(item.recognitionRate)}</strong>
//                       </p>
//                       <p className="screen-1b__subtle">
//                         {item.correctGuesses} correct / {item.totalGuesses} total
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <p>No recognized wines data yet.</p>
//           )}
//         </section>

//         <section className="screen__section screen-1b__section--regions">
//           <div className="screen-1b__section-header">
//             <h2>Top 3 Liked Regions</h2>
//           </div>

//           <div className="screen-1b__content-centered">

//             <div className="screen-1b__content">
//               {topLikedRegions.length ? (
//                 <>
//                   <StackedHorizontalBarChart items={topLikedRegions} height={290} />

//                   <div className="screen-1b__region-summary">
//                     {topLikedRegions.map((item, index) => (
//                       <div key={item.id} className="screen-1b__region-pill">
//                         <strong>
//                           #{index + 1} {item.region}
//                         </strong>
//                         <span>Avg. enjoyment {formatScore(item.enjoymentAvg)}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <p>No region data yet.</p>
//               )}
//             </div>
//           </div>
//         </section>

//         <section className="screen__section screen-1b__section--wines">
//           <div className="screen-1b__section-header">
//             <h2>Top 4 Liked Wines</h2>
//           </div>

//           {likedWinesChartData.length ? (
//             <>
//               <HorizontalBarChart
//                 items={likedWinesChartData}
//                 height={420}
//                 datasetLabel="Enjoyment"
//                 valueKey="value"
//                 labelKey="label"
//                 barColor="#C084FC"
//               />

//               <div className="screen-1b__wine-summary">
//                 {topLikedWines.slice(0, 5).map((item, index) => (
//                   <div key={item.id} className="screen-1b__wine-summary-row">
//                     <span>
//                       #{index + 1} {item.name}
//                     </span>
//                     <span>
//                       {formatScore(item.enjoymentAvg)} · {item.tastingCount} tastings
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </>
//           ) : (
//             <p>No top liked wines data yet.</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Screen1B;

// import PieMiniChart from "../../components/charts/PieMiniChart.jsx";
// import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
// import HorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
// // import { getCategoryColor } from "../../services/utils/categoryColors";

// function formatPercent(value) {
//   return `${Math.round((value || 0) * 100)}%`;
// }

// function formatScore(value) {
//   return typeof value === "number" ? value.toFixed(2) : "0.00";
// }

// function formatCategoryTitle(category) {
//   if (!category) return "Category";

//   const map = {
//     red: "Red Wines",
//     white: "White Wines",
//     rose: "Rosé Wines",
//     sparkling: "Sparkling Wines",
//     special: "Special Wines",
//   };

//   return map[category] || category;
// }

// function buildLikedWinesChartData(items = []) {
//   return items.map((item) => ({
//     label: item.name || "Unknown Wine",
//     value: item.enjoymentAvg || 0,
//     tastingCount: item.tastingCount || 0,
//     region: item.region || "",
//   }));
// }

// function Screen1B({ category, data }) {
//   const topRecognizedWines = data?.topRecognizedWines || [];
//   const topLikedRegions = data?.topLikedRegions || [];
//   const topLikedWines = data?.topLikedWines || [];
//   const likedWinesChartData = buildLikedWinesChartData(topLikedWines);

//   return (
//     <div className="screen-content screen">
//       <div className="screen-1b__header">
//         <div>
//           <h1 className="screen-1b__title">{formatCategoryTitle(category)}</h1>
//         </div>
//       </div>

//       <div className="screen__layout">
//         <section className="screen__section screen-1b__section--recognized">
//           <div className="screen-1b__section-header">
//             <h2>Top 5 Recognized Wines</h2>
//           </div>

//           {topRecognizedWines.length ? (
//             <div className="screen-1b__recognized-grid">
//               {topRecognizedWines.map((item, index) => (
//                 <article key={item.id} className="screen-1b__recognized-card">
//                   <div className="screen-1b__recognized-rank">#{index + 1}</div>
//                   <div className="screen-1b__content">
//                     <PieMiniChart
//                       correct={item.correctGuesses}
//                       wrong={item.wrongGuesses}
//                       size={110}
//                     />

//                     <div className="screen-1b__recognized-meta">
//                       <h3>{item.name}</h3>
//                       {item.producer ? (
//                         <p className="screen-1b__subtle">{item.producer}</p>
//                       ) : null}
//                       <p>
//                         Recognition: <strong>{formatPercent(item.recognitionRate)}</strong>
//                       </p>
//                       <p className="screen-1b__subtle">
//                         {item.correctGuesses} correct / {item.totalGuesses} total
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div className="screen-1b__recognized-grid">
//               <PieMiniChart correct={0} wrong={0} size={110} />
//             </div>
//           )}
//         </section>

//         <section className="screen__section screen-1b__section--regions">
//           <div className="screen-1b__section-header">
//             <h2>Top 3 Liked Regions</h2>
//           </div>

//           <div className="screen-1b__content-centered">
//             <div className="screen-1b__content">
//               <StackedHorizontalBarChart
//                 items={topLikedRegions.length ? topLikedRegions : [{ region: "No Data", red: 0, white: 0, rose: 0, sparkling: 0, special: 0 }]}
//                 height={290}
//               />

//               <div className="screen-1b__region-summary">
//                 {topLikedRegions.length ? (
//                   topLikedRegions.map((item, index) => (
//                     <div key={item.id} className="screen-1b__region-pill">
//                       <strong>
//                         #{index + 1} {item.region}
//                       </strong>
//                       <span>Avg. enjoyment {formatScore(item.enjoymentAvg)}</span>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="screen-1b__region-pill">
//                     <strong>No Region Data</strong>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="screen__section screen-1b__section--wines">
//           <div className="screen-1b__section-header">
//             <h2>Top 4 Liked Wines</h2>
//           </div>

//           <div className="screen-1b__content">
//             <HorizontalBarChart
//               items={likedWinesChartData.length ? likedWinesChartData : [{ label: "No Data", value: 0, region: "" }]}
//               height={420}
//               datasetLabel="Enjoyment"
//               valueKey="value"
//               labelKey="label"
//               barColor="#C084FC"
//             />

//             <div className="screen-1b__wine-summary">
//               {likedWinesChartData.length ? (
//                 topLikedWines.slice(0, 5).map((item, index) => (
//                   <div key={item.id} className="screen-1b__wine-summary-row">
//                     <span>
//                       #{index + 1} {item.name}
//                     </span>
//                     <span>
//                       {formatScore(item.enjoymentAvg)} · {item.tastingCount} tastings
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <div className="screen-1b__wine-summary-row">
//                   <span>No top liked wines data available.</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Screen1B;
import PieMiniChart from "../../components/charts/PieMiniChart.jsx";
import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart.jsx";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart.jsx";

function formatPercent(value) {
  return `${Math.round((value || 0) * 100)}%`;
}

function formatScore(value) {
  return typeof value === "number" ? value.toFixed(2) : "0.00";
}

function formatCategoryTitle(category) {
  const map = {
    red: "Red Wines",
    white: "White Wines",
    rose: "Rosé Wines",
    sparkling: "Sparkling Wines",
    special: "Special Wines",
  };

  return map[category] || category || "Category";
}

function getItemLabel(item) {
  return item?.label || item?.name || item?.region || "Unknown";
}

function getItemValue(item) {
  return item?.value ?? item?.enjoymentAvg ?? 0;
}

function getItemCount(item) {
  return item?.tastingsCount ?? item?.tastingCount ?? item?.count ?? 0;
}

function buildLikedWinesChartData(items = []) {
  return items.map((item) => ({
    label: getItemLabel(item),
    value: getItemValue(item),
    tastingsCount: getItemCount(item),
    region: item?.region || "",
    id: item?.id || item?.wineId || getItemLabel(item),
  }));
}

function buildRegionsChartData(items = []) {
  return items.map((item) => ({
    ...item,
    label: getItemLabel(item),
    region: getItemLabel(item),
    value: getItemValue(item),
    count: getItemCount(item),
  }));
}

function getCategoryColor(category) {
  const map = {
    red: "#8B1E3F",        // deep wine red
    white: "#E6C200",      // golden yellow
    rose: "#E9A3B0",       // soft rosé pink
    sparkling: "#4DA6FF",  // elegant blue
    special: "#8A5CF6",    // purple
  };

  return map[category] || "#C084FC"; // fallback
}

function Screen1B({ category, data }) {
  const topRecognizedWines = data?.topRecognizedWines || [];
  const topLikedRegions = data?.topLikedRegions || [];
  const topLikedWines = data?.topLikedWines || [];

  const likedWinesChartData = buildLikedWinesChartData(topLikedWines);
  const likedRegionsChartData = buildRegionsChartData(topLikedRegions);

  return (
    <div className="screen-content screen">
      <div className="screen-1b__header">
        <h1 className="screen-1b__title">{formatCategoryTitle(category)}</h1>
      </div>

      <div className="screen__layout">
        <section className="screen__section screen-1b__section--recognized">
          <div className="screen-1b__section-header">
            <h2>Top 5 Recognized Wines</h2>
          </div>

          {topRecognizedWines.length ? (
            <div className="screen-1b__recognized-grid">
              {topRecognizedWines.map((item, index) => (
                <article
                  key={item.id || item.wineId || `${getItemLabel(item)}-${index}`}
                  className="screen-1b__recognized-card"
                >
                  <div className="screen-1b__recognized-rank">#{index + 1}</div>

                  <div className="screen-1b__content">
                    <PieMiniChart
                      correct={item.correctGuesses || 0}
                      wrong={item.wrongGuesses || 0}
                      size={110}
                    />

                    <div className="screen-1b__recognized-meta">
                      <h3>{getItemLabel(item)}</h3>

                      {item.producer ? (
                        <p className="screen-1b__subtle">{item.producer}</p>
                      ) : null}

                      <p>
                        Recognition:{" "}
                        <strong>
                          {formatPercent(item.recognitionRate ?? item.value)}
                        </strong>
                      </p>

                      <p className="screen-1b__subtle">
                        {item.correctGuesses || 0} correct /{" "}
                        {item.totalGuesses || 0} total
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="screen-1b__recognized-grid">
              <PieMiniChart correct={0} wrong={0} size={110} />
            </div>
          )}
        </section>

        <section className="screen__section screen-1b__section--regions">
          <div className="screen-1b__section-header">
            <h2>Top 3 Liked Regions</h2>
          </div>

          <div className="screen-1b__content-centered">
            <div className="screen-1b__content">
            <HorizontalBarChart
              items={
                likedRegionsChartData.length
                  ? likedRegionsChartData
                  : [{ label: "No Data", value: 0, tastingsCount: 0 }]
              }
              height={290}
              color={getCategoryColor(category)}
            />

              <div className="screen-1b__region-summary">
                {likedRegionsChartData.length ? (
                  likedRegionsChartData.map((item, index) => (
                    <div
                      key={item.id || item.region || `${item.label}-${index}`}
                      className="screen-1b__region-pill"
                    >
                      <strong>
                        #{index + 1} {getItemLabel(item)}
                      </strong>
                      <span>Avg. enjoyment {formatScore(getItemValue(item))}</span>
                    </div>
                  ))
                ) : (
                  <div className="screen-1b__region-pill">
                    <strong>No Region Data</strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="screen__section screen-1b__section--wines">
          <div className="screen-1b__section-header">
            <h2>Top 4 Liked Wines</h2>
          </div>

          <div className="screen-1b__content">
          <HorizontalBarChart
            items={
              likedWinesChartData.length
                ? likedWinesChartData
                : [{ label: "No Data", value: 0, tastingsCount: 0 }]
            }
            height={420}
            color={getCategoryColor(category)}
          />

            <div className="screen-1b__wine-summary">
              {likedWinesChartData.length ? (
                likedWinesChartData.slice(0, 4).map((item, index) => (
                  <div
                    key={item.id || `${item.label}-${index}`}
                    className="screen-1b__wine-summary-row"
                  >
                    <span>
                      #{index + 1} {item.label}
                    </span>
                    <span>
                      {formatScore(item.value)} · {item.tastingsCount} tastings
                    </span>
                  </div>
                ))
              ) : (
                <div className="screen-1b__wine-summary-row">
                  <span>No top liked wines data available.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Screen1B;