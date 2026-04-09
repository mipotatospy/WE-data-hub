import { useEffect, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../Firebase";

export function useKioskAuth() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let unsub = () => {};

    async function start() {
      try {
        unsub = onAuthStateChanged(auth, async (firebaseUser) => {
          if (firebaseUser) {
            setUser(firebaseUser);
            setReady(true);
            return;
          }

          try {
            const cred = await signInAnonymously(auth);
            setUser(cred.user);
            setReady(true);
          } catch (err) {
            console.error("Anonymous sign-in failed:", err);
            setError(err.message || "Authentication failed");
            setReady(false);
          }
        });
      } catch (err) {
        console.error("Auth listener failed:", err);
        setError(err.message || "Auth setup failed");
        setReady(false);
      }
    }

    start();

    return () => unsub();
  }, []);

  return { ready, user, error };
}