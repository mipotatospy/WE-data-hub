// import ScreenHeader from "../../components/layout/ScreenHeader.jsx";
// import ScreenPanel from "../../components/layout/ScreenPanel.jsx";
// import WordCloudChart from "../../components/charts/WordCloudChart.jsx";
// import DualMetricByScoreChart from "../../components/charts/DualMetricByScoreChart.jsx";

// export default function Screen3B({ categoryId, categoryLabel, data }) {
//   const descriptorCloud = data?.descriptorCloud ?? [];
//   const dualMetricByScore = data?.dualMetricByScore ?? [];

//   function formatCategoryTitle(category) {
//     if (!category) return "Category";
  
//     const map = {
//       red: "Red Wines",
//       white: "White Wines",
//       rose: "Rosé Wines",
//       sparkling: "Sparkling Wines",
//       special: "Special Wines",
//     };
  
//     return map[category] || category;
//   }

//   return (
//     <div className="screen">
//       <div className="screen-1b__header">
//         <div>
//           <h1 className="screen-1b__title">{formatCategoryTitle(categoryLabel)}</h1>
//         </div>
//       </div>

//       <div className="screen__layout">
//         <div className="screen__section screen-3b__word-cloud">
//             <WordCloudChart
//               title={`${categoryLabel} Descriptor Cloud`}
//               words={descriptorCloud}
//               maxWords={20}
//             />
//         </div>
//         <div className="screen__section screen-3b__dualmetric">
//             <DualMetricByScoreChart
//               title={`${categoryLabel} Structure vs Drinkability`}
//               items={dualMetricByScore}
//               height={360}
//             />
//         </div>
//       </div>
//     </div>
//   );
// }

import WordCloudChart from "../../components/charts/WordCloudChart.jsx";
import DualMetricByScoreChart from "../../components/charts/DualMetricByScoreChart.jsx";

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

export default function Screen3B({ categoryId, categoryLabel, data }) {
  const descriptorCloud = data?.descriptorCloud ?? [];
  const dualMetricByScore = data?.dualMetricByScore ?? [];

  const titleCategory = categoryId || categoryLabel;

  return (
    <div className="screen screen3b">
      <div className="screen-1b__header">
        <h1 className="screen-1b__title">
          {formatCategoryTitle(titleCategory)}
        </h1>
      </div>

      <div className="screen3b-layout">
        <section className="screen__section screen3b-cloud">
          <WordCloudChart
            title={`${formatCategoryTitle(titleCategory)} Descriptor Cloud`}
            words={descriptorCloud}
            maxWords={20}
          />
        </section>

        <section className="screen__section screen3b-dualmetric">
          <DualMetricByScoreChart
            title={`${formatCategoryTitle(titleCategory)} Structure vs Drinkability`}
            items={dualMetricByScore}
            height={520}
          />
        </section>
      </div>
    </div>
  );
}