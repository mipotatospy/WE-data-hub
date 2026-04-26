// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const CATEGORY_CONFIG = [
//   { key: "red", label: "Red", color: "#8B1E3F" },
//   { key: "white", label: "White", color: "#D8C58A" },
//   { key: "rose", label: "Rosé", color: "#D88C9A" },
//   { key: "sparkling", label: "Sparkling", color: "#C9A227" },
//   { key: "special", label: "Special", color: "#5F4B8B" },
// ];

// export default function StackedHorizontalBarChart({ data = [] }) {
//   const chartData = {
//     labels: data.map((item) => item.region),
//     datasets: CATEGORY_CONFIG.map((category) => ({
//       label: category.label,
//       data: data.map((item) => Number(item[category.key] ?? 0)),
//       backgroundColor: category.color,
//       borderWidth: 0,
//       stack: "regions",
//       barThickness: 26,
//     })),
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     indexAxis: "y",
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           boxWidth: 12,
//           boxHeight: 12,
//         },
//       },
//       tooltip: {
//         callbacks: {
//           title: (tooltipItems) => tooltipItems[0]?.label || "",
//           afterBody: (tooltipItems) => {
//             const itemIndex = tooltipItems[0]?.dataIndex;
//             const row = data[itemIndex];

//             if (!row) return [];

//             return [
//               `Avg enjoyment: ${row.enjoymentAvg?.toFixed(2) ?? "0.00"}`,
//               `Total tastings: ${row.total ?? 0}`,
//             ];
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//         beginAtZero: true,
//         grid: {
//           color: "#E5E7EB",
//         },
//         ticks: {
//           precision: 0,
//         },
//         title: {
//           display: true,
//           text: "Number of Tastings",
//         },
//       },
//       y: {
//         stacked: true,
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 12,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: "100%", height: "420px" }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function getItemLabel(item) {
  return item?.region || item?.label || "Unknown";
}

function StackedHorizontalBarChart({
  items = [],
  height = 320,
  showLegend = true,
  showEnjoymentInTooltip = true,
}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const labels = items.map(getItemLabel);

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Red",
            data: items.map((item) => ensureNumber(item.red)),
            backgroundColor: "#8B1E3F",
            borderWidth: 0,
          },
          {
            label: "White",
            data: items.map((item) => ensureNumber(item.white)),
            backgroundColor: "#D6B85A",
            borderWidth: 0,
          },
          {
            label: "Rosé",
            data: items.map((item) => ensureNumber(item.rose)),
            backgroundColor: "#E89AAE",
            borderWidth: 0,
          },
          {
            label: "Sparkling",
            data: items.map((item) => ensureNumber(item.sparkling)),
            backgroundColor: "#7DCFB6",
            borderWidth: 0,
          },
          {
            label: "Special",
            data: items.map((item) => ensureNumber(item.special)),
            backgroundColor: "#7C5CFF",
            borderWidth: 0,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
        },
        layout: {
          padding: {
            right: 12,
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 18,
              },
              maxRotation: 0,
              minRotation: 0,
              autoSkip: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              color: "#FFFFFF",
              precision: 0,
            },
            grid: {
              color: "rgba(255, 255, 255, 0.18)",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#FFFFFF",
            },
          },
          tooltip: {
            callbacks: {
              afterBody: (tooltipItems) => {
                if (!showEnjoymentInTooltip) return "";

                const itemIndex = tooltipItems?.[0]?.dataIndex;
                const item = items[itemIndex];
                if (!item) return "";

                return `Enjoyment Avg: ${ensureNumber(item.enjoymentAvg).toFixed(2)}`;
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [items, showLegend, showEnjoymentInTooltip]);

  return (
    <div style={{ width: "100%", height }}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default StackedHorizontalBarChart;