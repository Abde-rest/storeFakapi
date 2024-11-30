// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1BFnzfjfTYVXj0RT_xP6fZX4Pf7jsk8c",
  authDomain: "e-commerc-with-next-js.firebaseapp.com",
  projectId: "e-commerc-with-next-js",
  storageBucket: "e-commerc-with-next-js.firebasestorage.app",
  messagingSenderId: "18411748307",
  appId: "1:18411748307:web:0e9eca61e6bec3f63c8d26",
  measurementId: "G-K9RPH42R8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
