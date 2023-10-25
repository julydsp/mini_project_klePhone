import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE-AY6LZ1q6nbI43GNApefvrk-glcYGD8",
  authDomain: "dashboard-admin-klpehone.firebaseapp.com",
  projectId: "dashboard-admin-klpehone",
  storageBucket: "dashboard-admin-klpehone.appspot.com",
  messagingSenderId: "565853657678",
  appId: "1:565853657678:web:67c3cb01bed62eeb7f811f",
  measurementId: "G-JBVLZW9HVB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
