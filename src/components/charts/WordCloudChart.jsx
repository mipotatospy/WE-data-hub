import "./WordCloudChart.css";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getFontSize(value, minValue, maxValue, minFont = 18, maxFont = 64) {
  if (minValue === maxValue) return (minFont + maxFont) / 2;

  const normalized = (value - minValue) / (maxValue - minValue);
  return minFont + normalized * (maxFont - minFont);
}

export default function WordCloudChart({
  words = [],
  title = "Descriptor Cloud",
  maxWords = 25,
}) {
  const safeWords = Array.isArray(words) ? words : [];

  const sortedWords = [...safeWords]
    .filter((item) => item?.text && typeof item?.value === "number")
    .sort((a, b) => b.value - a.value)
    .slice(0, maxWords);

  if (!sortedWords.length) {
    return (
      <div className="wordcloud-card">
        <div className="wordcloud-header">
          <h3>{title}</h3>
        </div>
        <div className="wordcloud-empty">No descriptor data available</div>
      </div>
    );
  }

  const values = sortedWords.map((item) => item.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  return (
    <div className="wordcloud-card">
      <div className="wordcloud-header">
        <h3>{title}</h3>
      </div>

      <div className="wordcloud-wrapper">
        {sortedWords.map((word, index) => {
          const fontSize = getFontSize(word.value, minValue, maxValue);
          const rotation = index % 5 === 0 ? -8 : index % 4 === 0 ? 8 : 0;
          const opacity = clamp(0.55 + word.value / (maxValue || 1) * 0.45, 0.55, 1);

          return (
            <span
              key={`${word.text}-${index}`}
              className="wordcloud-word"
              style={{
                fontSize: `${fontSize}px`,
                transform: `rotate(${rotation}deg)`,
                opacity,
              }}
              title={`${word.text}: ${word.value}`}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}