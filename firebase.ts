import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWhlMLow8Fitm1Cp-OJjJISAs1ApRV2Ec",
  authDomain: "botify-3fda1.firebaseapp.com",
  projectId: "botify-3fda1",
  storageBucket: "botify-3fda1.appspot.com",
  messagingSenderId: "631908932540",
  appId: "1:631908932540:web:297a2e456e431681e4e9b9",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
