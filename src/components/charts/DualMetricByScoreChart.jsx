import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function normalizeItems(items = []) {
  const map = new Map();

  for (const item of Array.isArray(items) ? items : []) {
    const score = Number(item?.score ?? item?.label);
    if (!Number.isFinite(score)) continue;

    map.set(score, {
      score,
      label: String(score),
      structureAvg: ensureNumber(item?.structureAvg ?? item?.structure),
      drinkabilityAvg: ensureNumber(item?.drinkabilityAvg ?? item?.drinkability),
      count: ensureNumber(item?.count),
    });
  }

  return Array.from({ length: 7 }, (_, index) => {
    const score = index + 1;
    return (
      map.get(score) || {
        score,
        label: String(score),
        structureAvg: 0,
        drinkabilityAvg: 0,
        count: 0,
      }
    );
  });
}

export default function DualMetricByScoreChart({
  items = [],
  height = 340,
  structureColor = "#D6B85A",
  drinkabilityColor = "#8ECAE6",
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

    const normalized = normalizeItems(items);

    const labels = normalized.map((item) => item.label);
    const structureValues = normalized.map((item) => item.structureAvg);
    const drinkabilityValues = normalized.map((item) => item.drinkabilityAvg);

    const allValues = [...structureValues, ...drinkabilityValues];
    const maxValue = Math.max(...allValues, 0);
    const yMax = maxValue <= 0 ? 1 : Math.ceil((maxValue + 0.2) * 10) / 10;

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Structure",
            data: structureValues,
            backgroundColor: structureColor,
            borderColor: structureColor,
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 20,
          },
          {
            label: "Drinkability",
            data: drinkabilityValues,
            backgroundColor: drinkabilityColor,
            borderColor: drinkabilityColor,
            borderWidth: 1,
            borderRadius: 6,
            barThickness: 20,
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
            title: {
              display: true,
              text: "Enjoyment Score",
              color: "#FFFFFF",
              font: {
                size: 14,
                weight: "600",
              },
            },
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 13,
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
            min: 0,
            max: yMax,
            ticks: {
              color: "#FFFFFF",
              font: {
                size: 13,
              },
            },
            grid: {
              color: "rgba(255,255,255,0.18)",
            },
            title: {
              display: true,
              text: "Average Score",
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
            display: true,
            labels: {
              color: "#FFFFFF",
              font: {
                size: 13,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const row = normalized[context.dataIndex];
                const value = ensureNumber(context.parsed.y).toFixed(2);
                return [
                  `${context.dataset.label}: ${value}`,
                  `Submissions: ${ensureNumber(row?.count)}`,
                ];
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
  }, [items, structureColor, drinkabilityColor]);

  const hasData = Array.isArray(items) && items.some(
    (item) =>
      ensureNumber(item?.structureAvg ?? item?.structure) > 0 ||
      ensureNumber(item?.drinkabilityAvg ?? item?.drinkability) > 0
  );

  if (!hasData) {
    return (
      <div
        style={{
          width: "100%",
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          opacity: 0.8,
          textAlign: "center",
          padding: "1rem",
        }}
      >
        No structure/drinkability data available
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}