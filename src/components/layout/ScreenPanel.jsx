export default function ScreenPanel({
    children,
    className = "",
    title,
    subtitle,
  }) {
    return (
      <section className={`screen-panel ${className}`.trim()}>
        {(title || subtitle) && (
          <div className="screen-panel-header">
            {title && <h2 className="screen-panel-title">{title}</h2>}
            {subtitle && <p className="screen-panel-subtitle">{subtitle}</p>}
          </div>
        )}
  
        <div className="screen-panel-content">{children}</div>
      </section>
    );
  }