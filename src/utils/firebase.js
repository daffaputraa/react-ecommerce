// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFireStore } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe7w8ZsCvPm3qy0ECf3Tuwx7NDizx8-XM",
  authDomain: "auth-6fbf2.firebaseapp.com",
  projectId: "auth-6fbf2",
  storageBucket: "auth-6fbf2.appspot.com",
  messagingSenderId: "1075664638754",
  appId: "1:1075664638754:web:463e3a4632e7559385cb7b",
  measurementId: "G-C9YR9MQ20Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
