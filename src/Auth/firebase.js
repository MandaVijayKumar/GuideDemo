// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";






const firebaseConfig = {
    apiKey: "AIzaSyA2JKBFBSNNpSpHBD2QV1QwIcinlsrlWeg",
    authDomain: "authpsycho-3a92e.firebaseapp.com",
    projectId: "authpsycho-3a92e",
    storageBucket: "authpsycho-3a92e.appspot.com",
    messagingSenderId: "436581481732",
    appId: "1:436581481732:web:99d0d2fc1a86044d0ce451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 