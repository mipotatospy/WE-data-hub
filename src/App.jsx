// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import LeftScreenPage from "./pages/left/LeftScreenPage";
// import RightScreenPage from "./pages/right/RightScreenPage";
// import FullScreenMessage from "./components/FullScreenMessage";
// import { useDashboardData } from "./services/hooks/useDashboardData";
// import { useScreenRotation } from "./services/hooks/useScreenRotation";

// function App() {
//   const location = useLocation();
//   const isRightScreen = location.pathname === "/right";

//   const {
//     ready,
//     error,
//     wineResults,
//     leaderboards,
//     regions,
//     grapes,
//     prices,
//   } = useDashboardData();

//   const {
//     showIntro,
//     currentGroup,
//     screenGroupIndex,
//     totalGroups,
//   } = useScreenRotation(ready, isRightScreen);

//   if (error) return <FullScreenMessage text={`Error: ${error}`} />;
//   if (!ready) return <FullScreenMessage text="Loading dashboard…" />;

//   const sharedProps = {
//     wineResults,
//     leaderboards,
//     regions,
//     grapes,
//     prices,
//     showIntro,
//     currentGroup,
//     screenGroupIndex,
//     totalGroups,
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<LeftScreenPage {...sharedProps} />} />
//       <Route path="/right" element={<RightScreenPage {...sharedProps} />} />
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

// export default App;

import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LeftScreenTest from "./pages/left/LeftScreenPage.jsx";
import RightScreenTest from "./pages/right/RightScreenPage.jsx";
import { usePresentationFlow } from "./hooks/usePresentationFlow.js";
import { seedMockData } from "./seedMockData.js";

function App() {
  const location = useLocation();
  const isRightScreen = location.pathname === "/right";
  const presentation = usePresentationFlow(isRightScreen);

  useEffect(() => {
    if (isRightScreen) return;

    const alreadyOpened = sessionStorage.getItem("rightScreenOpened");
    if (alreadyOpened) return;

    const newWindow = window.open(
      "/right",
      "datahub-right-screen",
      "width=1000,height=700"
    );

    if (newWindow) {
      sessionStorage.setItem("rightScreenOpened", "true");
    } else {
      console.warn("Popup blocked. Open /right manually.");
    }

    // localStorage.removeItem(STORAGE_KEYS.phase);
    // localStorage.removeItem(STORAGE_KEYS.categoryIndex);


    seedMockData()
    .then((count) => console.log(`Seeded ${count} new docs`))
    .catch((err) => console.error("Seed failed:", err));
  }, [isRightScreen]);

  return (
    <Routes>
      <Route path="/" element={<LeftScreenTest presentation={presentation} />} />
      <Route
        path="/right"
        element={<RightScreenTest presentation={presentation} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;