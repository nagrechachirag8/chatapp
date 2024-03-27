// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore' 

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz2sQjtyyZ_I95PDhME1CxLUEidqFQYsQ",
  authDomain: "chatapp-b0c0d.firebaseapp.com",
  projectId: "chatapp-b0c0d",
  storageBucket: "chatapp-b0c0d.appspot.com",
  messagingSenderId: "1054859363641",
  appId: "1:1054859363641:web:3b2b58149a876c0a8194e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);