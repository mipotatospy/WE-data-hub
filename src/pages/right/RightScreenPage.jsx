// import IntroScreen from "../../components/layout/IntroScreen.jsx";
// import FullScreenMessage from "../../components/layout/FullScreenMessage.jsx";
// import Screen1B from "./Screen1B.jsx";
// import Screen2B from "./Screen2B.jsx";

// import { useScreen1BData } from "../../hooks/useScreen1Data";
// import { useScreen2BData } from "../../hooks/useScreen2Data";

// function RightScreenTest({ presentation }) {
//   const {
//     phase,
//     currentGroupTitle,
//     nextGroupTitle,
//     currentCategory,
//     currentCategoryId,
//     currentCategoryLabel,
//     backgroundClass,
//     currentRightScreen,
//   } = presentation;

//   const {
//     screen1BData,
//     loading: loading1B,
//     error: error1B,
//   } = useScreen1BData(currentCategoryId);

//   const {
//     screen2BData,
//     loading: loading2B,
//     error: error2B,
//   } = useScreen2BData(currentCategoryId);

//   if (phase === "intro") {
//     return (
//       <div className={`test-screen intro-screen ${backgroundClass}`}>
//         <IntroScreen title={currentGroupTitle} side="right" />
//       </div>
//     );
//   }

//   if (phase === "content") {
//     if (currentRightScreen === "1B") {
//       if (loading1B) {
//         return (
//           <div className={`test-screen right-screen ${backgroundClass}`}>
//             <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
//           </div>
//         );
//       }

//       if (error1B) {
//         return (
//           <div className={`test-screen right-screen ${backgroundClass}`}>
//             <FullScreenMessage text={error1B} />
//           </div>
//         );
//       }

//       return (
//         <div className={`test-screen right-screen ${backgroundClass}`}>
//           <Screen1B
//             category={currentCategoryLabel}
//             categoryId={currentCategoryId}
//             data={screen1BData}
//           />
//         </div>
//       );
//     }

//     if (currentRightScreen === "2B") {
//       if (loading2B) {
//         return (
//           <div className={`test-screen right-screen ${backgroundClass}`}>
//             <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
//           </div>
//         );
//       }

//       if (error2B) {
//         return (
//           <div className={`test-screen right-screen ${backgroundClass}`}>
//             <FullScreenMessage text={error2B} />
//           </div>
//         );
//       }

//       return (
//         <div className={`test-screen right-screen ${backgroundClass}`}>
//           <Screen2B
//             categoryId={currentCategoryId}
//             categoryLabel={currentCategoryLabel}
//           />
//         </div>
//       );
//     }
//   }

//   return (
//     <div className={`test-screen transition-screen ${backgroundClass}`}>
//       <IntroScreen text={nextGroupTitle} />
//     </div>
//   );
// }

// export default RightScreenTest;


import IntroScreen from "../../components/layout/IntroScreen.jsx";
import FullScreenMessage from "../../components/layout/FullScreenMessage.jsx";
import Screen1B from "./Screen1B.jsx";
import Screen2B from "./Screen2B.jsx";

import { useScreen1BData } from "../../hooks/useScreen1Data";
import { useScreen2BData } from "../../hooks/useScreen2Data";

function RightScreenTest({ presentation }) {
  const {
    phase,
    currentGroupTitle,
    currentCategoryId,
    currentCategoryLabel,
    backgroundClass,
    currentRightScreen,
  } = presentation;

  const {
    screen1BData,
    loading: loading1B,
    error: error1B,
  } = useScreen1BData(currentCategoryId);

  const {
    screen2BData,
    loading: loading2B,
    error: error2B,
  } = useScreen2BData(currentCategoryId);

  if (phase === "intro") {
    return (
      <div className={`test-screen intro-screen ${backgroundClass}`}>
        <IntroScreen title={currentGroupTitle} side="right" />
      </div>
    );
  }

  if (phase === "content") {
    if (currentRightScreen === "1B") {
      if (loading1B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
          </div>
        );
      }

      if (error1B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={error1B} />
          </div>
        );
      }

      return (
        <div className={`test-screen right-screen ${backgroundClass}`}>
          <Screen1B
            category={currentCategoryLabel}
            categoryId={currentCategoryId}
            data={screen1BData}
          />
        </div>
      );
    }

    if (currentRightScreen === "2B") {
      if (loading2B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
          </div>
        );
      }

      if (error2B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={error2B} />
          </div>
        );
      }

      return (
        <div className={`test-screen right-screen ${backgroundClass}`}>
          <Screen2B
            categoryId={currentCategoryId}
            categoryLabel={currentCategoryLabel}
          />
        </div>
      );
    }
  }

  return (
    <div className={`test-screen transition-screen ${backgroundClass}`}>
      <IntroScreen title={currentGroupTitle} side="right" />
    </div>
  );
}

export default RightScreenTest;