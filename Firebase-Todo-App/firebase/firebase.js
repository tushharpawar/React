import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCijbMW9d9nc49qM3vb2rG8NWEM9Mr6Z-A",
  authDomain: "fir-todo-app-e6c64.firebaseapp.com",
  projectId: "fir-todo-app-e6c64",
  storageBucket: "fir-todo-app-e6c64.appspot.com",
  messagingSenderId: "487784524567",
  appId: "1:487784524567:web:92218b9540e2f96f0ae552"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db= getFirestore(app);