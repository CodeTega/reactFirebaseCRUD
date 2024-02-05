import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // Your web app's Firebase configuration
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();