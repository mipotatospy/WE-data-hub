function ScreenHeader({ title, sideLabel, groupIndex, totalGroups }) {
    return (
      <header className="screen-header">
        <p>{sideLabel}</p>
        <h1>{title}</h1>
        <p>
          Screen set {groupIndex + 1} / {totalGroups}
        </p>
      </header>
    );
  }
  
  export default ScreenHeader;