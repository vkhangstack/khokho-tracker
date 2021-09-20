import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqV783EmpOYBWCOZvxsIC0j3O6tLYHFQ",
  authDomain: "khokho-tracker-1809.firebaseapp.com",
  projectId: "khokho-tracker-1809",
  storageBucket: "khokho-tracker-1809.appspot.com",
  messagingSenderId: "1036883845096",
  appId: "1:1036883845096:web:88294c537a0484ff984e5d",
  measurementId: "G-60SD6JQSB8",
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
