import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj-edYtTL92bcrEkZ3ui2Qov98mUnIZ9k",
  authDomain: "accton-test.firebaseapp.com",
  projectId: "accton-test",
  storageBucket: "accton-test.appspot.com",
  messagingSenderId: "292451380956",
  appId: "1:292451380956:web:9013ff5792351b74f50e19",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, doc, setDoc, addDoc, query, where };
