import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCyFq02hgxZibuXcSpcrwuTuSznTBDjaa0",
  authDomain: "react-note-7151b.firebaseapp.com",
  projectId: "react-note-7151b",
  storageBucket: "react-note-7151b.appspot.com",
  messagingSenderId: "374235720739",
  appId: "1:374235720739:web:92f93fc1a1909dc4501596"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")