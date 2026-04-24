// import { useMemo } from "react";
// import { useScreen1AData } from "../../hooks/useScreen1Data";
// import ItalyMap from "../../components/maps/ItalyMap";
// import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart";

// export default function Screen1A() {
//   const { screen1AData, loading, error } = useScreen1AData();

//   const chartData = useMemo(() => {
//     if (!screen1AData?.topRegions?.length) return [];

//     return [...screen1AData.topRegions]
//       .sort((a, b) => Number(b.enjoymentAvg ?? 0) - Number(a.enjoymentAvg ?? 0))
//       .map((item) => {
//         const red = Number(item.red ?? 0);
//         const white = Number(item.white ?? 0);
//         const rose = Number(item.rose ?? 0);
//         const sparkling = Number(item.sparkling ?? 0);
//         const special = Number(item.special ?? 0);

//         return {
//           region: String(item.region ?? ""),
//           enjoymentAvg: Number(item.enjoymentAvg ?? 0),
//           red,
//           white,
//           rose,
//           sparkling,
//           special,
//           total: red + white + rose + sparkling + special,
//         };
//       });
//   }, [screen1AData]);

//   if (loading) {
//     return <div>Loading Screen 1.A...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!screen1AData || !screen1AData.topRegions?.length) {
//     return <div>No region data available.</div>;
//   }

//   return (
//     <div>
//       <h2>Top Liked Regions</h2>

//       <ItalyMap topRegions={screen1AData.topRegions} />
//       <StackedHorizontalBarChart items={chartData} />
//     </div>
//   );
// }

import { useMemo } from "react";
import { useScreen1AData } from "../../hooks/useScreen1Data";
import ItalyMap from "../../components/maps/ItalyMap";
import StackedHorizontalBarChart from "../../components/charts/StackedHorizontalBarChart";

export default function Screen1A() {
  const { screen1AData, loading, error } = useScreen1AData();

  const chartData = useMemo(() => {
    if (!screen1AData?.topRegions?.length) return [];

    return [...screen1AData.topRegions]
      .sort((a, b) => Number(b.enjoymentAvg ?? 0) - Number(a.enjoymentAvg ?? 0))
      .map((item) => {
        const red = Number(item.red ?? 0);
        const white = Number(item.white ?? 0);
        const rose = Number(item.rose ?? 0);
        const sparkling = Number(item.sparkling ?? 0);
        const special = Number(item.special ?? 0);

        return {
          region: String(item.region ?? ""),
          enjoymentAvg: Number(item.enjoymentAvg ?? 0),
          red,
          white,
          rose,
          sparkling,
          special,
          total: red + white + rose + sparkling + special,
        };
      });
  }, [screen1AData]);

  if (loading) {
    return <div>Loading Screen 1.A...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Top Liked Regions</h2>
      <ItalyMap topRegions={screen1AData.topRegions} />
      <StackedHorizontalBarChart items={chartData.length > 0 ? chartData : []} />
      {chartData.length === 0 && <div>No data available for regions.</div>}
    </div>
  );
}