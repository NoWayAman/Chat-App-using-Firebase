import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQMZUJuLTiVkPdDbHC0GiWlpYTrRBTcCQ",
  authDomain: "chat-1d5bc.firebaseapp.com",
  projectId: "chat-1d5bc",
  storageBucket: "chat-1d5bc.appspot.com",
  messagingSenderId: "268119559531",
  appId: "1:268119559531:web:b820a975922aefdfb6d02e",
  measurementId: "G-V8NRPLPD2Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();