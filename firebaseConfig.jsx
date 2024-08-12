// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBgKcVorVwZMSL5jU_kr3jXfFQAd-ACJdg",
  authDomain: "fashioncart-1b663.firebaseapp.com",
  projectId: "fashioncart-1b663",
  storageBucket: "fashioncart-1b663.appspot.com",
  messagingSenderId: "669200281410",
  appId: "1:669200281410:web:90f87aa64f24cd3173a2db",
  measurementId: "G-KHDQ8FZB08"
};

// Initialize Firebase
const fireBaseAuth = initializeApp(firebaseConfig);
export default fireBaseAuth;