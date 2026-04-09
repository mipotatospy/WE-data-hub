export function mapTopRegionsToStackedBarData(topRegions = []) {
    return [...topRegions]
      .sort((a, b) => b.enjoymentAvg - a.enjoymentAvg)
      .map((item) => {
        const red = item.categories?.red || 0;
        const white = item.categories?.white || 0;
        const rose = item.categories?.rose || 0;
        const sparkling = item.categories?.sparkling || 0;
        const special = item.categories?.special || 0;
  
        return {
          region: item.region,
          enjoymentAvg: item.enjoymentAvg || 0,
          red,
          white,
          rose,
          sparkling,
          special,
          total: red + white + rose + sparkling + special,
        };
      });
  }