// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth
import { getAuth } from "firebase/auth";
// db
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7N0S32dLeagZn9Dgki9s7OmxVM6L770",
  authDomain: "trustar-website.firebaseapp.com",
  projectId: "trustar-website",
  storageBucket: "trustar-website.firebasestorage.app",
  messagingSenderId: "11730769198",
  appId: "1:11730769198:web:812b0442f2700d7e5c56bf",
  measurementId: "G-ERWXZ8VGQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


// export all firebase services


