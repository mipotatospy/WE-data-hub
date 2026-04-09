// import IntroScreen from "../../components/layout/IntroScreen.jsx";
// import FullScreenMessage from "../../components/layout/FullScreenMessage.jsx";
// import Screen1A from "./Screen1A.jsx";
// import Screen2A from "./Screen2A.jsx";
// import Screen3A from "./Screen3A.jsx";

// function LeftScreenTest({ presentation }) {
//   const {
//     phase,
//     currentGroupTitle,
//     nextGroupTitle,
//     backgroundClass,
//     currentLeftScreen,
//   } = presentation;

//   if (phase === "intro") {
//     return (
//       <div className={`test-screen intro-screen ${backgroundClass}`}>
//         <IntroScreen title={currentGroupTitle} side="left" />
//       </div>
//     );
//   }

//   if (phase === "content") {
//     return (
//       <div className={`test-screen left-screen ${backgroundClass}`}>
//         {currentLeftScreen === "1A" && <Screen1A />}
//         {currentLeftScreen === "2A" && <Screen2A />}
//         {currentLeftScreen === "3A" && <Screen3A />}
//       </div>
//     );
//   }

//   return (
//     <div className={`test-screen transition-screen ${backgroundClass}`}>
//       <IntroScreen text={nextGroupTitle} />
//     </div>
//   );
// }

// export default LeftScreenTest;


import IntroScreen from "../../components/layout/IntroScreen.jsx";
import Screen1A from "./Screen1A.jsx";
import Screen2A from "./Screen2A.jsx";
import Screen3A from "./Screen3A.jsx";

function LeftScreenTest({ presentation }) {
  const {
    phase,
    currentGroupTitle,
    backgroundClass,
    currentLeftScreen,
  } = presentation;

  if (phase === "intro") {
    return (
      <div className={`test-screen intro-screen ${backgroundClass}`}>
        <IntroScreen title={currentGroupTitle} side="left" />
      </div>
    );
  }

  if (phase === "content") {
    return (
      <div className={`test-screen left-screen ${backgroundClass}`}>
        {currentLeftScreen === "1A" && <Screen1A />}
        {currentLeftScreen === "2A" && <Screen2A />}
        {currentLeftScreen === "3A" && <Screen3A />}
      </div>
    );
  }

  return (
    <div className={`test-screen transition-screen ${backgroundClass}`}>
      <IntroScreen title={currentGroupTitle} side="left" />
    </div>
  );
}

export default LeftScreenTest;