import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase.js";

let authPromise = null;

function waitForUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        unsubscribe();

        if (!user) {
          reject(new Error("Authentication completed but no user is available."));
          return;
        }

        try {
          await user.getIdToken(true);
          resolve(user);
        } catch (error) {
          reject(error);
        }
      },
      reject
    );
  });
}

export async function ensureKioskAuth() {
  if (auth.currentUser) {
    await auth.currentUser.getIdToken(true);
    return auth.currentUser;
  }

  if (!authPromise) {
    authPromise = signInAnonymously(auth)
      .then(() => waitForUser())
      .catch((error) => {
        authPromise = null;
        throw error;
      });
  }

  return authPromise;
}