function IntroScreen({ title, side }) {
    return (
      <div className="intro-screen">
        <p>{side === "left" ? "Now showing" : "Companion view"}</p>
        <h1>{title}</h1>
      </div>
    );
  }
  
  export default IntroScreen;