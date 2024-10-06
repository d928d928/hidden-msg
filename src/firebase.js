import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR_oKXrl1n2boubrKHt6IO1PrLKXVmGQk",
  authDomain: "hidden-msg-3a5e6.firebaseapp.com",
  projectId: "hidden-msg-3a5e6",
  storageBucket: "hidden-msg-3a5e6.appspot.com",
  messagingSenderId: "113872256135",
  appId: "1:113872256135:web:dba5ca2687edb44ea74c22",
  measurementId: "G-P5YWWCLCN0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
