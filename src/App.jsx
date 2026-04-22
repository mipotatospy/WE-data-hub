import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LeftScreenTest from "./pages/left/LeftScreenPage.jsx";
import RightScreenTest from "./pages/right/RightScreenPage.jsx";
import { usePresentationFlow } from "./hooks/usePresentationFlow.js";
import { ensureKioskAuth } from "./services/ensureKioskAuth.js";
// import { seedMockData } from "./seedMockData.js";

function App() {
  const location = useLocation();
  const isRightScreen = location.pathname === "/right";

  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function initAuth() {
      try {
        const user = await ensureKioskAuth();
        console.log("Anonymous auth ready:", user?.uid);

        if (!cancelled) {
          setAuthReady(true);
        }
      } catch (error) {
        console.error("Anonymous auth failed:", error);

        if (!cancelled) {
          setAuthError(error);
        }
      }
    }

    initAuth();

    return () => {
      cancelled = true;
    };
  }, []);

  const presentation = usePresentationFlow(isRightScreen, authReady);

  useEffect(() => {
    if (!authReady) return;
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

    // seedMockData()
    //   .then((count) => console.log(`Seeded ${count} new docs`))
    //   .catch((err) => console.error("Seed failed:", err));
  }, [authReady, isRightScreen]);

  if (authError) {
    return (
      <div style={{ padding: "24px", color: "white", background: "#111" }}>
        <h2>Authentication failed</h2>
        <pre>{String(authError?.message || authError)}</pre>
      </div>
    );
  }

  if (!authReady) {
    return (
      <div style={{ padding: "24px", color: "white", background: "#111" }}>
        Initializing kiosk authentication...
      </div>
    );
  }

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