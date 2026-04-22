import { httpsCallable } from "firebase/functions";
import { functions, auth } from "../Firebase.js";
import { ensureKioskAuth } from "./ensureKioskAuth.js";

export async function requestPresentationRefresh() {
  const user = await ensureKioskAuth();
  const token = await user.getIdToken();

  console.log("Callable auth user:", user?.uid);
  console.log("Callable token present:", Boolean(token));

  const callable = httpsCallable(functions, "requestPresentationRefresh");
  const result = await callable();

  return result.data;
}