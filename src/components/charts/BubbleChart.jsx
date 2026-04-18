import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PRICE_BUCKET_ORDER = [
  "Entry Level",
  "Mid-Range",
  "Premium",
  "Super Premium",
  "Luxury",
];

function ensureNumber(value) {
  return typeof value === "number" && !Number.isNaN(value) ? value : 0;
}

function getPriceIndex(priceRange) {
  const index = PRICE_BUCKET_ORDER.indexOf(priceRange);
  return index >= 0 ? index + 1 : 0;
}

function getBubbleRadius(tastingsCount) {
  const count = ensureNumber(tastingsCount);
  if (count <= 0) return 6;
  return Math.max(6, Math.min(26, Math.sqrt(count) * 3));
}

export default function BubbleChart({
  items = [],
  height = 340,
  color = "rgba(214, 184, 90, 0.65)",
  borderColor = "rgba(214, 184, 90, 1)",
  title = "Price vs Enjoyment",
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

    const dataPoints = safeItems
      .map((item, index) => {
        const x = getPriceIndex(item?.priceRange);
        const y = ensureNumber(item?.enjoymentAvg ?? item?.value);
        const r = getBubbleRadius(item?.tastingsCount);

        return {
          x,
          y,
          r,
          label: item?.label || `Wine ${index + 1}`,
          priceRange: item?.priceRange || "Unknown",
          tastingsCount: ensureNumber(item?.tastingsCount),
          category: item?.category || "",
          wineId: item?.wineId || null,
        };
      })
      .filter((point) => point.x > 0);

    const maxY = Math.max(...dataPoints.map((point) => point.y), 0);
    const yMax = maxY <= 0 ? 1 : Math.ceil((maxY + 0.5) * 10) / 10;

    chartRef.current = new Chart(canvas, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Wines",
            data: dataPoints,
            backgroundColor: color,
            borderColor,
            borderWidth: 1.5,
            hoverBorderWidth: 2,
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
            min: 0.5,
            max: PRICE_BUCKET_ORDER.length + 0.5,
            ticks: {
              stepSize: 1,
              color: "#FFFFFF",
              font: {
                size: 13,
              },
              callback: function (value) {
                const index = Number(value) - 1;
                return PRICE_BUCKET_ORDER[index] || "";
              },
            },
            grid: {
              color: "rgba(255,255,255,0.10)",
            },
            title: {
              display: true,
              text: "Price Range",
              color: "#FFFFFF",
              font: {
                size: 14,
                weight: "600",
              },
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
              text: "Average Enjoyment",
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
              title: (tooltipItems) => {
                const point = tooltipItems?.[0]?.raw;
                return point?.label || "Wine";
              },
              label: (context) => {
                const point = context.raw;
                return [
                  `Price: ${point?.priceRange || "Unknown"}`,
                  `Enjoyment: ${ensureNumber(point?.y).toFixed(2)}`,
                  `Tastings: ${ensureNumber(point?.tastingsCount)}`,
                  point?.category ? `Category: ${point.category}` : null,
                ].filter(Boolean);
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
  }, [items, color, borderColor, title]);

  return (
    <div style={{ width: "100%", height, position: "relative" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}