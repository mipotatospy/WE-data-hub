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
//       <IntroScreen title={currentGroupTitle} side="right" />
//     </div>
//   );
// }

// export default RightScreenTest;

import IntroScreen from "../../components/layout/IntroScreen.jsx";
import FullScreenMessage from "../../components/layout/FullScreenMessage.jsx";
import Screen1B from "./Screen1B.jsx";
import Screen2B from "./Screen2B.jsx";
import Screen3B from "./Screen3B.jsx";
import Screen4B from "./Screen4B.jsx";

import { useScreen1BData } from "../../hooks/useScreen1Data";
import { useScreen2BData } from "../../hooks/useScreen2Data";
import { useScreen3BData } from "../../hooks/useScreen3Data";
import { useScreen4BData } from "../../hooks/useScreen4Data";

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

  const {
    screen3BData,
    loading: loading3B,
    error: error3B,
  } = useScreen3BData(currentCategoryId);

  const {
    screen4BData,
    loading: loading4B,
    error: error4B,
  } = useScreen4BData(currentCategoryId);

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
            data={screen2BData}
          />
        </div>
      );
    }

    if (currentRightScreen === "3B") {
      if (loading3B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
          </div>
        );
      }

      if (error3B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={error3B} />
          </div>
        );
      }

      return (
        <div className={`test-screen right-screen ${backgroundClass}`}>
          <Screen3B
            categoryId={currentCategoryId}
            categoryLabel={currentCategoryLabel}
            data={screen3BData}
          />
        </div>
      );
    }

    if (currentRightScreen === "4B") {
      if (loading4B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={`Loading ${currentCategoryLabel}...`} />
          </div>
        );
      }

      if (error4B) {
        return (
          <div className={`test-screen right-screen ${backgroundClass}`}>
            <FullScreenMessage text={error4B} />
          </div>
        );
      }

      return (
        <div className={`test-screen right-screen ${backgroundClass}`}>
          <Screen4B
            categoryId={currentCategoryId}
            categoryLabel={currentCategoryLabel}
            data={screen4BData}
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