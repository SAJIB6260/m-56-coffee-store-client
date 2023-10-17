// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqgCcsgl-gbWWbcKcXkjWWAIpq2-6rt8",
  authDomain: "coffee-store-25bc8.firebaseapp.com",
  projectId: "coffee-store-25bc8",
  storageBucket: "coffee-store-25bc8.appspot.com",
  messagingSenderId: "861141705636",
  appId: "1:861141705636:web:e8630620d7be46308d9731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app); //then app ta k upore import korte hoibo. eita chaile firebase er config e korte partam tokhon auth ta export korte hoito

export default auth;