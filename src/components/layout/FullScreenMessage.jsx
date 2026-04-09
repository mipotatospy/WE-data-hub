function FullScreenMessage({ text, index }) {
    return (
      <div className="fullscreen-message">
        <p>{text}</p>
        <p>{index}</p>
      </div>
    );
  }
  
  export default FullScreenMessage;