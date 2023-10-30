import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: process.env.VITE_API_API_KEY,
  authDomain: process.env.VITE_API_AUTH_DOMAIN,
  projectId: process.env.VITE_API_PROJECT_ID,
  storageBucket: process.env.VITE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_APP_ID,
  measurementId: process.env.VITE_API_MEASUREMENT_ID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
