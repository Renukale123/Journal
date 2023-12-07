
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKZvYBX-WooJsZuGmdBsP4wzMtdF7kHpI",
  authDomain: "vjcse-7022f.firebaseapp.com",
  projectId: "vjcse-7022f",
  storageBucket: "vjcse-7022f.appspot.com",
  messagingSenderId: "165169199010",
  appId: "1:165169199010:web:488590b250e194c0e324fb",
  measurementId: "G-6LKH0KCS6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;