// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDvmBRpUfxayQ1yrq9433K2vuxWqDjS-dQ",
  authDomain: "netflix-clone-519ac.firebaseapp.com",
  projectId: "netflix-clone-519ac",
  storageBucket: "netflix-clone-519ac.appspot.com",
  messagingSenderId: "388587120775",
  appId: "1:388587120775:web:2699ff9af4be34a177f022",
  measurementId: "G-4XRSZ8JY35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)