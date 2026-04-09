// import { useScreen2BData } from "../../hooks/useScreen2Data";
// import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
// import VerticalBarChart from "../../components/charts/VerticalBarChart";
// import WordCloudChart from "../../components/charts/WordCloudChart";

// const CATEGORY_COLORS = {
//   red: {
//     primary: "#8B1E3F",
//     secondary: "#D6B85A",
//   },
//   white: {
//     primary: "#D6B85A",
//     secondary: "#A67C52",
//   },
//   rose: {
//     primary: "#E89AAE",
//     secondary: "#C76D8A",
//   },
//   sparkling: {
//     primary: "#7DCFB6",
//     secondary: "#4FA88C",
//   },
//   special: {
//     primary: "#7C5CFF",
//     secondary: "#9C7BFF",
//   },
// };

// export default function Screen2B({ categoryId, categoryLabel }) {
//   const { screen2BData, loading, error } = useScreen2BData(categoryId);

//   const categoryColors = CATEGORY_COLORS[categoryId] || {
//     primary: "#8B1E3F",
//     secondary: "#D6B85A",
//   };

//   if (loading) {
//     return <div>Loading Screen 2.B...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!screen2BData) {
//     return <div>No Screen 2.B data available.</div>;
//   }

//   const {
//     topLikedWines = [],
//     topBalanceWines = [],
//     descriptorCloud = [],
//   } = screen2BData;

//   return (
//     <div className="screen2b-page">
//       <div className="screen2b-header">
//         <h1>{categoryLabel || "Category Insights"}</h1>
//         <h2>Most liked wines, balance, and descriptors</h2>
//       </div>

//       <div className="screen2b-section">
//         <h3>Top 10 Liked Wines</h3>
//         <HorizontalBarChart
//           items={topLikedWines}
//           color={categoryColors.primary}
//           height={380}
//         />
//       </div>

//       <div className="screen2b-section">
//         <h3>Top 3 Wines with Highest Balance</h3>
//         <VerticalBarChart
//           items={topBalanceWines}
//           color={categoryColors.secondary}
//           height={320}
//         />
//       </div>

//       <div className="screen2b-section">
//         <WordCloudChart
//           words={descriptorCloud}
//           title="Descriptor Word Cloud"
//           maxWords={20}
//         />
//       </div>
//     </div>
//   );
// }

import { useScreen2BData } from "../../hooks/useScreen2Data";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import VerticalBarChart from "../../components/charts/VerticalBarChart";
import WordCloudChart from "../../components/charts/WordCloudChart";

const CATEGORY_COLORS = {
  red: {
    primary: "#8B1E3F",
    secondary: "#D6B85A",
  },
  white: {
    primary: "#D6B85A",
    secondary: "#A67C52",
  },
  rose: {
    primary: "#E89AAE",
    secondary: "#C76D8A",
  },
  sparkling: {
    primary: "#7DCFB6",
    secondary: "#4FA88C",
  },
  special: {
    primary: "#7C5CFF",
    secondary: "#9C7BFF",
  },
};

export default function Screen2B({ categoryId, categoryLabel }) {
  const { screen2BData, loading, error } = useScreen2BData(categoryId);

  const categoryColors = CATEGORY_COLORS[categoryId] || {
    primary: "#8B1E3F",
    secondary: "#D6B85A",
  };

  if (loading) {
    return <div>Loading Screen 2.B...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!screen2BData) {
    return <div>No Screen 2.B data available.</div>;
  }

  const {
    topLikedWines = [],
    topBalanceWines = [],
    descriptorCloud = [],
  } = screen2BData;

  return (
    <div className="screen2b-page">
      <div className="screen2b-header">
        <h1>{categoryLabel || "Category Insights"}</h1>
        <h2>Most liked wines, balance, and descriptors</h2>
      </div>

      <div className="screen2b-section">
        <h3>Top 10 Liked Wines</h3>
        <HorizontalBarChart
          items={topLikedWines}
          color={categoryColors.primary}
          height={380}
        />
      </div>

      <div className="screen2b-section">
        <h3>Top 3 Wines with Highest Balance</h3>
        <VerticalBarChart
          items={topBalanceWines}
          color={categoryColors.secondary}
          height={320}
        />
      </div>

      <div className="screen2b-section">
        <WordCloudChart
          words={descriptorCloud}
          title="Descriptor Word Cloud"
          maxWords={20}
        />
      </div>
    </div>
  );
}