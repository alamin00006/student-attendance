// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFL_6H01qrPnJWRPh8Rso9PJ-dgzTxjwE",
  authDomain: "student-attendance-a8717.firebaseapp.com",
  projectId: "student-attendance-a8717",
  storageBucket: "student-attendance-a8717.appspot.com",
  messagingSenderId: "189371455913",
  appId: "1:189371455913:web:d1a1c920b4defe4c684cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;