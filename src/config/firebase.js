import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrZ_x2nK3Vf4QKsx3OmsVdzluZnwa2r3s",
  authDomain: "crud-auth-tutorial.firebaseapp.com",
  projectId: "crud-auth-tutorial",
  storageBucket: "crud-auth-tutorial.appspot.com",
  messagingSenderId: "413433138333",
  appId: "1:413433138333:web:7796c81f0e19eb723e1874"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);