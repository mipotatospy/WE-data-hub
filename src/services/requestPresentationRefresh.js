// src/services/requestPresentationRefresh.js
import { httpsCallable } from "firebase/functions";
import { functions } from "../Firebase.js"; // adjust path if needed

export async function requestPresentationRefresh() {
  const callable = httpsCallable(functions, "requestPresentationRefresh");
  const result = await callable();
  return result.data;
}