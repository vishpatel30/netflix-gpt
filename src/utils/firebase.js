// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAggHyyhYJyAcFp3Xt-pvBWZKuHGJ67tsY",
  authDomain: "netflix-gpt-1f49c.firebaseapp.com",
  projectId: "netflix-gpt-1f49c",
  storageBucket: "netflix-gpt-1f49c.firebasestorage.app",
  messagingSenderId: "243553412945",
  appId: "1:243553412945:web:42c32281cc8e4330975570",
  measurementId: "G-D5NH52FLJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);