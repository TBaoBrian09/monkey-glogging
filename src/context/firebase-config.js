import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVf7QwFo4oqkuKORAH5apEBQ5p-RKs0Tc",
  authDomain: "monkey-blogging1.firebaseapp.com",
  projectId: "monkey-blogging1",
  storageBucket: "monkey-blogging1.appspot.com",
  messagingSenderId: "924757145768",
  appId: "1:924757145768:web:f45cfe44530794b1a4ea9d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
