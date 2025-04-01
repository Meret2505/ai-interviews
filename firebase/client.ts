// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTm68gnBauccaUFzKvD2A_2f1NPxPyriA",
  authDomain: "prepwise-eaf4c.firebaseapp.com",
  projectId: "prepwise-eaf4c",
  storageBucket: "prepwise-eaf4c.firebasestorage.app",
  messagingSenderId: "980177979492",
  appId: "1:980177979492:web:93ab2d798bd5ac6e607771",
  measurementId: "G-NMC3XTN8EF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

export const db = getFirestore(app);
