/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB-8jeYucL57HUU5Mv4kTpdR9RRCgb3dQ",
  authDomain: "discord-colne.firebaseapp.com",
  projectId: "discord-colne",
  storageBucket: "discord-colne.appspot.com",
  messagingSenderId: "215852397082",
  appId: "1:215852397082:web:b71833e80bcf8044e997a3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };