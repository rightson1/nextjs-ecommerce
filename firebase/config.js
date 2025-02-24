import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBgGd1v4yepj3DE6CafPe21Ti7FEUV5NXM",
  authDomain: "auth-5a08c.firebaseapp.com",
  projectId: "auth-5a08c",
  storageBucket: "auth-5a08c.firebasestorage.app",
  messagingSenderId: "306688409691",
  appId: "1:306688409691:web:77e8ed88a1bb066e45ff7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
