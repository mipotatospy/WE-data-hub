// import { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// function ensureNumber(value) {
//   return typeof value === "number" && !Number.isNaN(value) ? value : 0;
// }

// function StackedVerticalBarChart({ data = [], height = 380 }) {
//   const canvasRef = useRef(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     const labels = data.map((item) => item.label);
//     const correctData = data.map((item) => ensureNumber(item.correct));
//     const wrongData = data.map((item) => ensureNumber(item.wrong));

//     chartRef.current = new Chart(canvas, {
//       type: "bar",
//       data: {
//         labels,
//         datasets: [
//           {
//             label: "Correct",
//             data: correctData,
//             backgroundColor: "#3B82F6",
//             borderColor: "#3B82F6",
//             borderWidth: 1,
//             borderRadius: 6,
//           },
//           {
//             label: "Wrong",
//             data: wrongData,
//             backgroundColor: "#E5E7EB",
//             borderColor: "#E5E7EB",
//             borderWidth: 1,
//             borderRadius: 6,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         animation: {
//           duration: 500,
//         },
//         layout: {
//           padding: {
//             bottom: 10,
//           },
//         },
//         scales: {
//           x: {
//             stacked: true,
//             ticks: {
//               color: "#FFFFFF",
//               font: {
//                 size: 20,
//               },
//               maxRotation: 0,
//               minRotation: 0,
//               autoSkip: false,
//             },
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             stacked: true,
//             beginAtZero: true,
//             ticks: {
//               color: "#FFFFFF",
//               precision: 0,
//             },
//             grid: {
//               color: "rgba(255, 255, 255, 0.18)",
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             display: true,
//             position: "top",
//             labels: {
//               color: "#FFFFFF",
//             },
//           },
//           tooltip: {
//             enabled: true,
//           },
//         },
//       },
//     });

//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//         chartRef.current = null;
//       }
//     };
//   }, [data]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height,
//         position: "relative",
//       }}
//     >
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default StackedVerticalBarChart;

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

const DEFAULT_COLORS = [
  "#3B82F6",
  "#D6B85A",
  "#8ECAE6",
  "#E76F51",
  "#90BE6D",
  "#C77DFF",
  "#F4A261",
  "#E5E7EB",
];

function buildDatasets(data) {
  if (!Array.isArray(data) || !data.length) return [];

  // Legacy mode: correct/wrong structure
  const hasLegacyShape = data.some(
    (item) => "correct" in item || "wrong" in item
  );

  if (hasLegacyShape) {
    return [
      {
        label: "Correct",
        data: data.map((item) => ensureNumber(item.correct)),
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        borderWidth: 1,
        borderRadius: 6,
      },
      {
        label: "Wrong",
        data: data.map((item) => ensureNumber(item.wrong)),
        backgroundColor: "#E5E7EB",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        borderRadius: 6,
      },
    ];
  }

  // Generic multi-segment mode
  const segmentLabels = Array.from(
    new Set(
      data.flatMap((item) =>
        Array.isArray(item.segments)
          ? item.segments.map((segment) => segment.label)
          : []
      )
    )
  );

  return segmentLabels.map((segmentLabel, index) => ({
    label: segmentLabel,
    data: data.map((item) => {
      const segment = Array.isArray(item.segments)
        ? item.segments.find((entry) => entry.label === segmentLabel)
        : null;

      return ensureNumber(segment?.value);
    }),
    backgroundColor: DEFAULT_COLORS[index % DEFAULT_COLORS.length],
    borderColor: DEFAULT_COLORS[index % DEFAULT_COLORS.length],
    borderWidth: 1,
    borderRadius: 6,
  }));
}

function StackedVerticalBarChart({ data = [], height = 380 }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const safeData = Array.isArray(data) ? data : [];
    const labels = safeData.map((item) => item.label);
    const datasets = buildDatasets(safeData);

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
        },
        layout: {
          padding: {
            bottom: 10,
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 25,
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
            enabled: true,
            callbacks: {
              label: (context) => {
                const value = ensureNumber(context.parsed.y);
                return `${context.dataset.label}: ${value}`;
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
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height,
        position: "relative",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

export default StackedVerticalBarChart;