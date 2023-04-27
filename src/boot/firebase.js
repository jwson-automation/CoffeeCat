import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ5uvC_U3uFZHuYkJECjCvJG_a0Q1CyBY",
  authDomain: "coffeecat-bb155.firebaseapp.com",
  projectId: "coffeecat-bb155",
  storageBucket: "coffeecat-bb155.appspot.com",
  messagingSenderId: "812418767476",
  appId: "1:812418767476:web:f2f241008e035c6bbf4f21",
  measurementId: "G-2MLPLND48J",
};

let app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export { app, db };
