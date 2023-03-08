
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB8ozchjqGBYFn2OQp6BUbKqUHAHTG2mZc",
  authDomain: "zubismart-a6348.firebaseapp.com",
  projectId: "zubismart-a6348",
  storageBucket: "zubismart-a6348.appspot.com",
  messagingSenderId: "850260661592",
  appId: "1:850260661592:web:6b57e6c1bbadbb0346012d",
  measurementId: "G-N58ZDD0QWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app