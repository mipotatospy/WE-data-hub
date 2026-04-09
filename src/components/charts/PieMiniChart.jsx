import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function PieMiniChart({
  correct = 0,
  wrong = 0,
  size = 140,
  cutout = "58%",
}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: ["Correct", "Wrong"],
        datasets: [
          {
            data: [ensureNumber(correct), ensureNumber(wrong)],
            backgroundColor: ["#3B82F6", "#E5E7EB"],
            borderColor: ["#3B82F6", "#E5E7EB"],
            borderWidth: 1,
            hoverOffset: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout,
        animation: {
          duration: 500,
        },
        plugins: {
          legend: {
            display: false,
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
  }, [correct, wrong, cutout]);

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

export default PieMiniChart;