// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCX5eiZt8VrZMs0LrLOLpDz9oUZSBZXJsQ",
  authDomain: "disney-clone-a9dcf.firebaseapp.com",
  projectId: "disney-clone-a9dcf",
  storageBucket: "disney-clone-a9dcf.appspot.com",
  messagingSenderId: "847690020243",
  appId: "1:847690020243:web:97b28f11ec24d69480e466",
  measurementId: "G-2LPDKPGKSD"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export  { auth, provider, storage };
export default db;
