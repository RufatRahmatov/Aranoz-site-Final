import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getRemoteConfig } from "firebase/remote-config";
import { getFunctions } from "firebase/functions";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDP1DnWad5-17Dxp2P0PNarUDRHu9tFo7A",
  authDomain: "next-auth-5d58f.firebaseapp.com",
  projectId: "next-auth-5d58f",
  storageBucket: "next-auth-5d58f.appspot.com",
  messagingSenderId: "884996206960",
  appId: "1:884996206960:web:37db2558c695b05b455fb5",
  measurementId: "G-PMKM69C6YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
export const remoteConfig = getRemoteConfig(app);
export const functions = getFunctions(app);
export const performance = getPerformance(app);
