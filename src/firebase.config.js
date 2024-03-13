// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhA6w3AkoxHRuiNx9hBxgkrwMuel6Qnxo",
  authDomain: "ai-tao-ef51c.firebaseapp.com",
  projectId: "ai-tao-ef51c",
  storageBucket: "ai-tao-ef51c.appspot.com",
  messagingSenderId: "924730856818",
  appId: "1:924730856818:web:f2bbcccba8fc2fba75f9eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app