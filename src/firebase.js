import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0kVuoxD6K87PHf5ExBbqFEDfFVRtqEKg",
  authDomain: "hidden-msg.firebaseapp.com",
  projectId: "hidden-msg",
  storageBucket: "hidden-msg.appspot.com",
  messagingSenderId: "532913752675",
  appId: "1:532913752675:web:ec0a175ebc0712ba228656",
  measurementId: "G-TJECT61PDQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };