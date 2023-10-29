// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJF9SYN90bYnxYkEHG4GYIoijSKQ_Wl2I",
  authDomain: "global-tongues.firebaseapp.com",
  projectId: "global-tongues",
  storageBucket: "global-tongues.appspot.com",
  messagingSenderId: "799589064117",
  appId: "1:799589064117:web:00a6fdd78a0f971f4fcdfc",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
