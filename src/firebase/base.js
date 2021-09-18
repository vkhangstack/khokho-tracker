import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR KEY",
  projectId: "YOUR KEY",
  storageBucket: "YOUR URL",
  messagingSenderId: "YOUR KEY",
  appId: "YOUR APP ID",
  measurementId: "YOUR ID",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
