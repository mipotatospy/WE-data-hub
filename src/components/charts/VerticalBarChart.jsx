import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function VerticalBarChart({ items = [], height = 340, color = "#D6B85A" }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const labels = items.map((item) => item?.label || "Unknown");
    const values = items.map((item) => ensureNumber(item?.value));

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Balance",
            data: values,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            borderRadius: 8,
            barThickness: 52,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
        },
        scales: {
          x: {
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 19,
              },
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 18,
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.18)",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const item = items[context.dataIndex];
                const score = ensureNumber(item?.value).toFixed(2);
                const tastings = ensureNumber(item?.tastingsCount);
                return [`Score: ${score}`, `Tastings: ${tastings}`];
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
  }, [items, color]);

  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default VerticalBarChart;