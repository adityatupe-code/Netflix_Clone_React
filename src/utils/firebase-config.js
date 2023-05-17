// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDH-TO8Jkh6lvToRYLeklfFnHoWpFFNM0Y",
  authDomain: "netflix-clone-fcf87.firebaseapp.com",
  projectId: "netflix-clone-fcf87",
  storageBucket: "netflix-clone-fcf87.appspot.com",
  messagingSenderId: "36477528666",
  appId: "1:36477528666:web:a1b713b6308a0c7212c663",
  measurementId: "G-4WSQLB7YH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)