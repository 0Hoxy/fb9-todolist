import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGtsiV60f5_8sWs9IFWxgWGh1wDVvBBR0",
  authDomain: "todolist-fd4fd.firebaseapp.com",
  projectId: "todolist-fd4fd",
  storageBucket: "todolist-fd4fd.appspot.com",
  messagingSenderId: "75086019611",
  appId: "1:75086019611:web:fa1664996fa9d4bde3ccbe"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();
const auth = getAuth();

export { db, auth };