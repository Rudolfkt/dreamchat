import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdrvpAq1iFak--hJ-_IENrLlwOt4IQaVg",
  authDomain: "dreamchat-6b8f2.firebaseapp.com",
  projectId: "dreamchat-6b8f2",
  storageBucket: "dreamchat-6b8f2.appspot.com",
  messagingSenderId: "846461310426",
  appId: "1:846461310426:web:2509a26c3e625d8f6e5ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
