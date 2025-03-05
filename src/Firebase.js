// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQDcpAOpQlsQJOierNCq9ZvQ4u1MMxxes",
  authDomain: "ezcode-119ec.firebaseapp.com",
  projectId: "ezcode-119ec",
  storageBucket: "ezcode-119ec.firebasestorage.app",
  messagingSenderId: "900524746016",
  appId: "1:900524746016:web:472fedb6fd015134b62345",
  measurementId: "G-G5ZNS23RF8"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);