export default function InsightText({ children, className = "" }) {
    if (!children) return null;
  
    return <p className={`insight-text ${className}`.trim()}>{children}</p>;
  }