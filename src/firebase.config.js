import { initializeApp } from "firebase/app";
import{ getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8H-JiHpp5ZNN77Z-1of1NgiMB-0Nkc_E",
  authDomain: "maltimart-f8653.firebaseapp.com",
  projectId: "maltimart-f8653",
  storageBucket: "maltimart-f8653.appspot.com",
  messagingSenderId: "149994552377",
  appId: "1:149994552377:web:c2b0b0e6d6c2a71b73e1e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;