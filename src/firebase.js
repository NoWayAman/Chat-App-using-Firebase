import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANPR0uRv0gd1i8jj14TaNdBInvItBh-38",
  authDomain: "chat-6a494.firebaseapp.com",
  projectId: "chat-6a494",
  storageBucket: "chat-6a494.appspot.com",
  messagingSenderId: "812998653405",
  appId: "1:812998653405:web:5240f2616d171503d67234",
  measurementId: "G-QLHCZ23GD9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();