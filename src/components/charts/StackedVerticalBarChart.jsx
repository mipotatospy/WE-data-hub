import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function StackedVerticalBarChart({ data = [], height = 380 }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labels = data.map((item) => item.label);
    const correctData = data.map((item) => ensureNumber(item.correct));
    const wrongData = data.map((item) => ensureNumber(item.wrong));

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Correct",
            data: correctData,
            backgroundColor: "#3B82F6",
            borderColor: "#3B82F6",
            borderWidth: 1,
            borderRadius: 6,
          },
          {
            label: "Wrong",
            data: wrongData,
            backgroundColor: "#E5E7EB",
            borderColor: "#E5E7EB",
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
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
                size: 20,
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