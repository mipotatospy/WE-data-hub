import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

export default function LineChart({
  items = [],
  height = 340,
  color = "#8ECAE6",
  title = "Enjoyment vs Price",
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

    const safeItems = Array.isArray(items) ? items : [];

    const labels = safeItems.map((item) => item?.label || item?.priceRange || "Unknown");
    const values = safeItems.map((item) =>
      ensureNumber(item?.value ?? item?.enjoymentAvg)
    );

    const maxValue = Math.max(...values, 0);
    const yMax = maxValue <= 0 ? 1 : Math.ceil((maxValue + 0.5) * 10) / 10;

    chartRef.current = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Average Enjoyment",
            data: values,
            borderColor: color,
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) return color;
              
                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, "rgba(142, 202, 230, 0.4)");
                gradient.addColorStop(1, "rgba(142, 202, 230, 0)");
              
                return gradient;
              },
            tension: 0.35,
            pointRadius: 5,
            pointHoverRadius: 7,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 600,
        },
        scales: {
          x: {
            ticks: {
              color: "#FFFFFF",
              font: { size: 13 },
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            min: 0,
            max: yMax,
            ticks: {
              color: "#FFFFFF",
              font: { size: 13 },
            },
            grid: {
              color: "rgba(255,255,255,0.18)",
            },
            title: {
              display: true,
              text: "Enjoyment Score",
              color: "#FFFFFF",
              font: {
                size: 14,
                weight: "600",
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: !!title,
            text: title,
            color: "#FFFFFF",
            font: {
              size: 16,
              weight: "600",
            },
            padding: {
              bottom: 10,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = ensureNumber(context.parsed.y).toFixed(2);
                return `Enjoyment: ${value}`;
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
  }, [items, color, title]);

  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}