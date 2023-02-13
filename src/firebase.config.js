import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMw6g9wcrQegySdIFH4bHrASjRfjoZMDw",
  authDomain: "maltimart-5fd78.firebaseapp.com",
  projectId: "maltimart-5fd78",
  storageBucket: "maltimart-5fd78.appspot.com",
  messagingSenderId: "228668899530",
  appId: "1:228668899530:web:35c60785cb821e4a6ab433"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;